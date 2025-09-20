# MAX Workflow: PRD → PR Verification & Approval

This document defines how the `/max` command (System Architect Guardian) governs changes from PRD to merged PR.

## When to Use `/max`
- Architecture-sensitive work (cross-cutting, infra, security, migrations)
- Large refactors or multi-agent coordination
- Dependency upgrades, feature flags affecting many modules

## Required Artifacts
- PRD document with scope, constraints, acceptance criteria
- Linear issue with clear status, owner, labels
- Verification plan: unit tests, coverage goals, smoke/e2e (if present)
- Performance and security considerations

## PR Requirements
- PR body contains:
  - `PRD: <url>`
  - `Linear: <url>`
- CI green for: lint, typecheck, tests (coverage ≥ threshold), build, ci:verify

## Gate Checks
1. Static quality: Biome/ESLint clean
2. Type safety: `pnpm typecheck` passes
3. Tests: `pnpm test` passes and meets coverage in `jest.config.js`
4. Build: `pnpm build` succeeds
5. Verify script: `pnpm ci:verify` validates metadata and required files

## Approval Workflow
1. Author opens PR referencing PRD and Linear
2. `/max` runs checks and posts results
3. Fix issues until all gates pass
4. MAX records decision summary and requests approvals
5. Merge after MAX + required human approvals

## Rollback & Safety
- Include rollout/rollback steps in PR description
- For DB changes, provide backfill plan and reversible migrations

## Auditing
- Keep decisions in `DELIVERY_VERIFICATION.md` or PR comments