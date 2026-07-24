# Brand Book — New Session Kickoff Prompt

Copy everything below the line into a fresh Claude Code session opened in this repository.

---

I want to build the **To The Ends of The Earth (TTE) Brand Book** in three synchronized formats:

1. **Interactive online** — a self-contained website / HTML artifact, navigable like a real brand site.
2. **PDF** — an elegant export of the same, for stakeholders and print.
3. **Figma** — the brand book laid out as pages in Figma.

The whole brand is already systematized in this repo. Your job is to **translate what already exists into an elegant brand book that itself looks like the TTE design system** — the brand book must embody the brand it documents.

## Read these first (the authoritative sources)

- `README.md` — what this repo is and how it's organized.
- `01-brand-system/DESIGN.md` — the single authoritative brand file (colors, type, voice, imagery, logo, components). This wins on any conflict.
- `01-brand-system/tokens/tokens.json` (+ `.css` / `.tailwind.js`) — exact token values.
- `01-brand-system/docs/brand-quick-reference.md` and `brand-voice-guidelines-tte.md` — context and voice.
- `01-brand-system/imagery/imagery-guide.md` — the 4-layer imagery system.
- `02-design-system/specs/` — component specs (button, components-base, organisms).
- `03-dev-system/tte-ui/src/components/` — the coded components to reference and reuse (ui/ base + tte/ organisms).
- `01-brand-system/docs/TTE-BrandBook-Figma-Spec.md` — existing structure notes for the brand book.
- Figma: **TTE — Brand System** (fileKey `pP8BgpXQnDWnjtvE1dX6V3`) has the Foundation pages and component library to pull from.

## Use the skill

Load and follow the **`brand-deliverables`** skill (in `.claude/skills/`). For any copy inside the book, use **`brand-copy`**; for imagery, **`tte-imagery`**. Or just invoke the `tte-brand-agent`.

## Non-negotiable design rules (the book must obey them)

- **Dark-first.** Default surface Black `#28272A`. White `#FFFFFF` for editorial spreads.
- **Fire Orange `#FE5442` is emphasis only** — one accent per view, never a dominant fill.
- **Type:** Mona Sans for display/headings (UPPERCASE); Space Mono for HUD/data/labels/coordinates. Nothing else.
- **Radius 0** everywhere (avatars/radios excepted).
- **Signature textures:** the topographic contour overlay at 12% opacity; HUD panels for data.
- Everything binds to **tokens** — never hardcode a value a token already defines.

## Suggested structure (mirror the atomic system + DESIGN.md)

1. Cover — logo, one-line, coordinates stamp, topographic texture.
2. The brand in a sentence + archetype (Hero × Explorer) + the core tension (impossible vs inevitable).
3. Color — swatches with tokens, the emphasis-only rule, biome accents.
4. Typography — Mona Sans + Space Mono specimens with the full scale.
5. Logo — variants, clearspace, misuse.
6. Patterns — the topographic overlay.
7. Imagery — the 4 narrative layers + color grading (with example prompts via `tte-imagery`).
8. Voice — We Are / We Are Not, terminology, editorial rules, proven phrases.
9. Design System — the components (Button intent axis, HUD Panel, People Group Card, Mission Stat, Biome Badge).
10. Tokens — the consumable reference.

## How to work

- Follow the LOOP: **plan first, get my approval, then build**, one section at a time. Show me each section before moving on.
- I am the designer. Propose structure and apply the system; bring creative forks to me rather than deciding them.
- Start by proposing: (a) the format order to tackle first (I lean interactive HTML first, then PDF from it, then Figma), and (b) the full section list for my sign-off.

Begin by reading the sources above and giving me a plan.
