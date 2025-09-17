# Environment Variables Master List

## Quick Reference

| Variable | Service | Required | Environment | Agent | Purpose | Notes |
|----------|---------|----------|-------------|-------|---------|-------|
| **Core Development** |
| `NODE_ENV` | Node.js | ✅ | All | Dev | Environment mode | development/production |
| `NEXT_PUBLIC_APP_URL` | Next.js | ✅ | All | Dev | Application URL | Base URL |
| `NEXT_PUBLIC_APP_NAME` | Next.js | ✅ | All | Dev | Application name | AlignSynch |
| **Database** |
| `DATABASE_URL` | Neon/Drizzle | ✅ | All | Data | Database connection | PostgreSQL |
| `NEON_API_KEY` | Neon | ✅ | All | Data | Neon API access | Serverless Postgres |
| `DRIZZLE_DATABASE_URL` | Drizzle | ✅ | All | Data | Drizzle connection | ORM connection |
| **Authentication** |
| `BETTER_AUTH_SECRET` | Better Auth | ✅ | All | Auth | Auth encryption | 32+ chars |
| `BETTER_AUTH_URL` | Better Auth | ✅ | All | Auth | Auth base URL | App URL |
| `WORKOS_API_KEY` | WorkOS | ✅ | All | Auth | WorkOS API | Enterprise auth |
| `WORKOS_CLIENT_ID` | WorkOS | ✅ | All | Auth | WorkOS client | OAuth client |
| `WORKOS_REDIRECT_URI` | WorkOS | ✅ | All | Auth | OAuth redirect | Callback URL |
| `WORKOS_WEBHOOK_SECRET` | WorkOS | ✅ | All | Auth | Webhook validation | Webhook security |
| **AI & Development** |
| `GEMINI_API_KEY` | Google Gemini | ✅ | All | AI | Gemini API access | AI integration |
| `OPENAI_API_KEY` | OpenAI | ✅ | All | AI | OpenAI API access | AI integration |
| `NEXT_PUBLIC_COPILOT_API_KEY` | CopilotKit | ✅ | All | AI | Copilot API | AI assistance |
| **Analytics & Monitoring** |
| `POSTHOG_KEY` | PostHog | ✅ | All | Analytics | PostHog project key | Analytics |
| `POSTHOG_HOST` | PostHog | ✅ | All | Analytics | PostHog host | Analytics endpoint |
| `POSTHOG_API_KEY` | PostHog | ✅ | All | Analytics | PostHog API | Analytics API |
| **Deployment** |
| `VERCEL_TOKEN` | Vercel | ✅ | All | Deploy | Vercel API access | Deployment |
| `VERCEL_ORG_ID` | Vercel | ✅ | All | Deploy | Vercel organization | Deployment |
| `VERCEL_PROJECT_ID` | Vercel | ✅ | All | Deploy | Vercel project | Deployment |
| `GITHUB_TOKEN` | GitHub | ✅ | All | Dev | GitHub API access | CI/CD |
| **Testing & Quality** |
| `CHECKLY_API_KEY` | Checkly | ✅ | All | QA | Checkly API | Monitoring |
| `CHECKLY_ACCOUNT_ID` | Checkly | ✅ | All | QA | Checkly account | Monitoring |
| `PLAYWRIGHT_BASE_URL` | Playwright | ✅ | Test | QA | Test base URL | E2E testing |
| **CMS & Content** |
| `HYGRAPH_API_KEY` | HyGraph | ❌ | All | CMS | HyGraph API | Headless CMS |
| `HYGRAPH_ENDPOINT` | HyGraph | ❌ | All | CMS | HyGraph endpoint | CMS endpoint |
| `STRIPE_SECRET_KEY` | Stripe | ❌ | All | Payment | Stripe API | Payments |
| `STRIPE_PUBLISHABLE_KEY` | Stripe | ❌ | All | Payment | Stripe public key | Payments |
| **Development Tools** |
| `BIOME_CONFIG_PATH` | Biome | ❌ | Dev | QA | Biome config | Linting config |
| `ULTRACITE_CONFIG_PATH` | Ultracite | ❌ | Dev | QA | Ultracite config | Formatting config |
| `TURBO_TOKEN` | Turbo | ❌ | All | Dev | Turbo API | Build system |
| **MCP Servers** |
| `MCP_FILESYSTEM_PATH` | MCP | ❌ | All | MCP | Filesystem access | MCP config |
| `MCP_GIT_PATH` | MCP | ❌ | All | MCP | Git repository | MCP config |
| `MCP_VSCODE_WORKSPACE` | MCP | ❌ | All | MCP | VS Code workspace | MCP config |
| `LINEAR_API_KEY` | Linear | ✅ | All | PM | Linear API access | Issue management |
| **External APIs** |
| `FIREBASE_API_KEY` | Firebase | ❌ | All | Cloud | Firebase API | Cloud services |
| `FIREBASE_PROJECT_ID` | Firebase | ❌ | All | Cloud | Firebase project | Cloud services |
| `SENDGRID_API_KEY` | SendGrid | ❌ | All | Email | SendGrid API | Email service |
| `RESEND_API_KEY` | Resend | ❌ | All | Email | Resend API | Email service |
| **Development Environment** |
| `DEBUG` | Node.js | ❌ | Dev | Dev | Debug mode | Development |
| `LOG_LEVEL` | Application | ❌ | All | Dev | Logging level | Logging |
| `CORS_ORIGIN` | Application | ❌ | All | Dev | CORS origins | Security |
| **Feature Flags** |
| `ENABLE_WORKOS_MFA` | WorkOS | ❌ | All | Auth | MFA feature flag | Feature toggle |
| `ENABLE_POSTHOG` | PostHog | ❌ | All | Analytics | Analytics feature flag | Feature toggle |
| `ENABLE_CHECKLY` | Checkly | ❌ | All | QA | Monitoring feature flag | Feature toggle |
| **Test Environment** |
| `TEST_DATABASE_URL` | Test | ❌ | Test | QA | Test database | Testing |
| `TEST_WORKOS_API_KEY` | WorkOS | ❌ | Test | Auth | Test WorkOS API | Testing |
| `TEST_POSTHOG_KEY` | PostHog | ❌ | Test | Analytics | Test PostHog | Testing |

