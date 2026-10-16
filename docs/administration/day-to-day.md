---
sidebar_position: 2
title: Day-to-day administration
---

{/* Source: Steward-GRC/steward-web apps/docs/docs/admin-guide/groups.md, libraries.md,
     workflows.md, completion.md, audit-log.md and settings.md, condensed onto one page. */}

# Day-to-day administration

The ongoing work of keeping categories, approval chains, libraries and settings current, and
checking that people acknowledge what they need to.

## Groups

Every policy and procedure lives in a group, and groups are arranged in a tree up to **three
levels deep**. Open **Groups** under `/admin` to see the tree and set each group's defaults.
(What [Concepts](../using-steward/concepts) calls a category, the admin app calls a group — the
same thing.)

## Libraries

Three reusable content libraries live under `/admin`: **Contact library**, **References &
standards** and **Definitions**. A policy author attaches entries from these libraries to a
policy instead of retyping the same contact, citation or glossary term on every document —
editing a library entry updates every policy that attaches it. A contact block needs a label and
at least one of email or phone.

## Workflows

A **workflow** has ordered **stages**, and a policy moves through them one after another. Each
stage names its approvers and a quorum:

| Quorum | What it means |
| --- | --- |
| One | Any single approver's approval passes the stage. |
| Majority | More than half of the approvers must approve. |
| All | Every listed approver must approve. |

A workflow needs at least one stage before a group can select it as its default.

## Completion

**Completion** reports acknowledgement coverage: who has acknowledged a policy, who hasn't, and
whether anyone is overdue. A policy appears here once it is published and has an acknowledgement
trigger set, either on itself or inherited from its owning group. Open **Completion** under
`/admin` for the overview (acked/pending counts and completion percentage per policy, with an
**Overdue only** filter), or select a policy's row for its own detail: audience size, how many
have acknowledged, and the average days to acknowledge.

## Audit log

Every consequential action — a document published, a user's roles changed, an organisation
connected — is written to the **audit log**. Open **Audit log** under `/admin` to see it, filter
by action, actor or subject, or select **Verify integrity**: the log is tamper-evident (each entry
is linked to the one before it), so a changed or missing entry is detectable.

## Settings

**Settings** under `/admin` holds the cross-app banners and the outbound email configuration; it
needs the site-admin role. An **announcement** is a short, leveled (info or warning) message shown
as a banner across every app; a **maintenance notice** is a second, separate banner for a planned
outage. Both are off until you turn them on.

:::note
Whether an optional module is available at all is decided at install time, not here. This page
has no module on/off switches.
:::
