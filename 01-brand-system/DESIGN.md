# DESIGN.md — To The Ends of The Earth (TTE)

> **What this file is.** This is the single, authoritative brand instruction file for generating any TTE asset — copy, imagery, layouts, social posts, or UI. An AI or human reading this file should be able to produce on-brand work without consulting anything else. Where this file conflicts with older documents, **this file wins**. All visual values here are validated against the TTE Figma source of truth.

> **Scope.** This version covers the **Brand System** (identity, voice, color, type, imagery, logo). Design System (components) and Dev System (code) will be appended as those layers are built.

---

## 0. Quick Brand Snapshot

- **Name:** To The Ends of The Earth (TTE)
- **Parent:** Hope Channel International (sub-brand with endorsement)
- **Category:** Global mission mobilization movement
- **Archetype:** Explorer × Hero
- **One line:** TTE mobilizes a global community of prayer warriors and investors for the most unreached people groups on the planet.
- **Theological engine:** Acts 1:8 — the Holy Spirit is the protagonist.
- **Core tension:** The statistic feels impossible (3.6 billion unreached). The theology says the outcome is inevitable (Matthew 24:14). The brand lives in that gap.
- **Feeling to produce:** Intense, gritty, spiritually weighty. Transport the audience from the safety of their screen to the front lines of the impossible.

---

## 1. Non-Negotiable Visual Rules

These rules must never be broken when generating any visual asset.

1. **Color:** Use only the approved palette (Section 4). Fire Orange `#FE5442` is for maximum emphasis only — never a dominant background on long layouts. Black `#28272A` is the default immersive background. White `#FFFFFF` is for editorial/light layouts and text on dark.
2. **Typography:** Only Mona Sans (display/headings) and Space Mono (HUD/data/body). No other typeface, ever. Mona Sans is always UPPERCASE in display use.
3. **Border radius:** `0px` on everything. The brand is angular and tactical. Exception: circular avatars only (`9999px`).
4. **Tokens, not hardcoded values:** Every color and type decision references a token. Never invent a hex value.
5. **Two distinct palettes — never confuse them:**
   - *Identity palette* (logos, type, graphics, UI): White is pure `#FFFFFF`.
   - *Imagery palette* (photography only): White is Warm White `#F4F3F1`. No TTE photograph ever contains pure white — the light is always earned, "dirty," real.
6. **Hope Channel lockup:** Present in all official materials (co-brand or "Powered by Hope Channel" endorsement).

---

## 2. Brand Voice

Voice is constant across every channel. Tone flexes by context (Section 7).

### We Are / We Are Not

| We Are | We Are Not |
|--------|------------|
| **Urgent** — every sentence leans forward, as if 3.6 billion eternal destinies depend on what happens next | **Panicked or manipulative** — never guilt-trip or manufacture false urgency; the real urgency speaks for itself |
| **Theologically grounded** — every claim anchored in Scripture, chapter and verse; precise, Adventist, eschatological | **Preachy or academic** — theology as a weapon of clarity, never a lecture; make the deep accessible with simple words |
| **Gritty and authentic** — dust on the lens over studio polish; raw, unvarnished, human | **Low-budget or careless** — grit is deliberate, executed at Netflix/HBO quality; authenticity earned through excellence |
| **Dignifying** — the unreached portrayed as proud, ancient cultures worthy of respect | **Pitying or patronizing** — never "poverty pity"; never reduce a people group to a sob story |
| **Mobilizing** — every piece ends with a clear path to action; recruit intercessors and investors | **Passive or merely informational** — a mobilization engine, never a documentary archive |
| **Spirit-centered** — the Holy Spirit is the protagonist, the power source, the fire on the wing | **Human-centered** — celebrate the anonymous, invisible work of prayer warriors |
| **Courageous** — the language of frontier, conviction, holy risk | **Reckless or flippant** — courage serves the mission; never romanticize danger |

### Brand personality (if TTE were a person)
A seasoned field operative who has spent decades on the spiritual front lines. Dust on their boots, fire in their prayers. Speaks with the quiet authority of someone who has seen the Holy Spirit move in impossible places. Quotes Scripture the way a soldier quotes coordinates: precisely, from memory, because lives depend on it. Zero patience for institutional posturing, infinite patience for the work of intercession.

