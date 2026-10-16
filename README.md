# docs 📚

> 🧭 The Steward guide: install, everyday use, administration and reference

This is the public documentation site for Steward-GRC, built with Docusaurus. Its content is
adapted from each Steward repo's own README and docs, and from the guide prototype in
[steward-web](https://github.com/Steward-GRC/steward-web)'s `apps/docs`; see the source comment at
the top of each page.

The domain is `docs.steward-grc.com`, added by hand to the Cloudflare Pages project once it
exists — this repo's workflow does not manage DNS.

## 🛠️ Develop

```bash
npm ci --ignore-scripts
npm run dev        # Docusaurus dev server with live reload
npm run build      # static site in build/
npm run typecheck  # tsc --noEmit
```

## 🚀 Releases

Release Drafter keeps a draft release up to date from merged pull requests. Publishing that draft
creates the tag, and `.github/workflows/deploy.yml` puts that exact build live on Cloudflare Pages
(project `steward-grc-docs`) with `wrangler pages deploy`. A normal release deploys with
`--branch=main`, so it lands as the production deployment; a release published with
"pre-release" ticked deploys with `--branch=dev` instead, for checking before a normal release. It
only runs on a published release — no push, pull request or manual trigger — and nothing is live
until then.

## 🤝 Contributing

Read the org's [CONTRIBUTING](https://github.com/Steward-GRC/.github/blob/main/CONTRIBUTING.md)
and [SECURITY](https://github.com/Steward-GRC/.github/blob/main/SECURITY.md) guides. Every commit
is signed off (DCO).

## 🙏 Acknowledgements

Steward was originally written by [@Bugs5382](https://github.com/Bugs5382).

## ⚖️ License

Apache-2.0. See [LICENSE](LICENSE) and [NOTICE](NOTICE).
