# VS Code Extensions

## Overview
Essential VS Code extensions for AlignSynch development workflow.

## Core Development Extensions

### AI & Code Assistance
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------| 
| **GitHub Copilot** | `github.copilot` | AI code completion | Code suggestions, chat assistance |
| **GitHub Copilot Chat** | `github.copilot-chat` | AI chat interface | Code explanations, debugging help |
| **Continue** | `continue.continue` | AI development assistant | Code generation, refactoring |
| **Gemini Code Assist** | `google.geminicodeassist` | Google AI integration | Code completion, explanations |

### MCP & AI Integration
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **VSCode MCP Bridge** | `YuTengjing.vscode-mcp-bridge` | MCP server integration | Essential for MCP functionality |
| **MCP Extension** | `block.vscode-mcp-extension` | Model Context Protocol | AI context management |
| **SpecStory** | `specstory.specstory` | Documentation automation | Conversation recording, spec generation |

### Framework & Language Support
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **TypeScript** | `ms-vscode.vscode-typescript-next` | TypeScript support | IntelliSense, error checking |
| **Tailwind CSS IntelliSense** | `bradlc.vscode-tailwindcss` | Tailwind CSS support | Autocomplete, hover previews |
| **Prisma** | `prisma.prisma` | Database ORM support | Schema highlighting, query completion |
| **Next.js** | `ms-vscode.vscode-json` | Next.js support | App Router, API routes |

## Quality & Testing Extensions

### Code Quality
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Biome** | `biomejs.biome` | Linting and formatting | Fast linting, code formatting |
| **Error Lens** | `usernamehw.errorlens` | Inline error display | Real-time error highlighting |
| **Pretty TypeScript Errors** | `yoavbls.pretty-ts-errors` | Enhanced error display | Readable TypeScript errors |

### Testing
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Playwright Test** | `ms-playwright.playwright` | E2E testing | Test runner, debugging |
| **Jest** | `orta.vscode-jest` | Unit testing | Test runner, coverage |
| **Test Explorer** | `hbenl.vscode-test-explorer` | Test management | Test tree, results display |

## Workflow & Productivity

### Git & Version Control
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Git Graph** | `mhutchie.git-graph` | Git visualization | Branch visualization, commit history |
| **GitLens** | `eamodio.gitlens` | Git enhancement | Blame annotations, commit details |
| **GitHub Pull Requests** | `github.vscode-pull-request-github` | PR management | PR creation, review, merge |

### Project Management
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Project Manager** | `alefragnani.project-manager` | Project organization | Project switching, favorites |
| **Worktree** | `worktree.worktree` | Git worktree management | Branch management, worktree switching |
| **Todo Tree** | `gruntfuggly.todo-tree` | Task tracking | TODO highlighting, task management |

## API & Documentation

### API Development
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **REST Client** | `humao.rest-client` | API testing | HTTP requests, response viewing |
| **Thunder Client** | `rangav.vscode-thunder-client` | API testing | Lightweight REST client |
| **Postman** | `postman.postman-for-vscode` | API development | Collection management, testing |

### Documentation
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Markdown All in One** | `yzhang.markdown-all-in-one` | Markdown support | Preview, formatting, TOC |
| **Markdown Preview Enhanced** | `shd101wyy.markdown-preview-enhanced` | Enhanced preview | Math, diagrams, export |

## Development Environment

### Remote Development
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Remote - SSH** | `ms-vscode-remote.remote-ssh` | SSH development | Remote server development |
| **Remote - Containers** | `ms-vscode-remote.remote-containers` | Container development | Docker development |
| **Remote - WSL** | `ms-vscode-remote.remote-wsl` | WSL development | Windows Subsystem for Linux |

### Utilities
| Extension | ID | Purpose | Features |
|-----------|----|---------|---------|
| **Path Intellisense** | `christian-kohler.path-intellisense` | Path autocomplete | File path suggestions |
| **Auto Rename Tag** | `formulahendry.auto-rename-tag` | HTML/JSX support | Automatic tag renaming |
| **Bracket Pair Colorizer** | `coenraads.bracket-pair-colorizer-2` | Code readability | Bracket color coding |

## Installation Commands