---

## 3. Messaging Framework

### Primary value proposition
The gospel of Jesus will reach every people group on earth before the end, and you can be the generation through whom that prophecy is fulfilled — through the power of prayer and the investment of your resources.

### The five message pillars

1. **The Prophetic Certainty** — Matthew 24:14 is a royal decree. The gospel will reach every people group. Guaranteed. *Use for:* opening hooks, donor appeals, eschatological framing. *Example:* "The King has spoken. What the King declares will come to pass."

2. **The Impossible Tension** — 3.6 billion unreached feels impossible; the prophecy says inevitable. *Use for:* statistics content, campaign launches, social hooks. *Example:* "The statistic feels impossible. The theology says the outcome is inevitable."

3. **Prayer as Authority in the Unseen Realm** — intercession gives God legitimate ground to act. Love is the currency of heavenly authority. *Use for:* prayer partner recruitment, devotionals. *Example:* "Prayer is an exercise of delegated authority in the unseen realm."

4. **The Holy Spirit as Power Source** — the Spirit is the differentiator; without Him the finest methods are powerless. *Use for:* all content; this is the center of gravity. *Example:* "The power you will receive is the Holy Spirit, and the result of that power is witness."

5. **Beautiful Feet on Digital Roads** — the gospel travels on available infrastructure; today the herald moves at the speed of light. *Use for:* media/tech content, donor justification. *Example:* "A government can expel a missionary. It cannot stop a video crossing a digital border."

### Competitive positioning
- **vs. traditional mission media:** sell spiritual breakthrough, not information (the "Red Bull shift").
- **vs. poverty-pity fundraising:** dignity, never pity. Respect attracts investment more than guilt.
- **vs. influencer culture:** celebrate the anonymous, invisible prayer warrior.
- **vs. church-as-usual:** sell spiritual weight, risk, the impossible — where the church often sells comfort.

---

## 4. Color System

All values validated against the TTE Figma source of truth.

### Primary palette (approved)

| Token | Hex | Name | Meaning | Usage |
|-------|-----|------|---------|-------|
| `brand.primary` | `#FE5442` | Fire Orange | Fire of the Holy Spirit, urgency, breakthrough | Emphasis only — CTAs, wordmark accent, icon wing, HUD labels, key words. Never dominant background. |
| `brand.dark` | `#28272A` | Black | The earth, soil, darkness of unreached places | Default immersive background, text on light |
| `brand.light` | `#FFFFFF` | White | Gospel light piercing darkness | Editorial/light layouts, text on dark |

### Biome palette (secondary accent)

Context-specific accents for regional/biome content only. Never replace Fire Orange as the primary signal color.

| Token | Hex | Biome |
|-------|-----|-------|
| `biome.desert` | `#B86C55` | Desert / Arid |
| `biome.arctic` | `#7BA7BC` | Arctic / Frozen |
| `biome.city` | `#4A4A52` | Urban / City |
| `biome.forest` | `#2D5A3D` | Tropical / Forest |

### Semantic tokens (use these in application, not raw values)

```
text.default     → Black      Body text on light
text.inverted    → White      Text on dark
text.accent      → Fire Orange Emphasis — use sparingly
text.muted       → Grey #949494 Muted/secondary — inactive nav, labels on dark
surface.dark     → Black      Dark panels, immersive bg
surface.light    → White      Light/editorial layouts
surface.accent   → Fire Orange CTA backgrounds only
hud.text         → White      HUD data text
hud.accent       → Fire Orange HUD labels
hud.background   → Black      HUD panel background
```

---

## 5. Typography System

Two families only. All values validated against Figma.

### Mona Sans — display, headings & editorial body

