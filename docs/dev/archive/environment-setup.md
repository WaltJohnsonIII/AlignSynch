# Environment Setup Guide

This guide covers the complete configuration of your AlignSynch agentic development environment, including optimization for AI collaboration.

## 🎯 Overview

The AlignSynch environment is optimized for:
- **Agentic Development** - AI-first workflow
- **MCP Integration** - Model Context Protocol for tool integration
- **Code Quality** - Automated formatting and linting
- **Performance** - Fast development and builds
- **Collaboration** - Human-AI partnership

## 🖥 System Configuration

### Windows Environment
- **OS**: Windows 10/11
- **Shell**: PowerShell 7+
- **Terminal**: Windows Terminal (recommended)

### Node.js Environment
```bash
# Node.js 24.7.0+ (LTS)
node --version

# pnpm 10.15.1+ (package manager)
pnpm --version

# npm (comes with Node.js)
npm --version
```

### Git Configuration
```bash
# Configure Git
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
git config --global init.defaultBranch main
git config --global pull.rebase false
```

## 🔧 Cursor IDE Configuration

### Installation
```bash
# Install via winget
winget install Anysphere.Cursor

# Or download from https://cursor.sh/
```

### Workspace Settings
The project includes `.vscode/settings.json` with optimized settings for agentic development.

### Extension Management
```bash
# Disable human-focused extensions
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

## 🤖 MCP Server Configuration

### MCP Configuration File
The project includes `mcp.json` with configured MCP servers for AI collaboration.

### MCP Server Installation
```bash
# Install VSCode MCP Bridge extension
# 1. Open Cursor
# 2. Go to Extensions (Ctrl+Shift+X)
# 3. Search for "VSCode MCP Bridge"
# 4. Install by YuTengjing
# 5. Reload Cursor
```

### MCP Server Testing
```bash
# Test MCP connections
# 1. Open Cursor Command Palette (Ctrl+Shift+P)
# 2. Search for "MCP" commands
# 3. Verify servers are connected
```

## 🎨 Project Configuration

### Package Manager
```bash
# Use pnpm for package management
pnpm install
pnpm add <package>
pnpm remove <package>
pnpm update
```

### Environment Variables
Create `.env.local`:

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

### Database Setup
```bash
# Generate migrations
pnpm drizzle:generate:dev

# Apply migrations
pnpm drizzle:migrate:dev

# Check database connection
pnpm drizzle:studio
```

## 🚀 Development Workflow

### Scripts
```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm dev:live         # Start with live reload
pnpm dev:open         # Start and auto-open browser

# Building
pnpm build            # Production build
pnpm build:analyze    # Build with bundle analysis
pnpm start            # Start production server

# Code Quality
pnpm dlx ultracite fix    # Format code
pnpm dlx ultracite check  # Check formatting
pnpm lint             # Run Next.js linter

# Testing
pnpm test             # Run Playwright tests
pnpm test:ui          # Run tests with UI
pnpm test:headed      # Run tests in headed mode
pnpm test:debug       # Debug tests
pnpm test:report      # Show test report
```

### Git Hooks
```bash
# Pre-commit hooks (configured in lefthook.yml)
# - Code formatting with Ultracite
# - Linting with Biome
# - Type checking with TypeScript
```

## 🔍 Code Quality Tools

### Biome (Linting & Formatting)
```bash
# Check code
pnpm dlx @biomejs/biome check .

# Format code
pnpm dlx @biomejs/biome format --write .

# Lint code
pnpm dlx @biomejs/biome lint .
```

### Ultracite (AI-Ready Formatting)
```bash
# Fix code issues
pnpm dlx ultracite fix

# Check for issues
pnpm dlx ultracite check
```

### TypeScript
```bash
# Type check
pnpm tsc --noEmit

# Build types
pnpm tsc --build
```

## 🧪 Testing Configuration

### Playwright
```bash
# Install browsers
pnpm test:install

# Run tests
pnpm test

# Run with UI
pnpm test:ui

# Run in headed mode
pnpm test:headed

# Debug tests
pnpm test:debug
```

### Checkly (Monitoring)
```bash
# Check configuration
cat checkly.config.ts

# Run checks
npx checkly test
```

## 📊 Monitoring & Analytics

### PostHog
```bash
# Configure in .env.local
POSTHOG_KEY="your-posthog-key"
POSTHOG_HOST="https://app.posthog.com"
```

### Bundle Analysis
```bash
# Analyze bundle
ANALYZE=true pnpm build
```

## 🔧 Performance Optimization

### Next.js Configuration
```javascript
// next.config.mjs
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  images: {
    domains: ['example.com'],
  },
}
```

### Turbopack
```bash
# Use Turbopack for faster development
pnpm dev  # Uses --turbo by default
```

## 🚨 Troubleshooting

### Common Issues

#### MCP Servers Not Connecting
```bash
# Check VSCode MCP Bridge installation
# Restart Cursor
# Verify mcp.json configuration
# Check environment variables
```

#### Extension Conflicts
```bash
# Disable conflicting extensions
cursor --disable-extension <extension-id>

# Check .vscode/settings.json
# Restart Cursor
```

#### Build Issues
```bash
# Clear cache
rm -rf .next
rm -rf node_modules
pnpm install

# Check TypeScript
pnpm tsc --noEmit

# Check environment variables
```

#### Database Issues
```bash
# Check DATABASE_URL format
# Verify Neon database status
# Run migrations
pnpm drizzle:migrate:dev
```

### Health Checks
```bash
# Environment check
node --version
pnpm --version
cursor --version

# Project check
pnpm list
pnpm audit
pnpm build

# MCP check
# Use Cursor Command Palette: "MCP: List Servers"
```

## ✅ Environment Verification

Your environment is properly configured when:

- [ ] **Node.js 24.7.0+** installed and working
- [ ] **pnpm 10.15.1+** installed and working
- [ ] **Cursor IDE** opens without errors
- [ ] **VSCode MCP Bridge** installed and active
- [ ] **MCP servers** connected and responding
- [ ] **Required extensions** installed and active
- [ ] **Conflicting extensions** disabled
- [ ] **Environment variables** configured
- [ ] **Database** connected and migrated
- [ ] **Development server** starts successfully
- [ ] **Build process** completes without errors
- [ ] **Code quality tools** working correctly
- [ ] **Testing** runs successfully
- [ ] **Git hooks** functioning properly

## 📚 Next Steps

After completing environment setup:

1. **Read [Getting Started Guide](./getting-started.md)** for project setup
2. **Check [Tool Checklist](./tool-checklist.md)** for verification
3. **Explore [MCP Servers](./mcp-servers.md)** for advanced MCP usage
4. **Review [Extensions](./extensions.md)** for extension management
5. **Start developing** with the agentic workflow!

---

**Need Help?** Check the [troubleshooting section](#-troubleshooting) or review the [documentation index](./README.md).
