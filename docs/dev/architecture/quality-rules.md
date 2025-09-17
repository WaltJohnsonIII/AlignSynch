# Quality Rules & Standards

## Overview
Comprehensive quality rules enforced by Ultracite and Biome for the AlignSynch project.

## Ultracite Configuration

### Core Principles
- **Zero Configuration**: Works out of the box
- **Subsecond Performance**: Lightning-fast linting and formatting
- **Maximum Type Safety**: Strict TypeScript enforcement
- **AI-Friendly**: Optimized for AI code generation

### Common Commands
```bash
# Initialize Ultracite
npx ultracite init

# Format and fix code automatically
npx ultracite fix

# Check for issues without fixing
npx ultracite check
```

## Accessibility Rules (a11y)

### ARIA Standards
| Rule | Description | Example |
|------|-------------|---------|
| No `accessKey` | Don't use accessKey attribute | ❌ `<button accessKey="s">` |
| No `aria-hidden` on focusable | Don't hide focusable elements | ❌ `<button aria-hidden="true">` |
| Valid ARIA roles | Use valid, non-abstract ARIA roles | ✅ `<div role="button">` |
| Proper labeling | Labels must have text content | ✅ `<label>Username</label>` |
| Semantic elements | Use semantic HTML over ARIA | ✅ `<button>` not `<div role="button">` |

### Keyboard Navigation
```typescript
// ✅ Good: Proper keyboard handling
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};

// ✅ Good: Focusable elements
<div
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={handleKeyDown}
>
  Interactive Element
</div>
```

### Image Accessibility
```typescript
// ✅ Good: Meaningful alt text
<img src="quiz-icon.png" alt="Quiz icon" />

// ❌ Bad: Generic alt text
<img src="quiz-icon.png" alt="image" />
```

## Code Complexity Rules

### Function Complexity
- **Cognitive Complexity**: Functions must not exceed complexity threshold
- **Function Length**: Keep functions focused and concise
- **Parameter Count**: Limit function parameters

```typescript
// ✅ Good: Simple, focused function
const calculateScore = (answers: Answer[]): number => {
  return answers.reduce((score, answer) => score + answer.points, 0);
};

// ❌ Bad: Complex function with multiple responsibilities
const processQuizData = (data: any) => {
  // Too many responsibilities
  const processed = data.map(item => {
    // Complex logic here
  });
  // More complex logic
  return processed;
};
```

### Loop and Control Flow
```typescript
// ✅ Good: Use for...of instead of forEach
for (const item of items) {
  processItem(item);
}

// ✅ Good: Use while loops when appropriate
while (condition) {
  // Process items
}

// ❌ Bad: Unnecessary complexity
items.forEach(item => {
  if (item.valid) {
    // Process item
  }
});
```

## React Best Practices

### Component Rules
```typescript
// ✅ Good: Proper component structure
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = 'primary' }) => {
  return (
    <button
      type="button"
      className={`btn btn-${variant}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// ❌ Bad: Component defined inside another component
const ParentComponent = () => {
  const ChildComponent = () => <div>Child</div>; // Don't do this
  return <ChildComponent />;
};
```

### Hook Rules
```typescript
// ✅ Good: Hooks at top level
const useQuizData = (quizId: string) => {
  const [quiz, setQuiz] = useState<Quiz | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Effect logic
  }, [quizId]);
  
  return { quiz, loading };
};

// ❌ Bad: Hooks in conditions or loops
const BadComponent = ({ shouldLoad }: { shouldLoad: boolean }) => {
  if (shouldLoad) {
    const [data, setData] = useState(null); // Don't do this
  }
};
```

## TypeScript Standards

### Type Safety
```typescript
// ✅ Good: Explicit type definitions
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Good: Use export type for types
export type QuizStatus = 'draft' | 'published' | 'archived';

// ✅ Good: Use import type for types
import type { ComponentProps } from 'react';

// ❌ Bad: Using any type
const processData = (data: any) => { // Don't use any
  return data;
};
```

### Enum Alternatives
```typescript
// ❌ Bad: TypeScript enums
enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

// ✅ Good: Const assertions
const Status = {
  ACTIVE: 'active',
  INACTIVE: 'inactive'
} as const;

type Status = typeof Status[keyof typeof Status];
```

## Error Handling Standards

### Comprehensive Error Handling
```typescript
// ✅ Good: Proper error handling
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

## Performance Rules

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

## Security Rules

### Input Validation
```typescript
// ✅ Good: Validate user input
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// ✅ Good: Sanitize user input
const sanitizeInput = (input: string): string => {
  return input.trim().replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
};
```

### Environment Variables
```typescript
// ✅ Good: Use environment variables
const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

// ❌ Bad: Hardcoded secrets
const apiKey = 'sk-1234567890abcdef'; // Don't hardcode secrets
```

## Next.js Specific Rules

### Image Optimization
```typescript
// ✅ Good: Use Next.js Image component
import Image from 'next/image';

<Image
  src="/quiz-icon.png"
  alt="Quiz icon"
  width={32}
  height={32}
/>

// ❌ Bad: Using img element
<img src="/quiz-icon.png" alt="Quiz icon" />
```

### Head Management
```typescript
// ✅ Good: Use Next.js metadata API
export const metadata: Metadata = {
  title: 'Quiz Dashboard',
  description: 'Manage your quizzes and track progress',
};

// ❌ Bad: Using head element in App Router
<head>
  <title>Quiz Dashboard</title>
</head>
```

## Testing Standards

### Test Structure
```typescript
// ✅ Good: Proper test structure
describe('QuizCard Component', () => {
  it('should render quiz title', () => {
    const quiz = { id: '1', title: 'Test Quiz' };
    render(<QuizCard quiz={quiz} onStart={jest.fn()} />);
    
    expect(screen.getByText('Test Quiz')).toBeInTheDocument();
  });
  
  it('should call onStart when button is clicked', () => {
    const onStart = jest.fn();
    const quiz = { id: '1', title: 'Test Quiz' };
    
    render(<QuizCard quiz={quiz} onStart={onStart} />);
    fireEvent.click(screen.getByRole('button'));
    
    expect(onStart).toHaveBeenCalledWith('1');
  });
});
```

## Quality Gates

### Pre-commit Checks
- All tests must pass
- Code must be formatted with Ultracite
- No linting errors
- TypeScript compilation must succeed

### Pull Request Requirements
- Code coverage must not decrease
- All new code must have tests
- Documentation must be updated
- Performance impact must be assessed

---

*These quality rules ensure consistent, maintainable, and high-quality code across the AlignSynch application.*