| Style | Size | Weight | Line Height | Letter Spacing | Case |
|-------|------|--------|-------------|----------------|------|
| Display / 2XL | 96px | Black 900 | 95% | 2% | UPPERCASE |
| Display / XL | 72px | Black 900 | 95% | 2% | UPPERCASE |
| Display / L | 60px | ExtraBold 800 | 100% | 2% | UPPERCASE |
| Heading / H1 | 48px | ExtraBold 800 | 105% | 1% | UPPERCASE |
| Heading / H2 | 36px | ExtraBold 800 | 110% | 1% | UPPERCASE |
| Heading / H3 | 28px | Bold 700 | 100% | 1% | UPPERCASE |
| Heading / H4 | 22px | Bold 700 | 100% | 2% | UPPERCASE |
| Label / Large | 16px | ExtraBold 800 | 100% | 4% | UPPERCASE |
| Label / Medium | 13px | ExtraBold 800 | 100% | 4% | UPPERCASE |
| Body / Regular | 16px | Medium 500 | 120% | 0% | Sentence |
| Body / Small | 14px | Medium 500 | 120% | 0% | Sentence |

> **Exception:** Mona Sans Body / Regular and Body / Small are sentence case — the only documented exception to the Mona Sans uppercase rule. Use for editorial, longer-form reading contexts where full uppercase would reduce legibility.

### Space Mono — HUD, data & body

| Style | Size | Weight | Line Height | Letter Spacing | Case |
|-------|------|--------|-------------|----------------|------|
| HUD / XL | 20px | Bold 700 | 120% | 6% | UPPERCASE |
| HUD / Default | 14px | Regular 400 | 120% | 6% | UPPERCASE |
| HUD / Small | 12px | Regular 400 | 120% | 6% | UPPERCASE |
| HUD / Micro | 10px | Regular 400 | 120% | 6% | UPPERCASE |
| Body / Regular | 16px | Regular 400 | 140% | 1% | Sentence |
| Body / Small | 14px | Regular 400 | 140% | 1% | Sentence |
| Label / Default | 12px | Bold 700 | 140% | 3% | UPPERCASE |

### Type rules
- Mona Sans is UPPERCASE in all display and heading use. The only exception is Mona Sans Body / Regular and Body / Small, which are sentence case — for editorial, longer-form reading contexts where full uppercase reduces legibility.
- Space Mono UPPERCASE for HUD/labels; sentence case for body only.
- Wide letter spacing in Space Mono is intentional — it reinforces the tactical, data-readout feel.
- Line height below 100% in Display is intentional — it creates a compact editorial block.

---

## 6. Imagery System

### The two tests every image must pass
- **The Movement Test:** does this look like something a young adult would wear on a t-shirt — or like a donation button? If it looks like church, it fails.
- **The Pulse Test:** does this raise the viewer's heart rate? It should feel urgent and slightly unsettling. Never comforting.

### Aesthetic in one phrase
Editorial expedition photography. The soul of National Geographic. The attitude of Arc'teryx. The urgency of a dispatch from the field.

### The four narrative layers
1. **The Scale** — extreme wide (16–24mm), human figure 5–15% of frame, environment dominant. Makes the mission feel impossible.
2. **The Stillness** — 50–85mm, subject tack-sharp against blurred chaos, eyes closed in prayer. Calm before breakthrough.
3. **The POV** — 24–35mm handheld, first person, motion blur OK. Places the viewer inside the mission.
4. **The HUD** — 85–135mm tight portrait + Space Mono data overlay (TARGET, EST. POP, STATUS, ACCESS, BIOME, COORDS, GOSPEL ACCESS %). Makes statistics human.

### Color grading
Warm in shadows, restrained in highlights, desaturated 15–25%. Shadows lean amber or deep teal — never pure black. Golden hour is the primary light. Natural light only. Film grain always present (Kodak Portra 400 simulation). Warm White `#F4F3F1` is the only white in photography — never pure white.

### Always / Never
- **Always:** real people in real contexts, dignity over pity, topographic overlay present, HUD data present (at least partial), one emphasis word in orange in headlines.
- **Never:** generic stock, staged poses, studio light, "hands raised / cross in sunset" clichés, poverty tourism, AI-generated people as primary imagery, ring light, oversaturated filters, western-savior framing.

*Full imagery spec: `01-brand-system/imagery/imagery-guide.md`. Prompt construction kit: `01-brand-system/imagery/ai-prompts.md`.*

---

## 7. Tone-by-Context Matrix

