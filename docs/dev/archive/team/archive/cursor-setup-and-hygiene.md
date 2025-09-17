### Cursor Setup & Context Hygiene (one‑time + per‑session)

Optimized for long sessions without context drift, minimal tokens, and spec‑first workflow.

### A) One‑time setup (pass/fail)
- Import VS Code settings; trust workspace.
- Disable duplicate linters/formatters; use ESLint only.
- Enable file‑reading tools; allow parallel reads.
- Configure API providers per project policy.
- Key settings (workspace):
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {"source.fixAll.eslint": "always"},
  "files.eol": "\n"
}
```

### B) Daily startup checklist
- Start a fresh chat named with the active feature branch (`NNN-name`).
- Pin current spec file and plan; keep only active files open.
- Ask Cursor to “summarize spec acceptance criteria” to prime context.
- Load repo rules by referencing paths (e.g., `memory/constitution.md`).

### C) Working rules (10+ hardening checks)
- Keep prompts atomic; one outcome per turn.
- Prefer "read files" and short diffs over long pastes.
- Run parallel searches (semantic + grep) instead of serial.
- Before edits: restate acceptance criteria; after edits: run linters/tests.
- If context feels noisy: start a new chat, re‑pin spec, ask for 3‑line summary.
- Pin spec and plan files; close unrelated tabs.
- Name chats with `NNN-branch`.
- Ask for "show failing diagnostics by file" before large refactors.
- Enforce pass/fail: if spec missing → stop; create spec first.
- Keep token use small: prefer file paths to quoted blobs.
- Re‑summarize after >30 minutes or 20+ turns.
- Capture decisions in the spec's decision log section.

### D) MCP Server Token Waste Prevention
**CRITICAL**: MCP servers send ALL their data with every prompt = massive token waste.

**Audit Checklist**:
- [ ] List all active MCP servers: `mcp_vscode-mcp_list_workspaces`
- [ ] Disable unused MCP servers in Cursor settings
- [ ] Only enable MCP servers needed for current task
- [ ] Check token usage before/after MCP changes
- [ ] Document which MCP servers are needed for which tasks

**Common Token Wasters**:
- Docker MCP (if not using containers)
- Multiple database MCPs (if only using Neon)
- Unused API MCPs (if not calling those APIs)
- File system MCPs (if not doing file operations)

**Recovery**: If token usage is high:
1. Disable all MCP servers
2. Re-enable only the one needed for current task
3. Test with a simple prompt
4. Monitor token usage

### D) Avoid common pitfalls
- Don’t keep dozens of tabs open (they contaminate auto‑context).
- Don’t mix ESLint with Biome.
- Don’t proceed without an approved spec.

### E) Useful commands & habits
- Ask for: “list open diffs”, “show errors by file”, “summarize failures”.
- Use checklists and keep them in `dev/playbooks/`.

### Reference
- Context management habits inspired by high‑discipline starter workflows and step‑gated instructions like TurboStarter walkthroughs [video link](https://www.youtube.com/watch?v=BXvaZNeQXMk).


