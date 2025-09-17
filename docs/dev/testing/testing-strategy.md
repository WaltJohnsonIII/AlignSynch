# Testing Strategy & Implementation

## Overview
Comprehensive testing strategy for AlignSynch Next.js 15 application using Jest, Playwright, and Checkly.

## Testing Pyramid

### Layer 1: Unit Tests (Jest)
- **Components**: React component testing
- **Utilities**: Helper functions, data transformations
- **Hooks**: Custom React hooks
- **Business Logic**: Quiz logic, scoring algorithms

### Layer 2: Integration Tests (Jest + Supertest)
- **API Routes**: Next.js API endpoints
- **Database**: Drizzle ORM operations
- **Authentication**: Auth flows and middleware
- **External APIs**: PostHog, payment processing

### Layer 3: E2E Tests (Checkly + Playwright)
- **User Journeys**: Complete user workflows
- **Cross-Browser**: Browser compatibility
- **Performance**: Load testing and monitoring
- **Production Monitoring**: Real user monitoring

## Testing Framework Decision

### Jest (Recommended)
**✅ Pros:**
- **Zero Configuration**: Works out of the box with Next.js
- **Mature Ecosystem**: 8+ years of development, battle-tested
- **Excellent Dashboard**: Jest HTML Reporter, Coverage reports
- **React Testing Library**: Seamless integration
- **Mocking**: Built-in mocking for APIs, modules, timers
- **Snapshot Testing**: Perfect for UI regression testing
- **Parallel Execution**: Fast test runs
- **TypeScript Support**: Native ts-jest integration
- **Vercel Recommendation**: Jest is Vercel's default choice

**❌ Cons:**
- **Slower than Vitest**: Especially in large test suites
- **Node.js Only**: No native ESM support
- **Memory Usage**: Can be memory-intensive

## Testing Setup

### Jest Configuration
```javascript
// jest.config.js
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/$1'
  },
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**'
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80
    }
  }
};
```

### Jest Setup File
```typescript
// jest.setup.ts
import '@testing-library/jest-dom';
import { TextEncoder, TextDecoder } from 'util';

// Polyfills for Node.js environment
global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    route: '/',
    pathname: '/',
    query: {},
    asPath: '/',
    push: jest.fn(),
    pop: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}));

// Mock Next.js navigation
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
  useSearchParams: () => ({
    get: jest.fn(),
  }),
  usePathname: () => '/',
}));
```

### Package.json Scripts
```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:ci": "jest --ci --coverage --watchAll=false",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "test:e2e:headed": "playwright test --headed",
    "test:e2e:debug": "playwright test --debug"
  }
}
```

## Unit Testing

### Component Testing
```typescript
// __tests__/components/QuizCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { QuizCard } from '@/components/QuizCard';
import type { Quiz } from '@/types/quiz';

const mockQuiz: Quiz = {
  id: '1',
  title: 'Test Quiz',
  description: 'A test quiz',
  questions: [],
  category: 'general',
  difficulty: 'easy',
  timeLimit: 30,
  createdAt: new Date(),
  updatedAt: new Date(),
};

describe('QuizCard Component', () => {
  it('should render quiz title', () => {
    const onStart = jest.fn();
    render(<QuizCard quiz={mockQuiz} onStart={onStart} />);
    
    expect(screen.getByText('Test Quiz')).toBeInTheDocument();
  });

  it('should call onStart when button is clicked', () => {
    const onStart = jest.fn();
    render(<QuizCard quiz={mockQuiz} onStart={onStart} />);
    
    fireEvent.click(screen.getByRole('button', { name: /start quiz/i }));
    
    expect(onStart).toHaveBeenCalledWith('1');
  });

  it('should display quiz metadata', () => {
    const onStart = jest.fn();
    render(<QuizCard quiz={mockQuiz} onStart={onStart} />);
    
    expect(screen.getByText('Easy')).toBeInTheDocument();
    expect(screen.getByText('30 min')).toBeInTheDocument();
  });
});
```