Voice constant; tone flexes.

| Context | Formality | Energy | Key principle |
|---------|-----------|--------|---------------|
| Podcast episodes | Medium | High | Immerse in the field. Feel the dust and the weight. |
| Social (short-form) | Low-Med | Very High | Scroll-stopper in 10 seconds. One image, one line, one people group. |
| Donor appeals (Prayer) | Medium | High | Problem-Agitate-Solution. Resolve with prayer as delegated authority. |
| Donor appeals (Mission) | Med-High | Med-High | Spirit-led invitation. Never guilt. |
| Prayer guides | Medium | Warm-Intense | Theological depth with pastoral warmth. |
| Landing / web | Medium | High | Hook fast. Convert to micro-commitment: Pray / Give / Learn. |
| Documentary | High | Controlled | Cinematic. Let visuals carry the weight. Narration sparse, prophetic. |
| Partner reports | Med-High | Medium | Gratitude anchored in theology. Close with "gratitude for His grace." |

### Example HUD-style opener (podcast / social)
"Thirty-three degrees north, sixty-five degrees east. The Tajik people. Twelve million souls. Gospel access: zero point one percent. Status: unreached."

---

## 8. Terminology

### Must use
| Use | Instead of |
|-----|-----------|
| Prayer Partner | supporter, prayer warrior (in formal use) |
| Mission Partner | donor, giver, contributor |
| the gospel of Jesus | the name of Jesus |
| unreached people groups | lost people, the unsaved, pagans |
| spiritual biomes | mission fields, target areas |
| delegated authority | prayer power, spiritual warfare (generic) |
| the midnight cry | end-times message |

### Avoid / never
- **Avoid:** "lost souls" (strips dignity), "charity/charitable" (use investment/partnership), "third world" (name the region), "crusade" (use campaign).
- **"Targets" for people:** only inside the HUD/tactical aesthetic ("TARGET: TAJIK"), where the metaphor is deliberate and dignifying.

---

## 9. Editorial Style Rules (always apply)

These override general writing conventions in all TTE content:

1. **Never use emdashes.**
2. **Never use negative sentence structures** ("we're not X, we're Y"). Always frame positively.
3. **Do not waffle.** Every sentence earns its place.
4. **Vary rhythm.** Avoid formulaic paragraph structures.
5. **Strengthen theology with direct Scripture references.** Chapter and verse.
6. **Use "gospel of Jesus"** rather than "name of Jesus" for the unreached.
7. **Write for sophisticated donors** ("further reduces" rather than "reduces").
8. **Close with theological depth** ("gratitude for His grace").
9. **Keep tone personal**, not institutional.
10. **Use Problem-Agitate-Solution** for donor communications.
11. **Lead to action with micro-commitments** in every piece.

---

## 10. Logo System (summary)

- **Mark:** a bird in flight — dove (Holy Spirit) fused with flame (Pentecost). Body in black, defining wing in Fire Orange, oriented forward and upward.
- **Lockups:** stacked (bird above "TO THE ENDS OF / THE EARTH", with "THE EARTH" in Fire Orange); horizontal; wordmark only; Hope Channel co-brand.
- **Coordinates stamp:** "TO THE ENDS OF THE EARTH / HOPE CHANNEL INTERNATIONAL / 39.0560 N 76.9634 W" in Space Mono for field-dispatch feel.
- **Rules:** clearspace = height of the "T" in the wordmark. White logo on dark/photographic; black logo on light. Never distort, rotate, recolor outside approved variants, or separate icon from wordmark in combined lockups.

*Full logo assets: `01-brand-system/atoms/logo/`.*

---

## 11. Quality Gates (every visual asset must pass)

1. **Movement Test** — looks like a lifestyle brand, not a donation button.
2. **Pulse Test** — raises the heart rate; urgent, not comforting.
3. **Mobilization Trigger** — makes the viewer feel "I have to pray / do something."
4. **Scroll-Stopper Test** — stops the scroll within 10 seconds.

---

## 12. Source of Truth & References

