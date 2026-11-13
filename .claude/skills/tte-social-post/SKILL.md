---
name: tte-social-post
description: >
  Creates finished social media posts for To The Ends of The Earth (TTE) in Figma — single image posts and
  carousels, 1080x1350 — from a brief, using the TTE Post Kit (page "06.1 · Post Kit": slot-named templates per
  family, fixed-mark components, fichas with copy limits, the FOCUS image protocol). Use for "make a TTE post",
  "build the carousel", "apply this brief in Figma", "Tonight, Pray for the X", or any social media art for TTE.
---

# TTE Social Post (v2, 12/11/2026)

v1 (19/10/2026) composed from base pieces and recipe ranges: singles scored 7.5/10, carousels 6.5/10. The
carousels failed because every slide was composed from scratch, layers had no roles, templates did not say
what was fixed, and the agent did not know where the subject was. v2 works from the **Post Kit**: templates
with named slots, components for the fixed marks, a ficha per template, and the **FOCUS** rectangle drawn by
Lucas over the subject.

## Sources of truth (read before building)

| What | Where |
|---|---|
| Kit index, components, treatments, general rules | `05-applications/posts-template/kit/README.md` |
| One ficha per template (when, fixed, slots, copy limits, image rules) | `05-applications/posts-template/kit/<F1…S4>.md` |
| What the finished template looks like | `05-applications/posts-template/kit/refs/*.jpg` |
| Brief format and the 4-step flow | `05-applications/posts-template/kit/brief-template.md` |
| Image protocol (FOCUS) | `05-applications/posts-template/kit/protocolo-focus.md` |
| **Photo + text composition** (subject separation, expand, lockup contrast, Magnific pipeline, checker) | `05-applications/posts-template/kit/composicao-foto-texto.md` — read before placing any photo |
| Composition checker / mask merger | `05-applications/posts-template/tools/check_composition.py`, `merge_masks.py` |
| Generated images (Editorial figures, maps) | `.claude/skills/tte-imagery/references/magnific-social-recipes.md` |
| Figma templates | file `QJpddccb8biAnsDiSKjcNf`, page `06.1 · Post Kit` (`1002:316`) |

Figma is the visual source; the fichas are the rule source. If they disagree, ask Lucas, then update both.

## Principle

Social art has an artistic side: **no type scale, no text styles, no spacing tokens** (social exception in the
root `CLAUDE.md`). Sizes, letter spacing, margins and texture values are set by eye, starting from the
template's values. What is fixed: palette (via color variables when possible), Mona Sans + Space Mono only,
radius 0, lockup rules (bird never recolored), legible contrast.

**Never edit the templates or the published pieces.** Always duplicate the template into the page named in
the brief (default: Test page `754:2`).

## Process

1. **Read the brief** (format in `brief-template.md`). Missing a required field → ask, do not guess.
   Copy is exact: never write, cut or rephrase copy. If copy exceeds a slot's limit in the ficha, tell Lucas
   which slot and by how much.
2. **Read the template's ficha and its ref image.**
3. **Pass 1 — set up** (Figma):
   - duplicate the whole template (a carousel stays one wide frame with 1080×1350 slides inside);
   - fill every `SLOT /` text; leave `Fixed /` untouched;
   - put images in `SLOT / Photo` (and the same image in `SLOT / Photo · Cutout`) by copying the `imageHash`
     from the node Lucas gave, or with `upload_assets`; do not frame them yet;
   - generate images marked "gerar" with the Magnific recipes (check cost first, read the result before use);
   - report what Lucas must do: FOCUS per photo, background removal per Cutout (UI only).
4. **Pass 2 — compose** after FOCUS (follow `protocolo-focus.md`): frame the photo to the template's target
   position (only with `· livre`), pick the variant by free area, keep all text and HUD outside FOCUS (except
   headline behind the subject with `· recorte`), decide text color by contrast, hide FOCUS as
   `FOCUS (oculto)`.
   **Prepare the image for the text, never rescue text with big gradients** (round 3 lesson): no clean area →
   expand the photo (Magnific, exact canvas); busy background or subject near text → subject separation
   (B&W + dither background, glow, colour cut-out). Recipes and values in `composicao-foto-texto.md`.
5. **Fit text and boxes** (see Figma mechanics), then run `check_composition.py --plate` on every slide with
   a photo (plate = render with text hidden) and the **delivery checklist**.
6. **Self-review**: screenshot → compare with the ref image → rubric → fix. At most 2 rounds.
7. **Deliver** with a short note: template + variant, where FOCUS landed and what it decided, anything that
   needs Lucas (copy over limit, missing image, contrast fallback used).

## Figma mechanics

- Load fonts from the node's own segments before editing text (`getStyledTextSegments(['fontName'])`).
- **Fit-to-width headlines** (e.g. S1: headline = width of lead-in + HUD, ~902px, x 89 → 991):
  left-align, `fontSize = fontSize × target / width`, repeat once. If one line drops below ~80px, break into
  2 lines at the natural split ("PRAY FOR THE" / "<PEOPLE>") and fit the longest line.
- **Vector boxes** (HUD Box, Question Box, Title Box, boxed labels, reference pill): never let text cross the
  edge — resize the **box** with the text (and move the corner marks / tail with it).
