---
sidebar_position: 1
title: Install
---

{/* Source: Steward-GRC/steward-release README.md and docs/install.md (the Helm chart's own
     install docs). */}

# Install

Steward is a self-hosted platform: one umbrella Helm chart composing every service, each with its
own high-availability Postgres instance (or your own, brought in instead), service-to-service
authentication wired in from the start, and health-checked probes. The chart lives in
[`steward-release`](https://github.com/Steward-GRC/steward-release), alongside the appliance (a
separate, single-node closed-shell OS image for anyone who doesn't already run Kubernetes).

## Before you install

1. A Kubernetes cluster, 1.29 or newer, with its own OIDC service-account issuer reachable at
   `https://kubernetes.default.svc.cluster.local` (the default on most clusters since 1.21).
2. A namespace for the release (the examples below use `steward`).
3. The PdfRender and PolicyAIJob custom resources, installed once per cluster by a cluster-admin,
   unless you set `crds.install: true`.
4. For a managed Postgres install (the default): cert-manager running in the cluster, and nothing
   else to create ahead of time — the `Bugs5382/helm-postgres-ha` dependency provisions its own
   credentials Secrets.
5. For a bring-your-own Postgres install (see below): create each service's password Secret first,
   in the install namespace, before `helm install`.
6. The image repository and tag for each service, once its own repo publishes a release.

## A managed-Postgres install

```bash
helm dependency build .
helm install steward . -f values.yaml --namespace steward --create-namespace
```

Every service gets its own `Bugs5382/helm-postgres-ha` instance (one Postgres cluster per
service, never shared), at the replica count set in `values.yaml` (1 by default).

## A bring-your-own-Postgres install

Disable the managed instance for each service you want to point at your own Postgres, and set
that service's `postgres.external.*` values. `values-byo-postgres-example.yaml` in the chart
shows every service switched over; mixing managed and bring-your-own per service is also fine.

```bash
# Create the password Secret for each external database first, for example:
kubectl create secret generic steward-identity-postgres-external \
  --namespace steward --from-literal=password='...'

helm install steward . -f values.yaml -f values-byo-postgres-example.yaml \
  --namespace steward --create-namespace
```

:::info[ai needs pgvector]
ai's first migration creates `vector` columns, so its database needs the
[pgvector](https://github.com/pgvector/pgvector) extension. On your own Postgres, install pgvector
on the server first, then, as a superuser, in ai's database: `CREATE EXTENSION IF NOT EXISTS
vector;`. The managed `ai-postgres` instance runs the `pgvector/pgvector` image and creates the
extension itself.
:::

The chart never ships a plaintext default for either path: a managed instance's password comes
from the Secret `Bugs5382/helm-postgres-ha` generates, and a bring-your-own instance's password
comes from the Secret you name in `passwordSecretName`.

## High availability

`values-ha-example.yaml` raises every service to multiple replicas and every managed Postgres
instance to a 3-member quorum:

```bash
helm install steward . -f values.yaml -f values-ha-example.yaml --namespace steward --create-namespace
```

Replica counts are always user-set — there's no separate "HA mode" switch, only higher numbers.

## Shared clusters

Default values install no cluster-scoped object: no CRDs, ClusterRoles, webhooks or
ClusterIssuers. CRDs are pre-installed or opted in with `crds.install`, and managed Postgres TLS
can use the cluster's existing cert-manager issuer instead of its own.

## More

See `steward-release`'s own docs for the full detail: `docs/install.md` (Secrets, bring-your-own
Postgres, high availability), `docs/upgrade.md` (upgrades), and
`docs/service-to-service-auth.md` (which services verify the projected, audience-scoped
service-account token today).
