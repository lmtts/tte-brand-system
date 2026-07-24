---
name: brand-deliverables
description: >
  Builds structured, on-brand deliverables for To The Ends of The Earth (TTE) using the brand + design
  system: slide decks, pitch decks, presentation templates, section/layout structures, and the interactive
  brand guidelines (HTML) plus its PDF export. Activate for: "build a pitch deck", "make a slide template",
  "structure a presentation", "create the interactive brand guidelines", "export the brand book to PDF",
  "a one-pager for partners", or any request to compose a multi-section branded document from the system.
  NOT for social-media posts or finished marketing art — those need a designer; this skill produces the
  structure, templates, and system-faithful scaffolding a designer or dev finishes.
---

# TTE Brand Deliverables — Skill Reference

You compose **structured deliverables** that apply the TTE brand and design system faithfully. You are not decorating; you are assembling from a system. Every value comes from a token, every rule from the brand.

**Authoritative sources (read for values, never guess):**
- `01-brand-system/DESIGN.md` — the single brand instruction file (colors, type, voice, imagery, logo, components).
- `01-brand-system/tokens/tokens.json` — token source of truth (+ `.css` / `.tailwind.js` to consume).
- `01-brand-system/docs/TTE-BrandBook-Figma-Spec.md` — structure reference for the brand book.
- `03-dev-system/tte-ui/` — the coded component library (reuse its patterns; don't reinvent).
- For copy inside a deliverable → the **brand-copy** skill. For imagery → the **tte-imagery** skill.

## Non-negotiable visual rules (apply to every deliverable)

- **Dark-first.** Default surface is Black `#28272A`. White `#FFFFFF` for editorial/light layouts.
- **Fire Orange `#FE5442` is emphasis only** — one accent per view, never a dominant fill.
- **Type:** Mona Sans for display/headings (always UPPERCASE); Space Mono for HUD/data/labels/coordinates. Nothing else.
- **Radius `0`** everywhere (avatars/radios excepted).
- **Signature textures:** topographic contour overlay at 12% opacity; HUD panels for data.
- **Spacing** on the 4px scale; control heights 36/44/56.
- Every asset should pass the **Movement / Pulse / Mobilization / Scroll-Stopper** gates.

## How to choose a format

| Request | Build as |
|---------|----------|
| Interactive brand guidelines, shareable page, live component gallery | **HTML artifact** (self-contained, theme-aware) |
| Brand book / guidelines for print or stakeholders | HTML → **PDF export** |
| Pitch deck, partner deck, vision deck | **Slide deck** (HTML/reveal-style sections, or Figma Slides via MCP) |
| Reusable slide/section template | **Template** with token-bound placeholders |
| One-pager, partner report | Single structured page |

Prefer a **self-contained HTML artifact** for anything interactive or shareable: inline the tokens as CSS variables (from `tokens.css`), embed fonts or name them, and build sections from the component patterns. PDF = print the HTML artifact.

## Deck architecture (pitch / vision / partner)

Lead with tension, resolve with action. A strong TTE deck arc:

1. **Cold open** — a HUD readout of one people group (coordinates, pop, 0.1% gospel access). No "Welcome to".
2. **The impossible** — 3.6 billion unreached. Mission Stat treatment (huge Mona Sans number + Fire Orange tick).
3. **The inevitable** — Matthew 24:14. The prophetic certainty.
4. **The tension** — "The statistic feels impossible. The theology says the outcome is inevitable."
5. **The mechanism** — prayer as delegated authority + media on digital roads.
6. **The system / the work** — what TTE does; People Group Card gallery.
7. **The ask** — Pray / Give / Partner. Micro-commitment first.
8. **Close** — theological depth ("gratitude for His grace"). Logo + coordinates stamp.

Each slide: one idea, Mona Sans headline, Space Mono support/data, dark ground, one orange accent, generous space.

## Interactive brand guidelines (HTML)

Structure it as the brand's own atomic system, mirroring the Figma Foundation pages and DESIGN.md:

1. Cover — logo, one-line, coordinates stamp.
2. The brand in a sentence + archetype (Hero × Explorer).
3. Color — swatches with tokens, the emphasis-only rule for Fire Orange, biome accents.
4. Typography — Mona Sans + Space Mono specimens with the scale.
5. Logo — variants, clearspace, misuse.
6. Patterns — topographic overlay.
7. Imagery — the 4 layers + color grading (pull from `imagery/imagery-guide.md`).
8. Voice — We Are / We Are Not, terminology, editorial rules.
9. Components — the design system (Button intent, HUD Panel, People Group Card…).
10. Tokens — the consumable table.

Build it self-contained, theme-aware (dark default), with the topographic texture and HUD styling so the guidelines *look* like the brand they describe. Then offer a PDF export of the same.

## Rules of engagement

- **Reuse, don't reinvent.** Pull component patterns from `03-dev-system/tte-ui/src/components`. Pull copy from brand-copy, imagery prompts from tte-imagery.
- **Bind to tokens.** Never hardcode a hex or size that a token already defines.
- **Structure over polish.** This skill delivers system-faithful scaffolding; a designer finishes visual nuance. Say so when handing off.
- **Design decisions belong to the designer.** Propose structure and apply the system; surface creative forks rather than deciding them.
