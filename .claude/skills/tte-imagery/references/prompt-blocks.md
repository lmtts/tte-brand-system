# TTE Prompt Blocks — Modular Library

## How to Assemble a Prompt

Use this structure every time:

```
[LAYER BLOCK] + [SHOT BLOCK] + [LIGHT BLOCK] + [GRADE BLOCK] + [GRAIN BLOCK] + [STYLE REF] + [SUBJECT/ENV if needed] + [QUALITY SUFFIX]
```

Then add the **Negative Prompt** separately.

Only one block per category needed. Mix and match. When the user gives you a vague scene, you select the best-fit blocks and explain why.

---

## LAYER BLOCKS

### L1 — The Scale
```
extreme wide shot of tiny human figure against vast hostile landscape, missionary silhouette, scale of the impossible
```

### L2 — The Stillness
```
medium portrait, subject tack-sharp amid motion-blurred crowd, eyes closed in prayer, stillness within chaos, spiritual intensity
```

### L3 — The POV
```
first person POV handheld, looking through dusty vehicle window, boots on red dirt, gripping a worn passport, immersive raw field dispatch
```

### L4 — The HUD
```
extreme tight close-up portrait, weathered face with skin texture detail, one intense eye in sharp focus, data overlay aesthetic, mission intel feel
```

---

## SHOT & LENS BLOCKS

### Ultra Wide (Scale layer)
```
ultra wide angle 16mm, low horizon, human figure 10% of frame height
```

### Wide Environmental (Scale / POV)
```
24mm wide angle, environmental portrait, subject in context, slight foreground element creating depth
```

### Standard Documentary (Stillness / POV)
```
50mm standard lens, medium shot, natural perspective compression, documentary framing
```

### Portrait (Stillness / HUD)
```
85mm portrait lens, f/1.8 shallow depth of field, subject razor-sharp, background bokeh separation
```

### Compressed Close-Up (HUD)
```
135mm compressed portrait, extreme close-up face, skin pores and texture visible, tactile intimacy
```

### Asymmetric Tension (all layers)
```
asymmetric rule-of-thirds composition, subject off-center with weight, generous negative space on opposite side, visual tension not balance
```

---

## LIGHTING BLOCKS

### Golden Hour (primary TTE light)
```
golden hour directional sunlight, long warm amber shadows, rim light on subject edges, low sun angle, threshold quality — something beginning or ending
```

### Overcast Diffuse (portraits, detail)
```
overcast diffuse daylight, soft even illumination, no harsh shadows, texture and expression fully revealed, high-altitude or tundra quality
```

### Backlit Rim (spiritual intensity)
```
strong backlight, dramatic rim halo around subject silhouette, contre-jour, spiritual intensity, figure outlined in light
```

### Practical (intimate / POV)
```
single candle or campfire practical light, intimate warm glow, deep surrounding inhabited shadow, no artificial fill
```

### Blue Hour / Urban Night
```
blue hour dusk, urban mixed artificial and ambient light, neon reflections on wet surfaces, inhabited night environment, city that never reaches the Gospel
```

### Harsh Midday Side-Light (HUD / confrontation)
```
harsh midday side-light, high contrast, unforgiving equatorial or desert sun, deep shadow on one side, blown detail on other
```

---

## COLOR GRADE BLOCKS

### TTE Standard (default)
```
muted earthy color palette, desaturated 20%, warm amber shadows, controlled highlights, cinematic film grade, no blown whites
```

### Portra 400 Film (warmth, skin)
```
Kodak Portra 400 film simulation, warm fine grain, rich shadow detail, skin tones preserved and warm, slight color cast in shadows
```

### Deakins Teal (landscape, scale)
```
Roger Deakins Sicario cinematography grade, teal-orange complementary palette, precise shadow detail, vast atmospheric depth
```

### Lubezki Natural (POV, field)
```
Emmanuel Lubezki natural light grade, lifted shadows, desaturated midtones, organic color rendering, no artificial feel
```

### Bradford Dark (HUD, weight)
```
Bradford Young underexposed aesthetic, dark lifted blacks, textured shadows, spiritual weight in the darkness, cool tones
```

### NatGeo Saturated (Stillness hero)
```
National Geographic color philosophy, subject saturated and rich, background muted and desaturated, story-first palette contrast
```

---

## FILM & GRAIN BLOCKS

### Fine Grain (Portra / Fuji)
```
visible fine film grain, analog texture, Kodak Portra 400 grain structure, photographic noise, not digital smoothing or noise reduction
```

