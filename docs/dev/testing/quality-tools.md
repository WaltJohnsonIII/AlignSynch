# Quality Tools & Code Standards

## Overview
Comprehensive quality tools and standards for AlignSynch development workflow.

## Code Quality Tools

### Ultracite
**Purpose**: AI-ready formatter and linter with strict rules

**Features**:
- Zero configuration required
- Subsecond performance
- Maximum type safety
- AI-friendly code generation
- Accessibility standards enforcement

**Commands**:
```bash
# Initialize Ultracite
npx ultracite init

# Format and fix code automatically
npx ultracite fix

# Check for issues without fixing
npx ultracite check
```

**Configuration**: No configuration required - works out of the box

### Biome
**Purpose**: Lightning-fast linter and formatter

**Features**:
- 10-100x faster than ESLint + Prettier
- Built-in formatter
- TypeScript support
- Import sorting
- Code quality rules

**Commands**:
```bash
# Format code
pnpm biome format

# Lint code
pnpm biome lint

# Check all issues
pnpm biome check

# Fix issues
pnpm biome check --write
```

**Configuration**:
```json
// biome.jsonc
{
  "$schema": "https://biomejs.dev/schemas/1.4.1/schema.json",
  "organizeImports": {
    "enabled": true
  },
  "linter": {
    "enabled": true,
    "rules": {
      "recommended": true,
      "correctness": {
        "noUnusedVariables": "error"
      },
      "style": {
        "useConst": "error"
      },
      "suspicious": {
        "noExplicitAny": "warn"
      }
    }
  },
  "formatter": {
    "enabled": true,
    "formatWithErrors": false,
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "javascript": {
    "formatter": {
      "quoteStyle": "single",
      "semicolons": "always"
    }
  },
  "files": {
    "ignoreUnknown": false,
    "ignore": [
      "node_modules/**",
      ".next/**",
      "dist/**",
      "build/**"
    ]
  }
}
```

### ESLint
**Purpose**: JavaScript/TypeScript linting

**Features**:
- Extensive rule set
- Plugin ecosystem
- Custom rules
- Integration with editors

**Commands**:
```bash
# Run ESLint
pnpm lint

# Fix issues
pnpm lint --fix

# Check specific files
pnpm lint app/ components/
```

**Configuration**:
```javascript
// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/no-explicit-any": "warn",
      "prefer-const": "error",
      "no-var": "error",
    },
  },
];

export default eslintConfig;
```

## Git Hooks & Pre-commit

### Lefthook
**Purpose**: Git hooks management

**Features**:
- Fast execution
- Parallel hooks
- Conditional execution
- Easy configuration

**Configuration**:
```yaml
# lefthook.yml
pre-commit:
  commands:
    format:
      run: pnpm biome format --write .
      glob: "*.{ts,tsx,js,jsx,json,md}"
    lint:
      run: pnpm biome lint --write .
      glob: "*.{ts,tsx,js,jsx}"
    type-check:
      run: pnpm tsc --noEmit
      glob: "*.{ts,tsx}"

pre-push:
  commands:
    test:
      run: pnpm test
      fail_text: "Tests failed"
    build:
      run: pnpm build
      fail_text: "Build failed"
```

**Commands**:
```bash
# Install hooks
pnpm lefthook install

# Run hooks manually
pnpm lefthook run pre-commit

# Uninstall hooks
pnpm lefthook uninstall
```

### Husky
**Purpose**: Git hooks (alternative to Lefthook)

**Features**:
- Simple setup
- Cross-platform
- npm scripts integration

**Configuration**:
```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged",
      "pre-push": "pnpm test"
    }
  }
}
```

## TypeScript Configuration

### Strict Type Checking
```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

### Type Safety Rules
| Rule | Description | Impact |
|------|-------------|---------|
| `strict` | Enable all strict type checking | High |
| `noUnusedLocals` | Error on unused local variables | Medium |
| `noUnusedParameters` | Error on unused parameters | Medium |
| `exactOptionalPropertyTypes` | Strict optional property types | High |
| `noImplicitReturns` | Error on missing return statements | Medium |
| `noFallthroughCasesInSwitch` | Error on switch fallthrough | Low |
| `noUncheckedIndexedAccess` | Error on unchecked array access | High |
| `noImplicitOverride` | Require explicit override keyword | Low |

## Code Quality Standards

### Accessibility Standards
```typescript
// ✅ Good: Proper ARIA attributes
<button
  type="button"
  aria-label="Start quiz"
  aria-describedby="quiz-description"
  onClick={handleStart}
>
  Start Quiz
</button>

// ✅ Good: Semantic HTML
<main role="main">
  <section aria-labelledby="quiz-title">
    <h2 id="quiz-title">Quiz: {quiz.title}</h2>
  </section>
</main>

