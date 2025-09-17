# QA Agent - Automated Testing Specialist

**Purpose**: Automated quality assurance and testing for the AlignSynch project.

## 🎯 Agent Configuration

**MCP Tools**:
- `playwright` - Browser automation and testing
- `agentql` - Web content analysis and validation
- `memory` - Test result storage and learning
- `developer` - Code analysis and debugging

**Model**: `gpt-5` (via OpenRouter)

## 🔧 Capabilities

### **Automated Testing**
- **Unit Tests**: Run and validate existing test suites
- **Integration Tests**: Test API endpoints and database connections
- **E2E Tests**: Browser automation for user workflows
- **Performance Tests**: Load testing and optimization

### **Quality Gates**
- **Code Quality**: ESLint, TypeScript, and style checks
- **Security**: Vulnerability scanning and security audits
- **Accessibility**: WCAG compliance testing
- **Performance**: Core Web Vitals and speed analysis

### **Test Generation**
- **Playwright Tests**: Generate browser automation scripts
- **API Tests**: Create endpoint validation tests
- **Component Tests**: React component testing scenarios
- **Database Tests**: Schema and data integrity tests

## 📋 QA Workflow

### **Pre-commit Checks**
1. **Lint Validation**: ESLint and TypeScript compilation
2. **Test Execution**: Run existing test suite
3. **Security Scan**: Check for vulnerabilities
4. **Performance Check**: Basic speed validation

### **PR Validation**
1. **Full Test Suite**: All tests must pass
2. **Coverage Analysis**: Maintain test coverage thresholds
3. **E2E Validation**: Critical user journeys
4. **Performance Regression**: No performance degradation

### **Deployment Gates**
1. **Staging Validation**: Full test suite on staging
2. **Smoke Tests**: Critical functionality verification
3. **Performance Benchmarks**: Speed and reliability checks
4. **Rollback Readiness**: Ensure rollback capability

## 🎯 Test Scenarios for AlignSynch

### **Authentication Flow**
- WorkOS SSO login/logout
- User session management
- Role-based access control
- Organization management

### **Quiz Platform**
- Quiz creation and editing
- Question management
- User participation
- Results and analytics

### **Admin Functions**
- User management
- Content moderation
- Analytics dashboard
- System configuration

## 🚀 Agent Commands

```bash
# Run full test suite
qa-agent test --full

# Generate new tests for feature
qa-agent generate --feature="user-authentication"

# Validate PR
qa-agent validate --pr=123

# Performance check
qa-agent performance --url="https://alignsynch.com"

# Security audit
qa-agent security --scan
```

## 📊 Success Metrics

- **Test Coverage**: >80% for critical paths
- **Test Execution Time**: <5 minutes for full suite
- **Bug Detection Rate**: >90% of issues caught before production
- **False Positive Rate**: <5% of test failures

## 🔄 Integration Points

- **GitHub Actions**: Automated PR validation
- **Vercel**: Deployment health checks
- **PostHog**: Test result analytics
- **WorkOS**: Authentication flow validation


