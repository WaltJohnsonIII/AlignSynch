# Cursor Health Monitor

**CRITICAL**: This is your Cursor health status checklist. Run this before every session to ensure optimal performance and cost control.

## Health Status Checklist

### 1) Context Health (Token Management)
- [ ] **Chat context size**: < 50,000 tokens (check in Cursor UI)
- [ ] **Active MCP servers**: Only 1-2 needed for current task
- [ ] **Open tabs**: < 10 files (close unused tabs)
- [ ] **Pinned files**: Only current spec + plan files
- [ ] **Chat history**: Start fresh chat if > 20 turns

### 2) Configuration Health
- [ ] **Workspace trusted**: Green checkmark in Cursor
- [ ] **Extensions active**: ESLint, Tailwind, GitLens only
- [ ] **Format on save**: Enabled
- [ ] **Default formatter**: ESLint (not Biome)
- [ ] **Code actions**: `source.fixAll.eslint` enabled

### 3) Performance Health
- [ ] **TypeScript server**: No errors in Problems panel
- [ ] **ESLint**: No configuration errors
- [ ] **File watching**: Not consuming excessive CPU
- [ ] **Memory usage**: < 2GB for Cursor process
- [ ] **Response time**: < 5 seconds for simple prompts

### 4) MCP Server Health
- [ ] **Active servers**: List with `mcp_vscode-mcp_list_workspaces`
- [ ] **Token waste check**: Disable unused servers
- [ ] **Connection status**: All active servers connected
- [ ] **Error logs**: No MCP connection errors

### 5) Project Health
- [ ] **Git status**: Clean working directory
- [ ] **Dependencies**: `pnpm i` completed successfully
- [ ] **Type check**: `pnpm build` passes
- [ ] **Lint check**: `pnpm lint` passes
- [ ] **Tests**: `pnpm test` passes

## Health Check Commands

### Quick Health Check
```bash
# Check project health
pnpm lint && pnpm build && echo "✅ Project healthy"

# Check MCP servers
mcp_vscode-mcp_list_workspaces

# Check Cursor process
Get-Process -Name "Cursor" | Select-Object ProcessName, WorkingSet
```

### Full Health Check
```bash
# Run all checks
./alignsynch/team/scripts/cursor-health-check.ps1
```

## Recovery Actions

### If Context Too Large
1. Start new chat with branch name
2. Pin only spec + plan files
3. Close all other tabs
4. Disable unused MCP servers

### If Performance Issues
1. Restart Cursor
2. Clear TypeScript cache: `rm -rf .next`
3. Reinstall dependencies: `rm -rf node_modules && pnpm i`
4. Check for extension conflicts

### If MCP Issues
1. Disable all MCP servers
2. Re-enable only needed ones
3. Check connection status
4. Restart Cursor if needed

## Health Monitoring Script

The `cursor-health-check.ps1` script automates these checks and provides a health score.

**Health Score**:
- 90-100: Excellent (green)
- 70-89: Good (yellow)
- 50-69: Warning (orange)
- < 50: Critical (red)

## Cost Control

**Token Usage Indicators**:
- High context = high cost
- Multiple MCP servers = high cost
- Long chat history = high cost
- Unused extensions = performance cost

**Optimization**:
- Keep context < 50k tokens
- Use only 1-2 MCP servers
- Start fresh chats regularly
- Pin only essential files