- **Tokens (authoritative):** `01-brand-system/tokens/tokens.json`
- **Imagery spec:** `01-brand-system/imagery/imagery-guide.md`
- **Prompt kit:** `01-brand-system/imagery/ai-prompts.md`
- **Brand context:** `01-brand-system/docs/brand-quick-reference.md`
- **Voice (full):** `01-brand-system/docs/brand-voice-guidelines-tte.md`
- **Strategy (SPARK):** `01-brand-system/docs/TTE_Brand_Project.md`
- **Figma:** https://www.figma.com/design/QJpddccb8biAnsDiSKjcNf/To-The-Ends-of-The-Earth

> When any conflict arises between this file and another, this file and the validated tokens win. When a token changes, this file must be updated in the same action.

---

## 13. Design System (components)

The brand is translated into interface on a **shadcn/ui** base (Radix + Tailwind, MIT). shadcn is neutral by design and its code lives in the repo, so the brand disappears *into* it rather than fighting it. Radius, color, and typography flow from the token layer, so every component is on-brand by construction.

### 13.1 The control size scale

One tokenized height governs every interactive control, so `default` means the same thing everywhere:

| Token | Height | Use |
|-------|--------|-----|
| `sizing.control-sm` | 36px | dense · HUD · operate |
| `sizing.control-default` | **44px** | **system default** |
| `sizing.control-lg` | 56px | hero CTAs |

Button, Input, and Select all size from it.

### 13.2 The Button — two axes (the flagship rule)

`intent` fixes the typeface by **role**; `variant` fixes the visual treatment. Independent axes.

- `intent="mobilize"` *(default)* → **Mona Sans**. The brand voice. Emotional CTAs: Pray, Give, Join.
- `intent="operate"` → **Space Mono**. The instrument. System / HUD / data actions: Filter, Export, View data.

**Mona Sans mobilizes, Space Mono operates.** This extends the brand's existing type logic (Mona Sans = voice, Space Mono = HUD) down to the button. Never cross the wires.

Primary CTA = Fire Orange fill, white label. Radius 0. UPPERCASE always.

### 13.3 Base components

Button, Badge (HUD tag), Input, Select, Checkbox (angular), Switch (angular), Radio (circular — usability exception), Tabs (HUD underline, Fire Orange active), Card, Dialog, Tooltip, Table, Textarea, Label, Separator. All bound to tokens; icons are Lucide (rounded terminals preserved — documented radius exception).

### 13.4 TTE organisms (the signature layer)

The components no kit ships, composed from the base primitives:

- **HUD Panel** — tactical mission-intel readout. Fire live-tick, Space Mono `LABEL : VALUE` rows, `accent` on the value that matters.
- **People Group Card** — the unreached-people dossier. Media falls back to the topographic texture, never a grey box (*dignity over pity*), until real photography is supplied.
- **Mission Stat** — the impossible number in Mona Sans, fronted by a Fire Orange tick.
- **Biome Badge** — biome as a HUD tag; biome color is a secondary accent (swatch only, never a rival to Fire Orange).
- **Topographic Background** — the contour texture at 12% opacity behind any content.

---

## 14. Dev System (code)

The system runs as React + Vite + TypeScript + Tailwind v4 in `03-dev-system/tte-ui`. Tokens are consumable in four synced formats (`tokens.json / .css / .scss / .tailwind.js`); the Figma library mirrors the same components bound to the same variables and text styles.

- **Consume tokens:** spread `tokens.tailwind.js` into `theme.extend`, or `@import` the CSS / `@use` the SCSS.
- **Component code:** `src/components/ui/` (base) and `src/components/tte/` (organisms).
- **Specs:** `02-design-system/specs/` (button, components-base, organisms).
- **Dev guide:** `03-dev-system/README.md`.
- **Three faces, one system:** canonical tokens ↔ dev project ↔ Figma. A change to any one must propagate to all three in the same action (Principle 7).

### Not yet (documented follow-ups)

Motion (duration/easing tokens + named patterns — components currently use framework defaults); structural components mirrored in Figma (Select, Dialog, Tabs, Tooltip, Table); real photography replacing topographic placeholders; npm distribution.

---

*DESIGN.md · TTE Brand System · v2.0*
*Covers Brand System + Design System + Dev System.*
