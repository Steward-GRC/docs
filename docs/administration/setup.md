---
sidebar_position: 1
title: Setup
---

{/* Source: Steward-GRC/steward-web apps/docs/docs/admin-guide/first-run-setup.md,
     users-and-roles.md and organisations-and-sso.md, condensed onto one page. */}

# Setup

For administrators who set up and run Steward. This page covers the first-run setup, how people
get accounts, and how to connect your organisation's identity provider. The rest of the
day-to-day admin work is on the [next page](./day-to-day).

## First-run setup

Before anyone can use Steward, it needs a first administrator. On a new install there are no
accounts yet, so Steward gives you a special screen to create one. Until setup is done, anyone who
visits the site sees a "Not set up yet" message and cannot sign in.

1. **Open the setup screen.** On a new install, the admin app shows a `/setup` screen.
2. **Enter the setup token.** The operator who installed Steward holds a setup token; enter it to
   prove you are allowed to create the first account.

## Users and roles

Every person who uses Steward is a **user**; sign-in is handled by a real identity system (see
Organisations and single sign-on, below, for how accounts are provisioned). The **Users** page
lists everyone's status and roles. Open a user to:

- **Enable or disable** their account, which blocks sign-in without deleting anything.
- **Edit their name and email**, for a local account.
- **Grant or remove the site-admin role.** Site-admin is the one global role in this release: it
  gives full access to users, organisations and the audit log.
- **See their sessions**: when each was issued and signed in, and when it was last used.

## Organisations and single sign-on

Each **organisation** in Steward is one domain connected to one SAML or OIDC identity provider.

1. Select **New organisation** and enter the domain.
2. Pick your identity provider from the catalog (Google Workspace, Microsoft Entra ID, Okta, or a
   generic SAML/OIDC provider). Picking a provider fixes the protocol and shows a setup checklist
   for that provider; the connection fields are the same underneath regardless of which you pick.
3. Follow the checklist in your identity provider's console, then copy its details back into
   Steward's connection fields (entity ID, sign-on URL and signing certificate for SAML; issuer
   and client ID for OIDC).
