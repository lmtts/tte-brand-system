# TTE — AI Imagery Prompt System
**To The Ends of The Earth · Prompt Architecture & Keyword Library**
*Modular prompt-building kit for generating and sourcing on-brand imagery*

> **Real people, real places, first.** This kit exists to help when authentic photography isn't available — not to replace it. Always check `imagery-guide.md` §09 and `references/keywords.md` in the tte-imagery skill for sourcing real photography before generating. AI imagery still has to pass the Movement Test and the Pulse Test, and it must never fabricate a specific real person, place, or statistic.

Each block reflects TTE's photographic identity — Explorer archetype, expedition editorial, earned light. Compatible with Midjourney, DALL·E, Firefly, and Stable Diffusion.

---

## 1. Prompt Builder — Modular Blocks

Select one block from each category to assemble a complete prompt.

### Narrative Layer
| Block | Function |
|-------|--------|
| **THE SCALE** | Where the mission occurs — a tiny human in the landscape |
| **THE STILLNESS** | Focus on the protagonist — stillness amid chaos |
| **THE POV** | Raw field moment — first person |
| **THE HUD** | Mission intel — extreme close-up, tactical intelligence |

### Shot Type & Perspective
| Block | Specification |
|-------|---------------|
| **ULTRA WIDE** | 16mm · low horizon |
| **WIDE ENV.** | 24mm · environmental context |
| **STANDARD** | 50mm · natural perspective |
| **PORTRAIT** | 85mm · f/1.8 |
| **COMPRESSED** | 135mm · compressed texture |
| **ASYMMETRIC** | Compositional tension |

### Lighting Condition
| Block | Specification |
|-------|---------------|
| **GOLDEN HOUR** | TTE's primary light |
| **OVERCAST** | Diffuse and soft |
| **BACKLIT RIM** | Spiritual intensity, backlight |
| **PRACTICAL** | Candle / fire |
| **BLUE HOUR** | Dusk / urban night |
| **HARSH MID** | High contrast, hard midday |

### Color Grade
| Block | Specification |
|-------|---------------|
| **TTE STANDARD** | The brand's primary grade |
| **PORTRA 400** | Film warmth |
| **DEAKINS TEAL** | Cinematic contrast |
| **LUBEZKI NAT.** | Natural and organic |
| **BRADFORD DARK** | Underexposed, dramatic weight |
| **NATGEO SAT.** | Subject in focus |

### Film & Grain
| Block | Specification |
|-------|---------------|
| **FINE GRAIN** | Portra / analog |
| **COARSE GRAIN** | Pushed ISO |
| **HALATION** | Analog glow |
| **MOTION BLUR** | Slow shutter |
| **UNDEREXPOSED** | Protected shadows |
| **HANDHELD** | Reportage energy |

### Style & Photographer Reference
| Block | Specification |
|-------|---------------|
| **MCCURRY** | Dignified portrait |
| **BURKARD** | Adventure scale |
| **PELLEGRIN** | Raw urgency |
| **SALGADO** | Monumental dignity |
| **NELSON** | Cultural epic |
| **EDITORIAL** | Magazine standard |

### Subject / Environment (optional — add manually)
| Block | Specification |
|-------|---------------|
| **CENTRAL ASIA** | Mountain / highland |
| **DESERT BIOME** | Arid / unreached |
| **URBAN BIOME** | City / megacity |
| **JUNGLE BIOME** | Forest / remote |
| **PORTRAIT — WOMAN** | Subject with dignity |
| **PORTRAIT — ELDER** | Elder with dignity |

### Quality Anchors (always append at the end)
```
photorealistic, award-winning photography, editorial quality, Magnum Photos standard,
no stock photo aesthetic, no artificial lighting, no posed composition, no AI smoothing,
ultra-detailed, 8K
```

---

## 2. Prompt Anatomy by Layer

Each narrative layer has a fixed prompt DNA. Use as a standalone template or as a base to customize.

### LAYER 01 — The Scale · *Where the mission occurs*

| Parameter | Value |
|-----------|-------|
| Shot | Extreme wide, 16–24mm |
| Subject | 5–15% of the frame, tiny silhouette |
| Light | Golden hour, backlit rim |
| Grade | Earthy muted, Deakins teal-warm |
| Grain | Fine, Portra 400 |

**Ready-to-use prompt:**
```
extreme wide angle 16mm, lone human silhouette 10% of frame height, towering mountain range,
golden hour amber light, long directional shadows, muted earthy palette, Kodak Portra 400 grain,
in the style of Chris Burkard, photorealistic editorial, National Geographic quality,
award-winning photography
```

### LAYER 02 — The Stillness · *Focus on the protagonist*

| Parameter | Value |
|-----------|-------|
| Shot | 50–85mm, medium to close-up |
| Subject | Sharp, eyes closed/fixed |
| Light | Diffuse overcast, backlight halo |
| Grade | NatGeo-saturated subject, desaturated background |
| Grain | Fine to medium, Fuji simulation |

