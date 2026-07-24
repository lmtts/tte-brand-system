# Button — Component Spec

**Layer:** Design System · Molecule
**Base:** shadcn/ui Button (Radix Slot + CVA)
**Code:** `03-dev-system/tte-ui/src/components/ui/button.tsx`

---

## The idea in one line

A TTE button carries the brand on two independent axes: **`intent`** decides the typeface (the button's *role*), and **`variant`** decides the visual treatment (the button's *colour*). Size is a third, independent axis.

---

## `intent` — the role (this is the TTE-specific axis)

The single most important rule. It extends the brand's existing type logic (Mona Sans = voice/display, Space Mono = HUD/data) down to the button level.

| `intent` | Typeface | Meaning | Use for |
|----------|----------|---------|---------|
| `mobilize` *(default)* | Mona Sans ExtraBold, 4% tracking | **The voice.** The brand speaking, calling someone to act. | Pray, Give, Join, Partner. Hero CTAs, campaign buttons, the loud emotional moments. |
| `operate` | Space Mono Bold, 8% tracking | **The instrument.** A control you operate once you're inside. | Filter, Export, View data, Next, Adjust. Buttons inside HUD panels, tables, toolbars, system/utility actions. |

**Governing principle:** *Mona Sans mobilizes, Space Mono operates.*

- `mobilize` is the **default**, so any unmarked button lands on the brand voice — the safe choice.
- `operate` must be chosen deliberately. Reach for it only when the button is a system/data control, not a call to action.
- **Never** cross the wires: a "Pray now" in Space Mono, or a table "Filter" in Mona Sans, breaks the system. The two typefaces are only valuable while the split stays disciplined.

> Naming note: the prop is `intent`, not `role` — `role` is a native ARIA attribute on `<button>` and must stay free for accessibility.

---

## `variant` — the visual treatment (independent of intent)

| `variant` | Treatment | Notes |
|-----------|-----------|-------|
| `default` | Fire Orange fill, white label | **Maximum emphasis. CTAs only.** Never a passive surface. White label was chosen over dark for visibility (contrast 3.18:1 — passes as large/bold text). |
| `outline` | Transparent, 30% foreground border → Fire Orange on hover | The workhorse on dark surfaces. |
| `secondary` | Low-opacity fill | Quiet, supporting actions. |
| `ghost` | No chrome until hover | Toolbars, dense UIs. |
| `link` | Fire Orange underline | Inline, text-like. |
| `inverted` | Solid white fill, dark label | For placement over photography. |

---

## `size`

| `size` | Height | Typical pairing |
|--------|--------|-----------------|
| `lg` | 56px | `mobilize` hero CTAs |
| `default` | 44px | `mobilize` standard |
| `sm` | 36px | `operate` system actions |
| `icon` | 44×44 | icon-only, mobilize context |
| `icon-sm` | 36×36 | icon-only, operate context |

Size is independent of intent — but the pairings above are the natural defaults (voice tends large, instrument tends small).

---

## Brand invariants (never overridden)

- **Radius 0** on every button.
- **UPPERCASE** always (both typefaces).
- **Fire Orange** appears only on `variant="default"` — it is maximum emphasis, never a resting surface.

---

## Examples

```tsx
// MOBILIZE — the voice (intent defaults to mobilize)
<Button size="lg"><Compass /> Join the mission <ArrowRight /></Button>
<Button><Target /> Pray now</Button>
<Button variant="outline">Give</Button>

// OPERATE — the instrument (intent is explicit)
<Button intent="operate" size="sm"><Download /> Export data</Button>
<Button intent="operate" size="sm" variant="outline"><Filter /> Filter</Button>
```

---

## Open follow-ups

- Mirror `intent` × `variant` × `size` as Figma component properties when the Design System syncs to Figma (Phase 3.5).
- Revisit Fire Orange label contrast if WCAG AA for normal text becomes a hard requirement (dark label = 4.53:1).
