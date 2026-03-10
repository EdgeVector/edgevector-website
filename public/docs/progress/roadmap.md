# Project Roadmap

This document correlates high-level project goals with their implementation status.

## Active Goals

- [x] **CI/CD Integration**: GitHub Actions for automated testing and deployment.
  - `fold_db`: `ci-tests.yml` (Rust + Frontend), `coverage.yml`, `release.yml`
  - `exemem-infra`: `test.yml` (Lambda tests), `deploy-dev.yml`, `deploy-prod.yml`
  - `file_to_json`: `ci.yml` (Tests, Clippy, Format, Build on 3 platforms)
- [ ] **Documentation Cleanup**: Organize existing documentation and establish a process for future updates.
- [ ] **Repo Consolidation**: Convert workspace to a meta-repository with submodules.

## Unified Cloud Data Provider

Vision: Enable users to share the same database across all their applications.

- [ ] **Third-Party App Authorization**: Implement passkey-native consent flow for apps to access user data. ([Design Doc](../design/THIRD_PARTY_APP_AUTHORIZATION.md))
  - [ ] App Registry (DynamoDB table for registered apps)
  - [ ] Consent Page UI (permission display + passkey auth)
  - [ ] Scoped JWT Issuance
  - [ ] API Middleware (scope enforcement)
- [ ] **Unified Schema Standards**: Define canonical schemas for common data types (posts, media, contacts)
- [ ] **Developer SDK**: JavaScript/TypeScript SDK for app integration
- [ ] **Real-time Sync**: Webhooks and CDC via DynamoDB Streams
- [ ] **Data Portability**: Bulk export, delete all, transfer APIs

## Backlog

- [ ] Implement automated release pipeline.
- [ ] Refactor legacy ingestion module.

## Completed

- [x] Initial workspace setup.
