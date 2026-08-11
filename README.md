# To The Ends of The Earth: Brand System

**To The Ends of The Earth (TTE)** is a Hope Channel movement that mobilizes prayer and investment for the world's most unreached people groups.

**This repository is TTE's brand system.** It holds every rule, file, and tool needed to make anything on-brand: colors, fonts, logo, voice, imagery, ready-to-use interface components, and an AI assistant that generates on-brand content on request.

New here and not sure what any of that means, or what "repository" even means? Keep reading: this file explains it from zero.

---

## First, the basics

**This is a GitHub repository.** GitHub is a website that stores a project's files with a complete history of every change. Think of it as a shared folder that never loses a version and that several people (or AIs) can work in without overwriting each other. You're reading this file because it's the first thing GitHub shows when someone opens the repository.

**A "brand system" is everything a brand needs to stay consistent, kept in one synchronized place**, instead of scattered across someone's laptop, an old PDF, and a designer's memory. Change a color once here, and it updates everywhere it's used: the Figma file, the code, the documents. Nothing drifts out of sync because there is only one place the truth lives.

---

## First time here? Start with what you need

| What you want | Do this |
|---|---|
| **See the whole brand, browse it visually** | Open the interactive brand system site: **tte-brand-system.vercel.app** |
| **Get a headline, caption, image prompt, or deck outline written for you** | Skip to [If you're generating content](#if-youre-generating-content) below |
| **Design something in Figma** | Skip to [If you're a designer](#if-youre-a-designer) below |
| **Build a screen or product that uses TTE's components** | Skip to [If you're a developer](#if-youre-a-developer) below |
| **Just want to understand how this is organized** | Keep reading top to bottom |

---

## How it's organized: four layers, one system

```
BRAND  →  DESIGN  →  DEV  →  AGENT
identity   interface  code    generation
```

Each layer is built on the one before it, and none of them is optional reading. They're just different forms of the same rules:

- **Brand:** who TTE is, distilled into rules: which colors, which fonts, the logo, how the brand sounds when it writes. This is the raw identity everything else is built from.
- **Design:** those rules turned into reusable interface pieces: what a button looks like, what a card looks like, how they behave.
- **Dev:** the same pieces, but as real code a developer can drop into a working product, plus every brand value in the file formats code actually uses.
- **Agent:** an AI that has read all three layers above and can write copy, build image prompts, or draft a deck in TTE's voice, on request, without you having to explain the brand to it first.

---

## Words you'll see in this repository

A short glossary, since some of these terms show up constantly below and are easy to gloss over if you've never worked with them:

| Word | What it means, plainly |
|---|---|
| **Repository (repo)** | This whole folder of files, tracked by GitHub. |
| **Token** | A brand value (a color, a font size, a spacing amount) stored as data instead of typed by hand, so it can be reused identically everywhere and updated in one place. |
| **Design system** | The library of reusable interface pieces (buttons, cards, panels) that a product is built from, so every screen looks consistent without redesigning each one from scratch. |
| **Component** | One reusable piece from that library: a button is a component, a card is a component. |
| **Figma** | The design tool where the brand's visual system lives and is edited by hand. |
| **`npm install` / `npm run dev`** | Commands a developer runs in a terminal to set up and preview the code in this repo. If you're not a developer, you'll never need to type these. |

---

## How to use it

### If you're a **designer**
The visual truth lives in two places kept in sync: the **Figma file** (`TTE — Brand System`) and the **tokens** in `01-brand-system/tokens/`. Design in Figma; the tokens mirror what's there. Read `DESIGN.md` for the full rulebook, and `02-design-system/specs/` for how each component should look and behave. If you change a brand value, update the tokens, the dev project, and Figma together in the same pass, never just one.

### If you're a **developer**
Go to `03-dev-system/README.md` for the full guide. In short:
```bash
cd 03-dev-system/tte-ui
npm install
npm run dev        # opens a live preview of every component at localhost:5173
```
Import the tokens (`tokens.tailwind.js` or `tokens.css`) and use the components in `src/components/`. Everything is angular (no rounded corners), built dark-first, and Fire Orange is reserved for emphasis, never used as a fill.

### If you're generating content
(marketing, comms, partnerships: anyone who needs on-brand material without designing it by hand)

Use the **Brand Agent**. In Claude Code, type `/tte` followed by what you need:
- `/tte a prayer-partner appeal for the Tajik people`
- `/tte a social caption with a HUD opener`
- `/tte an AI image prompt for a Layer-2 portrait at golden hour`
- `/tte an outline for a partner pitch deck`

Not using Claude Code? See `SHARING.md`: the same agent works in Claude Chat and, with a little setup, in other AI tools too.

### If you're an **AI** picking up this repository
Load `01-brand-system/DESIGN.md` as the authoritative brand instruction file, and `tokens.json` for exact values. For generation tasks, use the skills in `.claude/skills/` (copy → `brand-copy`, imagery → `tte-imagery`, decks/docs → `brand-deliverables`) through the `tte-brand-agent`. Never invent a color, font, or size a token already defines. On any brand or design decision, propose it and defer to the human. Don't decide alone.

---

## What's in each folder

| Folder | What's inside | Who uses it |
|---|---|---|
| `01-brand-system/` | The identity: **tokens**, logo files, patterns, imagery guide, voice guidelines, and **`DESIGN.md`** (the master brand rulebook) | Everyone: this is the source of truth |
| `02-design-system/` | Component **specs**: how each interface piece should look and behave | Designers, developers |
| `03-dev-system/` | The real, running component library (React code), plus its own dev guide | Developers |
| `04-brand-book/` | The brand book: Figma export, PDF, and the interactive site | Anyone sharing the brand externally |
| `05-applications/` | Finished applications: social assets, print | Designers |
| `.claude/` | The Brand Agent, its skills, and shortcuts | Anyone generating content; AI |
| `00-archive/` | Old versions and source material, kept for reference | Reference only |

**Key documents to know:**
- **`01-brand-system/DESIGN.md`**: the single authoritative brand file. If anything else conflicts with it, this wins.
- **`METHOD.md`**: the reusable method behind how this system was built, for applying the same approach to another brand.
- **`SHARING.md`**: how to share the Brand Agent and this repository with your team or with other AI tools.
- **`03-dev-system/README.md`**: the developer's guide.
- **`.claude/README.md`**: the Brand Agent guide.

---

## The rules that never bend

Whatever you make, these hold, no exceptions:
- **Fire Orange `#FE5442` is emphasis only**, never a dominant background.
- **Black `#28272A`** is the default surface (the brand is dark-first). **White** is for editorial, text-on-dark contexts.
- **Two fonts only:** Mona Sans (headings, always UPPERCASE) and Space Mono (data, HUD, body text).
- **Zero rounded corners** (the only exceptions are circular avatars and radio buttons).
- **The voice** is urgent, theologically grounded, gritty, dignifying, mobilizing, never churchy, pitying, or passive.

Full detail on all of it: `01-brand-system/DESIGN.md`.

---

## Status

All four layers are built and kept in sync (Brand → Design → Dev → Agent), and the interactive brand system site is live at **tte-brand-system.vercel.app**. See `01-brand-system/docs/audit-report-2026-07-24.md` for the last full audit, `01-brand-system/docs/TTE-Brand-Workflow-Master.md` for the complete phase history, and `04-brand-book/BRAND-GUIDELINES-SITE-PLAN.md` for the site's own build log.
