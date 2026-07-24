# TTE Orchestrator Intelligence (`.claude/`)

This folder is the brain of the TTE workspace: the specialized instruction manuals (skills), shortcuts (commands), and specialized assistants (agents) that let Claude Code — and the team — operate and generate on-brand.

## The Brand Agent (Phase 5)

The **TTE Brand Agent** is a single entity that holds the whole brand system and generates aligned assets. It routes to three specialist skills and enforces the brand's non-negotiable rules.

### How to use it

- **Slash command:** `/tte <what you want>` — e.g. `/tte a prayer-partner appeal for the Tajik`, `/tte a Layer-2 image prompt at golden hour`, `/tte a partner pitch deck outline`.
- **Directly:** ask Claude to "use the TTE brand agent to…", or invoke a skill by name.

The agent does **not** decide brand identity alone. On genuine creative forks it presents options and lets the designer steer.

## What's here

```
.claude/
├── agents/
│   └── tte-brand-agent.md      ← the Brand Agent (routes + enforces the brand)
├── skills/
│   ├── brand-copy/             ← copy in the TTE voice (from brand-voice-guidelines)
│   ├── tte-imagery/            ← AI imagery prompts + sourcing (4 layers, blocks, keywords, HTML builder)
│   ├── brand-deliverables/     ← decks, templates, interactive brand guidelines + PDF
│   └── brand-audit/            ← audit the brand system against a high standard
└── commands/
    ├── tte.md                  ← /tte — invoke the Brand Agent
    └── audit.md                ← /audit — run the brand audit
```

### The three generation capabilities

| Skill | Generates | Authoritative source |
|-------|-----------|----------------------|
| **brand-copy** | Headlines, social, donor appeals, HUD openers, CTAs, email, reports | `docs/brand-voice-guidelines-tte.md` |
| **tte-imagery** | AI image prompts, photo sourcing, art direction, image evaluation | `imagery/imagery-guide.md` + `ai-prompts.md` + skill references |
| **brand-deliverables** | Slide/pitch decks, templates, interactive brand guidelines, PDF | `DESIGN.md` + tokens + `TTE-BrandBook-Figma-Spec.md` |

## The principle that keeps it aligned

The agent and skills **point to the authoritative sources — they do not duplicate them.** `DESIGN.md` and `tokens.json` are the source of truth. When a brand value changes, it changes in the tokens, the dev project, and Figma together (Principle 7); the agent always reads the current value. That is why it stays on-brand without drifting.

## What the agent will not do

- Make brand/design decisions on its own (it proposes and applies; the designer decides).
- Produce finished social-media art (that needs a designer; `brand-deliverables` produces structure and templates, not final posts).
- Invent hex values, fonts, or sizes that a token already defines.
