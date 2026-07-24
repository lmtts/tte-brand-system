# TTE — AI Imagery Prompt System
**To The Ends of The Earth · Prompt Architecture & Keyword Library**
*Kit modular de construção de prompts para gerar e buscar imagery alinhada à marca*

Cada bloco reflete a identidade fotográfica da TTE — arquétipo Explorer, editorial de expedição, luz conquistada (earned light). Compatível com Midjourney, DALL·E, Firefly e Stable Diffusion.

---

## 1. Construtor de Prompts — Blocos modulares

Selecione um bloco de cada categoria para montar um prompt completo.

### Narrative Layer (camada narrativa)
| Bloco | Função |
|-------|--------|
| **THE SCALE** | Onde a missão ocorre — humano minúsculo na paisagem |
| **THE STILLNESS** | Foco no protagonista — quietude em meio ao caos |
| **THE POV** | Momento bruto de campo — primeira pessoa |
| **THE HUD** | Mission intel — close extremo, inteligência tática |

### Shot Type & Perspective (tipo de plano e lente)
| Bloco | Especificação |
|-------|---------------|
| **ULTRA WIDE** | 16mm · horizonte baixo |
| **WIDE ENV.** | 24mm · contexto ambiental |
| **STANDARD** | 50mm · perspectiva natural |
| **PORTRAIT** | 85mm · f/1.8 |
| **COMPRESSED** | 135mm · textura comprimida |
| **ASYMMETRIC** | Composição de tensão |

### Lighting Condition (condição de luz)
| Bloco | Especificação |
|-------|---------------|
| **GOLDEN HOUR** | Luz primária da TTE |
| **OVERCAST** | Difusa e suave |
| **BACKLIT RIM** | Intensidade espiritual, contraluz |
| **PRACTICAL** | Vela / fogo |
| **BLUE HOUR** | Crepúsculo / noite urbana |
| **HARSH MID** | Alto contraste, meio-dia duro |

### Color Grade (tratamento de cor)
| Bloco | Especificação |
|-------|---------------|
| **TTE STANDARD** | Grade primária da marca |
| **PORTRA 400** | Calor de filme |
| **DEAKINS TEAL** | Contraste cinematográfico |
| **LUBEZKI NAT.** | Natural e orgânico |
| **BRADFORD DARK** | Subexposto, peso dramático |
| **NATGEO SAT.** | Sujeito em destaque |

### Film & Grain (filme e granulação)
| Bloco | Especificação |
|-------|---------------|
| **FINE GRAIN** | Portra / analógico |
| **COARSE GRAIN** | ISO forçado |
| **HALATION** | Brilho analógico |
| **MOTION BLUR** | Obturador lento |
| **UNDEREXPOSED** | Sombras protegidas |
| **HANDHELD** | Energia de reportagem |

### Style & Photographer Reference (referência de estilo)
| Bloco | Especificação |
|-------|---------------|
| **MCCURRY** | Retrato com dignidade |
| **BURKARD** | Escala de aventura |
| **PELLEGRIN** | Urgência crua |
| **SALGADO** | Dignidade monumental |
| **NELSON** | Épico cultural |
| **EDITORIAL** | Padrão de revista |

### Subject / Environment (opcional — adicionar manualmente)
| Bloco | Especificação |
|-------|---------------|
| **CENTRAL ASIA** | Montanha / planalto |
| **DESERT BIOME** | Árido / não alcançado |
| **URBAN BIOME** | Cidade / megacidade |
| **JUNGLE BIOME** | Floresta / remoto |
| **PORTRAIT — WOMAN** | Sujeito com dignidade |
| **PORTRAIT — ELDER** | Ancião com dignidade |

### Quality Anchors (sempre anexar ao final)
```
photorealistic, award-winning photography, editorial quality, Magnum Photos standard,
no stock photo aesthetic, no artificial lighting, no posed composition, no AI smoothing,
ultra-detailed, 8K
```

---

## 2. Anatomia dos Prompts por Layer

Cada camada narrativa tem um DNA fixo de prompt. Use como template standalone ou como base para customizar.

### LAYER 01 — The Scale · *Onde a missão ocorre*

| Parâmetro | Valor |
|-----------|-------|
| Shot | Extreme wide, 16–24mm |
| Subject | 5–15% do frame, silhueta minúscula |
| Light | Golden hour, backlit rim |
| Grade | Earthy muted, Deakins teal-warm |
| Grain | Fine, Portra 400 |

**Prompt pronto:**
```
extreme wide angle 16mm, lone human silhouette 10% of frame height, towering mountain range,
golden hour amber light, long directional shadows, muted earthy palette, Kodak Portra 400 grain,
in the style of Chris Burkard, photorealistic editorial, National Geographic quality,
award-winning photography
```

### LAYER 02 — The Stillness · *Foco no protagonista*

