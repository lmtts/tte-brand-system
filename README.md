# To The Ends of The Earth — Brand System

This repository is the complete brand system for **To The Ends of The Earth (TTE)**, a Hope Channel movement to mobilize prayer and investment for the world's most unreached people groups.

It is not just a folder of logos. It is a **living system** with four connected layers: the brand's identity, its design components, its code, and an AI agent that generates on-brand assets. Everything is synchronized — change a color once and it updates everywhere.

**New here? Read this file top to bottom. It tells you what this is, how it's organized, and how to use it — whether you're a designer, a developer, a team member, or an AI.**

---

## What this is, in one picture

```
BRAND  →  DESIGN  →  DEV  →  AGENT
identity   interface  code    generation
```

- **Brand** — who TTE is: colors, fonts, logo, voice, imagery. The raw identity.
- **Design** — those identity pieces turned into reusable interface components (buttons, cards, panels).
- **Dev** — the same components as real code developers can drop into a product, plus the design "tokens" in every format.
- **Agent** — an AI that holds all of the above and can write copy, build image prompts, and draft decks in the TTE voice on command.

Each layer builds on the one before it. The rule that keeps it coherent: **one source of truth, mirrored everywhere in the same action.** Change a value in one place and update the copies immediately, so nothing drifts.

---

## How the repository is organized

| Folder | What's inside | Who uses it |
|--------|---------------|-------------|
| `01-brand-system/` | The identity: **tokens** (colors, type, spacing as data), logo files, patterns, imagery guide, voice guidelines, and **`DESIGN.md`** (the master brand file) | Everyone — this is the source of truth |
| `02-design-system/` | Component **specs** (how each component should look and behave) | Designers, developers |
| `03-dev-system/` | The **running component library** (React code) + a dev guide | Developers |
| `04-brand-book/` | The brand book (Figma export, PDF, interactive site) | Stakeholders |
| `05-applications/` | Final applications (social, print) | Designers |
| `.claude/` | The **Brand Agent**, its skills, and shortcuts | Anyone generating assets; AI |
| `00-archive/` | Old versions and source material | Reference only |

**Key documents to know:**
- **`01-brand-system/DESIGN.md`** — the single authoritative brand file. If anything conflicts, this wins.
- **`METHOD.md`** — the reusable method behind how this was built (for applying it to another brand).
- **`SHARING.md`** — how to share the Brand Agent and this repo with your team or other AIs.
- **`03-dev-system/README.md`** — the developer's guide.
- **`.claude/README.md`** — the Brand Agent guide.

---

## How to use it

### If you're a **designer**
The visual truth lives in two synced places: the **Figma file** (`TTE — Brand System`) and the **tokens** in `01-brand-system/tokens/`. Work in Figma; the tokens mirror it. Read `DESIGN.md` for the rules, and `02-design-system/specs/` for component details. When you change a brand value, update the tokens, the dev project, and Figma together.

### If you're a **developer**
Go to `03-dev-system/README.md`. In short:
```bash
cd 03-dev-system/tte-ui
npm install
npm run dev        # the live component showcase at localhost:5173
```
Import the tokens (`tokens.tailwind.js` / `.css`) and use the components in `src/components/`. Everything is angular (radius 0), dark-first, and Fire Orange is emphasis only.

### If you're a **team member** (marketing, comms, partnerships)
Use the **Brand Agent** to generate on-brand material. In Claude Code: type `/tte` followed by what you want. Examples:
- `/tte a prayer-partner appeal for the Tajik people`
- `/tte a social caption with a HUD opener`
- `/tte an AI image prompt for a Layer-2 portrait at golden hour`
- `/tte an outline for a partner pitch deck`

Not on Claude Code? See `SHARING.md` — the agent also works in Claude Chat and (with a bit of setup) in other AIs.

### If you're an **AI**
Load `01-brand-system/DESIGN.md` as the authoritative brand instruction file, and `tokens.json` for exact values. For generation tasks, use the skills in `.claude/skills/` (copy → `brand-copy`, imagery → `tte-imagery`, decks/docs → `brand-deliverables`) via the `tte-brand-agent`. Never invent a color, font, or size that a token already defines. On brand/design decisions, propose and defer to the human.

---

## What you can make with it

| Want to… | Use |
|----------|-----|
| Write copy in the TTE voice | Brand Agent → `brand-copy` |
| Generate or evaluate imagery | Brand Agent → `tte-imagery` |
| Build a deck, template, or the brand guidelines | Brand Agent → `brand-deliverables` |
| Build a product screen or website | The component library in `03-dev-system/` |
| Design in Figma | The `TTE — Brand System` Figma library |
| Check the system is healthy | `/audit` (the brand-audit skill) |

---

## The rules that never bend

Whatever you make, these hold:
- **Fire Orange `#FE5442` is emphasis only** — never a dominant background.
- **Black `#28272A`** is the default surface (the brand is dark-first). **White** for editorial.
- **Two fonts only:** Mona Sans (headings, UPPERCASE) and Space Mono (data/HUD).
- **Zero rounded corners** (except circular avatars and radio buttons).
- **The voice** is urgent, theologically grounded, gritty, dignifying, mobilizing — never churchy, pitying, or passive.

Full detail: `DESIGN.md`.

---

## Status

All layers built and synchronized (Brand → Design → Dev → Agent). See `01-brand-system/docs/audit-report-2026-07-24.md` for the completion audit, and `01-brand-system/docs/TTE-Brand-Workflow-Master.md` for the full phase history.
