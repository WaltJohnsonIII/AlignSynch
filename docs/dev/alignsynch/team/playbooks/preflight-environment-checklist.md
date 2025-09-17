### Pre‑flight Development Checklist (per session)

Use this every time you sit down to work. It’s optimized for this repo’s stack (Next.js 15, React 19, TypeScript strict, Tailwind, Neon + Drizzle, PostHog, WorkOS, pnpm, ESLint, Lefthook, Checkly).

### 0) Terminal & tooling
- **Shell**: PowerShell 7 is default; PATH includes pnpm, Git, Node 20.x LTS.
- **CLIs installed**: `pnpm`, `git`, `gh`, `vercel`, `playwright`, `drizzle-kit`.
- **Auth**: `gh auth status` ok; Vercel CLI logged in if deploying.

### 1) Workspace sanity
- **Editor**: VS Code/Cursor open; workspace trusted; MCP Bridge connected.
- **Extensions policy**: ESLint is the single linter; disable Biome/duplicate formatters.
- **Format on save**: enabled; default formatter = built‑in or Prettier if explicitly chosen.

### 2) Repo hygiene
- Sync main: fetch → rebase.
  ```bash
  git fetch origin && git checkout main && git pull --rebase
  ```
- Create/checkout feature branch (`NNN-feature-name`).
  ```bash
  git checkout -b 00X-your-feature
  ```

### 3) Environment variables (local)
- Ensure `.env.local` exists and contains required keys:
  - `WORKOS_*` (client ID, API key, redirect URIs)
  - `POSTHOG_*`
  - `NEON_*` / `DATABASE_URL`
  - `DRIZZLE_*`
  - `OPENAI_API_KEY`, `NEXT_PUBLIC_COPILOT_API_KEY`, `GEMINI_API_KEY`
  - `NEXT_PUBLIC_*` flags used in UI
- Never commit secrets. Keep a redacted `.env.example` in sync when adding keys.

### 4) Dependencies & DB
- Install deps cleanly.
  ```bash
  pnpm i
  ```
- Drizzle config compiles; run generate/migrate if schema changed.
  ```bash
  pnpm dlx drizzle-kit generate && pnpm db:migrate
  ```
- Neon connection verified (test query ok).

### 5) Auth & analytics checks
- WorkOS callback URLs match environment; session cookies ok.
- PostHog token present; dev autocapture configured to avoid noise.

### 6) Quality gates
- Lint (ESLint) and checks (Ultracite) pass; hooks active (Lefthook).
  ```bash
  pnpm lint && pnpm dlx ultracite check
  ```
- Typecheck and tests run locally.
  ```bash
  pnpm test:install && pnpm test
  ```

### 7) Dev server
```bash
pnpm dev
```
Server starts with no runtime/type errors; open the homepage and an authenticated page.

### 8) Specification first (gate to start work)
- Open current spec in `specs/NNN-*/*`.
- Confirm acceptance criteria and out-of-scope list.
- If missing, create via `scripts/create-new-feature.sh` then `scripts/setup-plan.sh`.

### 9) Session close‑down
- All edits committed with clear messages; push branch.
- Open/updated PR; CI green.
- `CHANGELOG.md` and decision log updated; leave a short summary in the spec.

### 10) Stack inventory (source of truth for agents)

**CRITICAL**: This is the oracle for all agents. Update when stack changes.

| Category | Keep (baseline) | Trash candidates (disable/remove) |
| --- | --- | --- |
| Editor/IDE | VS Code + Cursor | Extra IDEs that create conflicting settings |
| AI | Cursor (primary), Gemini CLI (assistant) | Overlapping AI extensions that inject context |
| MCP Servers | **ONLY active ones needed for current task** | All others = token waste |
| Linters | ESLint (workspace) | Biome, duplicate ESLint variants |
| Formatters | Prettier or built‑in (team choice) | Multiple competing formatters |
| Git hooks | Lefthook (pre‑commit) | Legacy Husky configs if not used |
| CLIs | pnpm, git, gh, vercel, drizzle‑kit, playwright | Old Node/pnpm versions |
| Runtime | Node 20.x LTS | Non‑LTS Node versions |
| Framework | Next.js 15 / React 19 | — |
| ORM/DB | Drizzle ORM + Neon | Local DB engines if unused |
| Auth | WorkOS SDK | Other auth SDKs not in use |
| Analytics | PostHog | Duplicate trackers |
| UI | shadcn/ui + Radix + Tailwind | Unused UI kits |
| Testing | Playwright + Checkly | Legacy Jest setups if unused |

### 11) Methodology Oracle (anti-distraction system)

**GATE 0**: Before ANY work, answer these questions:
- [ ] What is the current spec file? (`specs/NNN-*/feature-spec.md`)
- [ ] What is the ONE task from the spec we're working on?
- [ ] Are we following the SDD gates: Specify → Plan → Build → Verify?
- [ ] If we're on WorkOS, are we ONLY working on WorkOS until it's done?

**DISTRACTION DETECTION**: Stop immediately if you notice:
- [ ] Working on multiple features simultaneously
- [ ] Adding new features not in the spec
- [ ] Switching to "quick fixes" that aren't in the current task
- [ ] Starting new specs without finishing current ones

**RECOVERY PROTOCOL**: When off-track:
1. Stop all work
2. Open the current spec file
3. Read the acceptance criteria
4. Return to the exact task listed
5. Do not proceed until back on track

### 11) Environment variables inventory

| Group | Keys (local names) |
| --- | --- |
| WorkOS | `WORKOS_CLIENT_ID`, `WORKOS_API_KEY`, `WORKOS_REDIRECT_URI`, `WORKOS_COOKIE_SECRET` |
| Database | `DATABASE_URL`, `NEON_PROJECT_ID` |
| Drizzle | `DRIZZLE_*` |
| Analytics | `NEXT_PUBLIC_POSTHOG_KEY`, `NEXT_PUBLIC_POSTHOG_HOST` |
| AI | `OPENAI_API_KEY`, `GEMINI_API_KEY`, `NEXT_PUBLIC_COPILOT_API_KEY` |
| Next public | `NEXT_PUBLIC_*` feature switches |

### Inspiration
- Notes and discipline influenced by step‑wise starter guides such as TurboStarter walkthroughs and similar “batteries‑included” flows [YouTube walkthrough](https://www.youtube.com/watch?v=BXvaZNeQXMk).