### Core Extensions
```bash
# AI & Code Assistance
code --install-extension github.copilot
code --install-extension github.copilot-chat
code --install-extension continue.continue
code --install-extension google.geminicodeassist

# Spec-Kit Workflow
code --install-extension block.vscode-goose
code --install-extension block.vscode-mcp-extension
code --install-extension specstory.specstory

# Framework Support
code --install-extension ms-vscode.vscode-typescript-next
code --install-extension bradlc.vscode-tailwindcss
code --install-extension prisma.prisma
```

### Quality & Testing
```bash
# Code Quality
code --install-extension biomejs.biome
code --install-extension usernamehw.errorlens
code --install-extension yoavbls.pretty-ts-errors

# Testing
code --install-extension ms-playwright.playwright
code --install-extension orta.vscode-jest
code --install-extension hbenl.vscode-test-explorer
```

### Workflow & Productivity
```bash
# Git & Version Control
code --install-extension mhutchie.git-graph
code --install-extension eamodio.gitlens
code --install-extension github.vscode-pull-request-github

# Project Management
code --install-extension alefragnani.project-manager
code --install-extension worktree.worktree
code --install-extension gruntfuggly.todo-tree
```

### API & Documentation
```bash
# API Development
code --install-extension humao.rest-client
code --install-extension rangav.vscode-thunder-client

# Documentation
code --install-extension yzhang.markdown-all-in-one
code --install-extension shd101wyy.markdown-preview-enhanced
```

## Extension Configuration

### Project Settings (.vscode/settings.json)
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
  ],
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "biomejs.biome",
  "editor.codeActionsOnSave": {
    "source.fixAll.biome": true,
    "source.organizeImports.biome": true
  },
  "typescript.preferences.importModuleSpecifier": "relative",
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  },
  "tailwindCSS.experimental.classRegex": [
    ["cva\\(([^)]*)\\)", "[\"'`]([^\"'`]*).*?[\"'`]"],
    ["cx\\(([^)]*)\\)", "(?:'|\"|`)([^']*)(?:'|\"|`)"]
  ],
  "errorLens.enabledDiagnosticLevels": ["error", "warning", "info"],
  "errorLens.messageEnabled": true,
  "errorLens.statusBarMessageEnabled": true,
  "gitlens.codeLens.enabled": true,
  "gitlens.currentLine.enabled": true,
  "gitlens.hovers.enabled": true,
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

### Keybindings.json
```json
[
  {
    "key": "ctrl+shift+p",
    "command": "workbench.action.showCommands"
  },
  {
    "key": "ctrl+shift+`",
    "command": "workbench.action.terminal.toggleTerminal"
  },
  {
    "key": "ctrl+shift+f",
    "command": "workbench.action.findInFiles"
  },
  {
    "key": "ctrl+shift+h",
    "command": "workbench.action.replaceInFiles"
  }
]
```

## Extension Management

### List Installed Extensions
```bash
# List all installed extensions
code --list-extensions

# List extensions with details
code --list-extensions --show-versions

# Export extension list
code --list-extensions > extensions.txt
```

### Install from List
```bash
# Install extensions from list
cat extensions.txt | xargs -L 1 code --install-extension
```

### Update Extensions
```bash
# Update all extensions
code --install-extension --force <extension-id>
```

## Performance Optimization

### Extension Performance
| Extension | Impact | Recommendation |
|-----------|--------|----------------|
| **GitHub Copilot** | High | Keep enabled for AI assistance |
| **GitLens** | Medium | Disable if not using Git features |
| **Playwright** | Low | Only enable when testing |
| **Biome** | Low | Essential for code quality |

### Memory Usage
```bash
# Check extension memory usage
code --list-extensions --show-versions | wc -l

# Disable unused extensions
code --disable-extension <extension-id>
```

## Troubleshooting

### Common Issues
| Issue | Solution |
|-------|----------|
| **Extension not loading** | Restart VS Code, check extension compatibility |
| **Performance issues** | Disable unused extensions, check memory usage |
| **Conflicting extensions** | Disable similar extensions, check settings |
| **Extension marketplace issues** | Check internet connection, clear cache |

### Extension Conflicts
```json
{
  "recommendations": [
    "biomejs.biome",
    "ms-playwright.playwright",
    "github.copilot",
    "bradlc.vscode-tailwindcss"
  ],
  "unwantedRecommendations": [
    "ms-vscode.vscode-eslint",
    "esbenp.prettier-vscode"
  ]
}
```

---

*These extensions provide a complete development environment for the AlignSynch project.*