| Parâmetro | Valor |
|-----------|-------|
| Shot | 50–85mm, médio a close-up |
| Subject | Nítido, olhos fechados/fixos |
| Light | Overcast difusa, halo de contraluz |
| Grade | NatGeo saturado no sujeito, fundo dessaturado |
| Grain | Fine a medium, simulação Fuji |

**Prompt pronto:**
```
85mm portrait lens, f/1.8, South Asian woman in blue headscarf, eyes closed in prayer,
sharp subject against motion-blurred crowded market background, stillness amid chaos,
overcast soft light, Kodak Portra 400 grade, in the style of Steve McCurry,
dignified portraiture, National Geographic editorial quality
```

### LAYER 03 — The POV · *O momento bruto*

| Parâmetro | Valor |
|-----------|-------|
| Shot | 24–35mm, handheld, primeira pessoa |
| Subject | Mãos, botas, janelas, objetos |
| Light | Disponível, practical, crua |
| Grade | Lubezki natural, sombras levantadas |
| Grain | Coarse, ISO forçado, motion blur OK |

**Prompt pronto:**
```
first person POV, 28mm handheld, looking through dusty small aircraft window at remote jungle
airstrip below, one worn hand gripping seat edge, motion blur on environment, high ISO grain,
natural available light, lifted shadow grade, photojournalistic handheld energy,
documentary dispatch aesthetic, in the style of Paolo Pellegrin
```

### LAYER 04 — The HUD · *Mission intel*

| Parâmetro | Valor |
|-----------|-------|
| Shot | 85–135mm, close-up extremo |
| Subject | Rosto marcado, detalhe de um olho |
| Light | Side-lit, alto contraste, dura |
| Grade | Bradford subexposto, peso escuro |
| Grain | Granulação visível, textura tátil de pele |

**Prompt pronto:**
```
135mm extreme close-up portrait, weathered Central Asian man face, one eye sharp with visible
iris detail, skin pores and texture, harsh side-light, dark underexposed Bradford Young aesthetic,
coarse film grain, Magnum photojournalism quality, environmental documentary,
ultra-detailed skin texture, editorial portrait
```

---

## 3. Biblioteca de Keywords para Busca

Use para buscar em bancos de imagem (Getty, Unsplash, Pexels, Stocksy), plataformas de inspiração (Behance, Pinterest, Are.na, Tumblr) e arquivos de fotógrafos.

### Referência de fotógrafo e cinema
Steve McCurry · Chris Burkard · Paolo Pellegrin · Sebastião Salgado · Jimmy Nelson · Jonas Bendiksen · Magnum Photos · Roger Deakins · Emmanuel Lubezki · Bradford Young · National Geographic photography · Hiro Murai · VII Photo Agency · World Press Photo · Pulitzer photography

### Estilo e gênero fotográfico
expedition photography · documentary portrait · environmental portraiture · photojournalism · editorial travel photography · adventure photography · field photography · humanitarian photography · reportage photography · analog film photography · cinematic photography · raw documentary · immersive POV photography · long exposure landscape · handheld reportage

### Estética e cor
earthy tones photography · muted color palette · Kodak Portra 400 · film grain texture · golden hour warm light · teal orange grade · cinematic color grade · desaturated film look · analog grain aesthetic · warm shadow tones · underexposed film · tactile texture · Fujifilm color rendering · natural light photography · contre-jour backlight

### Paisagem e ambiente (Spiritual Biomes)
remote mountain village · Central Asia highlands · Saharan desert landscape · Amazon jungle edge · urban megacity crowd · Himalayan terrain · Mongolian steppe · Middle Eastern medina · Sub-Saharan landscape · Southeast Asian delta · Arctic tundra · remote airstrip · hostile terrain · unreached village · border crossing

### Sujeito e pessoas
indigenous portrait dignified · woman headscarf blue · weathered face elder · prayer portrait · solo hiker vast landscape · Central Asian man portrait · crowd from above · South Asian woman portrait · tribal elder documentary · child eyes contact · pilgrim journey · market crowd eyes · backpacker mountain ridge · traveler window seat

### Arquétipo de marca (plataformas de busca)
The North Face campaign · Patagonia photography · Arc'teryx editorial · Red Bull adventure photography · National Geographic cover · TIME magazine photo essay · Monocle travel editorial · Explorer archetype brand · adventure campaign editorial · outdoor brand photography · mission photography · Are.na expedition

### Negative keywords (evitar nas buscas)
NOT stock photo smile · NOT posed donation · NOT ring light portrait · NOT poverty tourism · NOT lens flare holy · NOT oversaturated filter · NOT HDR landscape · NOT church media · NOT influencer travel · NOT studio backdrop

---

## 4. Negative Prompt Universal

Anexar a toda geração de IA para evitar resultados fora da marca. Compatível com Midjourney (flag `--no`), Stable Diffusion (campo de negative prompt) e Firefly.

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
