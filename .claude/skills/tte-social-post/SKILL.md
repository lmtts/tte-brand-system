---
name: tte-social-post
description: >
  Creates finished social media posts for To The Ends of The Earth (TTE) in Figma — single image posts and
  carousels, 1080x1350 — from a brief (copy + design notes + image). Starts from the approved base pieces in
  Figma and applies a repertoire of recipes with ranges, not a fixed type scale or components. Use for
  "make a TTE post", "build the carousel", "apply this brief in Figma", or any social media art for TTE.
---

# TTE Social Post (v1, 19/10/2026)

Built from a reverse-engineering of Lucas's approved posts and tested in a controlled experiment
(E8: no context 1/10, skill only 6/10, full system 9/10). Experiment record (Portuguese):
`C:\.jarvis\projects\empreendimentos\ideias-saas-startup\design-as-a-service\e8-teste-motor\`.

## Principle

Social media art has an artistic side. **There is no type scale, no default margin and no texture
component for posts.** The coded design system (text styles, spacing tokens) is for site and app work and
makes posts rigid. Posts have (1) **fixed rules**, always true, and (2) a **repertoire of recipes with
ranges**, chosen per brief, image and mood. The Figma base pieces are the starting point: new posts change
a lot, but start from them.

**Scoped exception to the brand agent's general rules:** in social posts, Fire Orange may become the main
color (the light duotone mood), and sizes, margins and texture values are chosen by eye within the ranges
below instead of tokens. Colors still use the file's color variables whenever possible.

## Inputs

- **Copy** (headline and supporting lines). Use it exactly; add no copy.
- **Design notes** (mood, treatment, image).
- **Image**, curated by Lucas. If not available yet, use a placeholder and name the layer `PLACEHOLDER — swap / Photo`.
- Format: 1080 × 1350.

## Lessons from test round 2 (20/10/2026)

- **A template is a starting point, not a rule.** Take its system (type voices, recipes, micrographics, rhythm), but **compose from the image**: where the subject is, where the negative space is. Do not copy a title treatment or position if the image does not support it (round 2 cover: the subject covered most of the title and left empty space).
- **Frame the photo for the subject first:** check headroom, crop and where the face lands before placing type.
- **Micrographics contain the text:** HUD rules and lines must span the full text; text never leaks past the line ends. Scale graphics and their width to fill the area they claim.
- **Carousel typography:** body text is not small — stay near what the base pieces use (~26-30px body, larger for key lines). **Group by proximity** (title tight to its text; bigger gap between groups). No widows. Vary weight/size so slides read as posts, not reports.
- **Carousel semantics:** the **lockup goes on the last slide** (and on the cover only when the base template has it) — **never on inner slides**. The last slide carries the CTA (SAVE // PRAY // SHARE) and **no swipe arrows**.
- **Light text on a soft shadow** is also valid (the Figma Agent's single, rated equal) — the contrast order below still applies; choose by image.

## Process

1. **Read the brief** and classify the mood (dark and tactical / light and editorial / warm and human) and the role (prayer invite, data, teaser, editorial).
2. **Pick the closest base piece** (table below) and **read it in the file** before building: structure, layers, values.
3. **Pick the recipes** the brief needs. Every recipe used must have a job; none goes in as decoration.
4. **Build in the layer order** below, naming each layer by its role.
5. **Self-evaluate with the rubric**: screenshot → evaluate → fix, at most 2 rounds.
6. Deliver with a short note: base piece, recipes chosen and why.

## Base pieces (Figma page "06 · Social Media")

| Base piece | Mood | Start from it when |
|---|---|---|
| Post - Pray - people group (Fulani) | Warm, human, full-bleed photo | Prayer invite about a people group, with a face |
| Post - TTE podcast | Dark, scene, teaser | Announcement, launch, "coming soon" |
| Post - People Group (Thai) | Dark, HUD dossier | People group profile with data and map |
| Post - Text Stats | Dark, report | Numbers for a country or region |
| Halftone Orange Carousel | **Light**, orange/white duotone halftone | Devotional, prayer, freer and brighter content |
| Editorial/Theological Carousel | Light, small cut-out figures, lots of air | Reflective text, question → answer |
| Unreached Group / Biome / What is TTE / Who are UPGs | Narrative carousels | Arc: hook → context → terrain → barrier → tension → prayer → CTA |

## Fixed rules

1. **Palette:** Fire Orange `#FE5442`, Black `#28272A`, white. Use the file's color variables (`Text/*`, `Surface/*`, `HUD/*`, `Border/*`) whenever possible.
2. **Typefaces:** Mona Sans (Black for the commanding voice) and Space Mono (data, HUD, supporting text). Nothing else.
3. **Lockup** (TTE + Hope Channel signature with a vertical divider) on every single post (top or bottom depending on the image); in carousels, see rule 7.
   - **TTE bird:** always the version with the **white outline**. Never recolor the bird.
   - **Approved variation:** all-white bird with a **cut-out background** (negative space), as in "Post - Text Stats". The background is cut out, not painted black.
   - **Hope Channel symbol:** changes color to contrast with the background.
