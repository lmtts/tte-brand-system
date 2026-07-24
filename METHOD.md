# The Brand Systematization Method

> A replicable method for turning a brand into a living, connected system — identity, design, code, and an AI that generates on-brand assets. Distilled from the To The Ends of The Earth (TTE) build; written to be reused on any brand.

---

## The core idea: four connected systems, in order

```
BRAND  →  DESIGN  →  DEV  →  AGENT
identity  interface  code   generation
```

Each layer inherits and respects the one before it. You never skip forward. The brand is defined first, translated to interface second, connected to code third, and only then handed to an AI that can generate from it.

- **Brand System** — who the brand is. Strategy, voice, logo, color, type, imagery, patterns. The atoms of identity.
- **Design System** — how the brand becomes interface. Brand atoms applied as tokens + components on a mature UI base (shadcn/ui), which becomes *your* system.
- **Dev System** — how the system becomes product. Tokens in every format, components in code, docs for developers.
- **Brand Agent** — how the system generates. An AI holding the whole brand, routing to skills that produce copy, imagery prompts, and deliverables.

## The atomic backbone

Every layer is structured the same way: **Atoms → Molecules → Organisms → Templates → Pages.** Applied not only to UI, but to brand assets — logo, color, type, patterns each have their atomic level.

## The loop

All work runs through: **Audit → Plan → Build → Review → Fix → Repeat.** The designer approves the Plan before the Build and signs off after the Review. Everything between is autonomous.

## The single-source-of-truth rule (Principle 7)

One value lives in one authoritative place and is mirrored everywhere else **in the same action**. For TTE: `tokens.json` is the source; it mirrors to css/scss/tailwind, to the dev project, and to Figma variables. Change one, change all three faces at once. Documents and skills **point to** the source; they never duplicate it.

---

## The phases (what to do, in order)

| Phase | Goal | Key output |
|-------|------|-----------|
| **0 · Setup** | Prepare the orchestrator | Brand folder in the standard structure; `CLAUDE.md`; first skill + command |
| **1 · Audit** | Map current state vs. a high standard | Gap report + prioritized plan |
| **2 · Brand System** | Structure every identity atom | Tokens (all formats), Foundation pages in Figma, DESIGN.md, brand-quick-reference |
| **3 · Design System** | Translate atoms to interface | shadcn base + branded components + own organisms; Figma component library |
| **4 · Dev System** | Make it consumable by devs | Tokens synced everywhere; dev README; DESIGN.md dev section |
| **5 · Brand Agent** | AI that generates on-brand | Subagent + generation skills + command + packaged skills |
| **6 · Extract** | Distill the replicable pattern | This document + folder template + case study |

---

## The folder template (clone this for a new brand)

```
<brand>/
├── CLAUDE.md                    # orchestrator context + rules for THIS brand
├── README.md                    # what it is / how to use it (front door)
├── METHOD.md                    # this method (copy as-is)
├── SHARING.md                   # how to share the agent + repo
├── 00-archive/                  # old versions, pre-approval exploration, source stock
├── 01-brand-system/             # identity atoms
│   ├── atoms/                   # color · typography · logo · icon · pattern
│   ├── tokens/                  # tokens.json (source) + .css/.scss/.tailwind.js
│   ├── imagery/                 # imagery guide + AI prompts
│   └── docs/                    # DESIGN.md · brand-quick-reference · voice · workflow master
├── 02-design-system/            # translation to interface
│   ├── components/              # brand-specific components
│   └── specs/                   # component specs
├── 03-dev-system/               # code consumable by devs
│   ├── README.md
│   └── <ui-app>/                # Vite + React + Tailwind + shadcn, tokens plugged in
├── 04-brand-book/               # brand book (Figma export, PDF, interactive site)
├── 05-applications/             # final applications (social, print, etc.)
└── .claude/                     # orchestrator intelligence
    ├── agents/                  # the brand agent
    ├── skills/                  # generation skills (copy, imagery, deliverables) + audit
    ├── commands/                # slash commands
    └── dist/                    # packaged .skill files for Chat/team
```

**To instantiate:** copy the tree, replace `CLAUDE.md` with the new brand's context, and run Phase 1 (audit) → forward.

---

## Generalizing the skills (future work)

The TTE agent and skills are currently **brand-specific** — they hardcode TTE's voice, colors, and rules. To make them a true brand-agnostic starter kit, each needs a pass that replaces brand specifics with placeholders that read from the brand's own docs:

| Asset | Today (TTE-specific) | Generalized (any brand) |
|-------|----------------------|--------------------------|
| `tte-brand-agent` | Persona, rules, sources hardcoded to TTE | Persona + rules loaded from the brand's `DESIGN.md` + voice doc; sources referenced by relative path only |
| `brand-copy` | TTE voice matrix, terminology, editorial rules inline | Reads the brand's voice guidelines; skill provides the *structure* (voice matrix, tone-by-context, quality gates) as a template the brand fills |
| `tte-imagery` | 4-layer TTE system, TTE grades/keywords | Skill provides the *prompt-block architecture*; the brand's imagery guide supplies the layers, grades, and keywords |
| `brand-deliverables` | TTE visual rules inline | Reads the brand's tokens + DESIGN.md; skill provides deck/guidelines *architecture* |
| Tokens | TTE values | A `tokens.json` schema + the 3-layer model (primitives → brand → semantic) |

**The principle:** separate the **method** (which is universal — the structures, the loop, the atomic model, Principle 7) from the **content** (which is per-brand — the actual voice, colors, type). The skills should teach the method and read the content. Do this pass when systematizing the next brand, so the second brand costs a fraction of the first.

---

## What makes this work

1. **Order is non-negotiable.** Brand before design before dev before agent. Each layer is only as good as its foundation.
2. **One source of truth, mirrored in the same action.** No drift.
3. **Don't reinvent the UI.** A mature base (shadcn) plus correct brand atoms becomes your system. The valuable work is applying the brand, not rebuilding buttons.
4. **The designer decides, the orchestrator executes.** Creative forks go to the human; technical execution is autonomous.
5. **Point, don't duplicate.** Docs and skills reference the authoritative source so the system stays coherent as it grows.
