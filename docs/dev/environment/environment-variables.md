# Environment Variables & Configuration

## Overview
Complete environment variable configuration for AlignSynch development and deployment.

## Environment Files

### File Structure
```
.env.local          # Local development (git-ignored)
.env.development    # Development environment
.env.production     # Production environment
.env.example        # Template file (committed)
```

### Environment File Priority
1. `.env.local` (highest priority, git-ignored)
2. `.env.development` / `.env.production`
3. `.env.example` (template, committed)

## Core Application Variables

### Next.js Configuration
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NEXT_PUBLIC_APP_URL` | Public application URL | `http://localhost:3000` | Yes |
| `NEXT_PUBLIC_APP_NAME` | Application name | `AlignSynch` | Yes |
| `NEXT_PUBLIC_APP_VERSION` | Application version | `1.0.0` | No |
| `NODE_ENV` | Environment mode | `development` | Yes |

### Database Configuration
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@localhost:5432/alignsynch` | Yes |
| `DATABASE_HOST` | Database host | `localhost` | No |
| `DATABASE_PORT` | Database port | `5432` | No |
| `DATABASE_NAME` | Database name | `alignsynch` | No |
| `DATABASE_USER` | Database user | `postgres` | No |
| `DATABASE_PASSWORD` | Database password | `password` | No |

### Authentication
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `NEXTAUTH_SECRET` | NextAuth.js secret | `your-secret-key` | Yes |
| `NEXTAUTH_URL` | NextAuth.js URL | `http://localhost:3000` | Yes |
| `AUTH_PROVIDER` | Authentication provider | `clerk` | Yes |
| `CLERK_PUBLISHABLE_KEY` | Clerk public key | `pk_test_...` | Yes |
| `CLERK_SECRET_KEY` | Clerk secret key | `sk_test_...` | Yes |

## Third-Party Services

### Analytics & Monitoring
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `POSTHOG_KEY` | PostHog project key | `phc_...` | No |
| `POSTHOG_HOST` | PostHog host | `https://app.posthog.com` | No |
| `SENTRY_DSN` | Sentry error tracking | `https://...@sentry.io/...` | No |
| `VERCEL_ANALYTICS_ID` | Vercel analytics | `prj_...` | No |

### AI Services
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `OPENAI_API_KEY` | OpenAI API key | `sk-...` | No |
| `ANTHROPIC_API_KEY` | Anthropic API key | `sk-ant-...` | No |
| `GEMINI_API_KEY` | Google Gemini API key | `AIza...` | No |

### Email Services
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `EMAIL_PROVIDER` | Email service provider | `resend` | No |
| `RESEND_API_KEY` | Resend API key | `re_...` | No |
| `SMTP_HOST` | SMTP host | `smtp.gmail.com` | No |
| `SMTP_PORT` | SMTP port | `587` | No |
| `SMTP_USER` | SMTP username | `user@gmail.com` | No |
| `SMTP_PASSWORD` | SMTP password | `password` | No |

### Payment Processing
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `STRIPE_PUBLISHABLE_KEY` | Stripe public key | `pk_test_...` | No |
| `STRIPE_SECRET_KEY` | Stripe secret key | `sk_test_...` | No |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret | `whsec_...` | No |

## Development Tools

### Testing & Quality
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `CHECKLY_API_KEY` | Checkly API key | `csk_...` | No |
| `CHECKLY_ACCOUNT_ID` | Checkly account ID | `12345` | No |
| `PLAYWRIGHT_BASE_URL` | Playwright test base URL | `http://localhost:3000` | No |

### Deployment
| Variable | Description | Example | Required |
|----------|-------------|---------|----------|
| `VERCEL_TOKEN` | Vercel deployment token | `vercel_...` | No |
| `VERCEL_PROJECT_ID` | Vercel project ID | `prj_...` | No |
| `GITHUB_TOKEN` | GitHub API token | `ghp_...` | No |

## Environment Configuration Examples

### .env.example (Template)
```bash
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=AlignSynch
NEXT_PUBLIC_APP_VERSION=1.0.0
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/alignsynch

# Authentication
NEXTAUTH_SECRET=your-secret-key-here
NEXTAUTH_URL=http://localhost:3000
AUTH_PROVIDER=clerk
CLERK_PUBLISHABLE_KEY=pk_test_your-key-here
CLERK_SECRET_KEY=sk_test_your-key-here

# Analytics
POSTHOG_KEY=phc_your-key-here
POSTHOG_HOST=https://app.posthog.com

# AI Services
OPENAI_API_KEY=sk-your-key-here
ANTHROPIC_API_KEY=sk-ant-your-key-here
GEMINI_API_KEY=AIza-your-key-here

# Email
EMAIL_PROVIDER=resend
RESEND_API_KEY=re_your-key-here

# Payment
STRIPE_PUBLISHABLE_KEY=pk_test_your-key-here
STRIPE_SECRET_KEY=sk_test_your-key-here

# Testing
CHECKLY_API_KEY=csk_your-key-here
CHECKLY_ACCOUNT_ID=your-account-id

# Deployment
VERCEL_TOKEN=vercel_your-token-here
GITHUB_TOKEN=ghp_your-token-here
```

