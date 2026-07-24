# TTE Dev System

The developer-facing layer of the **To The Ends of The Earth** brand system. This is where the brand becomes running code: design tokens in every format, and a React component library that carries the brand by construction.

It is the third of three connected layers:

```
Brand System   →   Design System   →   Dev System   (you are here)
(identity)         (translation)        (code)
```

Nothing here invents brand decisions. Colors, type, and rules come from `01-brand-system`; this layer consumes them.

---

## Quick start

```bash
cd 03-dev-system/tte-ui
npm install
npm run dev        # → http://localhost:5173  (the live component showcase)
npm run build      # type-check + production build
```

The dev server opens a single page (`src/App.tsx`) that renders the entire system — foundations, base components, and the TTE organisms — as living documentation.

---

## Project layout

```
03-dev-system/
├── README.md                      ← this file
└── tte-ui/                        ← React + Vite + TypeScript + Tailwind v4
    ├── src/
    │   ├── index.css              ← the token layer (see below) + Tailwind theme
    │   ├── App.tsx                ← the living showcase
    │   ├── lib/utils.ts           ← cn() helper
    │   ├── assets/                ← topographic-pattern.svg
    │   └── components/
    │       ├── ui/                ← base components (shadcn/ui, brand-passed)
    │       └── tte/               ← TTE organisms (the signature layer)
    └── components.json            ← shadcn config
```

---

## Tokens — how to consume

The **single source of truth** is `01-brand-system/tokens/tokens.json`. It is mirrored, by hand and always in sync, into four consumable formats:

| File | For | Import |
|------|-----|--------|
| `tokens.json` | tooling / source of truth | — |
| `tokens.css` | any CSS project | `@import` the custom properties |
| `tokens.scss` | Sass projects | `@use` the `$`-variables |
| `tokens.tailwind.js` | Tailwind projects | spread into `theme.extend` |

```js
// tailwind.config.js
const tte = require('../01-brand-system/tokens/tokens.tailwind.js')
module.exports = { theme: { extend: tte } }
```

> **Sync rule (brand Principle 7):** when any token value changes, all four files **and** this project's `src/index.css` **and** the Figma variables must change in the same action. Never leave two sources of truth disagreeing.

### The token layers

`primitives` (raw values, never used directly) → `brand` (what each value means) → `semantic` (where/how it's used). Always reference the semantic layer in components, never a raw hex.

---

## Non-negotiable rules

These are enforced through the token layer, so a new component inherits them for free:

1. **Color** — Fire Orange `#FE5442` is **emphasis only**, never a dominant surface. Black `#28272A` is the default background (the system is **dark-first**). White `#FFFFFF` for editorial/text on dark.
2. **Typography** — only **Mona Sans** (display/headings, always UPPERCASE) and **Space Mono** (HUD/data/body). No other typeface.
3. **Radius `0`** on everything. `--radius-*` are all `0px`, so every component is angular by default. Exceptions: circular avatars and radio buttons (usability convention).
4. **Control size scale** — one tokenized height everywhere: `control-sm` 36 · `control` **44 (default)** · `control-lg` 56. Button, Input, and Select all size from it, so `default` means the same height across the system.
5. **Icons** — Lucide, with original rounded terminals preserved (documented exception to radius 0 — forcing square caps would deform the glyphs).

---

## Component library

### Base — `src/components/ui/`

shadcn/ui components with a TTE brand pass. Radius, color, and font come from the token layer automatically; only brand-specific decisions were hand-tuned.

| Component | Brand notes |
|-----------|-------------|
| **Button** | Two axes — see below. |
| **Badge** | HUD tag: Space Mono, angular. Variants: default / secondary / outline / accent (fire outline) / ghost. |
| **Input / Select** | Share the control size scale via `size` prop. |
| **Checkbox / Switch** | Angular (radius 0), Fire Orange when active. |
| **Radio** | Circular (documented exception). |
| **Tabs** | HUD wayfinding — Space Mono labels, Fire Orange active underline. |
| **Card / Dialog / Tooltip / Table / Textarea / Separator / Label** | Inherit tokens; CardTitle is Mona Sans. |

### The Button's two axes

The most important API in the system. `intent` fixes the typeface by **role**; `variant` fixes the visual treatment; they are independent.

```tsx
// MOBILIZE — the brand voice (Mona Sans). intent defaults to this.
<Button size="lg"><Compass/> Join the mission <ArrowRight/></Button>

// OPERATE — the instrument (Space Mono). System / HUD / data actions.
<Button intent="operate" size="sm" variant="outline"><Filter/> Filter</Button>
```

Rule: **Mona Sans mobilizes, Space Mono operates.** `mobilize` is the safe default; reach for `operate` only for system/data controls. Full spec: [`02-design-system/specs/button.md`](../02-design-system/specs/button.md).

### Organisms — `src/components/tte/`

The components no kit ships. They compose the base primitives.

| Component | What it is |
|-----------|-----------|
| **`<HudPanel>` / `<HudRow>`** | The signature tactical data readout — fire live-tick, Space Mono rows, `accent` for the value that matters. |
| **`<PeopleGroupCard>`** | The unreached-people dossier. Falls back to the topographic texture (never a grey box — *dignity over pity*) until an `image` is supplied. |
| **`<MissionStat>`** | The impossible number in Mona Sans, fronted by a Fire Orange tick. |
| **`<BiomeBadge>`** | Biome as a HUD tag; biome color is a secondary accent (swatch only). |
| **`<TopographicBackground>`** | The topographic contour texture at 12% opacity behind any content. |

Specs: [`02-design-system/specs/components-base.md`](../02-design-system/specs/components-base.md) · [`02-design-system/specs/organisms.md`](../02-design-system/specs/organisms.md).

---

## Figma library

The same components exist as a Figma library in **TTE — Brand System**, bound to the same variables and text styles:

- Page **⬡ Components** — Button, Badge, BiomeBadge, Checkbox, Switch, Radio, Input (as variant sets)
- Page **⬢ TTE Organisms** — HUD Panel, Mission Stat, People Group Card

Figma and code are the two faces of one system; keep them in sync when either changes.

---

## Not yet (documented follow-ups)

- **Motion** — duration/easing tokens + named patterns. Components currently use shadcn defaults; a dedicated motion pass is planned.
- **Structural components in Figma** — Select, Dialog, Tabs, Tooltip, Table (built in code; not yet mirrored as Figma components).
- **Photography** — real images replace the topographic placeholders in People Group Card / Imagery.
- **Distribution** — this is a consumable in-repo library, not a published npm package.