4. **Film grain** over everything: tiled texture, **10-11%, 12% at most**, adjusted to the photo.
5. **People with dignity:** protagonists, never scenery; no poverty spectacle, no stock-photo look.
6. **Radius 0** on boxes and labels.
7. **Carousel:** ">>>>>>>" on inner slides only; last slide with SAVE // PRAY // SHARE + lockup and no arrows; lockup never on inner slides.
8. **Layers named by role** (see Naming).
9. **Contrast** (below).

## Contrast (fixed; it beats the brief's preference)

Text color is decided by the **contrast measured behind the text**, not by the brief's preference.
**Order of fixes (Lucas, 20/10/2026):** (1) **change the text color** first; (2) move the text to a clean
area; (3) only if no color or position works, add a soft glow behind the text. **The image stays unedited
most of the time** — do not darken, lighten or recolor the photo to rescue text. Note the decision.

- Small and medium text (HUD, lead-in, body): **at least 4.5:1**. Large text (headline ≥ ~60px, Mona Black): **at least 3:1**. Measure at the worst point.

| Text | Background | Contrast |
|---|---|---|
| `#28272A` | white | 14.9:1 |
| `#28272A` | `#FE5442` | 4.6:1 (at the limit for small text) |
| white | `#28272A` | 14.9:1 |
| white | `#FE5442` | 3.2:1 — **large text only** |

In the **orange duotone halftone** (orange in Screen over the photo) no pixel is darker than `#FE5442`, so
`#28272A` text is safe anywhere on it and white text is not.

## Typography (no scale; roles and observed ranges at 1080px)

| Role | Typeface | Letter spacing | Observed sizes |
|---|---|---|---|
| Commanding voice (headline) | Mona Sans Black, uppercase | negative, −1% to −6% | 71-123 |
| Lead-in that sets up the headline | Space Mono Regular, uppercase | positive in free posts (+10% to +20%) | 34-50 |
| HUD, data sheet, micrographics | Space Mono, uppercase | **negative, ~−5%** | 12-23 |
| Section label ("THE TERRAIN //") | Space Mono Bold | +6% | ~22 |
| Body text | Space Mono Regular | 0% | ~26 |
| Big number or title in Space Mono | Space Mono Bold | −3% to −6% | 41-123 |
| Supporting text in free/ambient posts | Space Mono | **positive** | by eye |

Sizes are reference, not rule: decide by eye. **No widows:** never leave a short word alone at the end or
start of a line (e.g. "MISSION. A"); break by meaning.

## Recipe repertoire

