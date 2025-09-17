# AlignSynch Team Directory

This directory contains all team-related files and configurations for the AlignSynch project.

## Directory Structure

```
alignsynch/team/
├── agents/           # AI agent configurations and definitions
├── gemini/           # Gemini CLI configurations and scripts
├── memory/           # Constitutional principles and persistent knowledge
├── playbooks/        # Operational procedures and checklists
├── scripts/          # Automation scripts and tools
├── templates/        # Document templates for specifications
└── MANAFESTO.md      # Core operating principles
```

## Key Documents

### 1. Playbooks (Operational Procedures)
- **`playbooks/preflight-environment-checklist.md`** - Pre-session environment setup
- **`playbooks/cursor-setup-and-hygiene.md`** - Cursor configuration and context management
- **`playbooks/sdd-session-playbook.md`** - Spec-driven development workflow
- **`playbooks/cursor-health-monitor.md`** - Cursor health monitoring and optimization

### 2. Scripts (Automation)
- **`scripts/cursor-health-check.ps1`** - Automated Cursor health monitoring

### 3. Memory (Constitutional Principles)
- **`memory/constitution.md`** - Core development principles
- **`memory/constitution_update_checklist.md`** - Constitutional update procedures

### 4. Agents (AI Configurations)
- **`agents/research-agent.md`** - Research agent configuration
- **`agents/spec-kit-agent.md`** - Spec Kit agent configuration

## Quick Start

### Before Every Session
1. Run Cursor health check: `./alignsynch/team/scripts/cursor-health-check.ps1`
2. Follow pre-flight checklist: `playbooks/preflight-environment-checklist.md`
3. Ensure Cursor hygiene: `playbooks/cursor-setup-and-hygiene.md`

### During Development
1. Follow SDD session playbook: `playbooks/sdd-session-playbook.md`
2. Monitor Cursor health: `playbooks/cursor-health-monitor.md`

### When Issues Arise
1. Check Cursor health monitor for common issues
2. Run health check script with `-Fix` flag
3. Follow recovery protocols in playbooks

## Health Monitoring

The Cursor health monitoring system provides:
- **Automated health checks** via PowerShell script
- **Health scoring** (0-100 scale)
- **Issue detection** and recommendations
- **Auto-fix capabilities** for common problems
- **Cost control** through token usage monitoring

## Methodology

All team operations follow the Spec-Driven Development (SDD) methodology:
1. **Specify** - Define requirements and acceptance criteria
2. **Plan** - Create implementation plan with contracts and tests
3. **Build** - Implement with test-first approach
4. **Verify** - Validate against acceptance criteria

## Current Focus

**WorkOS Authentication Implementation** - All efforts focused on completing the WorkOS authentication system as defined in `specs/002-build-comprehensive-authentication/`.

No deviations from this focus until complete.
