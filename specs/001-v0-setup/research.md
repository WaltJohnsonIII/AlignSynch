# v0 + Multi-Agent Setup — Research Q&A (Concise Decision Log)

Purpose: capture only what is needed to move fast. Answer inline under each Decision line.

## 1) Provider and Keys
- Question: Which provider for v0 BYOK?
  - Options: OpenRouter (single key, multi-model), OpenAI, Anthropic
  - Decision:
- Key location: .env.local (repo root)
- Variables:
  - OPENROUTER_API_KEY=...
  - OPENAI_API_KEY=... (if chosen)
  - ANTHROPIC_API_KEY=... (if chosen)

## 2) Default Model
- Question: Default model for UI codegen (fast + low cost)?
  - Options: gpt-4o-mini (or OpenRouter equivalent), Claude Sonnet small, Llama-3.1-70B via OpenRouter
  - Decision:

## 3) v0 Scope (MVP)
- Question: Smallest first step?
  - Options:
    - A) Generate one ShadCN/Tailwind component in a throwaway path
    - B) Apply a tiny diff to an existing page
  - Decision:
- Target branch: 001-v0-setup

## 4) v0 Location and Run
- Question: Where to place local v0 files?
  - Suggestion: tools/v0/
  - Decision:

## 5) Code Review Workflow
- Question: Who reviews v0 diffs first?
  - Options: Cursor Reviewer agent first, then you
  - Decision:

## 6) Third-Party Tooling (initial)
- Question: Limit generators to UI only (no data/auth) for MVP?
  - Decision:
- Question: Any external tools to wire now (ShadCN MCP, Magic Patterns, Onlook)?
  - Decision:

## 7) Minimal Multi-Agent Roles
- Builder Agent: generate small diffs, code only
- Reviewer Agent: verify types, a11y, lint, minimal comments
- Question: Accept this split for now?
  - Decision:

## 8) Guardrails
- Question: Enforce initial limits?
  - Max files changed per PR: (e.g., 5)
  - Allowed paths: components/ui, app/(mainlayout)
  - Build + lint must pass before merge
  - Decision:

## 9) Success Criteria (MVP)
- v0 runs locally (BYOK) and returns one usable UI component
- Diff limited, compiles, passes lint
- Merged via PR to 001-v0-setup

## Notes
- Cursor gateway: yes — keep generation inside Cursor where possible
- OpenRouter: preferred for single-key multi-model; can swap later

---
Reply in the next chat with short answers under each Decision line. I will apply them and proceed.
