# Tool Installation & Configuration Checklist

This checklist ensures all tools are properly installed and configured for the AlignSynch agentic development environment.

## 📋 Prerequisites Checklist

### System Requirements
- [ ] **Windows 10/11** - Current operating system
- [ ] **Node.js 24.7.0+** - JavaScript runtime
- [ ] **pnpm 10.15.1+** - Package manager
- [ ] **Git** - Version control
- [ ] **Cursor IDE** - AI-powered editor

### Required Accounts
- [ ] **GitHub** - Repository access
- [ ] **Neon** - PostgreSQL database
- [ ] **PostHog** - Analytics platform
- [ ] **Vercel** - Deployment platform (optional)

## 🛠 Core Tools Installation

### Node.js & Package Manager
- [ ] **Node.js 24.7.0+** installed
  ```bash
  node --version  # Should show 24.7.0+
  ```
- [ ] **pnpm 10.15.1+** installed globally
  ```bash
  pnpm --version  # Should show 10.15.1+
  ```
- [ ] **npm** available (comes with Node.js)
  ```bash
  npm --version
  ```

### Cursor IDE
- [ ] **Cursor IDE** installed
  ```bash
  cursor --version  # Should show 1.6.26+
  ```
- [ ] **Cursor** opens without errors
- [ ] **Cursor** can access project files

### Git
- [ ] **Git** installed and configured
  ```bash
  git --version
  git config --global user.name "Your Name"
  git config --global user.email "your.email@example.com"
  ```

### System Search Tools
- [ ] **ripgrep (rg)** installed globally
  ```bash
  rg --version  # Should show 14.1.1+
  ```
- [ ] **ripgrep** available system-wide
  ```bash
  rg "test" --count  # Test search functionality
  ```

## 🔧 Project Setup Checklist

### Repository & Dependencies
- [ ] **Repository cloned** successfully
  ```bash
  git clone https://github.com/your-org/alignsynch-dev.git
  cd alignsynch-dev
  ```
- [ ] **Dependencies installed**
  ```bash
  pnpm install
  ```
- [ ] **No dependency conflicts**
  ```bash
  pnpm list
  ```

### Environment Variables
- [ ] **`.env.local`** file created
- [ ] **DATABASE_URL** configured
- [ ] **BETTER_AUTH_SECRET** set
- [ ] **GEMINI_API_KEY** configured
- [ ] **POSTHOG_KEY** and **POSTHOG_HOST** set
- [ ] **Environment variables** loaded correctly

### Database Setup
- [ ] **Neon database** created
- [ ] **Database connection** tested
- [ ] **Migrations generated**
  ```bash
  pnpm drizzle:generate:dev
  ```
- [ ] **Migrations applied**
  ```bash
  pnpm drizzle:migrate:dev
  ```

## 🎨 Cursor IDE Configuration

### VSCode MCP Bridge
- [ ] **VSCode MCP Bridge** extension installed
- [ ] **Extension activated** in Cursor
- [ ] **Cursor restarted** after installation
- [ ] **MCP connection** verified

### Required Extensions
- [ ] **GitLens** (eamodio.gitlens) - Git visualization
- [ ] **Thunder Client** (rangav.vscode-thunder-client) - API testing
- [ ] **Error Lens** (usernamehw.errorlens) - Error highlighting
- [ ] **JSON** (ms-vscode.vscode-json) - JSON support
- [ ] **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss) - Tailwind support

### Disabled Extensions
- [ ] **ESLint** (ms-vscode.vscode-eslint) - Disabled (using Biome)
- [ ] **Prettier** (esbenp.prettier-vscode) - Disabled (using Ultracite)
- [ ] **Auto Rename Tag** (formulahendry.auto-rename-tag) - Disabled
- [ ] **Bracket Pair Colorizer** (coenraads.bracket-pair-colorizer) - Disabled
- [ ] **Auto Import** (steoates.autoimport) - Disabled
- [ ] **PostCSS** (csstools.postcss) - Disabled
- [ ] **CSS Modules** (ms-vscode.vscode-css-modules) - Disabled

