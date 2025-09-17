# Getting Started Guide

## Overview
Quick start guide for new developers joining the AlignSynch project.

## Prerequisites

### Required Software
| Software | Version | Purpose |
|----------|---------|---------|
| **Node.js** | 18.x or 20.x | JavaScript runtime |
| **pnpm** | 8.x | Package manager |
| **Git** | 2.x | Version control |
| **VS Code** | Latest | Code editor |

### Required Accounts
| Service | Purpose | Sign-up |
|---------|---------|---------|
| **GitHub** | Code repository | [github.com](https://github.com) |
| **Vercel** | Deployment platform | [vercel.com](https://vercel.com) |
| **Clerk** | Authentication | [clerk.com](https://clerk.com) |

## Quick Setup

### 1. Clone Repository
```bash
git clone https://github.com/your-org/alignsynch-dev.git
cd alignsynch-dev
```

### 2. Install Dependencies
```bash
pnpm install
```

### 3. Setup Environment
```bash
cp .env.example .env.local
# Edit .env.local with your values
```

### 4. Start Development Server
```bash
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
alignsynch-dev/
├── app/                    # Next.js App Router
├── components/             # React components
├── lib/                    # Utility libraries
├── types/                  # TypeScript types
├── hooks/                  # Custom React hooks
├── data/                   # Mock data
├── __tests__/              # Unit tests
├── __checks__/             # E2E tests
└── docs/                   # Documentation
```

## Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feature/your-feature-name
```

### 2. Make Changes
- Write code following project standards
- Add tests for new functionality
- Update documentation if needed

### 3. Test Changes
```bash
pnpm test          # Unit tests
pnpm test:e2e      # E2E tests
pnpm lint          # Code quality
pnpm build         # Build check
```

### 4. Commit Changes
```bash
git add .
git commit -m "feat: add new feature"
git push origin feature/your-feature-name
```

### 5. Create Pull Request
- Create PR on GitHub
- Request code review
- Address feedback
- Merge when approved

## Common Commands

### Development
```bash
pnpm dev           # Start development server
pnpm build         # Build for production
pnpm start         # Start production server
```

### Testing
```bash
pnpm test          # Run unit tests
pnpm test:watch    # Run tests in watch mode
pnpm test:coverage # Run tests with coverage
pnpm test:e2e      # Run E2E tests
```

### Code Quality
```bash
pnpm lint          # Run linter
pnpm format        # Format code
pnpm check         # Check code quality
```

### Database
```bash
pnpm db:generate   # Generate database schema
pnpm db:push       # Push schema to database
pnpm db:seed       # Seed database
```

## Key Technologies

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Component library

### Backend
- **Next.js API Routes**: Serverless API endpoints
- **Drizzle ORM**: Type-safe database queries
- **PostgreSQL**: Database (via Neon)

### Testing
- **Jest**: Unit testing framework
- **Playwright**: E2E testing
- **Checkly**: Monitoring and testing

### Quality
- **Biome**: Linting and formatting
- **Ultracite**: AI-ready code quality
- **TypeScript**: Type checking

## Getting Help

### Documentation
- [Project Structure](./architecture/project-structure.md)
- [Code Standards](./architecture/code-standards.md)
- [Testing Strategy](./testing/testing-strategy.md)
- [Environment Setup](./environment/setup-guide.md)

### Team Resources
- **Slack**: #alignsynch-dev channel
- **GitHub**: Issues and discussions
- **Wiki**: Internal documentation

### Common Issues
- [Troubleshooting Guide](./environment/setup-guide.md#troubleshooting)
- [FAQ](./workflow/faq.md)
- [Known Issues](./workflow/known-issues.md)

## Next Steps

1. **Read the Code**: Explore the codebase to understand the architecture
2. **Run Tests**: Make sure all tests pass
3. **Make a Small Change**: Try making a small improvement
4. **Ask Questions**: Don't hesitate to ask for help
5. **Contribute**: Start contributing to the project

## Resources

### Learning Materials
- [Next.js Documentation](https://nextjs.org/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com)

### Tools
- [VS Code Extensions](./tools/extensions.md)
- [CLI Tools](./tools/cli-tools.md)
- [MCP Servers](./tools/mcp-servers.md)

---

*Welcome to the AlignSynch development team!*
