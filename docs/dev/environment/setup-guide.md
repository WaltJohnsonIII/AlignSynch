# Environment Setup Guide

## Overview
Complete step-by-step guide for setting up the AlignSynch development environment.

## Prerequisites

### System Requirements
| Requirement | Version | Purpose |
|-------------|---------|---------|
| **Windows 10/11** | Current OS | Operating system |
| **Node.js** | 24.7.0+ | JavaScript runtime |
| **pnpm** | 10.15.1+ | Package manager |
| **Git** | 2.x | Version control |
| **Cursor IDE** | Latest | AI-powered editor |

### Required Accounts
| Service | Purpose | Sign-up |
|---------|---------|---------|
| **GitHub** | Code repository | [github.com](https://github.com) |
| **Neon** | PostgreSQL database | [neon.tech](https://neon.tech) |
| **PostHog** | Analytics platform | [posthog.com](https://posthog.com) |
| **Vercel** | Deployment platform | [vercel.com](https://vercel.com) |

## Installation Steps

### Step 1: Clone Repository
```bash
# Clone the repository
git clone https://github.com/your-org/alignsynch-dev.git
cd alignsynch-dev

# Verify you're in the right directory
pwd
ls -la
```

### Step 2: Install Node.js and pnpm
```bash
# Install Node.js 24.7.0+ (LTS)
# Download from https://nodejs.org/

# Install pnpm globally
npm install -g pnpm

# Verify installations
node --version  # Should be 24.7.0+
pnpm --version  # Should be 10.15.1+
```

### Step 3: Install Project Dependencies
```bash
# Install all dependencies
pnpm install

# Verify installation
pnpm list
```

### Step 4: Setup Environment Variables
```bash
# Copy environment template
cp .env.example .env.local

# Edit environment variables
# Use your preferred editor (VS Code, nano, vim)
code .env.local
```

**Required Environment Variables:**
```bash
# Database
DATABASE_URL="postgresql://username:password@host:port/database"

# Authentication
BETTER_AUTH_SECRET="your-secret-key-here"

# AI Services
GEMINI_API_KEY="your-gemini-api-key"

# Analytics
POSTHOG_KEY="your-posthog-key"
POSTHOG_HOST="https://app.posthog.com"

# Optional: Vercel
VERCEL_URL="your-vercel-url"
```

### Step 5: Configure Database
```bash
# Install database CLI tools
pnpm add -g drizzle-kit

# Generate database schema
pnpm drizzle-kit generate

# Push schema to database
pnpm drizzle-kit push

# Seed database with initial data
pnpm db:seed
```

### Step 6: Install Cursor IDE
```bash
# Download from https://cursor.sh/
# Or install via winget
winget install Anysphere.Cursor
```

### Step 7: Install VSCode MCP Bridge
```bash
# 1. Open Cursor IDE
# 2. Go to Extensions (Ctrl+Shift+X)
# 3. Search for "VSCode MCP Bridge"
# 4. Install the extension by YuTengjing
# 5. Reload Cursor
```

### Step 8: Install Essential Extensions
```bash
# Install essential extensions
cursor --install-extension YuTengjing.vscode-mcp-bridge
cursor --install-extension eamodio.gitlens
cursor --install-extension rangav.vscode-thunder-client
cursor --install-extension usernamehw.errorlens
cursor --install-extension ms-vscode.vscode-json
cursor --install-extension bradlc.vscode-tailwindcss
```

### Step 7: Setup Git Hooks
```bash
# Install git hooks
pnpm lefthook install

# Verify hooks are installed
ls -la .git/hooks/
```

### Step 9: Install Playwright Browsers
```bash
# Install Playwright browsers
pnpm playwright install

# Verify installation
pnpm playwright --version
```

### Step 10: Disable Conflicting Extensions
```bash
# Disable human-focused extensions that conflict with AI tools
cursor --disable-extension formulahendry.auto-rename-tag
cursor --disable-extension esbenp.prettier-vscode
cursor --disable-extension dbaeumer.vscode-eslint
cursor --disable-extension csstools.postcss
cursor --disable-extension christian-kohler.npm-intellisense
cursor --disable-extension christian-kohler.path-intellisense
cursor --disable-extension formulahendry.auto-close-tag
cursor --disable-extension formulahendry.code-runner
cursor --disable-extension ms-vscode.live-server
```

## Service Configuration

### GitHub Setup
```bash
# Authenticate with GitHub
gh auth login

# Verify authentication
gh auth status

# Clone repository (if not already done)
gh repo clone your-org/alignsynch-dev
```

### Vercel Setup
```bash
# Install Vercel CLI
npm install -g @vercel/cli

# Login to Vercel
vercel login

# Link project to Vercel
vercel link

# Deploy to preview
vercel
```

### Clerk Authentication Setup
1. **Create Clerk Account**: Visit [clerk.com](https://clerk.com)
2. **Create Application**: Set up new application
3. **Get API Keys**: Copy publishable and secret keys
4. **Configure Environment**: Add keys to `.env.local`

```bash
# Add Clerk keys to environment
echo "CLERK_PUBLISHABLE_KEY=pk_test_your-key" >> .env.local
echo "CLERK_SECRET_KEY=sk_test_your-key" >> .env.local
```

### Neon Database Setup
1. **Create Neon Account**: Visit [neon.tech](https://neon.tech)
2. **Create Database**: Set up new PostgreSQL database
3. **Get Connection String**: Copy database URL
4. **Configure Environment**: Add URL to `.env.local`

```bash
# Add database URL to environment
echo "DATABASE_URL=postgresql://user:password@host:5432/database" >> .env.local
```

## Development Workflow

### Start Development Server
```bash
# Start development server with Turbopack
pnpm dev

# Alternative: Start with live reload
pnpm dev:live

# Alternative: Start and auto-open browser
pnpm dev:open

# Server will be available at http://localhost:3000
```

### Run Tests
```bash
# Run unit tests
pnpm test

# Run E2E tests
pnpm test:e2e

# Run tests in watch mode
pnpm test:watch
```

### Code Quality
```bash
# Format code with Ultracite
pnpm dlx ultracite fix

# Check formatting
pnpm dlx ultracite check

# Lint with Biome
pnpm dlx @biomejs/biome check .

# Format with Biome
pnpm dlx @biomejs/biome format --write .

# Type check
pnpm tsc --noEmit
```

### Database Operations
```bash
# Generate new migration
pnpm drizzle-kit generate

# Push schema changes
pnpm drizzle-kit push

# View database
pnpm drizzle-kit studio
```

## Environment Verification

### Health Check Script
```bash
# Run environment health check
pnpm health-check

# Expected output:
# ✅ Node.js: v18.17.0
# ✅ pnpm: 8.6.10
# ✅ Git: 2.41.0
# ✅ VS Code: 1.80.0
# ✅ Dependencies: All installed
# ✅ Environment: All variables set
# ✅ Database: Connected
# ✅ Extensions: All active
```

### Manual Verification
```bash
# Check Node.js version
node --version    # Should be 24.7.0+

# Check pnpm version
pnpm --version    # Should be 10.15.1+

# Check Git version
git --version

# Check Cursor version
cursor --version  # Should be 1.6.26+

# Check installed extensions
cursor --list-extensions --show-versions

# Check environment variables
echo $NODE_ENV
echo $DATABASE_URL
```

## Troubleshooting

### Common Issues

#### Node.js Version Issues
```bash
# Check Node.js version
node --version

# If version is incorrect, install correct version
# Use nvm (Node Version Manager)
nvm install 18
nvm use 18
```

#### pnpm Installation Issues
```bash
# If pnpm is not found
npm install -g pnpm

# If permission issues on macOS/Linux
sudo npm install -g pnpm

# If permission issues on Windows
# Run PowerShell as Administrator
npm install -g pnpm
```

#### Database Connection Issues
```bash
# Check database URL format
echo $DATABASE_URL

# Test database connection
pnpm drizzle-kit push

# If connection fails, verify:
# 1. Database URL is correct
# 2. Database server is running
# 3. Credentials are correct
# 4. Network connectivity
```

#### Cursor Extension Issues
```bash
# List installed extensions
cursor --list-extensions

# Install missing extensions
cursor --install-extension extension-id

# If extensions not loading:
# 1. Restart Cursor
# 2. Check extension compatibility
# 3. Update Cursor to latest version
```

#### Git Hooks Issues
```bash
# Check if hooks are installed
ls -la .git/hooks/

# Reinstall hooks
pnpm lefthook install

# If hooks not working:
# 1. Check lefthook.yml configuration
# 2. Verify pnpm scripts exist
# 3. Check file permissions
```

### Performance Issues

#### Slow Development Server
```bash
# Clear Next.js cache
rm -rf .next

# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Check for memory issues
ps aux | grep node
```

#### Slow Test Execution
```bash
# Run tests in parallel
pnpm test --run

# Run specific test files
pnpm test --testNamePattern="Quiz"

# Check Playwright browser installation
pnpm playwright install
```

## Advanced Configuration

### Custom VS Code Settings
```json
// .vscode/settings.json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### Custom Git Configuration
```bash
# Set up Git user
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# Set up Git aliases
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
```

### Custom Shell Configuration
```bash
# Add to ~/.bashrc or ~/.zshrc
export PATH="$PATH:./node_modules/.bin"
export NODE_ENV=development

# Aliases for common commands
alias pdev="pnpm dev"
alias pbuild="pnpm build"
alias ptest="pnpm test"
alias plint="pnpm lint"
```

## Team Onboarding

### New Developer Checklist
- [ ] Clone repository
- [ ] Install Node.js 24.7.0+ and pnpm 10.15.1+
- [ ] Install project dependencies
- [ ] Setup environment variables
- [ ] Configure database
- [ ] Install Cursor IDE
- [ ] Install VSCode MCP Bridge
- [ ] Install essential extensions
- [ ] Disable conflicting extensions
- [ ] Setup Git hooks
- [ ] Install Playwright browsers
- [ ] Run health check
- [ ] Start development server
- [ ] Run tests
- [ ] Create first commit

### Environment Documentation
```bash
# Generate environment documentation
pnpm docs:env

# This creates:
# - Environment variable reference
# - Setup instructions
# - Troubleshooting guide
# - Team onboarding checklist
```

---

*This setup guide ensures a consistent development environment across the team.*
