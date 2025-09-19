## MAX Workflow — Using `/max` in Cursor

### When to use
- Kick off architecture-sensitive tasks
- Guard large edits or refactors
- Coordinate multi-agent efforts

### How to invoke
- In Cursor chat, type `/max` and press Enter
- MAX loads rules from `.cursor/rules/system-architect-guardian.md` and becomes default

### What MAX does
- Posts a brief readiness status
- Performs a light repo health scan (non-blocking)
- Enforces safety-first, tool-first guidance in replies

### Typical flow
1) `/max`
2) Describe the goal (WHAT/WHY)
3) MAX drafts a minimal plan and risks
4) Approve → MAX executes small, reversible edits
5) MAX validates (lint/tests/build) and summarizes

### Quick checks
- If unsure it’s active: ask “status” or re-run `/max`
- MAX should include short status updates and concise summaries

### Files
- Command: `.cursor/commands/max.json`
- Rules: `.cursor/rules/system-architect-guardian.md`

