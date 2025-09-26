# Tasks: Research-Driven Linear-Cursor-Spec Kit Integration

**Input**: Design documents from `/specs/002-github-spec-kit/`
**Prerequisites**: plan.md (required), research.md, data-model.md, contracts/, quickstart.md

## Execution Flow (main)
```
1. Load plan.md from feature directory
   → If not found: ERROR "No implementation plan found"
   → Extract: tech stack, libraries, structure
2. Load optional design documents:
   → data-model.md: Extract entities → model tasks
   → contracts/: Each file → contract test task
   → research.md: Extract decisions → setup tasks
3. Generate tasks by category:
   → Setup: project init, dependencies, linting
   → Tests: contract tests, integration tests
   → Core: models, services, CLI commands
   → Integration: DB, middleware, logging
   → Polish: unit tests, performance, docs
4. Apply task rules:
   → Different files = mark [P] for parallel
   → Same file = sequential (no [P])
   → Tests before implementation (TDD)
5. Number tasks sequentially (T001, T002...)
6. Generate dependency graph
7. Create parallel execution examples
8. Validate task completeness:
   → All contracts have tests?
   → All entities have models?
   → All endpoints implemented?
9. Return: SUCCESS (tasks ready for execution)
```

## Format: `[ID] [P?] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- Include exact file paths in descriptions

## Path Conventions
- **Single project**: `src/`, `tests/` at repository root
- **Web app**: `backend/src/`, `frontend/src/`
- **Mobile**: `api/src/`, `ios/src/` or `android/src/`
- Paths shown below assume single project - adjust based on plan.md structure

## Phase 3.1: Setup
- [ ] T001 Create project structure for Linear-Cursor-Spec Kit integration
- [ ] T002 Initialize TypeScript project with MCP server dependencies
- [ ] T003 [P] Configure ESLint and Prettier for TypeScript
- [ ] T004 Setup Jest testing framework with TypeScript support
- [ ] T005 [P] Configure GitHub Actions workflow environment

## Phase 3.2: Tests First (TDD) ⚠️ MUST COMPLETE BEFORE 3.3
**CRITICAL: These tests MUST be written and MUST FAIL before ANY implementation**
- [ ] T006 Contract test Linear webhook API in tests/contract/test_linear_webhook_api.ts
- [ ] T007 Contract test Spec Kit workflow API in tests/contract/test_spec_kit_workflow_api.ts
- [ ] T008 Integration test Linear issue creation workflow in tests/integration/test_linear_issue_creation.ts
- [ ] T009 Integration test Cursor agent assignment in tests/integration/test_cursor_agent_assignment.ts
- [ ] T010 Integration test Spec Kit command execution in tests/integration/test_spec_kit_execution.ts
- [ ] T011 Integration test MCP server connection in tests/integration/test_mcp_server_connection.ts
- [ ] T012 Integration test status synchronization in tests/integration/test_status_synchronization.ts

## Phase 3.3: Core Implementation (ONLY after tests are failing)
- [ ] T013 [P] LinearIssue model in src/models/LinearIssue.ts
- [ ] T014 [P] SpecKitWorkflow model in src/models/SpecKitWorkflow.ts
- [ ] T015 [P] WorkflowStep model in src/models/WorkflowStep.ts
- [ ] T016 [P] DecisionPoint model in src/models/DecisionPoint.ts
- [ ] T017 [P] Linear MCP server implementation in src/mcp/LinearMCPServer.ts
- [ ] T018 [P] Cursor agent orchestrator in src/agents/CursorAgentOrchestrator.ts
- [ ] T019 [P] Spec Kit command executor in src/services/SpecKitCommandExecutor.ts
- [ ] T020 [P] Status synchronization service in src/services/StatusSynchronizationService.ts
- [ ] T021 [P] Decision point manager in src/services/DecisionPointManager.ts
- [ ] T022 Linear webhook handler service
- [ ] T023 GitHub Actions workflow service
- [ ] T024 Workflow state machine implementation

## Phase 3.4: Integration
- [ ] T025 Connect Linear MCP server to Cursor agent
- [ ] T026 Integrate Spec Kit command execution with Cursor agent
- [ ] T027 Setup Linear automation rules for spec workflow
- [ ] T028 Configure GitHub Actions for webhook handling
- [ ] T029 Setup template synchronization between Linear and Spec Kit
- [ ] T030 Implement bidirectional status synchronization
- [ ] T031 Configure decision point management through Linear interface
- [ ] T032 Setup error handling and retry mechanisms
- [ ] T033 Configure logging and monitoring

