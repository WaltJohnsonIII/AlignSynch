# CLI Tools & Command Line Utilities

## Overview
Essential command-line tools for AlignSynch development workflow.

## Core Development Tools

### Package Management
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **pnpm** | Fast package manager | `npm install -g pnpm` | `pnpm install`, `pnpm dev` |
| **npm** | Node package manager | Built-in with Node.js | `npm install`, `npm run dev` |

### Code Quality & Formatting
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **Ultracite** | AI-ready formatter and linter | `npm install -g ultracite` | `npx ultracite fix`, `npx ultracite check` |
| **Biome** | Lightning-fast linter/formatter | `npm install -g @biomejs/cli` | `biome format`, `biome lint` |
| **ESLint** | JavaScript/TypeScript linter | `npm install -g eslint` | `eslint .`, `eslint --fix` |

### Testing & Monitoring
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **Playwright** | E2E testing framework | `npm install -g @playwright/cli` | `playwright test`, `playwright show-report` |
| **Checkly** | E2E testing and monitoring | `npm install -g @checkly/cli` | `checkly test`, `checkly deploy` |
| **Jest** | Unit testing framework | `npm install -g jest` | `jest`, `jest --watch` |

## Deployment & Infrastructure

### Cloud Platforms
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **Vercel CLI** | Vercel deployment | `npm install -g @vercel/cli` | `vercel`, `vercel deploy` |
| **GitHub CLI** | GitHub integration | `npm install -g @github/cli` | `gh auth login`, `gh pr create` |
| **Google Cloud CLI** | GCP services | `npm install -g @google-cloud/cli` | `gcloud auth login`, `gcloud deploy` |

### Database & ORM
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **Drizzle Kit** | Database ORM toolkit | `npm install -g drizzle-kit` | `drizzle-kit generate`, `drizzle-kit push` |
| **Prisma CLI** | Database toolkit | `npm install -g prisma` | `prisma generate`, `prisma db push` |

## Development Environment

### AI & Code Assistance
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **Cursor CLI** | AI-powered editor | `npm install -g @cursor/cli` | `cursor .`, `cursor --help` |
| **Bracel CLI** | AI development tools | `npm install -g @bracel/cli` | `bracel init`, `bracel generate` |

### Git & Version Control
| Tool | Purpose | Installation | Usage |
|------|---------|--------------|-------|
| **Git** | Version control | Built-in | `git clone`, `git commit`, `git push` |
| **Husky** | Git hooks | `npm install -g husky` | `husky install`, `husky add` |
| **Lefthook** | Git hooks manager | `npm install -g lefthook` | `lefthook install`, `lefthook run` |

## Project-Specific Commands

### Development Workflow
```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linting
pnpm lint

# Run tests
pnpm test

# Run E2E tests
pnpm test:e2e
```

### Code Quality
```bash
# Format code with Ultracite
npx ultracite fix

# Check code quality
npx ultracite check

# Format with Biome
pnpm biome format

# Lint with Biome
pnpm biome lint

# Check all issues
pnpm biome check
```

### Database Operations
```bash
# Generate database schema
pnpm drizzle-kit generate

# Push schema to database
pnpm drizzle-kit push

# Run database migrations
pnpm drizzle-kit migrate

# Seed database
pnpm db:seed
```

### Testing Commands
```bash
# Run unit tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Run E2E tests
pnpm test:e2e

# Run E2E tests in UI mode
pnpm test:e2e:ui

# Run Checkly tests
pnpm checkly:test
```

### Deployment Commands
```bash
# Deploy to Vercel
vercel

# Deploy to production
vercel --prod

# Check deployment status
vercel ls

# View deployment logs
vercel logs
```

## Environment Setup Scripts

### Windows PowerShell
```powershell
# Install core tools
npm install -g pnpm @vercel/cli @github/cli @biomejs/cli @playwright/cli

# Install project dependencies
pnpm install

# Setup git hooks
pnpm lefthook install

# Install Playwright browsers
pnpm playwright install

# Verify installations
pnpm --version
vercel --version
gh --version
biome --version
playwright --version
```

### macOS/Linux
```bash
# Install core tools
npm install -g pnpm @vercel/cli @github/cli @biomejs/cli @playwright/cli

# Install project dependencies
pnpm install

# Setup git hooks
pnpm lefthook install

# Install Playwright browsers
pnpm playwright install

# Verify installations
pnpm --version
vercel --version
gh --version
biome --version
playwright --version
```

## Tool Configuration

### Package.json Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "checkly:test": "checkly test",
    "format": "biome format .",
    "lint:biome": "biome lint .",
    "check": "biome check .",
    "db:generate": "drizzle-kit generate",
    "db:push": "drizzle-kit push",
    "db:migrate": "drizzle-kit migrate",
    "db:seed": "tsx scripts/seed.ts"
  }
}
```

### Git Hooks (lefthook.yml)
```yaml
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

## Troubleshooting

### Common Issues
| Issue | Solution |
|-------|----------|
| **pnpm not found** | Install: `npm install -g pnpm` |
| **Playwright browsers missing** | Run: `pnpm playwright install` |
| **Vercel CLI not authenticated** | Run: `vercel login` |
| **GitHub CLI not authenticated** | Run: `gh auth login` |
| **Database connection failed** | Check environment variables |
| **Build fails** | Run: `pnpm install` then `pnpm build` |

### Performance Optimization
```bash
# Clear pnpm cache
pnpm store prune

# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Clear Playwright cache
pnpm playwright install --force
```

## Tool Versions

### Recommended Versions
| Tool | Version | Purpose |
|------|---------|---------|
| **Node.js** | 18.x or 20.x | Runtime environment |
| **pnpm** | 8.x | Package manager |
| **Next.js** | 15.x | React framework |
| **TypeScript** | 5.x | Type system |
| **Playwright** | 1.x | E2E testing |
| **Biome** | 1.x | Linting/formatting |

---

*These CLI tools provide a complete development environment for the AlignSynch project.*