## Environment-Specific Variables

### Development
```bash
NODE_ENV=development
DEBUG=true
LOG_LEVEL=debug
PLAYWRIGHT_BASE_URL=http://localhost:3000
```

### Production
```bash
NODE_ENV=production
DEBUG=false
LOG_LEVEL=info
PLAYWRIGHT_BASE_URL=https://alignsynch.vercel.app
```

### Testing
```bash
NODE_ENV=test
DEBUG=false
LOG_LEVEL=error
TEST_DATABASE_URL=postgresql://test:test@localhost:5432/test
```

## Security Best Practices

### Required Variables (Never Optional)
- `BETTER_AUTH_SECRET` - Must be 32+ characters
- `DATABASE_URL` - Must be secure connection string
- `WORKOS_API_KEY` - Must be valid WorkOS key
- `GEMINI_API_KEY` - Must be valid Gemini key

### Sensitive Variables (Encrypt in Storage)
- All API keys
- Database connection strings
- Authentication secrets
- Webhook secrets

### Public Variables (Safe to Expose)
- `NEXT_PUBLIC_APP_URL`
- `NEXT_PUBLIC_APP_NAME`
- `NEXT_PUBLIC_COPILOT_API_KEY`

## Management Solutions

### Vercel Environment Variables
- **Access**: Vercel Dashboard → Project → Settings → Environment Variables
- **Sync**: Automatic with GitHub Secrets
- **Scope**: Per environment (Development, Preview, Production)

### GitHub Secrets
- **Access**: Repository → Settings → Secrets and variables → Actions
- **Sync**: Automatic with Vercel
- **Scope**: Repository-wide

### VS Code Keys Extension
- **Access**: VS Code → Extensions → Keys
- **Sync**: Local storage with encryption
- **Scope**: Workspace-specific

### Infisical
- **Access**: Infisical Dashboard
- **Sync**: API-based with multiple integrations
- **Scope**: Project and environment-specific

## Auto-Setup Script

```bash
#!/bin/bash
# Environment Variables Auto-Setup Script

# Check if .env.local exists
if [ ! -f .env.local ]; then
    echo "Creating .env.local file..."
    touch .env.local
fi

# Add required variables if not present
add_var_if_missing() {
    local var_name=$1
    local var_value=$2
    
    if ! grep -q "^$var_name=" .env.local; then
        echo "$var_name=$var_value" >> .env.local
        echo "Added $var_name to .env.local"
    fi
}

# Add core variables
add_var_if_missing "NODE_ENV" "development"
add_var_if_missing "NEXT_PUBLIC_APP_URL" "http://localhost:3000"
add_var_if_missing "NEXT_PUBLIC_APP_NAME" "AlignSynch"

echo "Environment variables setup complete!"
echo "Please add your API keys and secrets to .env.local"
```

---

**Total Environment Variables**: 50  
**Required**: 15  
**Optional**: 35  
**Sensitive**: 25  
**Public**: 3
