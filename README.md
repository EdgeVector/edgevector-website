# EdgeVector Website

Public EdgeVector product website.

## Local Development

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

Browser error reporting is enabled when `VITE_SENTRY_DSN` is present at build
time. Optional build variables:

```bash
VITE_SENTRY_ENVIRONMENT=production
VITE_SENTRY_RELEASE=edgevector-website@<git-sha>
```

`npm run build` copies workspace docs into `public/docs` when a sibling
workspace is present. In isolated CI clones it uses the committed `public/docs`
contents as-is.

## Source Of Truth

This repository is homed on GitHub (`EdgeVector/edgevector-website`). Pull
requests are gated by the `ci-required` GitHub Actions job, which runs
`.lastgit/ci.sh` (`npm ci` and `npm run build`). The LastGit and Forgejo copies
are frozen (moved 2026-09-30).