### Hook Testing
```typescript
// __tests__/hooks/useQuizData.test.ts
import { renderHook, waitFor } from '@testing-library/react';
import { useQuizData } from '@/hooks/useQuizData';
import { api } from '@/lib/api';

// Mock API
jest.mock('@/lib/api');
const mockApi = api as jest.Mocked<typeof api>;

describe('useQuizData Hook', () => {
  it('should fetch quiz data successfully', async () => {
    const mockQuiz = { id: '1', title: 'Test Quiz' };
    mockApi.getQuiz.mockResolvedValue(mockQuiz);

    const { result } = renderHook(() => useQuizData('1'));

    await waitFor(() => {
      expect(result.current.quiz).toEqual(mockQuiz);
      expect(result.current.loading).toBe(false);
    });
  });

  it('should handle API errors', async () => {
    mockApi.getQuiz.mockRejectedValue(new Error('API Error'));

    const { result } = renderHook(() => useQuizData('1'));

    await waitFor(() => {
      expect(result.current.quiz).toBeNull();
      expect(result.current.loading).toBe(false);
      expect(result.current.error).toBe('API Error');
    });
  });
});
```

### Utility Testing
```typescript
// __tests__/lib/utils.test.ts
import { calculateScore, formatTime, validateEmail } from '@/lib/utils';

describe('Utility Functions', () => {
  describe('calculateScore', () => {
    it('should calculate correct score', () => {
      const answers = [
        { questionId: '1', answer: 'A', correct: true, points: 10 },
        { questionId: '2', answer: 'B', correct: false, points: 0 },
        { questionId: '3', answer: 'C', correct: true, points: 10 },
      ];

      const score = calculateScore(answers);
      expect(score).toBe(20);
    });

    it('should handle empty answers', () => {
      const score = calculateScore([]);
      expect(score).toBe(0);
    });
  });

  describe('formatTime', () => {
    it('should format seconds correctly', () => {
      expect(formatTime(65)).toBe('1:05');
      expect(formatTime(3661)).toBe('1:01:01');
    });
  });

  describe('validateEmail', () => {
    it('should validate email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('invalid-email')).toBe(false);
    });
  });
});
```

## Integration Testing

### API Route Testing
```typescript
// __tests__/api/quiz.test.ts
import { createMocks } from 'node-mocks-http';
import { GET, POST } from '@/app/api/quiz/route';
import { db } from '@/lib/data/db';

// Mock database
jest.mock('@/lib/data/db');
const mockDb = db as jest.Mocked<typeof db>;

describe('/api/quiz', () => {
  describe('GET', () => {
    it('should return quiz list', async () => {
      const mockQuizzes = [
        { id: '1', title: 'Quiz 1' },
        { id: '2', title: 'Quiz 2' },
      ];
      mockDb.quiz.findMany.mockResolvedValue(mockQuizzes);

      const { req } = createMocks({
        method: 'GET',
      });

      const response = await GET(req);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toEqual(mockQuizzes);
    });
  });

  describe('POST', () => {
    it('should create new quiz', async () => {
      const newQuiz = {
        title: 'New Quiz',
        description: 'A new quiz',
        category: 'general',
        difficulty: 'easy',
      };

      const { req } = createMocks({
        method: 'POST',
        body: newQuiz,
      });

      const response = await POST(req);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.title).toBe('New Quiz');
    });
  });
});
```

### Database Testing
```typescript
// __tests__/lib/data/db.test.ts
import { db } from '@/lib/data/db';
import { quiz, question } from '@/lib/data/schema';

describe('Database Operations', () => {
  beforeEach(async () => {
    // Clean up database before each test
    await db.delete(question);
    await db.delete(quiz);
  });

  it('should create quiz with questions', async () => {
    const newQuiz = await db.insert(quiz).values({
      title: 'Test Quiz',
      description: 'A test quiz',
      category: 'general',
      difficulty: 'easy',
      timeLimit: 30,
    }).returning();

    const newQuestion = await db.insert(question).values({
      quizId: newQuiz[0].id,
      text: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      points: 10,
    }).returning();

    expect(newQuiz[0].title).toBe('Test Quiz');
    expect(newQuestion[0].text).toBe('What is 2 + 2?');
  });
});
```

