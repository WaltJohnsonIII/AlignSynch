## `/max` Slash Command — Technical Specification

### Overview
- Command: `/max`
- Purpose: Load the System Architect Guardian agent (MAX) as the default agent in Cursor.
- Source profile: `.cursor/rules/system-architect-guardian.md`
- Registration file: `.cursor/commands/max.json`

### Behavior
1. When invoked, set MAX as the default agent for the active session.
2. Load `.cursor/rules/system-architect-guardian.md` as the agent system profile.
3. Post a concise readiness status (1–2 sentences) and perform a light, non-blocking repository scan.
4. Enforce operating principles and guardrails in subsequent interactions.

### Inputs
- None. The command takes no arguments.

### Outputs
- Status message indicating successful activation.
- Telemetry event `slash_max_invoked` (if telemetry pipeline present).

### Constraints & Guardrails
- No unauthorized or destructive actions.
- Preserve formatting, indentation, and repository conventions.
- Tool-first validation; summarize risks and mitigations.

### Registration
- File: `.cursor/commands/max.json`
- Fields:
  - `name`: `max`
  - `slash`: `/max`
  - `action.type`: `loadAgentFromFile`
  - `action.path`: `.cursor/rules/system-architect-guardian.md`
  - `action.setAsDefault`: `true`

### Acceptance Criteria
- `/max` activates successfully and MAX becomes the default agent.
- System profile loads from `.cursor/rules/system-architect-guardian.md`.
- Operational constraints consistently observed.
- Multi-agent coordination guidance available on request.
- Documentation present in repo and discoverable.

### Test Plan
- Invoke `/max` from chat; confirm activation message.
- Run a small change under MAX; confirm safety-first and tool-first behaviors.
- Validate no linter/style regressions after generated edits.

### Rollout
- Stage in feature branch; verify docs and behavior.
- Merge to main; announce availability.

