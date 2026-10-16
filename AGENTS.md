# AGENTS.md - docs

Guide for AI agents working in this repository. Pair with `CLAUDE.md` (the working agreement and
hook-enforced rules). Keep this file current when the build, layout, or public API changes.

## What this is

The public Steward-GRC documentation site: a Docusaurus static site, deployed to Cloudflare Pages
only when a release is published. It has no runtime of its own and ships no package.

## Layout

- `docs/` - the guide's markdown pages, one file per page, grouped into `install.md`,
  `using-steward/`, `administration/` and `reference.md` (see `sidebars.ts`).
- `src/pages/index.tsx` - the home page (a custom hero, not a doc page).
- `src/css/` - the Steward brand tokens (`custom.css`) and the home page's own styles
  (`home.css`).
- `static/img/` - the logo and favicon.
- `docusaurus.config.ts` - site config, navbar, footer; `onBrokenLinks`/`onBrokenAnchors` are set
  to `throw`, so a broken internal link fails the build.

## Build, test, lint

- Build: `npm run build` (runs Docusaurus's own build, which fails on a broken link or anchor)
- Typecheck: `npm run typecheck`
- Both: `npm run check` (what CI runs)
- License headers / docs: `task license` (verify), `task license:fix` (inject); a no-op here since
  `.licignore` only covers Go, proto and SQL sources.

## Conventions and gotchas

- Every page opens with an HTML comment citing its source repo and path. Content is adapted from
  each Steward repo's own README/docs, never invented; a page with no source material says "This
  page is coming." instead.
- Compliance (`steward-reporting`) and Ethics are future modules: keep them out of the guide's
  Using and Administration sections. At most one Reference line may note they come in a later
  release.
- See `CLAUDE.md` for the branch/commit/PR rules; they are enforced by the git hooks in
  `.claude/hooks` (run `bash .claude/hooks/install.sh` once per clone).
- Open every PR as a draft. CI skips drafts, so run the full checks locally, push once they pass,
  and mark the PR ready when the work is finished; see CLAUDE.md "CI and Actions minutes".
