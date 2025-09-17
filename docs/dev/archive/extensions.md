# Extensions Configuration Guide

This guide covers the Cursor/VS Code extensions configured for the AlignSynch agentic development environment.

## 🎯 Overview

The AlignSynch environment is optimized for **agentic development** with AI collaboration. Extensions are carefully selected to support AI workflows while avoiding conflicts with automated tools.

## 🔧 Extension Management

### Configuration File
Extensions are configured in `.vscode/settings.json`:

```json
{
  "extensions.recommendations": [
    "YuTengjing.vscode-mcp-bridge",
    "eamodio.gitlens",
    "rangav.vscode-thunder-client",
    "usernamehw.errorlens",
    "ms-vscode.vscode-json",
    "bradlc.vscode-tailwindcss"
  ],
  "extensions.unwantedRecommendations": [
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode",
    "formulahendry.auto-rename-tag",
    "coenraads.bracket-pair-colorizer",
    "steoates.autoimport",
    "csstools.postcss",
    "ms-vscode.vscode-css-modules"
  ]
}
```

### Extension States
- **✅ ENABLED** - Required for agentic development
- **❌ DISABLED** - Conflicts with AI tools or redundant
- **⚠️ CONDITIONAL** - Enable only if needed

## ✅ Required Extensions

### 1. VSCode MCP Bridge
**ID**: `YuTengjing.vscode-mcp-bridge`  
**Version**: 4.1.0  
**Purpose**: Essential for MCP server integration

**Features**:
- MCP server communication
- AI tool integration
- Protocol bridge functionality

**Installation**:
```bash
# Install via Cursor Extensions
# Search for "VSCode MCP Bridge"
# Install by YuTengjing
```

**Configuration**: Automatically configured via `mcp.json`

### 2. GitLens
**ID**: `eamodio.gitlens`  
**Version**: Latest  
**Purpose**: Enhanced Git visualization and collaboration

**Features**:
- Git blame annotations
- Commit history
- Branch visualization
- Code authorship tracking

**Usage**: Provides rich Git information for AI context

### 3. Thunder Client
**ID**: `rangav.vscode-thunder-client`  
**Version**: Latest  
**Purpose**: API testing and development

**Features**:
- REST API testing
- Request/response visualization
- Collection management
- Environment variables

**Usage**: Test APIs and endpoints during development

### 4. Error Lens
**ID**: `usernamehw.errorlens`  
**Version**: 3.26.0  
**Purpose**: Inline error and warning display

**Features**:
- Inline error messages
- Warning highlighting
- Diagnostic information
- Error navigation

**Usage**: Visual error feedback for AI and human developers

### 5. JSON
**ID**: `ms-vscode.vscode-json`  
**Version**: Latest  
**Purpose**: JSON file support and validation

**Features**:
- JSON syntax highlighting
- Validation and formatting
- Schema support
- IntelliSense

**Usage**: Essential for configuration files and data

### 6. Tailwind CSS IntelliSense
**ID**: `bradlc.vscode-tailwindcss`  
**Version**: 0.14.26  
**Purpose**: Tailwind CSS development support

**Features**:
- Class name completion
- Hover information
- Color previews
- Validation

**Usage**: Enhanced Tailwind CSS development experience

## ❌ Disabled Extensions

### Human-Focused Extensions (Disabled)
These extensions are disabled because they conflict with AI tools or are redundant:

#### ESLint
**ID**: `ms-vscode.vscode-eslint`  
**Reason**: Using Biome for linting instead

#### Prettier
**ID**: `esbenp.prettier-vscode`  
**Reason**: Using Ultracite for formatting instead

#### Auto Rename Tag
**ID**: `formulahendry.auto-rename-tag`  
**Reason**: AI handles tag renaming automatically

#### Bracket Pair Colorizer
**ID**: `coenraads.bracket-pair-colorizer`  
**Reason**: Built into Cursor/VS Code

#### Auto Import
**ID**: `steoates.autoimport`  
**Reason**: Next.js handles imports automatically

#### PostCSS
**ID**: `csstools.postcss`  
**Reason**: Next.js handles PostCSS automatically

#### CSS Modules
**ID**: `ms-vscode.vscode-css-modules`  
**Reason**: Not using CSS modules

### Disable Commands
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

## ⚠️ Conditional Extensions

### Extensions to Enable Only If Needed

#### TypeScript
**ID**: `ms-vscode.vscode-typescript-next`  
**Status**: Keep enabled for TypeScript support

#### Python
**ID**: `ms-python.python`  
**Status**: Enable only if working with Python

#### Docker
**ID**: `ms-azuretools.vscode-docker`  
**Status**: Enable only if using Docker

#### Kubernetes
**ID**: `ms-kubernetes-tools.vscode-kubernetes-tools`  
**Status**: Enable only if using Kubernetes

## 🔧 Extension Configuration

### Settings for Enabled Extensions

#### Tailwind CSS IntelliSense
```json
{
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ]
}
```

#### Error Lens
```json
{
  "errorLens.enabledDiagnosticLevels": ["error", "warning", "info"],
  "errorLens.messageEnabled": true,
  "errorLens.statusBarMessageEnabled": true
}
```