### Extension Commands
```bash
# Disable conflicting extensions
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
- [ ] **`mcp.json`** exists in project root
- [ ] **MCP servers** configured correctly
- [ ] **Environment variables** set for MCP servers

### Required MCP Servers
- [ ] **Filesystem MCP** - File operations
- [ ] **Git MCP** - Version control operations
- [ ] **VSCode MCP** - Editor integration
- [ ] **Gemini MCP** - AI integration
- [ ] **Diagnostics MCP** - Code diagnostics
- [ ] **Language Server MCP** - Code analysis
- [ ] **MCP Codex Keeper** - Documentation

### MCP Server Testing
- [ ] **MCP servers** start without errors
- [ ] **MCP tools** respond to commands
- [ ] **VSCode MCP Bridge** connects successfully
- [ ] **MCP health check** passes

## 🎯 Development Tools

### Code Quality Tools
- [ ] **Biome** (2.2.2) - Linting and formatting
- [ ] **Ultracite** (5.3.3) - AI-ready formatting
- [ ] **TypeScript** (5.9.2) - Type checking
- [ ] **ESLint** (disabled) - Using Biome instead

### Testing Tools
- [ ] **Playwright** - End-to-end testing
- [ ] **Jest** - Unit testing
- [ ] **Checkly** - Monitoring and testing

### Build Tools
- [ ] **Next.js 15.5.2** - React framework
- [ ] **Turbopack** - Fast development builds
- [ ] **PostCSS** - CSS processing
- [ ] **Tailwind CSS** - Utility-first CSS

## 🚀 Development Workflow

### Scripts Verification
- [ ] **Development server** starts
  ```bash
  pnpm dev
  ```
- [ ] **Build process** completes
  ```bash
  pnpm build
  ```
- [ ] **Linting** works
  ```bash
  pnpm dlx ultracite fix
  ```
- [ ] **Testing** runs
  ```bash
  pnpm test
  ```

### Git Hooks
- [ ] **Husky** installed and configured
- [ ] **Lefthook** configured
- [ ] **Pre-commit hooks** working
- [ ] **Lint-staged** configured

## 🔍 Verification Commands

### Environment Check
```bash
# Check versions
node --version
pnpm --version
cursor --version
rg --version

# Check extensions
cursor --list-extensions --show-versions

# Check dependencies
pnpm list

# Check build
pnpm build

# Test system search
rg "mcp" --type json --count
```

### MCP Health Check
```bash
# Check MCP configuration
cat mcp.json

# Test MCP servers (after VSCode MCP Bridge installation)
# Use Cursor Command Palette: "MCP: List Servers"
```

### Project Health
```bash
# Check for vulnerabilities
pnpm audit

# Check TypeScript
pnpm tsc --noEmit

# Check linting
pnpm dlx @biomejs/biome check .

# Check formatting
pnpm dlx ultracite check
```

## ✅ Success Criteria

Your environment is properly configured when:

- [ ] **All prerequisites** installed and verified
- [ ] **Project dependencies** installed without conflicts
- [ ] **Environment variables** configured correctly
- [ ] **Database** connected and migrated
- [ ] **Cursor IDE** opens without errors
- [ ] **Required extensions** installed and active
- [ ] **Conflicting extensions** disabled
- [ ] **MCP servers** connected and responding
- [ ] **Development server** starts successfully
- [ ] **Build process** completes without errors
- [ ] **Code quality tools** working correctly
- [ ] **Testing** runs successfully
- [ ] **Git hooks** functioning properly

## 🚨 Troubleshooting

### Common Issues

#### MCP Servers Not Connecting
- [ ] Verify VSCode MCP Bridge is installed
- [ ] Restart Cursor after installation
- [ ] Check MCP configuration in `mcp.json`
- [ ] Verify environment variables

#### Extension Conflicts
- [ ] Disable conflicting extensions
- [ ] Check `.vscode/settings.json`
- [ ] Restart Cursor after changes

#### Build Issues
- [ ] Clear `.next` directory
- [ ] Reinstall dependencies
- [ ] Check TypeScript errors
- [ ] Verify environment variables

#### Database Issues
- [ ] Check `DATABASE_URL` format
- [ ] Verify Neon database status
- [ ] Run database migrations
- [ ] Check connection permissions

## 📚 Next Steps

After completing this checklist:

1. **Read [Getting Started Guide](./getting-started.md)** for detailed setup
2. **Explore [MCP Servers](./mcp-servers.md)** for advanced configuration
3. **Check [Environment Setup](./environment-setup.md)** for optimization
4. **Review [Extensions](./extensions.md)** for extension management
5. **Start developing** with the agentic workflow!

---

**Need Help?** Check the [troubleshooting section](#-troubleshooting) or review the [documentation index](./README.md).
