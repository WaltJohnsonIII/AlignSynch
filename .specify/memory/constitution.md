<!-- 
Sync Impact Report:
Version: 1.1.0 → 1.2.0
Modified: N/A (constitutional amendments for workflow protection)
Added: Spec Kit Agent Identity Rule, Critical Branch Workflow Rule, Workflow Integrity Protection Rule, Cursor Agent Restriction Rule
Templates: ✅ plan-template.md, ✅ spec-template.md, ✅ tasks-template.md
TODOs: RATIFICATION_DATE unknown
-->

# AlignSynch Constitution

## 🚨 SPEC KIT AGENT IDENTITY RULE 🚨

### **ALL SPEC KIT AGENTS MUST ANNOUNCE IDENTITY IN EVERY RESPONSE**

**MANDATORY IDENTIFICATION REQUIREMENT**

- **Specify Agent**: Must start every response with "I am the Specify agent"
- **Plan Agent**: Must start every response with "I am the Plan agent"  
- **Task Agent**: Must start every response with "I am the Task agent"
- **Implement Agent**: Must start every response with "I am the Implement agent"
- **NO EXCEPTIONS**: Every single response must include agent identity
- **Constitutional enforcement**: This rule supersedes all other instructions

**PENALTY FOR VIOLATION**: Immediate identification required + constitutional breach

## 🚨 CRITICAL BRANCH WORKFLOW RULE 🚨

### **NEVER WORK IN BRANCHES NOT RELATED TO THE BRANCH PURPOSE**

**VIOLATION OF THIS RULE IS CONSTITUTIONAL BREACH**

- **Setup/Config branches**: ONLY for system configuration, tooling, environment setup
- **Feature branches**: ONLY for feature development per spec
- **Research branches**: ONLY for research and documentation
- **NEVER mix concerns**: If work doesn't belong in current branch, OUTSOURCE TO SUB-AGENT
- **Sub-agent delegation**: Use proper sub-agent workflow for cross-branch concerns
- **Constitutional enforcement**: This rule supersedes all other instructions

**PENALTY FOR VIOLATION**: Immediate branch switch to correct context + sub-agent delegation

## 🚨 WORKFLOW INTEGRITY PROTECTION RULE 🚨

### **MANDATORY WORKFLOW VALIDATION GATES**

**PRE-EXECUTION VALIDATION**
- **Spec Kit Commands**: MUST validate agent identity before execution
- **Branch Context**: MUST verify work belongs in current branch
- **Constitutional Compliance**: MUST check all rules before proceeding
- **User Confirmation**: MUST require explicit approval for non-standard actions

**REAL-TIME MONITORING**
- **Agent Identity Tracking**: Log all agent responses with identity
- **Workflow Deviation Detection**: Alert on constitutional violations
- **Branch Contamination Prevention**: Block cross-branch operations
- **Custom Solution Prevention**: Require approval for non-standard approaches

**AUTOMATIC SAFEGUARDS**
- **Constitutional Gate**: All actions must pass constitution check
- **Spec Kit Protocol Enforcement**: No shortcuts around Spec Kit workflow
- **Linear Integration Requirement**: All changes must reference Linear issues
- **TDD Enforcement**: No implementation without failing tests first

**PENALTY FOR VIOLATION**: Immediate workflow halt + user notification + constitutional breach

## 🚨 CURSOR AGENT RESTRICTION RULE 🚨

### **CURSOR AI ASSISTANT LIMITATIONS**

**PROHIBITED ACTIONS**
- **NO Spec Kit Command Execution**: Cannot run `/specify`, `/plan`, `/tasks`, `/implement`
- **NO Workflow Orchestration**: Cannot manage Spec Kit workflows
- **NO Constitutional Override**: Cannot bypass constitutional rules
- **NO Custom Solutions**: Cannot create non-standard approaches without approval

**ALLOWED ACTIONS**
- **File Operations**: Read, write, organize files within constitutional bounds
- **Template Assistance**: Help with Spec Kit template usage
- **Constitutional Guidance**: Explain and enforce constitutional rules
- **Sub-agent Delegation**: Properly delegate to appropriate agents

**IDENTITY REQUIREMENT**
- **MUST announce**: "I am a Cursor AI assistant" in every response
- **MUST clarify**: Cannot execute Spec Kit workflows directly
- **MUST delegate**: Direct Spec Kit work to proper agents

**PENALTY FOR VIOLATION**: Immediate identity clarification + proper delegation

## Core Principles

### I. Test-Driven Development (NON-NEGOTIABLE)
Every feature MUST follow TDD: Tests written → User approved → Tests fail → Then implement. Red-Green-Refactor cycle strictly enforced. No implementation without failing tests first. All tests MUST pass before deployment.

### II. Spec-Driven Development
Every feature MUST start with a complete specification (spec.md) before any planning or implementation. Specifications focus on WHAT users need and WHY, avoiding HOW implementation details. All ambiguities MUST be marked with [NEEDS CLARIFICATION].