**Ready-to-use prompt:**
```
85mm portrait lens, f/1.8, South Asian woman in blue headscarf, eyes closed in prayer,
sharp subject against motion-blurred crowded market background, stillness amid chaos,
overcast soft light, Kodak Portra 400 grade, in the style of Steve McCurry,
dignified portraiture, National Geographic editorial quality
```

### LAYER 03 — The POV · *The raw moment*

| Parameter | Value |
|-----------|-------|
| Shot | 24–35mm, handheld, first person |
| Subject | Hands, boots, windows, objects |
| Light | Available, practical, raw |
| Grade | Lubezki natural, lifted shadows |
| Grain | Coarse, pushed ISO, motion blur OK |

**Ready-to-use prompt:**
```
first person POV, 28mm handheld, looking through dusty small aircraft window at remote jungle
airstrip below, one worn hand gripping seat edge, motion blur on environment, high ISO grain,
natural available light, lifted shadow grade, photojournalistic handheld energy,
documentary dispatch aesthetic, in the style of Paolo Pellegrin
```

### LAYER 04 — The HUD · *Mission intel*

| Parameter | Value |
|-----------|-------|
| Shot | 85–135mm, extreme close-up |
| Subject | Marked face, eye detail |
| Light | Side-lit, high contrast, hard |
| Grade | Bradford underexposed, dark weight |
| Grain | Visible grain, tactile skin texture |

**Ready-to-use prompt:**
```
135mm extreme close-up portrait, weathered Central Asian man face, one eye sharp with visible
iris detail, skin pores and texture, harsh side-light, dark underexposed Bradford Young aesthetic,
coarse film grain, Magnum photojournalism quality, environmental documentary,
ultra-detailed skin texture, editorial portrait
```

---

## 3. Search Keyword Library

Use to search stock libraries (Getty, Unsplash, Pexels, Stocksy), inspiration platforms (Behance, Pinterest, Cosmos, Are.na, Tumblr), and photographer archives — always with the goal of finding real people and real places first. See `references/keywords.md` in the tte-imagery skill for the full, platform-by-platform version of this library.

### Photographer & cinema reference
Steve McCurry · Chris Burkard · Paolo Pellegrin · Sebastião Salgado · Jimmy Nelson · Jonas Bendiksen · Magnum Photos · Roger Deakins · Emmanuel Lubezki · Bradford Young · National Geographic photography · Hiro Murai · VII Photo Agency · World Press Photo · Pulitzer photography

### Photographic style and genre
expedition photography · documentary portrait · environmental portraiture · photojournalism · editorial travel photography · adventure photography · field photography · humanitarian photography · reportage photography · analog film photography · cinematic photography · raw documentary · immersive POV photography · long exposure landscape · handheld reportage

### Aesthetic and color
earthy tones photography · muted color palette · Kodak Portra 400 · film grain texture · golden hour warm light · teal orange grade · cinematic color grade · desaturated film look · analog grain aesthetic · warm shadow tones · underexposed film · tactile texture · Fujifilm color rendering · natural light photography · contre-jour backlight

### Landscape and environment (Spiritual Biomes)
remote mountain village · Central Asia highlands · Saharan desert landscape · Amazon jungle edge · urban megacity crowd · Himalayan terrain · Mongolian steppe · Middle Eastern medina · Sub-Saharan landscape · Southeast Asian delta · Arctic tundra · remote airstrip · hostile terrain · unreached village · border crossing

### Subject and people
indigenous portrait dignified · woman headscarf blue · weathered face elder · prayer portrait · solo hiker vast landscape · Central Asian man portrait · crowd from above · South Asian woman portrait · tribal elder documentary · child eyes contact · pilgrim journey · market crowd eyes · backpacker mountain ridge · traveler window seat

### Brand archetype (search platforms)
The North Face campaign · Patagonia photography · Arc'teryx editorial · Red Bull adventure photography · National Geographic cover · TIME magazine photo essay · Monocle travel editorial · Explorer archetype brand · adventure campaign editorial · outdoor brand photography · mission photography · Are.na expedition · Cosmos boards

### Negative keywords (avoid in searches)
NOT stock photo smile · NOT posed donation · NOT ring light portrait · NOT poverty tourism · NOT lens flare holy · NOT oversaturated filter · NOT HDR landscape · NOT church media · NOT influencer travel · NOT studio backdrop

---

## 4. Universal Negative Prompt

Append to every AI generation to avoid off-brand results. Compatible with Midjourney (`--no` flag), Stable Diffusion (negative prompt field), and Firefly.

```
lens flare halo, soft focus glow, church media aesthetic, stock photo smile,
posed donation composition, ring light, studio backdrop, HDR over-processed,
oversaturated filter, influencer travel, poverty tourism framing, AI smooth skin,
digital noise reduction, perfect symmetry, western savior framing, gradient background,
corporate headshot
```

---

*TTE · A Hope Channel International initiative · AI Imagery System*
*39.0560° N 76.9634° W*