## E2E Testing

### Playwright Configuration
```typescript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './__tests__/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'pnpm dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
});
```

### E2E Test Examples
```typescript
// __tests__/e2e/quiz-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Quiz Flow', () => {
  test('should complete quiz successfully', async ({ page }) => {
    // Navigate to quiz page
    await page.goto('/quiz/1');
    
    // Check quiz title is displayed
    await expect(page.getByRole('heading', { name: 'Test Quiz' })).toBeVisible();
    
    // Answer first question
    await page.getByRole('radio', { name: 'Option A' }).check();
    await page.getByRole('button', { name: 'Next Question' }).click();
    
    // Answer second question
    await page.getByRole('radio', { name: 'Option B' }).check();
    await page.getByRole('button', { name: 'Submit Quiz' }).click();
    
    // Check results page
    await expect(page.getByText('Quiz Complete!')).toBeVisible();
    await expect(page.getByText('Score: 80%')).toBeVisible();
  });

  test('should handle quiz timeout', async ({ page }) => {
    // Navigate to quiz with short time limit
    await page.goto('/quiz/2');
    
    // Wait for timeout
    await page.waitForTimeout(5000);
    
    // Check timeout message
    await expect(page.getByText('Time\'s up!')).toBeVisible();
  });
});
```

### Authentication E2E Tests
```typescript
// __tests__/e2e/auth-flow.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should login successfully', async ({ page }) => {
    await page.goto('/login');
    
    // Fill login form
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    
    // Submit form
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Check redirect to dashboard
    await expect(page).toHaveURL('/dashboard');
    await expect(page.getByText('Welcome back!')).toBeVisible();
  });

  test('should handle login errors', async ({ page }) => {
    await page.goto('/login');
    
    // Fill with invalid credentials
    await page.getByLabel('Email').fill('invalid@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    
    // Submit form
    await page.getByRole('button', { name: 'Sign In' }).click();
    
    // Check error message
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
});
```

## Checkly Monitoring

### Checkly Configuration
```typescript
// checkly.config.ts
import { defineConfig } from '@checkly/cli';

export default defineConfig({
  projectName: 'AlignSynch',
  logicalId: 'alignsynch-dev',
  repoUrl: 'https://github.com/your-org/alignsynch-dev',
  checks: {
    activated: true,
    muted: false,
    runtimeId: '2023.09',
    frequency: 5,
    locations: ['us-east-1', 'eu-west-1'],
    tags: ['production'],
    alertChannels: ['email', 'slack'],
  },
  cli: {
    runLocation: 'us-east-1',
  },
});
```

### API Monitoring
```typescript
// __checks__/api/health-check.spec.ts
import { test, expect } from '@playwright/test';

test('API Health Check', async ({ request }) => {
  const response = await request.get('/api/health');
  expect(response.status()).toBe(200);
  
  const data = await response.json();
  expect(data.status).toBe('healthy');
  expect(data.timestamp).toBeDefined();
});
```

### Browser Monitoring
```typescript
// __checks__/browser/homepage.spec.ts
import { test, expect } from '@playwright/test';

test('Homepage Loads Successfully', async ({ page }) => {
  await page.goto('/');
  
  // Check page title
  await expect(page).toHaveTitle(/AlignSynch/);
  
  // Check main elements
  await expect(page.getByRole('heading', { name: 'Welcome to AlignSynch' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Get Started' })).toBeVisible();
  
  // Check performance
  const performanceMetrics = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    return {
      loadTime: navigation.loadEventEnd - navigation.loadEventStart,
      domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    };
  });
  
  expect(performanceMetrics.loadTime).toBeLessThan(3000);
});
```

## Test Coverage

### Coverage Configuration
```javascript
// jest.config.js
module.exports = {
  collectCoverageFrom: [
    'components/**/*.{ts,tsx}',
    'app/**/*.{ts,tsx}',
    'lib/**/*.{ts,tsx}',
    'hooks/**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/__tests__/**',
    '!**/__checks__/**',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
    './components/': {
      branches: 85,
      functions: 85,
      lines: 85,
      statements: 85,
    },
    './lib/': {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
```