#### GitLens
```json
{
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true,
  "gitlens.hovers.enabled": true
}
```

### Settings for Disabled Extensions
```json
{
  "eslint.enable": false,
  "prettier.enable": false,
  "typescript.preferences.includePackageJsonAutoImports": "off",
  "typescript.suggest.autoImports": false,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll": "never"
  }
}
```

## 🚀 Extension Management Commands

### List Extensions
```bash
# List all installed extensions
cursor --list-extensions

# List with versions
cursor --list-extensions --show-versions

# List by category
cursor --list-extensions --category "Programming Languages"
```

### Install Extensions
```bash
# Install extension
cursor --install-extension <extension-id>

# Install specific version
cursor --install-extension <extension-id>@<version>

# Install pre-release
cursor --install-extension <extension-id> --pre-release
```

### Uninstall Extensions
```bash
# Uninstall extension
cursor --uninstall-extension <extension-id>
```

### Update Extensions
```bash
# Update all extensions
cursor --update-extensions

# Update specific extension
cursor --install-extension <extension-id> --force
```

## 🧪 Extension Testing

### Test Required Extensions
```bash
# Test VSCode MCP Bridge
# 1. Open Command Palette (Ctrl+Shift+P)
# 2. Search for "MCP" commands
# 3. Verify MCP servers are listed

# Test GitLens
# 1. Open any file
# 2. Check for Git blame annotations
# 3. Verify Git information is displayed

# Test Thunder Client
# 1. Open Thunder Client panel
# 2. Create a test request
# 3. Verify API testing works

# Test Error Lens
# 1. Create a file with errors
# 2. Check for inline error messages
# 3. Verify error highlighting

# Test Tailwind CSS IntelliSense
# 1. Open a file with Tailwind classes
# 2. Check for class name completion
# 3. Verify hover information
```

### Test Disabled Extensions
```bash
# Verify extensions are disabled
cursor --list-extensions | grep -E "(eslint|prettier|auto-rename-tag)"

# Should return no results for disabled extensions
```

## 🚨 Troubleshooting

### Common Issues

#### Extensions Not Loading
```bash
# Check extension status
cursor --list-extensions

# Restart Cursor
# Check extension logs in Output panel
```

#### Extension Conflicts
```bash
# Disable conflicting extensions
cursor --disable-extension <extension-id>

# Check .vscode/settings.json
# Restart Cursor
```

#### Performance Issues
```bash
# Check extension performance
# Disable unnecessary extensions
# Monitor memory usage
```

### Debug Commands
```bash
# Check extension status
cursor --list-extensions --show-versions

# Check extension settings
cat .vscode/settings.json

# Check extension logs
# Go to Output panel in Cursor
# Select extension from dropdown
```

## 📚 Best Practices

### Extension Management
1. **Keep extensions minimal** - Only install what's needed
2. **Regular updates** - Keep extensions updated
3. **Monitor performance** - Watch for performance impacts
4. **Test after changes** - Verify functionality after updates

### Agentic Development
1. **Prioritize AI tools** - Extensions that support AI workflows
2. **Avoid conflicts** - Disable extensions that conflict with AI tools
3. **Optimize for automation** - Choose extensions that support automation
4. **Monitor resource usage** - Ensure extensions don't impact performance

### Security Considerations
1. **Trusted sources** - Only install from trusted publishers
2. **Regular audits** - Review installed extensions regularly
3. **Update management** - Keep extensions updated for security
4. **Permission review** - Review extension permissions

## 🔄 Maintenance

### Regular Tasks
```bash
# Update extensions monthly
cursor --update-extensions

# Review installed extensions
cursor --list-extensions

# Check for conflicts
# Review .vscode/settings.json
```

### Extension Audits
```bash
# List all extensions
cursor --list-extensions --show-versions

# Check for unused extensions
# Review extension usage
# Remove unnecessary extensions
```

## ✅ Verification Checklist

Your extensions are properly configured when:

- [ ] **VSCode MCP Bridge** installed and active
- [ ] **GitLens** providing Git information
- [ ] **Thunder Client** working for API testing
- [ ] **Error Lens** showing inline errors
- [ ] **JSON** support working
- [ ] **Tailwind CSS IntelliSense** providing completions
- [ ] **ESLint** disabled (using Biome)
- [ ] **Prettier** disabled (using Ultracite)
- [ ] **Auto Rename Tag** disabled
- [ ] **Bracket Pair Colorizer** disabled
- [ ] **Auto Import** disabled
- [ ] **PostCSS** disabled
- [ ] **CSS Modules** disabled
- [ ] **No extension conflicts** detected
- [ ] **Performance** acceptable
- [ ] **All required extensions** functioning

## 📚 Next Steps

After configuring extensions:

1. **Read [Getting Started Guide](./getting-started.md)** for project setup
2. **Check [Tool Checklist](./tool-checklist.md)** for verification
3. **Review [Environment Setup](./environment-setup.md)** for optimization
4. **Explore [MCP Servers](./mcp-servers.md)** for MCP integration
5. **Start developing** with optimized extensions!

---

**Need Help?** Check the [troubleshooting section](#-troubleshooting) or review the [documentation index](./README.md).
