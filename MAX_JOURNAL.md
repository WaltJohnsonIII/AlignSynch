# MAX Journal (Decisions • Ideas • Mistakes)

Format (one-liners; easy to vectorize)
- [DATE] [TYPE: decision|idea|mistake] [TAGS: comma,separated] — summary. Links: PRD <url> | Linear <url> | PR <url>

## 2025-09-19
- [2025-09-19] [decision] [governance,ci,labels] — Enforce PRD & Linear links + `needs-architect-review` label; block merge on lint/type/test/build/verify. Links: MAX_WORKFLOW.md | .github/workflows/ci.yml
- [2025-09-19] [decision] [docs,max] — Add MAX rules and PR template guidance to standardize approvals. Links: .cursor/rules/system-architect-guardian.md | .github/pull_request_template.md
- [2025-09-19] [idea] [multi-agent,linear] — Use parent issue + agent-specific sub-issues (`agent:ui`, `agent:server`, etc.) for parallel delivery; auto-status via MAX later. Links: linear-issue-max-command.md
- [2025-09-19] [mistake] [lint,noise] — Lint failures surfaced widely; tune rules or fix hotspots to reduce noise without weakening gates. Links: eslint.config.mjs

## Backlog Notes
- Replace custom `ci-verify.mjs` with marketplace actions once teams adapt.
- Migrate `next lint` → `eslint .` before Next 16; keep Biome as pre-commit-only or vice versa.