# Getting Started Guide

This guide will help you set up the complete AlignSynch agentic development environment from scratch.

## 🎯 Overview

AlignSynch is a Next.js 15 quiz platform built with modern tools and optimized for AI collaboration. This guide covers:

- Environment setup and prerequisites
- Tool installation and configuration
- MCP server setup
- Extension configuration
- First-time project setup

## 📋 Prerequisites

### System Requirements
- **Windows 10/11** (current setup)
- **Node.js 24.7.0+** - [Download](https://nodejs.org/)
- **pnpm 10.15.1+** - [Installation Guide](https://pnpm.io/installation)
- **Git** - [Download](https://git-scm.com/)
- **Cursor IDE** - [Download](https://cursor.sh/)

### Required Accounts
- **GitHub** - For repository access
- **Neon** - For PostgreSQL database
- **PostHog** - For analytics
- **Vercel** - For deployment (optional)

## 🚀 Step 1: Environment Setup

### 1.1 Install Node.js and pnpm

```bash
# Install Node.js (use LTS version)
# Download from https://nodejs.org/

# Install pnpm globally
npm install -g pnpm

# Verify installations
node --version  # Should be 24.7.0+
pnpm --version  # Should be 10.15.1+
```

### 1.2 Install Cursor IDE

```bash
# Download from https://cursor.sh/
# Or install via winget
winget install Anysphere.Cursor
```

### 1.3 Clone Repository

```bash
git clone https://github.com/your-org/alignsynch-dev.git
cd alignsynch-dev
```

## 🛠 Step 2: Project Setup

### 2.1 Install Dependencies

```bash
# Install all dependencies
pnpm install

# Verify installation
pnpm list
```

### 2.2 Environment Variables

Create `.env.local` file:

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

### 2.3 Database Setup

```bash
# Generate database migrations
pnpm drizzle:generate:dev

# Run migrations
pnpm drizzle:migrate:dev
```

## 🔧 Step 3: Cursor IDE Configuration

### 3.1 Install VSCode MCP Bridge

1. Open Cursor IDE
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "VSCode MCP Bridge"
4. Install the extension by YuTengjing
5. Reload Cursor

### 3.2 Configure Extensions

The project includes `.vscode/settings.json` with optimized settings for agentic development.

### 3.3 Disable Conflicting Extensions

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

## 🤖 Step 4: MCP Server Configuration

### 4.1 MCP Configuration

The project includes `mcp.json` with configured MCP servers for AI collaboration.

### 4.2 Test MCP Connections

After installing VSCode MCP Bridge:

1. Restart Cursor
2. Open Command Palette (Ctrl+Shift+P)
3. Search for "MCP" commands
4. Verify MCP servers are connected

## 🎨 Step 5: Development Workflow

### 5.1 Start Development Server

```bash
# Start development server with Turbopack
pnpm dev

# Alternative: Start with live reload
pnpm dev:live
```

### 5.2 Code Quality

```bash
# Format code with Ultracite
pnpm dlx ultracite fix

# Lint with Biome
pnpm dlx @biomejs/biome check .

# Type check
pnpm tsc --noEmit
```

### 5.3 Testing

```bash
# Run Playwright tests
pnpm test

# Run tests with UI
pnpm test:ui

# Run tests in headed mode
pnpm test:headed
```

## 🔍 Step 6: Verification

### 6.1 Environment Check

```bash
# Check Node.js version
node --version

# Check pnpm version
pnpm --version

# Check Cursor version
cursor --version

# Check installed extensions
cursor --list-extensions --show-versions
```

### 6.2 Project Health

```bash
# Check dependencies
pnpm list

# Check for vulnerabilities
pnpm audit

# Check build
pnpm build
```

### 6.3 MCP Health

1. Open Cursor
2. Check MCP server status in Command Palette
3. Verify VSCode MCP Bridge is active
4. Test MCP tool functionality

## 🚨 Troubleshooting

### Common Issues

#### MCP Servers Not Connecting
- Ensure VSCode MCP Bridge is installed and active
- Restart Cursor after installation
- Check MCP configuration in `mcp.json`

#### Extension Conflicts
- Disable conflicting extensions using CLI commands
- Check `.vscode/settings.json` for proper configuration
- Restart Cursor after changes

#### Database Connection Issues
- Verify `DATABASE_URL` in `.env.local`
- Check Neon database status
- Run database migrations

#### Build Issues
- Clear `.next` directory: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && pnpm install`
- Check TypeScript errors: `pnpm tsc --noEmit`

### Getting Help

1. **Check Documentation** - Review relevant docs in `/docs/dev`
2. **Check Issues** - Look for similar issues in repository
3. **Environment Check** - Run verification commands
4. **MCP Status** - Verify MCP server connections

## ✅ Success Criteria

Your environment is properly set up when:

- ✅ Cursor IDE opens without errors
- ✅ MCP servers connect successfully
- ✅ Development server starts (`pnpm dev`)
- ✅ Code formatting works (`pnpm dlx ultracite fix`)
- ✅ Tests run successfully (`pnpm test`)
- ✅ Build completes (`pnpm build`)
- ✅ Database connections work
- ✅ All required extensions are active

## 🎉 Next Steps

Once your environment is set up:

1. **Read the [Tool Checklist](./tool-checklist.md)** for detailed configuration
2. **Explore [MCP Servers](./mcp-servers.md)** for advanced MCP usage
3. **Check [Environment Setup](./environment-setup.md)** for optimization
4. **Review [Extensions](./extensions.md)** for extension management
5. **Start developing** with the agentic workflow!

---

**Need Help?** Check the [troubleshooting section](#-troubleshooting) or review the [documentation index](./README.md).