| Recipe | What it does | When | Range / how | See |
|---|---|---|---|---|
| **Depth cut-out** | Subject passes over lines, text or graphics | Portrait with room for graphics behind; **any time text touches a person** | Duplicate the photo; on the top copy, remove the background (Figma) and keep only the person | Fulani post |
| **Orange duotone halftone** | Photo becomes orange/white dot screen | Light, devotional, bright mood | White BG → photo (grayscale) with the halftone shader copied from the Halftone Orange Carousel → `#FE5442` rectangle in **Screen** → grain 12%. **Photo-dependent:** the base values (contrast +0.97, highlights +0.65) were tuned for close-up hands in front light; backlit faces turn into flat orange. Prefer subjects in mid tones; tune shadows/highlights per photo; check the faces in a screenshot | Halftone Orange Carousel |
| **B&W dithering** | Portrait with document texture | People group profile, dossier | Photo in Screen + "Bayer 16x16" shader in Soft Light ~16% | Post People Group |
| **Topography** | Territory, explorer | Behind photo or flat color | Lines fading to transparent, ~50%; or pattern at 6-12%. Color taken from the photo, or orange | Fulani, podcast |
| **Soft glow** | Darkens or lights behind text without a box | Text over a busy photo | Ellipse `#28272A` (or scene color), blur 44-600 | Podcast, Text Stats |
| **Fade gradient** | Blends a photo or map into the ground | Photo or map ending mid-frame | `#28272A` gradient 100% → 0% | People Group |
| **HUD data sheet** | Proof it is real and specific | Post about a people, place, data | Space Mono −5%, lines completed with "////" to the margin, thin rules | Fulani, People Group, Bengali |
| **Micrographics** | Viewfinder texture; rhythm | Almost always, sparingly | "////", ">>>>>>>", corner marks (~31-37px), segmented bars, grid at 6-10%. External references welcome. **Align exactly** to what they frame | All |
| **Section label** | Organizes carousels | Inner slides | "LABEL //" in orange, outline with an angled tail | Bengali, Who are |
| **Orange as accent** | Marks what matters | Whenever something must stand out | Ornaments, key words, lines, topography, numbers. Can become the main color in the light duotone mood | All |

## Layer order (bottom to top)

1. Background (color or photo) · 2. Photo treatment (shader, duotone, gradients) · 3. Background textures
(topography, grid) · 4. Glows · 5. Text and HUD · 6. Depth cut-out (above what it should cover) ·
7. Micrographics and corners · 8. Lockup · 9. Grain (always last)

## Naming

By role, short: `BG`, `Photo`, `Photo / Cutout`, `Duotone`, `Topography`, `Glow`, `Headline`, `Lead-in`,
`HUD / Data`, `Micro / Slashes`, `Micro / Corners`, `Lockup`, `Grain`. Placeholder:
`PLACEHOLDER — swap / Photo`.

## Do not

- Invent text styles, scales or components for the post.
- Use typefaces, colors or radius outside the fixed rules; recolor the TTE bird.
- Pile up micrographics with no job.
- Put text over a photo without securing legibility, or let text cut through a person.
- Stock-photo aesthetics: posed smiles, studio light, over-smoothed skin.

---

# Evaluator rubric

Screenshot the piece and score each item. **A failed fixed rule is fixed before anything else.**

**A. Fixed rules** (pass / fail): palette · typefaces · lockup correct (white-outline bird, contrasting
Hope symbol) · grain 10-12% · radius 0 · layers named · people with dignity · contrast at the worst point.

**B. Craft** (0-2 each): (1) reads in 2 seconds · (2) one voice commands, the rest supports ·
(3) one clear protagonist · (4) accent with a job · (5) texture felt more than seen · (6) intentional air,
nothing touching the edge by accident · (7) alignment on shared axes, no widows · (8) legible over the
image, no text cutting a person · (9) faithful to the base piece without copying it.

**C. TTE brand tests** (0-2 each): **Movement** (does it mobilize?) · **Pulse** (urgency, not passive
comfort?) · **Dignity** (is the subject the protagonist?) · **Scroll-Stopper** (does it stop the scroll?).

Max 26 (B + C), with all of A passing.
