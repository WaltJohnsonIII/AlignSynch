# `/max` Slash Command Specification

Command: `/max`

Behavior
- Loads the System Architect Guardian rules from `.cursor/rules/system-architect-guardian.md`
- Runs architecture and quality gates defined in `MAX_WORKFLOW.md`
- Summarizes risks, missing artifacts, and required next actions

Inputs (contextual)
- Current PR/branch if available
- Linked PRD and Linear issue

Outputs
- Comment or message with pass/fail gates and remediation steps
- Approval summary once all gates pass