# Code Standards & Best Practices

## Overview
Comprehensive coding standards for AlignSynch Next.js 15 application using Ultracite, Biome, and TypeScript.

## Core Principles
- **Zero Configuration**: Ultracite provides subsecond performance
- **Maximum Type Safety**: Strict TypeScript enforcement
- **AI-Friendly**: Optimized for AI code generation
- **Accessibility First**: WCAG compliance built-in

## TypeScript Standards

### Type Definitions
```typescript
// ✅ Good: Use export type for types
export type User = {
  id: string;
  name: string;
  email: string;
};

// ✅ Good: Use import type for types
import type { ComponentProps } from "react";

// ❌ Bad: Don't use TypeScript enums
enum Status { ACTIVE, INACTIVE } // Avoid

// ✅ Good: Use const assertions
const statuses = ["active", "inactive"] as const;
```

### Function Standards
```typescript
// ✅ Good: Arrow functions preferred
const calculateScore = (answers: Answer[]): number => {
  return answers.reduce((score, answer) => score + answer.points, 0);
};

// ✅ Good: Proper error handling
const fetchUserData = async (id: string): Promise<{ success: boolean; data?: User; error?: string }> => {
  try {
    const result = await api.getUser(id);
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
```

## React Standards

### Component Structure
```typescript
// ✅ Good: Proper component definition
interface QuizCardProps {
  quiz: Quiz;
  onStart: (quizId: string) => void;
}

const QuizCard: React.FC<QuizCardProps> = ({ quiz, onStart }) => {
  return (
    <div className="quiz-card">
      <h3>{quiz.title}</h3>
      <Button onClick={() => onStart(quiz.id)}>
        Start Quiz
      </Button>
    </div>
  );
};
```

### Hooks Standards
```typescript
// ✅ Good: Custom hooks with proper typing
const useQuizData = (quizId: string) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const data = await api.getQuiz(quizId);
        setQuiz(data);
      } catch (error) {
        console.error('Failed to fetch quiz:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchQuiz();
  }, [quizId]);
  
  return { quiz, loading };
};
```

## Accessibility Standards

### ARIA Requirements
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
```

### Keyboard Navigation
```typescript
// ✅ Good: Keyboard event handling
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};

<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  Interactive Element
</div>
```

## Import Organization

### Import Order
```typescript
// 1. React imports
import { useState, useEffect } from "react";
import type { ComponentProps } from "react";

// 2. Third-party libraries
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// 3. Internal imports
import type { Quiz, Question } from "@/types/quiz";
import { useQuizData } from "@/hooks/useQuizData";

// 4. Relative imports
import "./QuizCard.css";
```

## Error Handling

### API Error Handling
```typescript
// ✅ Good: Comprehensive error handling
const apiCall = async (): Promise<ApiResponse> => {
  try {
    const response = await fetch('/api/quiz');
    
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    console.error('API call failed:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
};
```

## Performance Standards

### Code Splitting
```typescript
// ✅ Good: Dynamic imports for large components
const QuizEditor = lazy(() => import('@/components/QuizEditor'));

// ✅ Good: Suspense boundaries
<Suspense fallback={<QuizEditorSkeleton />}>
  <QuizEditor />
</Suspense>
```

### Memoization
```typescript
// ✅ Good: Memo for expensive calculations
const expensiveValue = useMemo(() => {
  return calculateComplexScore(answers);
}, [answers]);

// ✅ Good: Callback memoization
const handleSubmit = useCallback((data: FormData) => {
  onSubmit(data);
}, [onSubmit]);
```

## File Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `QuizCard.tsx` |
| Hooks | camelCase with `use` prefix | `useQuizData.ts` |
| Utilities | camelCase | `formatScore.ts` |
| Types | PascalCase | `QuizTypes.ts` |
| Constants | UPPER_SNAKE_CASE | `API_ENDPOINTS.ts` |

## Common Tasks

### Ultracite Commands
```bash
# Format and fix code
npx ultracite fix

# Check for issues
npx ultracite check

# Initialize in project
npx ultracite init
```

### Biome Commands
```bash
# Format code
pnpm biome format

# Lint code
pnpm biome lint

# Check code
pnpm biome check
```

---

*These standards ensure consistent, maintainable, and accessible code across the AlignSynch application.*
