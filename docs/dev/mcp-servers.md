# MCP Servers Configuration

This guide covers the Model Context Protocol (MCP) servers configured for the AlignSynch agentic development environment.

## 🎯 Overview

MCP (Model Context Protocol) enables AI assistants to interact with external tools and services. The AlignSynch environment includes several MCP servers for enhanced AI collaboration.

## 🔧 MCP Configuration

### Configuration File
The MCP servers are configured in `mcp.json`:

```json
{
  "mcpServers": {
    "filesystem": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "."],
      "env": {
        "ALLOWED_DIRECTORIES": "./alignsynch-dev"
      }
    },
    "git": {
      "type": "stdio", 
      "command": "npx",
      "args": ["-y", "@playwright/mcp"],
      "env": {
        "GIT_REPO_PATH": "."
      }
    },
    "vscode": {
      "type": "stdio",
      "command": "npx", 
      "args": ["-y", "@vscode-mcp/vscode-mcp-server"],
      "env": {
        "VSCODE_WORKSPACE": "./alignsynch-dev"
      }
    },
    "gemini": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "gemini-mcp-tool"],
      "env": {
        "GEMINI_API_KEY": "$GEMINI_API_KEY"
      }
    },
    "diagnostics": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "newbpydev.mcp-diagnostics-extension"],
      "env": {}
    },
    "language-server": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@alexwohletz/language-server-mcp"],
      "env": {}
    },
    "codex-keeper": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@aindreyway/mcp-codex-keeper@latest"],
      "env": {
        "npm_config_cache_max": "1024000000",
        "NODE_OPTIONS": "--max-old-space-size=256"
      }
    }
  }
}
```

## 🛠 MCP Servers

### 1. Filesystem MCP
**Purpose**: File system operations and management

**Capabilities**:
- Read and write files
- Directory operations
- File system navigation
- Project file management

**Usage**: AI can read, write, and manage project files within the allowed directory.

### 2. Git MCP
**Purpose**: Version control operations

**Capabilities**:
- Git operations (commit, push, pull)
- Branch management
- Repository status
- Version control workflow

**Usage**: AI can perform Git operations and manage version control.

### 3. VSCode MCP
**Purpose**: Editor integration and operations

**Capabilities**:
- Editor operations
- Extension management
- Workspace configuration
- Cursor/VS Code integration

**Usage**: AI can interact with the editor, manage extensions, and configure the workspace.

### 4. Gemini MCP
**Purpose**: Google Gemini AI integration

**Capabilities**:
- AI-powered code generation
- Natural language processing
- Code analysis and suggestions
- Multi-modal AI capabilities

**Usage**: AI can leverage Gemini for enhanced code generation and analysis.

### 5. Diagnostics MCP
**Purpose**: Code diagnostics and error checking

**Capabilities**:
- Code error detection
- Linting and formatting
- Type checking
- Code quality analysis

**Usage**: AI can identify and fix code issues automatically.

### 6. Language Server MCP
**Purpose**: Advanced code analysis and language features

**Capabilities**:
- Hover information
- Code completion
- Diagnostic information
- Language-specific features

**Usage**: AI can provide advanced code analysis and language-specific assistance.

### 7. MCP Codex Keeper
**Purpose**: Documentation and knowledge management

**Capabilities**:
- Documentation management
- Knowledge base access
- Best practices retrieval
- Development guidance

**Usage**: AI can access and manage documentation, best practices, and development knowledge.

## 🔌 VSCode MCP Bridge

### Installation
1. Open Cursor IDE
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "VSCode MCP Bridge"
4. Install the extension by YuTengjing
5. Reload Cursor

### Configuration
The VSCode MCP Bridge enables MCP servers to communicate with Cursor/VS Code. It's essential for MCP functionality.

### Testing Connection
```bash
# After installation, test MCP connections:
# 1. Open Cursor Command Palette (Ctrl+Shift+P)
# 2. Search for "MCP" commands
# 3. Verify servers are connected
```

## 🚀 MCP Server Management

### Starting MCP Servers
MCP servers start automatically when Cursor opens and the VSCode MCP Bridge is active.