### Coarse Grain (pushed ISO, POV)
```
coarse high ISO grain, pushed film documentary texture, 3200 ISO aesthetic, gritty photographic noise, authenticity over polish
```

### Halation (analog warmth)
```
subtle halation around highlights, analog glow at light sources, warm light bleed on edges, film lens organic imperfection
```

### Motion Blur (POV, crowd)
```
intentional motion blur on background movement, slow shutter 1/30 technique, subject sharp amid environmental blur, kinetic energy
```

### Underexposed (protective, textured)
```
slightly underexposed exposure, shadow detail preserved, no blown highlights, latitude of Fujifilm or Kodak color negative
```

### Handheld Instability (POV, reportage)
```
photojournalistic handheld instability, slightly imperfect framing, authentic reportage energy, not tripod-perfect, documentary dispatch
```

---

## STYLE REFERENCE BLOCKS

### McCurry (dignified portraits)
```
in the style of Steve McCurry National Geographic portraiture, dignified subject, direct eye contact or closed-eye prayer, rich environmental color harmony
```

### Burkard (adventure scale)
```
in the style of Chris Burkard adventure photography, tiny human figure in epic hostile landscape, extreme environment, explorer energy and earned presence
```

### Pellegrin (raw urgency)
```
in the style of Paolo Pellegrin Magnum photojournalism, raw field urgency, motion and grain as emotional tools, dispatch from the edge
```

### Salgado (monumental dignity)
```
in the style of Sebastiao Salgado documentary photography, human endurance as sacred subject, monumental environmental scale, timeless dignity
```

### Nelson (cultural epic)
```
in the style of Jimmy Nelson indigenous portraiture, epic environmental scale, ceremonial dignity, culture as landscape, not subjects as specimens
```

### Editorial (magazine quality)
```
editorial photography, National Geographic expedition standard, Arc'teryx campaign quality, award-winning field documentary, Magnum Photos caliber
```

---

## SUBJECT / ENVIRONMENT BLOCKS (Optional Add-ons)

### Central Asia Highland
```
remote Central Asian mountain village, ancient stone architecture, prayer flags or minarets, dust and altitude, golden-teal light
```

### Desert Biome (Arid Spiritual Biome)
```
North African or Arabian desert, endless sand dunes, arid Spiritual Biome, scorched horizon, hostile environment where spiritual life cannot sustain
```

### Urban Biome (Concrete Spiritual Biome)
```
dense South or Southeast Asian megacity, crowded market or transit hub, anonymous crowd, concrete and chaos, unreached urban biome
```

### Jungle Biome (Remote Spiritual Biome)
```
Amazon or Congo jungle border, impenetrable vegetation wall, river mist, isolated clearing, the edge of what is mapped
```

### Portrait — Woman, Dignified
```
South Asian woman, blue or gold headscarf, warm skin tones, dignified gaze not pitied, specific not generic, rich fabric texture
```

### Portrait — Elder, Strength
```
weathered Central Asian or North African elder, deeply lined face, traditional clothing, expression of history and endurance, not of need
```

---

## QUALITY SUFFIX (Always Append)

```
photorealistic, award-winning photography, editorial quality, Magnum Photos standard, no stock photo aesthetic, no artificial lighting, no posed composition, no AI smoothing, ultra-detailed, 8K
```

---

## NEGATIVE PROMPT (Always Append)

**For Midjourney**: add after `--no`
**For Stable Diffusion / Firefly**: paste into negative prompt field
**For DALL·E / Ideogram**: add "avoid:" before this block

```
lens flare halo, soft focus glow, church media aesthetic, stock photo smile, posed donation composition, ring light, studio backdrop, HDR over-processed, oversaturated filter, influencer travel, poverty tourism framing, AI smooth skin, digital noise reduction, perfect symmetry, western savior framing, gradient background, corporate headshot
```

---

## Platform-Specific Formatting

### Midjourney
```
[FULL PROMPT] --ar 3:2 --style raw --no [NEGATIVE PROMPT]
```
For portraits: `--ar 4:5`
For landscapes: `--ar 16:9`

### Stable Diffusion (SDXL / Flux)
- Positive: Full assembled prompt
- Negative: Negative prompt block
- Sampler: DPM++ 2M Karras or Euler a
- Steps: 30–40
- CFG: 6–8

### Adobe Firefly
- Include full prompt
- Style: Photo
- Content type: Photo
- Paste negative concepts in "Avoid" field

### DALL·E 3
- Full prompt in one message
- Add "Avoid: [negative prompt]" at the end
- Specify "photorealistic" explicitly