// ❌ Bad: Missing accessibility attributes
<button onClick={handleStart}>Start Quiz</button>
```

### Error Handling Standards
```typescript
// ✅ Good: Comprehensive error handling
const fetchUserData = async (id: string): Promise<ApiResponse<User>> => {
  try {
    const response = await fetch(`/api/users/${id}`);
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('Failed to fetch user:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};

// ❌ Bad: Swallowing errors
const badFetch = async (id: string) => {
  try {
    return await fetch(`/api/users/${id}`);
  } catch (e) {
    console.log(e); // Don't just log errors
  }
};
```

### Performance Standards
```typescript
// ✅ Good: Code splitting
const QuizEditor = lazy(() => import('@/components/QuizEditor'));

// ✅ Good: Memoization
const expensiveValue = useMemo(() => {
  return calculateComplexScore(answers);
}, [answers]);

// ✅ Good: Callback memoization
const handleSubmit = useCallback((data: FormData) => {
  onSubmit(data);
}, [onSubmit]);
```

## Quality Gates

### Pre-commit Checks
- [ ] Code formatted with Biome
- [ ] No linting errors
- [ ] TypeScript compilation succeeds
- [ ] No unused variables or imports
- [ ] Accessibility standards met

### Pull Request Requirements
- [ ] All tests pass
- [ ] Code coverage maintained
- [ ] Performance impact assessed
- [ ] Documentation updated
- [ ] Security review completed

### Production Deployment
- [ ] E2E tests pass
- [ ] Performance benchmarks met
- [ ] Security scan completed
- [ ] Database migrations tested
- [ ] Rollback plan prepared

## Quality Metrics

### Code Coverage Targets
| Component | Target | Current |
|-----------|--------|---------|
| **Components** | 85% | 82% |
| **Utilities** | 90% | 88% |
| **API Routes** | 80% | 78% |
| **Hooks** | 85% | 83% |
| **Overall** | 80% | 79% |

### Performance Targets
| Metric | Target | Current |
|--------|--------|---------|
| **First Contentful Paint** | < 1.5s | 1.2s |
| **Largest Contentful Paint** | < 2.5s | 2.1s |
| **Cumulative Layout Shift** | < 0.1 | 0.05 |
| **Time to Interactive** | < 3.5s | 3.1s |

### Quality Scores
| Tool | Score | Status |
|------|-------|--------|
| **Biome** | 95/100 | ✅ Excellent |
| **TypeScript** | 98/100 | ✅ Excellent |
| **Accessibility** | 92/100 | ✅ Good |
| **Performance** | 88/100 | ✅ Good |
| **Security** | 94/100 | ✅ Excellent |

## Quality Tools Integration

### VS Code Integration
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": true,
    "source.organizeImports.biome": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### CI/CD Integration
```yaml
# .github/workflows/quality.yml
name: Quality Checks

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Type check
        run: pnpm tsc --noEmit
      
      - name: Lint
        run: pnpm lint
      
      - name: Format check
        run: pnpm biome check
      
      - name: Test
        run: pnpm test:ci
      
      - name: Build
        run: pnpm build
```

## Quality Monitoring

### Continuous Monitoring
- **Code Quality**: Automated checks on every commit
- **Performance**: Core Web Vitals monitoring
- **Security**: Dependency vulnerability scanning
- **Accessibility**: Automated accessibility testing
- **Coverage**: Test coverage tracking

### Quality Reports
```bash
# Generate quality report
pnpm quality:report

# View quality dashboard
open quality-report/index.html

# Quality metrics include:
# - Code coverage
# - Performance scores
# - Security scan results
# - Accessibility compliance
# - Technical debt metrics
```

## Best Practices

### Code Quality
1. **Write self-documenting code**: Use clear variable and function names
2. **Keep functions small**: Single responsibility principle
3. **Handle errors gracefully**: Comprehensive error handling
4. **Write tests**: Test-driven development
5. **Review code**: Peer review process

### Performance
1. **Optimize images**: Use Next.js Image component
2. **Code splitting**: Lazy load components
3. **Bundle analysis**: Monitor bundle size
4. **Caching**: Implement proper caching strategies
5. **Database optimization**: Efficient queries

### Security
1. **Input validation**: Validate all user inputs
2. **Authentication**: Secure authentication flows
3. **Authorization**: Proper access control
4. **Dependencies**: Keep dependencies updated
5. **Secrets**: Never commit secrets

### Accessibility
1. **Semantic HTML**: Use proper HTML elements
2. **ARIA attributes**: Provide screen reader support
3. **Keyboard navigation**: Ensure keyboard accessibility
4. **Color contrast**: Meet WCAG guidelines
5. **Focus management**: Proper focus handling

---

*These quality tools and standards ensure high-quality, maintainable code across the AlignSynch application.*