### Checking Server Status
```bash
# Use Cursor Command Palette
# Search for "MCP: List Servers"
# Verify all servers are running
```

### Server Logs
```bash
# Check MCP server logs in Cursor
# Go to Output panel
# Select "VSCode MCP Bridge" from dropdown
```

## 🔧 Environment Variables

### Required Variables
```bash
# Gemini API Key (for Gemini MCP)
GEMINI_API_KEY="your-gemini-api-key"

# Database URL (for database operations)
DATABASE_URL="postgresql://username:password@host:port/database"

# Authentication Secret (for auth operations)
BETTER_AUTH_SECRET="your-secret-key"
```

### Optional Variables
```bash
# PostHog (for analytics)
POSTHOG_KEY="your-posthog-key"
POSTHOG_HOST="https://app.posthog.com"

# Vercel (for deployment)
VERCEL_URL="your-vercel-url"
```

## 🧪 Testing MCP Servers

### Basic Testing
```bash
# Test filesystem operations
# AI should be able to read/write files

# Test Git operations
# AI should be able to perform Git commands

# Test editor operations
# AI should be able to interact with Cursor
```

### Advanced Testing
```bash
# Test AI integration
# AI should be able to use Gemini for code generation

# Test diagnostics
# AI should be able to identify and fix code issues

# Test language features
# AI should provide hover info and completions
```

## 🚨 Troubleshooting

### Common Issues

#### MCP Servers Not Starting
```bash
# Check VSCode MCP Bridge installation
# Verify mcp.json configuration
# Check environment variables
# Restart Cursor
```

#### Server Connection Errors
```bash
# Check network connectivity
# Verify API keys
# Check server logs
# Restart MCP servers
```

#### Permission Issues
```bash
# Check file permissions
# Verify directory access
# Check environment variables
# Restart with elevated permissions
```

### Debug Commands
```bash
# Check MCP configuration
cat mcp.json

# Check environment variables
echo $GEMINI_API_KEY
echo $DATABASE_URL

# Check server status
# Use Cursor Command Palette: "MCP: List Servers"
```

## 📚 Best Practices

### MCP Server Usage
1. **Use appropriate servers** for specific tasks
2. **Check server status** before operations
3. **Monitor server logs** for issues
4. **Keep servers updated** to latest versions

### Security Considerations
1. **Limit directory access** in filesystem MCP
2. **Use environment variables** for sensitive data
3. **Monitor API usage** for external services
4. **Regular security updates** for MCP servers

### Performance Optimization
1. **Monitor memory usage** for large operations
2. **Use appropriate timeouts** for long-running tasks
3. **Cache frequently accessed data**
4. **Optimize server configurations**

## 🔄 Updates and Maintenance

### Updating MCP Servers
```bash
# Update MCP servers
npx -y @modelcontextprotocol/server-filesystem@latest
npx -y @vscode-mcp/vscode-mcp-server@latest
npx -y @alexwohletz/language-server-mcp@latest
npx -y @aindreyway/mcp-codex-keeper@latest
```

### Configuration Updates
```bash
# Update mcp.json with new server versions
# Test new configurations
# Update documentation
```

## ✅ Verification Checklist

Your MCP servers are properly configured when:

- [ ] **VSCode MCP Bridge** installed and active
- [ ] **All MCP servers** listed in Cursor
- [ ] **Filesystem operations** working
- [ ] **Git operations** working
- [ ] **Editor integration** working
- [ ] **AI services** responding
- [ ] **Diagnostics** functioning
- [ ] **Language features** working
- [ ] **Documentation access** working
- [ ] **Environment variables** configured
- [ ] **Server logs** showing no errors
- [ ] **Performance** acceptable

## 📚 Next Steps

After configuring MCP servers:

1. **Read [Getting Started Guide](./getting-started.md)** for project setup
2. **Check [Tool Checklist](./tool-checklist.md)** for verification
3. **Review [Environment Setup](./environment-setup.md)** for optimization
4. **Explore [Extensions](./extensions.md)** for extension management
5. **Start developing** with enhanced AI capabilities!

---

**Need Help?** Check the [troubleshooting section](#-troubleshooting) or review the [documentation index](./README.md).