### .env.local (Development)
```bash
# Local development overrides
NEXT_PUBLIC_APP_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:password@localhost:5432/alignsynch_dev
NEXTAUTH_URL=http://localhost:3000
CLERK_PUBLISHABLE_KEY=pk_test_local-development-key
CLERK_SECRET_KEY=sk_test_local-development-key
```

### .env.production (Production)
```bash
# Production environment
NEXT_PUBLIC_APP_URL=https://alignsynch.vercel.app
DATABASE_URL=postgresql://user:password@prod-db:5432/alignsynch
NEXTAUTH_URL=https://alignsynch.vercel.app
CLERK_PUBLISHABLE_KEY=pk_live_production-key
CLERK_SECRET_KEY=sk_live_production-key
POSTHOG_KEY=phc_production-key
```

## Environment Validation

### Validation Schema
```typescript
// lib/env.ts
import { z } from 'zod';

const envSchema = z.object({
  // Application
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_APP_NAME: z.string().min(1),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  
  // Database
  DATABASE_URL: z.string().url(),
  
  // Authentication
  NEXTAUTH_SECRET: z.string().min(32),
  NEXTAUTH_URL: z.string().url(),
  AUTH_PROVIDER: z.enum(['clerk', 'nextauth']),
  CLERK_PUBLISHABLE_KEY: z.string().optional(),
  CLERK_SECRET_KEY: z.string().optional(),
  
  // Analytics
  POSTHOG_KEY: z.string().optional(),
  POSTHOG_HOST: z.string().url().optional(),
  
  // AI Services
  OPENAI_API_KEY: z.string().optional(),
  ANTHROPIC_API_KEY: z.string().optional(),
  GEMINI_API_KEY: z.string().optional(),
});

export const env = envSchema.parse(process.env);
```

### Environment Check Script
```typescript
// scripts/check-env.ts
import { env } from '../lib/env';

const checkEnvironment = () => {
  const required = [
    'NEXT_PUBLIC_APP_URL',
    'DATABASE_URL',
    'NEXTAUTH_SECRET',
    'NEXTAUTH_URL',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    process.exit(1);
  }
  
  console.log('✅ All required environment variables are set');
};

checkEnvironment();
```

## Security Best Practices

### Sensitive Data Protection
```bash
# Never commit sensitive data
echo ".env.local" >> .gitignore
echo ".env.production" >> .gitignore
echo "*.env" >> .gitignore

# Use environment-specific files
cp .env.example .env.local
# Edit .env.local with your values
```

### API Key Management
```typescript
// lib/config.ts
export const config = {
  // Public variables (safe to expose)
  app: {
    url: process.env.NEXT_PUBLIC_APP_URL!,
    name: process.env.NEXT_PUBLIC_APP_NAME!,
    version: process.env.NEXT_PUBLIC_APP_VERSION || '1.0.0',
  },
  
  // Server-only variables (never expose)
  server: {
    databaseUrl: process.env.DATABASE_URL!,
    nextAuthSecret: process.env.NEXTAUTH_SECRET!,
    clerkSecretKey: process.env.CLERK_SECRET_KEY!,
  },
  
  // Optional variables
  optional: {
    posthogKey: process.env.POSTHOG_KEY,
    openaiApiKey: process.env.OPENAI_API_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
  },
};
```

## Deployment Configuration

### Vercel Environment Variables
```bash
# Set environment variables in Vercel
vercel env add NEXT_PUBLIC_APP_URL
vercel env add DATABASE_URL
vercel env add NEXTAUTH_SECRET
vercel env add CLERK_SECRET_KEY

# Pull environment variables
vercel env pull .env.local
```

### Docker Environment
```dockerfile
# Dockerfile
FROM node:18-alpine

# Copy environment files
COPY .env.production .env.local

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_PUBLIC_APP_URL=https://alignsynch.vercel.app

# Build and start
RUN npm run build
CMD ["npm", "start"]
```

## Troubleshooting

### Common Issues
| Issue | Solution |
|-------|----------|
| **Environment variables not loading** | Check file naming, restart dev server |
| **Database connection failed** | Verify DATABASE_URL format and credentials |
| **Authentication not working** | Check NEXTAUTH_SECRET and CLERK keys |
| **API calls failing** | Verify API keys and endpoints |

### Environment Debugging
```typescript
// lib/debug-env.ts
export const debugEnvironment = () => {
  if (process.env.NODE_ENV === 'development') {
    console.log('Environment Variables:');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('NEXT_PUBLIC_APP_URL:', process.env.NEXT_PUBLIC_APP_URL);
    console.log('DATABASE_URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');
    console.log('NEXTAUTH_SECRET:', process.env.NEXTAUTH_SECRET ? 'Set' : 'Not set');
  }
};
```

---

*Proper environment configuration ensures secure and reliable application deployment.*
