# Project Structure & Organization

## Overview
AlignSynch is a Next.js 15 quiz platform with comprehensive testing, monitoring, and code quality infrastructure.

## Directory Structure

```
alignsynch-dev/
├── app/                          # Next.js App Router
│   ├── (auth)/                   # Authentication routes
│   │   ├── login/
│   │   └── register/
│   ├── (mainlayout)/             # Main application routes
│   │   ├── dashboard/
│   │   ├── quiz/
│   │   └── profile/
│   ├── api/                      # API routes
│   │   ├── auth/
│   │   ├── quiz/
│   │   └── user/
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── components/                   # React components
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── layout/                   # Layout components
│   │   ├── header.tsx
│   │   ├── sidebar.tsx
│   │   └── footer.tsx
│   ├── quiz/                     # Quiz-specific components
│   │   ├── QuizCard.tsx
│   │   ├── QuestionCard.tsx
│   │   └── ScoreDisplay.tsx
│   └── auth/                     # Authentication components
│       ├── LoginForm.tsx
│       └── RegisterForm.tsx
├── lib/                          # Utility libraries
│   ├── data/                     # Database utilities
│   │   ├── db.ts
│   │   └── schema.ts
│   ├── utils.ts                  # Shared utilities
│   ├── auth.ts                   # Authentication utilities
│   └── validations.ts            # Form validations
├── types/                        # TypeScript type definitions
│   ├── quiz.ts                   # Quiz-related types
│   ├── user.ts                   # User-related types
│   └── api.ts                    # API response types
├── data/                         # Mock data and static content
│   ├── quizzes.ts                # Quiz mock data
│   ├── categories.ts             # Category data
│   └── users.ts                  # User mock data
├── hooks/                        # Custom React hooks
│   ├── useQuizData.ts
│   ├── useAuth.ts
│   └── useLocalStorage.ts
├── styles/                       # Global styles
│   └── globals.css
├── public/                       # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
├── docs/                         # Documentation
│   └── dev/                      # Development documentation
├── __checks__/                   # Checkly E2E tests
│   ├── api-checks/
│   ├── browser-tests/
│   └── monitoring/
└── Configuration Files
    ├── package.json              # Dependencies and scripts
    ├── next.config.mjs           # Next.js configuration
    ├── tailwind.config.ts        # Tailwind CSS configuration
    ├── tsconfig.json             # TypeScript configuration
    ├── biome.jsonc               # Biome linting configuration
    ├── drizzle.config.ts         # Database ORM configuration
    ├── checkly.config.ts         # E2E testing configuration
    └── lefthook.yml              # Git hooks configuration
```

## Key Architecture Components

### App Router Structure
- **Entry Point**: `app/layout.tsx` - Root layout with providers
- **Main Layout**: `app/(mainlayout)/layout.tsx` - Main application layout
- **Auth Routes**: `app/(auth)/` - Authentication pages
- **Main Routes**: `app/(mainlayout)/` - Core application pages

### Component Organization
- **UI Components**: `components/ui/` - Reusable shadcn/ui components
- **Feature Components**: `components/` - Feature-specific components organized by domain
- **Layout Components**: `components/layout/` - Layout and navigation components

### Data Layer
- **Types**: `types/` - Core type definitions
- **Mock Data**: `data/` - Static data and mock content
- **Database**: `lib/data/` - Database utilities and configurations

## File Naming Conventions

| Type | Convention | Example | Location |
|------|------------|---------|----------|
| Pages | kebab-case | `quiz/[id]/page.tsx` | `app/` |
| Components | PascalCase | `QuizCard.tsx` | `components/` |
| Hooks | camelCase | `useQuizData.ts` | `hooks/` |
| Utilities | camelCase | `formatScore.ts` | `lib/` |
| Types | camelCase | `quiz.ts` | `types/` |
| Constants | UPPER_SNAKE_CASE | `API_ENDPOINTS.ts` | `lib/` |

## Import Path Mapping

```typescript
// tsconfig.json path mapping
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/types/*": ["./types/*"],
      "@/hooks/*": ["./hooks/*"],
      "@/data/*": ["./data/*"]
    }
  }
}
```

## Component Organization Patterns

### Feature-Based Organization
```
components/
├── quiz/                    # Quiz feature components
│   ├── QuizCard.tsx
│   ├── QuestionCard.tsx
│   ├── AnswerOptions.tsx
│   └── ScoreDisplay.tsx
├── auth/                    # Authentication components
│   ├── LoginForm.tsx
│   ├── RegisterForm.tsx
│   └── AuthProvider.tsx
└── layout/                  # Layout components
    ├── Header.tsx
    ├── Sidebar.tsx
    └── Footer.tsx
```

### Shared Component Structure
```typescript
// components/ui/Button.tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
```

## API Route Organization

```
app/api/
├── auth/                     # Authentication endpoints
│   ├── login/route.ts
│   ├── register/route.ts
│   └── logout/route.ts
├── quiz/                     # Quiz endpoints
│   ├── route.ts              # GET /api/quiz (list)
│   ├── [id]/route.ts         # GET /api/quiz/[id]
│   └── create/route.ts       # POST /api/quiz/create
└── user/                     # User endpoints
    ├── profile/route.ts
    └── stats/route.ts
```

## Database Schema Organization

```
lib/data/
├── db.ts                     # Database connection
├── schema.ts                 # Drizzle schema definitions
├── migrations/               # Database migrations
└── seed.ts                   # Database seeding
```

## Testing Structure

```
__checks__/                   # Checkly E2E tests
├── api-checks/               # API endpoint tests
│   ├── auth.spec.ts
│   ├── quiz.spec.ts
│   └── user.spec.ts
├── browser-tests/            # Browser automation tests
│   ├── quiz-flow.spec.ts
│   ├── auth-flow.spec.ts
│   └── dashboard.spec.ts
└── monitoring/               # Performance monitoring
    ├── page-load.spec.ts
    └── api-performance.spec.ts
```

## Configuration Files

| File | Purpose | Key Settings |
|------|---------|--------------|
| `next.config.mjs` | Next.js configuration | App Router, image optimization |
| `tailwind.config.ts` | Styling configuration | Design system, custom colors |
| `tsconfig.json` | TypeScript configuration | Path mapping, strict mode |
| `biome.jsonc` | Code quality | Linting, formatting rules |
| `drizzle.config.ts` | Database ORM | Connection, migrations |
| `checkly.config.ts` | E2E testing | Test configuration, monitoring |

## Development Workflow

1. **Feature Development**: Create feature branch from `main`
2. **Component Creation**: Add components in appropriate feature directory
3. **Type Definitions**: Define types in `types/` directory
4. **API Routes**: Add API endpoints in `app/api/`
5. **Testing**: Add E2E tests in `__checks__/`
6. **Documentation**: Update relevant documentation

---

*This structure ensures scalable, maintainable, and organized code across the AlignSynch application.*