### Coverage Reports
```bash
# Generate coverage report
pnpm test:coverage

# View coverage report
open coverage/lcov-report/index.html

# Coverage thresholds
# - Global: 80%
# - Components: 85%
# - Utilities: 90%
```

## Performance Testing

### Load Testing
```typescript
// __tests__/performance/load-test.spec.ts
import { test, expect } from '@playwright/test';

test('Homepage Performance', async ({ page }) => {
  await page.goto('/');
  
  // Measure Core Web Vitals
  const metrics = await page.evaluate(() => {
    return new Promise((resolve) => {
      new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const metrics = {};
        entries.forEach((entry) => {
          metrics[entry.name] = entry.value;
        });
        resolve(metrics);
      }).observe({ entryTypes: ['measure'] });
    });
  });
  
  // Check performance thresholds
  expect(metrics['first-contentful-paint']).toBeLessThan(1500);
  expect(metrics['largest-contentful-paint']).toBeLessThan(2500);
  expect(metrics['cumulative-layout-shift']).toBeLessThan(0.1);
});
```

## Test Data Management

### Mock Data
```typescript
// __tests__/__mocks__/data.ts
export const mockQuiz: Quiz = {
  id: '1',
  title: 'Test Quiz',
  description: 'A test quiz for unit testing',
  questions: [
    {
      id: '1',
      text: 'What is 2 + 2?',
      options: ['3', '4', '5', '6'],
      correctAnswer: 1,
      points: 10,
    },
  ],
  category: 'general',
  difficulty: 'easy',
  timeLimit: 30,
  createdAt: new Date('2023-01-01'),
  updatedAt: new Date('2023-01-01'),
};

export const mockUser: User = {
  id: '1',
  email: 'test@example.com',
  name: 'Test User',
  createdAt: new Date('2023-01-01'),
  updatedAt: new Date('2023-01-01'),
};
```

### Test Database
```typescript
// __tests__/__mocks__/db.ts
import { mockQuiz, mockUser } from './data';

export const mockDb = {
  quiz: {
    findMany: jest.fn().mockResolvedValue([mockQuiz]),
    findUnique: jest.fn().mockResolvedValue(mockQuiz),
    create: jest.fn().mockResolvedValue(mockQuiz),
    update: jest.fn().mockResolvedValue(mockQuiz),
    delete: jest.fn().mockResolvedValue(mockQuiz),
  },
  user: {
    findMany: jest.fn().mockResolvedValue([mockUser]),
    findUnique: jest.fn().mockResolvedValue(mockUser),
    create: jest.fn().mockResolvedValue(mockUser),
    update: jest.fn().mockResolvedValue(mockUser),
    delete: jest.fn().mockResolvedValue(mockUser),
  },
};
```

## CI/CD Integration

### GitHub Actions
```yaml
# .github/workflows/test.yml
name: Tests

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
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
      
      - name: Run unit tests
        run: pnpm test:ci
      
      - name: Run E2E tests
        run: pnpm test:e2e
      
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/lcov.info
```

## Best Practices

### Test Organization
- **Unit Tests**: Test individual functions and components
- **Integration Tests**: Test API routes and database operations
- **E2E Tests**: Test complete user workflows
- **Performance Tests**: Test load times and Core Web Vitals

### Test Naming
```typescript
// Good test names
describe('QuizCard Component', () => {
  it('should render quiz title when quiz prop is provided', () => {});
  it('should call onStart callback when start button is clicked', () => {});
  it('should display loading state when quiz is being fetched', () => {});
});

// Bad test names
describe('QuizCard', () => {
  it('works', () => {});
  it('test 1', () => {});
  it('should work', () => {});
});
```

### Test Data
- **Use realistic data**: Mock data should reflect real-world scenarios
- **Keep tests isolated**: Each test should be independent
- **Clean up after tests**: Reset state between tests
- **Use factories**: Create test data factories for complex objects

---

*This testing strategy ensures comprehensive coverage and reliable application quality.*
