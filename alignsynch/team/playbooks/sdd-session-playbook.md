### SDD Session Playbook (Specify → Plan → Build → Verify)

**ORACLE PROTOCOL**: This is the methodology source of truth. You cannot skip gates. Every agent must follow this exactly.

**CURRENT FOCUS**: WorkOS authentication implementation. Do not deviate until complete.

### 1) Specify (gate 1) - PASS/FAIL
**FAIL if any missing**:
- [ ] Current spec file identified: `specs/002-build-comprehensive-authentication/`
- [ ] Problem statement clear: "Build WorkOS authentication for enterprise users"
- [ ] User stories defined: SSO, organization management, role-based access
- [ ] Acceptance criteria measurable: "User can log in via WorkOS, admin can manage orgs"
- [ ] Out-of-scope list: "No MFA, no directory sync, no custom domains"
- [ ] No `[NEEDS CLARIFICATION]` markers remain

**RECOVERY**: If fail, stop all work. Create/complete spec first.

### 2) Plan (gate 2) - PASS/FAIL
**FAIL if any missing**:
- [ ] Implementation plan exists: `specs/002-*/implementation-plan.md`
- [ ] WorkOS SDK integration steps defined
- [ ] Database schema for users/orgs/roles planned
- [ ] API contracts for auth flows documented
- [ ] Test scenarios for each user story written
- [ ] Constitutional gates passed: simplicity, anti-abstraction, integration-first

**RECOVERY**: If fail, run `scripts/setup-plan.sh` and complete plan.

### 3) Build (tiny PRs) - PASS/FAIL
**FAIL if any missing**:
- [ ] Working on feature branch: `002-workos-auth`
- [ ] Each commit is atomic (one logical change)
- [ ] Red→Green→Refactor cycle followed
- [ ] ESLint passes on each commit
- [ ] TypeScript compiles without errors
- [ ] Tests pass locally

**RECOVERY**: If fail, fix the failing check before proceeding.

### 4) Verify (pass/fail gates for WorkOS tasks) - PASS/FAIL
**FAIL if any missing**:
- [ ] WorkOS SDK installed and configured
- [ ] Environment variables set: `WORKOS_CLIENT_ID`, `WORKOS_API_KEY`, `WORKOS_REDIRECT_URI`
- [ ] Callback route secured and working: `/api/auth/callback`
- [ ] User can log in via WorkOS SSO
- [ ] Organization management works (create, list, update)
- [ ] Role-based access control implemented
- [ ] Playwright tests pass for all auth flows
- [ ] Manual checklist in spec completed
- [ ] `CHANGELOG.md` updated with changes
- [ ] Decision log updated with rationale
- [ ] PR opened and CI green
- [ ] Code review completed and merged

**RECOVERY**: If fail, fix the failing item before marking WorkOS complete.

### 5) Anti-Distraction Protocol
**STOP IMMEDIATELY if you notice**:
- [ ] Working on anything not in the WorkOS spec
- [ ] Adding features not in acceptance criteria
- [ ] Switching to "quick fixes" unrelated to WorkOS
- [ ] Starting new specs before WorkOS is done

**RECOVERY**: Return to `specs/002-build-comprehensive-authentication/` and continue only WorkOS tasks.

### Notes
- Flow discipline and gating inspired by step‑gated mega‑starters (e.g., TurboStarter walkthroughs) that require strict adherence to instructions to boot successfully [reference video](https://www.youtube.com/watch?v=BXvaZNeQXMk).