## Phase 3.5: Polish
- [ ] T034 Unit tests for LinearIssue model in tests/unit/test_LinearIssue.ts
- [ ] T035 Unit tests for SpecKitWorkflow model in tests/unit/test_SpecKitWorkflow.ts
- [ ] T036 Unit tests for MCP server in tests/unit/test_LinearMCPServer.ts
- [ ] T037 Unit tests for agent orchestrator in tests/unit/test_CursorAgentOrchestrator.ts
- [ ] T038 Unit tests for status sync service in tests/unit/test_StatusSynchronizationService.ts
- [ ] T039 Performance tests for Linear API integration (<200ms response)
- [ ] T040 Performance tests for Spec Kit command execution (<5s completion)
- [ ] T041 Performance tests for GitHub Actions trigger (<2s trigger)
- [ ] T042 Update documentation in docs/linear-cursor-spec-kit-integration.md
- [ ] T043 [P] Create API documentation in docs/api-reference.md
- [ ] T044 [P] Create troubleshooting guide in docs/troubleshooting.md
- [ ] T045 [P] Create deployment guide in docs/deployment.md
- [ ] T046 Remove code duplication and optimize performance
- [ ] T047 Run manual testing workflow validation
- [ ] T048 Validate quickstart guide execution

## Dependencies
- Tests (T006-T012) before implementation (T013-T024)
- T013 blocks T025, T030
- T014 blocks T025, T030
- T015 blocks T025, T030
- T016 blocks T031
- T017 blocks T025, T027
- T018 blocks T025, T026
- T019 blocks T026, T028
- T020 blocks T030
- T021 blocks T031
- T022 blocks T028
- T023 blocks T028
- T024 blocks T025, T026, T027
- Implementation before polish (T034-T048)

## Parallel Example
```
# Launch T006-T012 together:
Task: "Contract test Linear webhook API in tests/contract/test_linear_webhook_api.ts"
Task: "Contract test Spec Kit workflow API in tests/contract/test_spec_kit_workflow_api.ts"
Task: "Integration test Linear issue creation workflow in tests/integration/test_linear_issue_creation.ts"
Task: "Integration test Cursor agent assignment in tests/integration/test_cursor_agent_assignment.ts"
Task: "Integration test Spec Kit command execution in tests/integration/test_spec_kit_execution.ts"
Task: "Integration test MCP server connection in tests/integration/test_mcp_server_connection.ts"
Task: "Integration test status synchronization in tests/integration/test_status_synchronization.ts"
```

## Notes
- [P] tasks = different files, no dependencies
- Verify tests fail before implementing
- Commit after each task
- Avoid: vague tasks, same file conflicts
- Focus on research-driven integration with minimal custom code
- Leverage existing MCP servers and standard integrations
- Preserve Spec Kit integrity throughout implementation

## Task Generation Rules
*Applied during main() execution*

1. **From Contracts**:
   - Linear webhook API → contract test task [P]
   - Spec Kit workflow API → contract test task [P]
   - Each endpoint → implementation task

2. **From Data Model**:
   - LinearIssue → model creation task [P]
   - SpecKitWorkflow → model creation task [P]
   - WorkflowStep → model creation task [P]
   - DecisionPoint → model creation task [P]

3. **From Research Findings**:
   - Linear MCP server → MCP server implementation task [P]
   - Cursor agent orchestration → Agent orchestrator task [P]
   - Spec Kit integration → Command executor task [P]
   - Status synchronization → Status sync service task [P]

4. **From Quickstart Guide**:
   - Setup steps → Integration tasks
   - Usage workflow → Integration test tasks [P]
   - Troubleshooting → Documentation tasks [P]

5. **Ordering**:
   - Setup → Tests → Core Implementation → Integration → Polish
   - Dependencies block parallel execution
   - TDD approach: Tests before implementation

## Validation Checklist
*GATE: Checked by main() before returning*

- [ ] All contracts have corresponding tests
- [ ] All entities have model tasks
- [ ] All tests come before implementation
- [ ] Parallel tasks truly independent
- [ ] Each task specifies exact file path
- [ ] No task modifies same file as another [P] task
- [ ] Minimal custom code approach maintained
- [ ] Standard integrations leveraged
- [ ] Spec Kit integrity preserved
- [ ] Performance targets included
- [ ] Error handling covered
- [ ] Documentation tasks included
