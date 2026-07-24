# Base Components — Brand Pass (Phase 3.2)

**Layer:** Design System · Atoms & Molecules
**Base:** shadcn/ui (Radix primitives)
**Code:** `03-dev-system/tte-ui/src/components/ui/`

---

## The one thing that makes this cheap

Radius, color, and font are governed by the **token layer** (`src/index.css`), not by each component. Because `--radius-sm/md/lg/xl` are all `0px`, every shadcn component that uses `rounded-md`/`rounded-lg`/`rounded-xl` is **already angular** with zero edits. The brand pass only touches the handful of spots that hardcode radius or color, plus typography role.

Confirmed by audit: after the pass, the only `rounded-full` left in the entire library is the radio button (intentional — see below).

---

## Control size scale (single source of truth)

All interactive controls size from one tokenized scale in `index.css`, so `default` means the same height everywhere and any new control auto-aligns:

| Token | Height | Utility | Use |
|-------|--------|---------|-----|
| `--spacing-control-sm` | 36px | `h-control-sm` / `size-control-sm` | Dense · HUD · operate |
| `--spacing-control` | **44px** | `h-control` / `size-control` | **System default** |
| `--spacing-control-lg` | 56px | `h-control-lg` | Hero CTAs |

Applied to **Button**, **Select** (trigger), and **Input** — each exposes a `size` prop over the same scale. Horizontal padding stays component-appropriate (buttons wider than fields); only **height** is unified, which is what makes controls line up in a row.

- Tailwind v4 generates `h-control*` / `size-control*` utilities from the `--spacing-*` tokens, so there are no hardcoded pixel heights left in any control (audited: zero `h-9`/`h-11`/`h-14`).
- **Input note:** the native `<input size>` attribute (legacy char-width) is omitted so `size` can carry the design-system scale — same trade documented for the Button's `role`.
- Textarea stays multi-line (`min-h`), outside the single-line tier.

---

## Per-component decisions

| Component | Brand pass | Notes |
|-----------|-----------|-------|
| **Button** | Full — see `button.md` | `intent` (mobilize/operate) governs typeface. |
| **Badge** | Rewritten as a **HUD tag** | Space Mono, uppercase, `rounded-none`. Variants: `default` (Fire Orange fill), `secondary`, `outline` (HUD default), `accent` (Fire Orange outline, e.g. "0.1% ACCESS"), `ghost`. |
| **Card** | `CardTitle` → Mona Sans ExtraBold uppercase | Body/description stay Space Mono. Container angular via token. |
| **Tabs** | Rewritten as **HUD wayfinding** | Hairline track, Space Mono uppercase labels, **Fire Orange underline** marks the active tab. Operate register (tabs = navigation). |
| **Checkbox** | `rounded-[4px]` → `rounded-none` | Checked state = Fire Orange fill. |
| **Switch** | `rounded-full` → `rounded-none` (track + thumb) | Angular toggle, reads like field hardware. Checked = Fire Orange. **Reversible if the designer prefers a pill.** |
| **Radio** | **Kept circular** (documented exception) | Circularity signals single-choice and keeps radios distinct from square checkboxes. Same class of exception as circular avatars. Dot = Fire Orange. **Flagged for designer confirmation.** |
| **Tooltip** | Space Mono uppercase, `rounded-none` arrow | White (`foreground`) surface, dark text. Reads like a HUD readout. |
| **Select / Dialog / Input / Textarea / Table** | No edits needed | Inherit zero radius + tokens automatically. Text defaults to Space Mono via `body` font. |

---

## Two decisions to confirm with the designer

1. **Switch shape** — currently angular (`rounded-none`), to honor the tactical/angular brand. The conventional pill is one line away if you prefer it.
2. **Radio circularity** — kept round as a usability exception (distinguishes from checkbox). Can be squared for strict radius-0 if you accept that radios and checkboxes then differ only by their inner mark.

Both are isolated one-line changes.

---

## Still to brand later

- **Biome Badge** (Phase 3.3 organism) will extend Badge with the four biome accent colors.
- Figma component sync (Phase 3.5) will mirror these variants as Figma properties.
