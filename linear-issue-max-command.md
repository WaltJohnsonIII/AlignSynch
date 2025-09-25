## Implement `/max` Slash Command for System Architect Guardian (MAX)

### Summary
Create a slash command `/max` that loads the System Architect Guardian agent as the default agent in Cursor using rules from `.cursor/rules/system-architect-guardian.md`.

### Scope
- Add agent rules file: `.cursor/rules/system-architect-guardian.md`.
- Register command: `.cursor/commands/max.json`.
- Provide implementation spec: `max-slash-command-specification.md`.

### Acceptance Criteria
- `/max` activates successfully and sets MAX as default agent.
- Agent system profile loads from rules file without error.
- Operational constraints (safety-first, tool-first, collaboration) are enforced in guidance.
- Documentation is present and linked from the issue.

### Deliverables
- `.cursor/rules/system-architect-guardian.md`
- `.cursor/commands/max.json`
- `max-slash-command-specification.md`

### Non-Goals
- Building external MCP servers (covered elsewhere).
- Changing CI/CD or deploy pipelines.

### Risks & Mitigations
- Schema mismatch for command registration → keep JSON minimal, documented, and easily adjustable.
- Editor compatibility → test in a branch; adjust based on runtime feedback.

### Estimation
- Story points: 8
- Priority: High
- Labels: `cursor`, `agent`, `slash-command`, `system-architect`, `Improvement`

### Tasks
- [ ] Create agent rules file
- [ ] Create command registration JSON
- [ ] Write spec document
- [ ] Validate in Cursor