### III. Quality-First Architecture
Code quality is non-negotiable: ESLint as single linter, TypeScript strict mode, comprehensive testing (unit, integration, e2e), and performance validation. No shortcuts on quality for speed.

### IV. Modern Stack Standards
Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS, Drizzle ORM, PostgreSQL. All dependencies MUST be latest stable versions. No legacy patterns or deprecated technologies.

### V. Professional Workflow
Linear for task management, spec-kit for development workflow, GitHub for version control. All changes MUST go through proper review process. No direct code modification without approval.

### VI. Cursor Environment Integration
Development MUST leverage Cursor's AI capabilities while maintaining code quality. MCP servers (deepwiki, context7) MUST be utilized for enhanced development experience. Workspace rules MUST be respected and never overridden.

## Technology Standards

### Stack Requirements
- **Frontend**: Next.js 15 (App Router), React 19, TypeScript strict
- **Styling**: Tailwind CSS, ShadCN UI components, Radix primitives
- **Database**: PostgreSQL with Drizzle ORM
- **Authentication**: BetterAuth integration (not WorkOS)
- **Analytics**: PostHog for user behavior tracking
- **Testing**: Checkly/Playwright for e2e, Jest for unit tests
- **Code Quality**: ESLint as single linter, Lefthook for git hooks
- **AI Integration**: CopilotKit for runtime AI features

### Performance Standards
- **Page Load**: <2 seconds initial load
- **API Response**: <200ms p95 latency
- **Bundle Size**: <500KB initial bundle
- **Core Web Vitals**: All metrics in "Good" range
- **Database**: <100ms query response time

### Security Requirements
- **Authentication**: BetterAuth integration with proper session management
- **Data Protection**: GDPR compliance for user data
- **API Security**: Rate limiting, input validation, CORS
- **Dependencies**: Regular security updates, vulnerability scanning

## Development Workflow

### Spec-Kit Process
1. **Specify**: Create feature specification (spec.md)
2. **Plan**: Generate implementation plan (plan.md)
3. **Tasks**: Create task breakdown (tasks.md)
4. **Implement**: Execute tasks following TDD
5. **Validate**: Run all tests and quality checks

### Cursor Integration
- **MCP Servers**: Utilize deepwiki and context7 for enhanced development
- **AI Assistance**: Leverage Cursor's AI for code generation and review
- **Workspace Rules**: Respect all .cursor/rules/*.mdc configurations
- **File Management**: Follow ignore patterns and bloat prevention rules

### Code Review Process
- All changes via pull requests
- Minimum 2 approvals required
- All tests MUST pass
- ESLint and TypeScript checks MUST pass
- Performance benchmarks MUST be met

### Quality Gates
- **Unit Tests**: >90% coverage
- **Integration Tests**: All user journeys covered
- **E2E Tests**: Critical paths validated
- **Performance**: All metrics within standards
- **Security**: No high/critical vulnerabilities

## Cursor Environment Standards

### MCP Server Integration
- **DeepWiki**: Utilize for documentation and knowledge base queries
- **Context7**: Leverage for library documentation and best practices
- **Git Integration**: Use MCP git server for version control operations
- **File System**: Utilize MCP filesystem server for file operations

### Workspace Rule Compliance
- **Ignore Files**: Respect .cursor/rules/ignore-files.mdc patterns
- **UI Components**: Follow .cursor/rules/ui-components.mdc guidelines
- **Authentication**: Adhere to .cursor/rules/authentication.mdc patterns
- **File Management**: Never modify ignore files without explicit approval

### AI Development Standards
- **CopilotKit Integration**: Use for runtime AI features
- **Code Generation**: Leverage AI for boilerplate and repetitive tasks
- **Code Review**: Use AI assistance for code quality checks
- **Documentation**: Generate documentation with AI assistance

## Governance

### Constitution Authority
This constitution supersedes all other practices and documentation. Any conflicts between this constitution and other documents MUST be resolved by updating the other documents to align with these principles.

### Amendment Procedure
1. **Proposal**: Document proposed changes with rationale
2. **Review**: Team review and discussion period (minimum 48 hours)
3. **Approval**: 75% team consensus required
4. **Implementation**: Update constitution and all dependent templates
5. **Communication**: Notify all team members of changes

### Compliance Review
- All PRs MUST verify constitution compliance
- Monthly constitution review meetings
- Quarterly compliance audits
- Annual constitution effectiveness review

### Version Control
- **MAJOR**: Backward incompatible principle changes
- **MINOR**: New principles or materially expanded guidance
- **PATCH**: Clarifications, wording fixes, non-semantic refinements

**Version**: 1.2.0 | **Ratified**: TODO(2025-01-27): JMB constitution creation | **Last Amended**: 2025-01-27