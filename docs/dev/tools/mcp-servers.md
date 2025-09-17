# MCP Servers & Model Context Protocol

## Overview
Model Context Protocol (MCP) servers for AI-assisted development in AlignSynch. This comprehensive guide covers all MCP servers discovered across the AlignSynch legacy configuration repositories.

## 🎯 Core Development Stack MCP Servers

### Currently Installed & Active
| Server | Purpose | Status | Configuration |
|--------|---------|--------|---------------|
| **Filesystem MCP** | File system access and manipulation | ✅ Active | `mcp.json` |
| **Git MCP** | Version control operations | ✅ Active | `mcp.json` |
| **VSCode MCP** | Editor integration and diagnostics | ✅ Active | `mcp.json` |
| **Gemini MCP** | AI integration with Google Gemini | ✅ Active | `mcp.json` |
| **Diagnostics MCP** | Code diagnostics and error detection | ✅ Active | `mcp.json` |
| **Language Server MCP** | Code analysis and language server integration | ✅ Active | `mcp.json` |
| **MCP Codex Keeper** | Documentation and knowledge management | ✅ Active | `mcp.json` |

### Legacy Configuration MCP Servers
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **MCP Advisor** | MCP server recommendations and discovery | 🔄 Available | [xiaohui-wang/mcpadvisor](https://github.com/xiaohui-wang/mcpadvisor) |
| **WorkOS MCP Docs Server** | WorkOS authentication documentation | 🔄 Available | [workos/mcp-docs-server](https://github.com/workos/mcp-docs-server) |
| **Context7 MCP** | Enhanced context retrieval and documentation search | 🔄 Available | [upstash/context7-mcp](https://github.com/upstash/context7-mcp) |
| **Agentic Tools MCP** | Agentic development workflow tools | 🔄 Available | [pimzino/agentic-tools-mcp](https://github.com/pimzino/agentic-tools-mcp) |
| **Sequential Thinking MCP** | Sequential reasoning and problem-solving | 🔄 Available | [modelcontextprotocol/server-sequential-thinking](https://github.com/modelcontextprotocol/server-sequential-thinking) |
| **Payload MCP** | Payload CMS integration | 🔄 Available | [ngyngcphu/payload-mcp](https://github.com/ngyngcphu/payload-mcp) |

## MCP Configuration

### Main Configuration (mcp.json)
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

## 🔧 Specialized Development MCP Servers

### Database & ORM Integration
| Server | Purpose | Status | Alternative |
|--------|---------|--------|-------------|
| **Drizzle MCP** | Drizzle ORM integration | ❌ Not available | Custom integration needed |
| **Prisma MCP** | Prisma ORM integration | ❌ Not available | Custom integration needed |

### Testing & Quality Assurance
| Server | Purpose | Status | Note |
|--------|---------|--------|------|
| **Playwright MCP** | End-to-end testing automation | 🔄 Available | Currently configured as Git MCP |
| **Biome MCP** | Biome linting and formatting integration | ❌ Not available | Custom integration needed |

### Cloud & Deployment
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **Vercel MCP Adapter** | Vercel deployment integration | 🔄 Available | [vercel/mcp-adapter](https://github.com/vercel/mcp-adapter) |
| **Azure MCP** | Azure cloud services integration | 🔄 Available | [azure/mcp](https://github.com/azure/mcp) |

### Content Management
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **HyGraph CMS MCP** | HyGraph CMS integration | ❌ Not available | Custom integration with Management SDK |
| **Firecrawl MCP** | Web scraping and content extraction | 🔄 Available | [hello_sideguide/firecrawl-mcp](https://github.com/hello_sideguide/firecrawl-mcp) |

### AI & Machine Learning
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **LangChain MCP Adapters** | LangChain.js integration | 🔄 Available | [langchain/mcp-adapters](https://github.com/langchain/mcp-adapters) |
| **Magic AI Agent** | AI-driven UI component generation | 🔄 Available | [21st-dev/magic-mcp](https://github.com/21st-dev/magic-mcp) |

### Design & Development Tools
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **Figma Developer MCP** | Figma integration for design systems | 🔄 Available | [figma-developer-mcp](https://github.com/figma-developer-mcp) |
| **MCP Framework** | Framework for building MCP servers | 🔄 Available | [quantgeekdev/mcp-framework](https://github.com/quantgeekdev/mcp-framework) |

## 🎨 UI & Component Libraries

### ShadCN/UI Integration
| Server | Purpose | Status | Alternative |
|--------|---------|--------|-------------|
| **ShadCN MCP** | ShadCN/UI component management | ❌ Not available | Custom integration needed |

### Design Systems
| Server | Purpose | Status | Alternative |
|--------|---------|--------|-------------|
| **Component Library MCP** | Component library management | ❌ Not available | Custom integration needed |

## 🔍 Search & Discovery Tools

### Documentation & Context
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **DeepWiki MCP** | Advanced documentation search and indexing | ❌ Not available | Custom integration needed |
| **GitHub MCP Servers** | Various GitHub integrations | 🔄 Available | Multiple repositories |

### Context Search
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **Claude Context MCP** | Context-aware search and retrieval | 🔄 Available | [zilliztech/claude-context](https://github.com/zilliztech/claude-context) |
| **Nia Context MCP** | Advanced context management | 🔄 Available | [trynia.ai](https://trynia.ai) |

## 🛠 Development Workflow Tools

### Project Management
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **GitHub Project Manager MCP** | GitHub project, milestone, and sprint management | 🔄 Available | [kunwarVivek/mcp-github-project-manager](https://github.com/kunwarVivek/mcp-github-project-manager) |
| **Nx MCP** | Nx monorepo integration | 🔄 Available | [nx-mcp](https://github.com/nx-mcp) |

### Monitoring & Analytics
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **PostHog MCP** | PostHog analytics integration | ❌ Not available | Custom integration needed |
| **Prometheus MCP** | Prometheus monitoring integration | 🔄 Available | [loglmhq/mcp-server-prometheus](https://github.com/loglmhq/mcp-server-prometheus) |

### Usage & Telemetry
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **CC Usage MCP** | Usage tracking and telemetry | 🔄 Available | [ryoppippi/ccusage](https://github.com/ryoppippi/ccusage) |

## 🐳 Docker & Containerization

### Container Management
| Server | Purpose | Status | GitHub |
|--------|---------|--------|---------|
| **Docker MCP** | Docker container management and orchestration | 🔄 Available | [QuantGeekDev/docker-mcp](https://github.com/QuantGeekDev/docker-mcp) |
| **MCP Proxy** | TypeScript SSE proxy for MCP servers | 🔄 Available | [punkpeye/mcp-proxy](https://github.com/punkpeye/mcp-proxy) |

## 📊 Installation Status Summary

| Category | Installed | Available | Not Available | Total |
|----------|-----------|-----------|---------------|-------|
| **Core Development** | 7 | 0 | 0 | 7 |
| **Legacy Configuration** | 0 | 6 | 0 | 6 |
| **Specialized Development** | 0 | 8 | 3 | 11 |
| **UI & Components** | 0 | 0 | 2 | 2 |
| **Search & Discovery** | 0 | 6 | 1 | 7 |
| **Workflow Tools** | 0 | 4 | 1 | 5 |
| **Docker & Containers** | 0 | 2 | 0 | 2 |
| **TOTAL** | **7** | **26** | **7** | **40** |

## 🎯 Recommended Installation Priority

### Phase 1: Essential Development Tools
1. **MCP Advisor** - For discovering additional servers
2. **Context7 MCP** - For enhanced documentation search
3. **Agentic Tools MCP** - For workflow automation
4. **Vercel MCP Adapter** - For deployment integration

### Phase 2: Specialized Integration
1. **Firecrawl MCP** - For web scraping and content extraction
2. **LangChain MCP Adapters** - For AI/ML integration
3. **GitHub Project Manager MCP** - For project management
4. **Docker MCP** - For container management

### Phase 3: Advanced Features
1. **Azure MCP** - For cloud services
2. **Figma Developer MCP** - For design system integration
3. **Prometheus MCP** - For monitoring
4. **Magic AI Agent** - For AI-driven development

## 🔧 Installation Commands

### Global Installation
```bash
# Core development tools
npm install -g @xiaohui-wang/mcpadvisor
npm install -g @upstash/context7-mcp
npm install -g @pimzino/agentic-tools-mcp
npm install -g @vercel/mcp-adapter

# Specialized tools
npm install -g firecrawl-mcp
npm install -g @langchain/mcp-adapters
npm install -g mcp-github-project-manager
npm install -g docker-mcp

# Advanced features
npm install -g @azure/mcp
npm install -g figma-developer-mcp
npm install -g mcp-server-prometheus
npm install -g 21st.dev/magic-mcp
```

### Project-Specific Installation
```bash
# For specific project needs
npm install --save-dev @workos/mcp-docs-server
npm install --save-dev @modelcontextprotocol/server-sequential-thinking
npm install --save-dev @ngyngcphu/payload-mcp
npm install --save-dev mcp-remote
```

## MCP Server Features

### Core Active Servers
- **Filesystem MCP**: File system operations and management
- **Git MCP**: Version control operations
- **VSCode MCP**: Editor integration and operations
- **Gemini MCP**: Google Gemini AI integration
- **Diagnostics MCP**: Code diagnostics and error checking
- **Language Server MCP**: Advanced code analysis and language features
- **MCP Codex Keeper**: Documentation and knowledge management

## Integration with Development Workflow

### Spec-Kit Integration
```bash
# Initialize MCP with spec-kit
npx spec-kit init --mcp

# Create specification with MCP context
npx spec-kit spec "Build quiz component" --mcp-context

# Generate plan with MCP assistance
npx spec-kit plan "Implement quiz system" --mcp-help
```

### AI-Assisted Development
```typescript
// MCP can provide context-aware code generation
// Example: Generate quiz component with proper types
interface QuizComponentProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
}

const QuizComponent: React.FC<QuizComponentProps> = ({ quiz, onComplete }) => {
  // MCP provides context about existing patterns
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  
  // MCP suggests proper error handling
  const handleAnswer = useCallback((answer: Answer) => {
    try {
      setAnswers(prev => [...prev, answer]);
      // MCP provides next question logic
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        const score = calculateScore(answers);
        onComplete(score);
      }
    } catch (error) {
      console.error('Error handling answer:', error);
    }
  }, [currentQuestion, quiz.questions.length, answers, onComplete]);
  
  return (
    <div className="quiz-container">
      {/* MCP provides accessible markup */}
      <h2 id="quiz-title">{quiz.title}</h2>
      <div role="main" aria-labelledby="quiz-title">
        {/* Question rendering logic */}
      </div>
    </div>
  );
};
```

## MCP Server Management

### Server Status
```bash
# Check MCP server status
npx mcp status

# List active servers
npx mcp list

# Restart specific server
npx mcp restart goose

# Stop all servers
npx mcp stop
```

### Server Logs
```bash
# View server logs
npx mcp logs

# View specific server logs
npx mcp logs goose

# Follow logs in real-time
npx mcp logs --follow
```

### Server Configuration
```bash
# Validate configuration
npx mcp validate

# Test server connection
npx mcp test

# Update server configuration
npx mcp update
```

## Context Management

### Workspace Context
```json
{
  "workspace": {
    "name": "alignsynch-dev",
    "type": "nextjs",
    "framework": "next.js-15",
    "language": "typescript",
    "styling": "tailwind-css",
    "components": "shadcn-ui",
    "database": "drizzle-orm",
    "testing": "playwright",
    "deployment": "vercel"
  }
}
```

### Project Context
```json
{
  "project": {
    "description": "Next.js quiz platform with comprehensive testing",
    "features": [
      "User authentication",
      "Quiz creation and management",
      "Real-time scoring",
      "Leaderboards",
      "Social features"
    ],
    "architecture": {
      "frontend": "Next.js 15 with App Router",
      "styling": "Tailwind CSS + shadcn/ui",
      "database": "Neon PostgreSQL + Drizzle ORM",
      "testing": "Playwright E2E + Jest unit tests",
      "deployment": "Vercel"
    }
  }
}
```

## Performance Optimization

### Server Performance
| Server | Memory Usage | CPU Usage | Optimization |
|--------|--------------|-----------|--------------|
| **Goose** | Low | Low | Minimal impact |
| **Continue** | Medium | Medium | Context-aware caching |
| **Gemini** | High | High | Batch requests, cache responses |

### Context Optimization
```json
{
  "optimization": {
    "cacheSize": "100MB",
    "maxContextLength": 200000,
    "compression": true,
    "lazyLoading": true,
    "contextPersistence": true
  }
}
```

## Troubleshooting

### Common Issues
| Issue | Solution |
|-------|----------|
| **Server not connecting** | Check configuration, restart server |
| **Context not loading** | Verify workspace path, check permissions |
| **Performance issues** | Reduce context size, enable caching |
| **Memory usage high** | Restart servers, clear cache |

### Debug Mode
```bash
# Enable debug mode
npx mcp debug

# Verbose logging
npx mcp logs --verbose

# Performance monitoring
npx mcp monitor
```

## Security Considerations

### API Key Management
```bash
# Store API keys securely
export GEMINI_API_KEY="your-api-key"
export OPENAI_API_KEY="your-api-key"

# Use environment variables
echo "GEMINI_API_KEY=your-api-key" >> .env.local
```

### Access Control
```json
{
  "security": {
    "allowedPaths": [
      "./app/**/*",
      "./components/**/*",
      "./lib/**/*"
    ],
    "blockedPaths": [
      "./.env*",
      "./node_modules/**/*",
      "./.git/**/*"
    ],
    "requireAuth": true,
    "rateLimit": {
      "requests": 100,
      "window": "1m"
    }
  }
}
```

---

*MCP servers provide AI-assisted development capabilities for the AlignSynch project.*