- **HUD lines**: complete with "/" to the right margin; the rule lines span the full text.
- **Components**: keep instances; switch variants instead of restyling.
  - `Lockup / Compact`: Bird = Laranja contorno branco (default: Biomes, S1, S2) or Branco vazado (S4).
  - `Lockup / Full`: Fundo = Escuro or Claro (Editorial, Halftone).
  - `Micro / Swipe`: override the text color to the background (white on photo/dark, #28272A on off-white).
  - `Texture / Grain`: always the top layer and **always locked** (`locked = true`); change only the instance opacity (9–12%).
- **Subject first, text adapts:** size the subject as a big protagonist first (medium/short portrait, head
  ~25–40% of slide width), then pick the text layout that lives with it — full-width text on top with the
  subject below, or a narrower text block with the subject large beside it (slight rotation allowed). Never
  shrink the subject to fit the template's text column. See `composicao-foto-texto.md`.
- **Elements crossing slides** (Editorial rich figure, F5 maps/photos): duplicate into the neighbor slide at
  x − 1080 so the seam matches.
- **Editorial figure** = two layers with the same image: Multiply below, Screen with the dither shader above.
- **Halftone**: copy the shader from an existing slide; tune shadows/highlights per photo; check faces.
- Figma MCP drops with more than 2 parallel screenshots: max 2 per message.

## Fixed rules

1. Palette: Fire Orange `#FE5442`, Black `#28272A`, white — color variables when possible.
2. Typefaces: Mona Sans (commanding voice, uppercase) and Space Mono (HUD, data, body). Nothing else.
3. Lockup per the template; TTE bird never recolored; divider + Hope Channel symbol take the colour that
   contrasts with the background **behind them** (not the text's colour by default), always the same colour as each other.
4. Carousel semantics: swipe `>>>>>>>` on inner slides only; last slide = CTA + SAVE // PRAY // SHARE +
   Lockup / Full, no swipe; no lockup on inner slides.
5. Grain on every slide/single, top layer.
6. Radius 0.
7. People with dignity: protagonists, never scenery; no poverty spectacle, no stock look.
8. Layers keep their kit names; new layers are named by role.
9. Contrast (below).

## Contrast (beats the brief's preference)

Order of fixes (Lucas): (1) change the text color; (2) move the text to a clean area; (3) only then a soft
glow. The photo stays unedited. Small/medium text ≥ 4.5:1, large text (≥ ~60px Mona Black) ≥ 3:1, measured at
the worst point.

| Text | Background | Contrast |
|---|---|---|
| `#28272A` | white | 14.9:1 |
| `#28272A` | `#FE5442` | 4.6:1 (limit for small text) |
| white | `#28272A` | 14.9:1 |
| white | `#FE5442` | 3.2:1 — large text only |

On the orange duotone halftone, `#28272A` text is safe anywhere; white is not.

## Typography by eye (observed ranges at 1080px)

| Role | Typeface | Letter spacing | Sizes |
|---|---|---|---|
| Headline | Mona Sans Black, uppercase | −1% to −6% | 71–123 |
| Lead-in | Space Mono Regular, uppercase | +10% to +25% | 34–63 |
| HUD / data / micrographics | Space Mono, uppercase | ~−5% | 12–23 |
| Section label | Space Mono Bold | +6% | ~22 |
| Body | Space Mono Regular | 0% | ~26–30 (never smaller than the template) |
| Big number / Space Mono title | Space Mono Bold | −3% to −6% | 41–146 |

No widows: never leave a short word alone on a line; break by meaning. Group by proximity (title tight to its
text, bigger gap between groups).

## Delivery checklist (errors that repeated in tests)

- [ ] Copy is exact and fits the ficha limits; no widows.
- [ ] Text never crosses a box edge; boxes and HUD rules resized with the text.
- [ ] Micrographics aligned exactly to what they frame; nothing leaks past line ends.
- [ ] Body text not smaller than the template.
- [ ] Nothing covers the FOCUS (except headline behind a cut-out subject); FOCUS hidden, not deleted.
- [ ] Variant matches the image (Biomes cover a/b, Editorial simple/rich per brief).
- [ ] Lockup: right variant, right slide (compact on cover/singles, full only on the last slide).
- [ ] Swipe only on inner slides, color matched to the background.
- [ ] Grain is the top layer on every slide, and locked.
- [ ] Subject is a big protagonist (no tiny subject with empty sky); text layout adapted to it.
- [ ] Contrast checked at the worst point.
- [ ] Generated maps checked against a real map.

## Do not

- Edit templates or published pieces; invent copy; add text styles or new components.
- Use typefaces, colors or radius outside the fixed rules; recolor the TTE bird.
- Compose a slide from scratch when the kit has a slide type for it.
- Pile up micrographics with no job.

---

# Evaluator rubric

Screenshot the piece and score each item. **A failed fixed rule is fixed before anything else.**

**A. Fixed rules** (pass / fail): palette · typefaces · lockup correct · grain on top · radius 0 · layers named
· people with dignity · contrast at the worst point.

**B. Craft** (0-2 each): (1) reads in 2 seconds · (2) one voice commands, the rest supports · (3) one clear
protagonist · (4) accent with a job · (5) texture felt more than seen · (6) intentional air, nothing touching
the edge by accident · (7) alignment on shared axes, no widows · (8) legible over the image, no text cutting a
person · (9) faithful to the template's ref image without being a copy.

**C. TTE brand tests** (0-2 each): **Movement** (does it mobilize?) · **Pulse** (urgency, not passive
comfort?) · **Dignity** (is the subject the protagonist?) · **Scroll-Stopper** (does it stop the scroll?).

Max 26 (B + C), with all of A passing.
