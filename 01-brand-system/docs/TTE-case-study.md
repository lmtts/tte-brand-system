# Case Study — To The Ends of The Earth

> Portfolio source material. A record of what was built for TTE specifically, the decisions behind it, and the outcomes — ready to shape into a case study.

---

## One-line

Systematized a global mission brand end to end — from identity atoms to a running component library to an AI that generates on-brand assets — as a single connected system across four layers.

## The brief

**To The Ends of The Earth (TTE)** is a Hope Channel sub-brand: a movement to mobilize prayer warriors and investors for the most unreached people groups on the planet. Archetype: Hero × Explorer. The brand had to feel like an expedition dispatch — urgent, tactical, dignifying — never like church media. The challenge: turn a strong but scattered identity into a coherent system a team and an AI could operate.

## The idea

Treat the brand as **four connected systems, built in order:** Brand → Design → Dev → Agent. Define identity first, translate to interface second, connect to code third, and hand the whole thing to an AI last. Every layer inherits the one before it; one source of truth mirrors everywhere.

---

## What was built, by layer

### Brand System (identity)
- **Tokens** in four synced formats (json/css/scss/tailwind), three-layer model (primitives → brand → semantic).
- **Foundation pages in Figma** — Colors, Typography, Logo, Patterns, Imagery — bound to variables and text styles.
- **22 logo variants** converted to real, optimized vectors (43 KB → 5.5 KB each, 87% smaller) with no visible quality loss.
- **Topographic pattern** system, **imagery** system (4 narrative layers + color grading), full **voice** guidelines.

### Design System (interface)
- Built on **shadcn/ui** (chosen so the brand disappears into it rather than fighting it) with the TTE tokens plugged in, **dark-first**, radius `0` by token.
- **15 base components** brand-passed + **5 signature organisms** built from scratch: HUD Panel, People Group Card, Mission Stat, Biome Badge, Topographic Background.
- Two flagship decisions:
  - **The Button's `intent` axis** — `mobilize` (Mona Sans, the voice) vs `operate` (Space Mono, the instrument). One typeface rule extended to interaction: *Mona Sans mobilizes, Space Mono operates.*
  - **A unified control size scale** (36/44/56) so `default` means one height everywhere — born from a real misalignment the designer caught.
- Mirrored as a **Figma component library** (variant sets, bound to the same variables).

### Dev System (code)
- Tokens consumable in every format, dev README, DESIGN.md extended with Design + Dev sections.
- **Three faces kept in sync** — canonical tokens ↔ dev project ↔ Figma — by a single-source-of-truth discipline.

### Brand Agent (generation)
- A **subagent** holding the whole brand, routing to three skills: **brand-copy** (TTE voice), **tte-imagery** (AI prompts, ported from an existing tool), **brand-deliverables** (decks, templates, interactive brand guidelines).
- Invoked with `/tte`, packaged as portable `.skill` files, shareable to Claude Chat, custom GPTs, or the team via the repo.

---

## Decisions worth showing

- **shadcn over Untitled UI / MUI** — free, MIT, code-in-repo, neutral by design. The brand's radical rules (radius 0, two fonts, orange as emphasis only) needed a base that disappears, not one with its own strong look.
- **White label on Fire Orange buttons** — chose visibility over the higher-contrast dark label; a deliberate, documented accessibility trade (large/bold text).
- **Radio circular, switch square** — a considered split: the switch honors the tactical/angular brand; the radio keeps its circular convention (usability over dogma), documented as an exception like avatars.
- **Dignity over pity, in code** — the People Group Card falls back to the brand's topographic texture, never a grey placeholder box. A brand principle enforced by the component itself.
- **Lucide icons kept rounded** — the one place radius 0 was waived, because forcing square caps would deform the glyphs. Documented, not accidental.

## Problems solved

- **Huge logo SVGs** wouldn't import to Figma — solved with SVGO optimization (87% smaller) validated against the original at zoom.
- **A 64 KB topographic tile** was genuinely irreducible — every simplification degraded it — so it ships via drag-and-drop with a labeled slot, honest about the limit.
- **Figma's `combineAsVariants` silently flattened opacity** on variant fills — caught by screenshot review, fixed by applying opacity after combining, and written up as a reusable gotcha.

## Outcome

A brand that exists simultaneously as validated tokens, a running React component library, a Figma library, and an AI agent — all synchronized. A team member or an AI can now generate on-brand copy, imagery prompts, or a pitch deck on demand, and a designer can extend the system without it drifting.

---

## Phase 7 — Shipping the interactive brand book

The system above got proven under a real, live artifact: an 11-section interactive brand book (Next.js, GSAP, Lenis), deployed to production at `tte-brand-system.vercel.app` and iterated against real desktop *and* real-device mobile feedback, not just local testing.

**What it does that a static PDF can't:** a "mission intel / spec ops" motion language built for the brand's Explorer archetype — a typewriter reveal on every section heading, a terminal-decode/scramble effect on interactive labels and data, a live scroll-locked "slide" feel on desktop, scroll-linked depth parallax on the background texture — all reduced-motion-safe, and a real interactive lightbox, copy-to-clipboard swatches, and download kits (logo assets, voice guide, tokens) generated at build time from the same single-source-of-truth files as the rest of the system, never duplicated by hand.

**What made it hard, and what it taught:** several real, non-obvious bugs surfaced only once the site was live on a real phone — a WebKit-only flexbox rendering bug that silently hid content on iOS Safari while rendering perfectly in every automated check available; a scroll-snap interaction pattern that worked well on desktop and had to be entirely rethought (not just tuned) for mobile once real content length was longer than one screen; a Tailwind build-time class-purging trap that silently dropped three of four color swatches. None of these were visible to a quick look — each needed either real-device confirmation or direct measurement to catch. Full technical writeup of the pattern: `METHOD.md`.

---

## Facts for the write-up

- **Scope:** identity system, design system, dev system, brand agent, shipped interactive artifact — 7 phases.
- **Stack:** Figma (source of visual truth) · React + Vite + TypeScript + Tailwind v4 + shadcn/ui · Next.js + GSAP + Lenis for the brand book site · Vercel deploy · Claude Code as orchestrator.
- **Deliverables:** 4 token formats · 5 Figma Foundation pages + 2 component pages · 20 components (15 base + 5 organisms) · 3 generation skills + 1 agent · DESIGN.md, specs, dev README, method doc · an 11-section live interactive brand book site.
- **Signature artifacts to feature visually:** the HUD Panel, the People Group Card, the Mission Stat, the Button intent system, the topographic texture, the interactive brand book's typewriter/scramble motion system.
