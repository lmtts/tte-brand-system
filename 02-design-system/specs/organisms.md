# TTE Organisms — Component Spec (Phase 3.3)

**Layer:** Design System · Organisms
**Code:** `03-dev-system/tte-ui/src/components/tte/`
**Depends on:** the branded base (`src/components/ui/`) + tokens

These are the components no UI kit ships. The base layer made shadcn *look* like TTE; this layer makes it *be* TTE. Each organism composes already-approved primitives — nothing here reinvents a button or a badge.

---

## HUD Panel — the signature

`hud-panel.tsx` → `<HudPanel title status>` + `<HudRow label value accent>`

The tactical "mission intel" readout. A Fire Orange live-tick bar on top, a Space Mono title fronted by a small orange square, an optional status badge, then `LABEL : VALUE` rows on hairline separators. `accent` renders a value in Fire Orange (for the number that matters, e.g. gospel access). Value accepts any node — a `<BiomeBadge>` drops straight into a row.

```tsx
<HudPanel title="Target · Tajik" status="Unreached">
  <HudRow label="Est. pop" value="12,000,000" />
  <HudRow label="Gospel access" value="0.1%" accent />
  <HudRow label="Biome" value={<BiomeBadge biome="desert" />} />
  <HudRow label="Coords" value="33.0°N 65.0°E" />
</HudPanel>
```

## People Group Card — the dossier

`people-group-card.tsx` → `<PeopleGroupCard name region population access biome status coords image />`

The unreached people group as a field dossier. Media area (photo, or the topographic texture as a dignified placeholder — never a grey box, *dignity over pity*) carrying the status + biome tags and coordinates; Mona Sans name; a HUD data strip; and the mobilize/operate action pair (Pray now · View data). Drop `image` in when photography exists; until then the topographic field stands in.

## Mission Stat — the impossible number

`mission-stat.tsx` → `<MissionStat value label size />`

Mona Sans display at maximum weight, fronted by a Fire Orange tick. Emphasis without flooding the layout with orange (orange is never a dominant surface). `size="lg"` for hero placement. Value accepts a node, so a single word can be wrapped in Fire Orange if wanted.

## Biome Badge — the secondary accent, contained

`biome-badge.tsx` → `<BiomeBadge biome="desert|arctic|city|forest" />`

A HUD tag whose only colour is a small biome swatch. Enforces the brand rule that biome colours are a **secondary accent** — they appear as the swatch, never as the tag's fill or as a rival to Fire Orange. Base for richer biome treatments later.

## Topographic Background — the texture layer

`topographic-background.tsx` → `<TopographicBackground opacity>children</TopographicBackground>`

Lays the topographic contour pattern (`src/assets/topographic-pattern.svg`, the vector from Phase 2) behind its children at the canonical 12% opacity. Ships Fire Orange, so on dark it reads as faint fire contours — the signature TTE texture. Used standalone as a section band and inside the People Group Card's placeholder.

---

## Design decisions carried in

- **Fire Orange stays emphasis, never surface** — expressed as ticks, accents, and single-value highlights across every organism, never as a large fill.
- **Two registers hold:** Mona Sans for names/impact (MissionStat value, card name), Space Mono for all data/HUD/labels.
- **Dignity over pity:** the card's fallback is the brand's own texture, not an empty grey rectangle.

## Gotcha — HudRow inside a padded container

`HudRow` carries its own horizontal padding (`px-4`) so it works standalone inside `HudPanel`. When embedded in an already-padded container (e.g. the People Group Card body), pass `className="px-0"` on the rows so labels/values align flush with the surrounding content instead of double-padding. All content in the card aligns to a single 20px inset (media overlay `p-5`, body `p-5`, rows `px-0`).

## Follow-ups

- Swap topographic placeholders for real photography as it arrives (same `image` prop).
- Mirror these organisms as Figma components in Phase 3.5.
