# TTE Brand Book — Spec para Figma
**To The Ends of The Earth · Brand Book v1.0**
*Guia de construção completo — conteúdo, hierarquia e layout de cada página*

---

## Instruções gerais de construção

**Frame size:** 1440 × 900px (widescreen landscape) — padrão para brand books digitais, ideal para PDF e apresentação
**Grid:** 12 colunas, gutter 24px, margin 80px
**Fundo padrão:** `#28272A` (brand.dark) — brand book imersivo, feel noturno e tático
**Exceções de fundo:** seções editoriais específicas usam `#FFFFFF`
**Todas as páginas:** nome no formato `BB·01 — Nome da Seção`

---

## PÁGINA 0 — Capa

**Fundo:** `#28272A`

**Estrutura (de cima para baixo, centralizado verticalmente):**

```
[Topographic overlay SVG — opacidade 12%, cobrindo frame inteiro]

[HUD tag — Space Mono/HUD/Small, #FE5442, uppercase]
BRAND SYSTEM v1.0 · 2026

[Logo TTE stacked — versão branca — ~180px de altura]

[Divider — linha horizontal 1px #FFFFFF, opacidade 20%, largura 480px]

[Subtítulo — Space Mono/HUD/Default, #FFFFFF, uppercase]
TO THE ENDS OF THE EARTH
BRAND GUIDELINES

[Coordenadas — Space Mono/HUD/Micro, #FFFFFF, opacidade 50%]
39.0560° N  76.9634° W · HOPE CHANNEL INTERNATIONAL
```

**Rodapé (fixo em todas as páginas — criar como componente):**
```
[esquerda] TTE BRAND SYSTEM · CONFIDENTIAL    [direita] HOPE CHANNEL INTERNATIONAL [logo pequeno]
Space Mono/HUD/Micro · #FFFFFF · opacidade 40%
```

---

## PÁGINA 1 — Índice

**Fundo:** `#28272A`

**Título:**
```
[Label — Space Mono/HUD/Small, #FE5442]
CONTENTS

[Título — Mona Sans/Heading/H1, #FFFFFF]
BRAND
SYSTEM
```

**Lista de seções (grid 2 colunas):**

Cada item tem:
- Número em Mona Sans/Heading/H2, `#FE5442`
- Nome em Mona Sans/Heading/H4, `#FFFFFF`
- Descrição em Space Mono/HUD/Small, `#FFFFFF`, opacidade 60%

```
01        02
IDENTITY  COLOR
Strategy, purpose,    Palette, tokens,
archetype, voice      usage rules

03        04
TYPE      LOGO
Scale, rules,         Icon, wordmark,
hierarchy             lockups, protection

05        06
IMAGERY   SYSTEM
4 layers, biomes,     Tokens, checklist,
HUD data              dos & don'ts
```

---

## PÁGINA 2 — Identidade Estratégica (abertura de seção)

**Fundo:** `#FE5442` — única página com fundo laranja puro (impacto de abertura de capítulo)

**Estrutura:**
```
[Número de seção — Mona Sans/Display/L, #28272A, opacidade 15%, canto superior direito]
01

[Label — Space Mono/HUD/Small, #28272A, uppercase]
STRATEGIC IDENTITY

[Título — Mona Sans/Display/XL, #28272A]
WHO
WE ARE
```

**Nota de rodapé:**
```
[Space Mono/HUD/Micro, #28272A, opacidade 60%]
ACTS 1:8 — "...AND YOU WILL BE MY WITNESSES...TO THE ENDS OF THE EARTH."
```

---

## PÁGINA 3 — Propósito e Missão

**Fundo:** `#28272A`

**Layout: 2 colunas**

Coluna esquerda (60%):
```
[Label — Space Mono/HUD/Small, #FE5442]
PURPOSE

[Texto — Mona Sans/Heading/H2, #FFFFFF]
INSPIRE AND MOBILIZE
CHRISTIANS TO GO
WHERE THE GOSPEL
HASN'T BEEN.

[Divider 1px laranja, largura 40px]

[Label — Space Mono/HUD/Small, #FE5442]
MISSION

[Texto — Space Mono/Body/Regular, #FFFFFF]
Levar o Evangelho a todos os povos e nações,
até os confins da terra.

[Label — Space Mono/HUD/Small, #FE5442]
VISION

[Texto — Space Mono/Body/Regular, #FFFFFF]
Um mundo onde cada pessoa e povo tenha
acesso ao Evangelho de Jesus Cristo.
```

Coluna direita (40%):
```
[Label — Space Mono/HUD/Small, #FE5442]
CORE VALUES

[5 itens em lista — cada um:]
[Mona Sans/Label/Large, #FFFFFF] URGENCY
[Space Mono/HUD/Small, #FFFFFF, op 60%] The time is now. No room for passivity.

[Mona Sans/Label/Large, #FFFFFF] COURAGE
[Space Mono/HUD/Small, #FFFFFF, op 60%] Go where no one has gone, in faith.

[Mona Sans/Label/Large, #FFFFFF] RADICAL FAITH
[Space Mono/HUD/Small, #FFFFFF, op 60%] Total trust in God above circumstances.

[Mona Sans/Label/Large, #FFFFFF] SACRIFICE
[Space Mono/HUD/Small, #FFFFFF, op 60%] Real cost as part of missionary identity.

[Mona Sans/Label/Large, #FFFFFF] HOPE
[Space Mono/HUD/Small, #FFFFFF, op 60%] The conviction that the mission will be fulfilled.
```

---

## PÁGINA 4 — Arquétipo e Posicionamento

**Fundo:** `#28272A`

**Layout: 2 colunas**

Coluna esquerda (50%):
```
[Label — Space Mono/HUD/Small, #FE5442]
BRAND ARCHETYPE

[Título — Mona Sans/Heading/H1, #FFFFFF]
HERO ×
EXPLORER

[Corpo — Space Mono/Body/Regular, #FFFFFF]
TTE doesn't do passive evangelism.
It mobilizes. Calls to action. Challenges
comfort. Uses the language of adventure
and expedition as a metaphor for the
journey of faith.

[Divider]

[Label — Space Mono/HUD/Small, #FE5442]
ARCHETYPE PEERS

[Grid 3×2 de logos/nomes em Space Mono/HUD/Small, #FFFFFF, op 70%]
THE NORTH FACE   PATAGONIA    NAT GEO
RED BULL         VICE NEWS    NIKE
```

Coluna direita (50%):
```
[Label — Space Mono/HUD/Small, #FE5442]
CREATIVE TENSIONS

[3 blocos, cada um:]

[Mona Sans/Label/Large, #FE5442]
SAFETY × DANGER

[Space Mono/HUD/Small, #FFFFFF]
American church sells comfort.
TTE sells the weight of the impossible.

───

[Mona Sans/Label/Large, #FE5442]
IMPOSSIBLE × INEVITABLE

[Space Mono/HUD/Small, #FFFFFF]
43% unreached feels hopeless.
Theology says the outcome is certain.
TTE lives in that gap.

───

[Mona Sans/Label/Large, #FE5442]
VISIBILITY × ANONYMITY

[Space Mono/HUD/Small, #FFFFFF]
Influencer culture rewards the visible.
TTE celebrates the invisible prayer warrior.
```

---

## PÁGINA 5 — Tom de Voz

**Fundo:** `#28272A`

**Layout: full width com exemplos destacados**

```
[Label — Space Mono/HUD/Small, #FE5442]
VOICE & TONE

[Título — Mona Sans/Heading/H2, #FFFFFF]
HOW WE SPEAK.
```

**Grid 2 colunas — características:**

Coluna esquerda:
```
[Mona Sans/Label/Large, #FFFFFF] DIRECT
[Space Mono/Body/Small, op 60%] No filler. No hedging. No corporate speak.

[Mona Sans/Label/Large, #FFFFFF] URGENT
[Space Mono/Body/Small, op 60%] Imperative, not suggestive. A call, not an invitation.

[Mona Sans/Label/Large, #FFFFFF] SPECIFIC
[Space Mono/Body/Small, op 60%] Real places. Real numbers. Real stories.

[Mona Sans/Label/Large, #FFFFFF] POETIC
[Space Mono/Body/Small, op 60%] When speaking of mission and purpose.
```

Coluna direita:
```
[Mona Sans/Label/Large, #FFFFFF] TACTICAL
[Space Mono/Body/Small, op 60%] When presenting mission data and context.
```

**Seção de exemplos — fundo card `#FFFFFF` opacidade 5%, padding 24px:**

```
[Label — Space Mono/HUD/Small, #FE5442]  ✓ ON TONE

[Mona Sans/Heading/H3, #FFFFFF]
"FAITH THRIVES WHERE THE MAP ENDS."
"THE UNREACHED ARE NOT UNKNOWN TO GOD."
"GO WHERE THE GOSPEL HASN'T BEEN."
"THIS IS NOT A CALL TO COMFORT."
```

```
[Label — Space Mono/HUD/Small, #FFFFFF, op 40%]  ✗ OFF TONE

[Space Mono/Body/Regular, #FFFFFF, op 40%, strikethrough visual]
"Share the love of God" — too generic
"The best ministry" — empty superlative
"We are so blessed to serve" — sentimental, no action
```

---

## PÁGINA 6 — Abertura Seção Cor

**Fundo:** `#28272A`
**Mesmo layout de abertura de capítulo da página 2, adaptado:**

```
[Número — Mona Sans/Display/L, #FFFFFF, opacidade 8%, canto superior direito]
02

[Label — Space Mono/HUD/Small, #FE5442]
COLOR SYSTEM

[Título — Mona Sans/Display/XL, #FFFFFF]
THE
PALETTE.

[Linha de contexto — Space Mono/HUD/Default, #FFFFFF, op 50%]
THREE COLORS. MAXIMUM IMPACT.
EVERY PIXEL INTENTIONAL.
```

---

## PÁGINA 7 — Paleta Principal

**Fundo:** `#28272A`

**Três blocos de cor — layout horizontal, cada bloco ocupa ~1/3 da largura:**

**Bloco 1 — Fire Orange:**
```
[Swatch — retângulo 100% largura do bloco, ~280px altura, cor #FE5442]

[Label — Space Mono/HUD/Small, #FFFFFF]
FIRE ORANGE

[Hex — Mona Sans/Heading/H3, #FFFFFF]
#FE5442

[Token — Space Mono/HUD/Small, #FE5442]
brand.primary · primitives.fire-orange

[Pantone — Space Mono/HUD/Micro, #FFFFFF, op 50%]
PANTONE® BRIGHT RED U

[Significado — Space Mono/Body/Small, #FFFFFF, op 70%]
Fire of the Holy Spirit.
Urgency. Breakthrough. Action.

[Usos — Space Mono/HUD/Micro, #FFFFFF, op 50%]
CTAs · Wordmark accent · Icon wing
HUD labels · Emphasis text · Borders
```

**Bloco 2 — Black:**
```
[Swatch — #28272A com borda 1px #FFFFFF opacidade 15%]

[Label] BLACK
[Hex — Mona Sans/Heading/H3] #28272A
[Token] brand.dark · primitives.black
[Pantone] PANTONE® 19-3911 TCX BLACK BEAUTY
[Significado] The earth. The soil.
The darkness of unreached places.
[Usos] Primary backgrounds · Text on light
surfaces · Dark panels
```

**Bloco 3 — White:**
```
[Swatch — #FFFFFF]
[Texto no swatch em #28272A]

[Label] WHITE
[Hex — Mona Sans/Heading/H3, #28272A] #FFFFFF
[Token] brand.light · primitives.white
[Significado] Gospel light piercing darkness.
Contrast. Clarity. Editorial space.
[Usos] Text on dark · Light layouts
Negative space · Inverted elements
```

---

## PÁGINA 8 — Cores de Bioma

**Fundo:** `#28272A`

```
[Label — Space Mono/HUD/Small, #FE5442]
BIOME PALETTE — SECONDARY SYSTEM

[Subtítulo — Space Mono/HUD/Default, #FFFFFF, op 60%]
Used as accent in biome-specific content only.
Never as primary brand colors. Status: approved for use.
```

**Quatro swatches menores — grid 2×2:**

```
DESERT / ARID          ARCTIC / FROZEN
#B86C55                #7BA7BC
primitives.biome.desert   primitives.biome.arctic
Terracotta · dust ·    Ice blue · isolation ·
arid soil              frozen frontier

URBAN / CITY           TROPICAL / FOREST
#4A4A52                #2D5A3D
primitives.biome.city     primitives.biome.forest
Concrete · density ·   Dense green · jungle ·
anonymous crowds       hidden peoples
```

**Nota de uso abaixo dos swatches:**
```
[Space Mono/HUD/Small, #FFFFFF, op 60%]
BIOME COLORS ARE CONTEXT-SPECIFIC ACCENTS.
They appear in HUD overlays, biome badges, and regional content.
They never replace Fire Orange as the primary signal color.
```

---

## PÁGINA 9 — Regras de Uso de Cor

**Fundo:** `#28272A`

**Layout: 2 colunas**

```
[Label — Space Mono/HUD/Small, #FE5442]
COLOR RULES

[Título — Mona Sans/Heading/H2, #FFFFFF]
USE COLOR
WITH INTENT.
```

**Coluna esquerda — Semantic Tokens (tabela):**
```
[Label] SEMANTIC TOKEN REFERENCE

[Tabela em Space Mono/HUD/Small]
--color-text-default      #28272A   Body text on light
--color-text-inverted     #FFFFFF   Text on dark bg
--color-text-accent       #FE5442   Emphasis — use sparingly
--color-surface-dark      #28272A   Dark panels, cards
--color-surface-light     #FFFFFF   Light layouts
--color-surface-accent    #FE5442   CTAs only
--color-hud-text          #FFFFFF   HUD data text
--color-hud-accent        #FE5442   HUD labels
--color-hud-background    #28272A   HUD panel bg
```

**Coluna direita — Regras visuais:**
```
[✓ DO — cada item com ícone verde ou marcador laranja]
Use orange for maximum emphasis — CTAs, key words, icons
Use black as the default immersive background
Use white for editorial, clean layouts
Apply biome colors in regional/biome-specific content only

[✗ DON'T]
Use orange as a dominant background on long layouts
Use colors not in this system without approval
Hardcode hex values — always use tokens
Use biome colors as primary brand colors
```

---

## PÁGINA 10 — Abertura Seção Tipografia

**Fundo:** `#28272A`

```
[Número — op 8%] 03

[Label] TYPOGRAPHY SYSTEM

[Título — Mona Sans/Display/2XL, quebrando intencionalmente]
TYPE
SETS THE
TONE.
```

---

## PÁGINA 11 — Mona Sans

**Fundo:** `#28272A`

```
[Label — Space Mono/HUD/Small, #FE5442]
PRIMARY TYPEFACE

[Nome — Mona Sans/Display/XL, #FFFFFF]
MONA
SANS

[Descrição — Space Mono/Body/Regular, #FFFFFF, op 70%, col direita]
A strong, versatile grotesque inspired by
industrial-era typefaces. Chosen for its
heaviness, flexibility across scales, and ability
to feel both editorial and activist.

Not decorative. Not corporate. A declaration.

[Role — Space Mono/HUD/Small, #FE5442]
ROLE: WORDMARK · HEADINGS · HERO DISPLAY
WEIGHTS: BOLD 700 · EXTRABOLD 800 · BLACK 900
CASE: ALWAYS UPPERCASE — NO EXCEPTIONS
```

**Escala de tipo — demonstração visual:**
```
[Cada linha mostra o estilo em tamanho real ou reduzido proporcionalmente]

Display/2XL  96px Black    TO THE ENDS
Display/XL   72px Black    TO THE ENDS
Display/L    60px ExtraBold  TO THE ENDS
H1  48px ExtraBold   HEADING ONE
H2  36px ExtraBold   HEADING TWO
H3  28px Bold        HEADING THREE
H4  22px Bold        Heading Four
Label/Large  16px ExtraBold  LABEL LARGE
Label/Medium 13px ExtraBold  LABEL MEDIUM
```

---

## PÁGINA 12 — Space Mono

**Fundo:** `#28272A`

```
[Label — Space Mono/HUD/Small, #FE5442]
SECONDARY TYPEFACE

[Nome — Space Mono Bold, 60px, #FFFFFF]
SPACE
MONO

[Descrição — Space Mono/Body/Regular, #FFFFFF, op 70%]
A fixed-width typeface that gives a tactical and
disruptive aesthetic to the brand's information layer.

Space Mono visually signals that information is
actionable data — not background noise. It makes
spiritual intelligence feel like mission briefing.

[Role — Space Mono/HUD/Small, #FE5442]
ROLE: HUD OVERLAYS · DATA · BODY TEXT · COORDINATES
WEIGHTS: REGULAR 400 · BOLD 700
CASE: UPPERCASE FOR HUD · SENTENCE CASE FOR BODY
```

**Escala + exemplo HUD real:**
```
HUD/XL   20px Bold    TARGET: TAJIK
HUD/Default 14px Regular  EST. POP: 12,313,000
HUD/Small  12px Regular  STATUS: UNREACHED
HUD/Micro  10px Regular  ACCESS: RESTRICTED
Body/Regular 16px Regular  Body text reads like this in sentence case.
Body/Small  14px Regular  Secondary body, captions, footnotes.
Label   12px Bold    DATA LABEL
```

---

## PÁGINA 13 — Regras Tipográficas

**Fundo:** `#28272A`

**Layout 2 colunas:**

Coluna esquerda:
```
[Label] TYPOGRAPHIC RULES

✓ Mona Sans ALWAYS in UPPERCASE for display
✓ Space Mono UPPERCASE for HUD and labels
✓ Space Mono sentence case for body text only
✓ Wide letter spacing in Space Mono is intentional
✓ Line height below 100% in Display is intentional
  — creates compact editorial block

✗ Never mix both fonts at the same hierarchy level
✗ Never use Mona Sans in lowercase for display
✗ Never use any other typeface
✗ Never override letter spacing in HUD styles
```

Coluna direita — Hierarquia visual de exemplo:
```
[Frame demonstrando uma composição completa:]

[Mona Sans Display/XL, #FFFFFF]
FAITH THRIVES WHERE
[Mona Sans Display/XL, #FE5442]
THE MAP ENDS.

[Space Mono/HUD/Default, #FFFFFF, op 60%]
TARGET: TAJIK PEOPLE · CENTRAL ASIA
EST. POPULATION: 12,313,000
GOSPEL ACCESS: 0.1% · STATUS: UNREACHED

[Space Mono/Body/Regular, #FFFFFF, op 50%]
The Tajik people inhabit the mountains of
Afghanistan, Tajikistan, and Pakistan...
```

---

## PÁGINA 14 — Abertura Seção Logo

**Fundo:** `#28272A`

```
[Número — op 8%] 04
[Label] LOGO SYSTEM
[Título — Mona Sans/Display/XL] THE
MARK.
```

---

## PÁGINA 15 — O Pássaro (Ícone)

**Fundo:** `#28272A`

**Layout centralizado, fundo escuro:**

```
[Ícone TTE grande — ~320px — centralizado na metade esquerda]

[Coluna direita:]

[Label — #FE5442] THE TTE BIRD

[Subtítulo — Mona Sans/Heading/H3, #FFFFFF]
THE HOLY SPIRIT
IN MOTION.

[Corpo — Space Mono/Body/Regular, #FFFFFF, op 70%]
A stylized bird in flight. The left wing in
near-black. The right wing in Fire Orange —
evoking a flame.

Inspired by the Hope Channel bird. Distinguished
by the orange wing — representing the fire of
the Holy Spirit and the missionary movement.

[3 pontos de significado:]
[FE5442 ·] Bird form → Holy Spirit as dove
[FE5442 ·] Orange wing → Pentecost fire
[FE5442 ·] Forward momentum → Mission urgency
```

---

## PÁGINA 16 — Wordmark

**Fundo:** `#28272A`

**Demonstração do wordmark em grande escala:**

```
[Wordmark grande — ~500px wide:]
TO THE ENDS OF     [#FFFFFF]
THE EARTH          [#FE5442]

[Explicação abaixo:]
[Space Mono/HUD/Small, #FFFFFF, op 60%]
Split typographic treatment — first line in black (dark),
second line in Fire Orange. "EARTH" lands in the signal
color, reinforcing the Spiritual Biomes concept.

Mona Sans ExtraBold/Black · All Caps · Always
```

---

## PÁGINA 17 — Lockups

**Fundo:** `#28272A`

**Grid 2×2 mostrando os 4 lockups:**

```
[01 — Stacked (principal)]       [02 — Horizontal]
[ícone centralizado acima]        [ícone + wordmark lado a lado]
TO THE ENDS OF
THE EARTH
Primary hero lockup              Compact / secondary

[03 — Wordmark only]             [04 — Co-brand com Hope Channel]
TO THE ENDS OF                   [TTE icon] | [HC logo]
THE EARTH
When icon already present        All official materials
```

**Abaixo — Co-brand rules:**
```
[Space Mono/HUD/Small, #FE5442]
CO-BRANDING RULE

[Space Mono/Body/Regular, #FFFFFF, op 70%]
TTE must always appear with Hope Channel branding
in official materials. Two approved methods:

1. LOGO CO-BRAND — TTE + Hope Channel side by side,
   separated by a vertical white rule.

2. ENDORSEMENT LINE — "POWERED BY" + Hope Channel
   Hopey icon. For assets where full pairing is visually heavy.
```

---

## PÁGINA 18 — Regras do Logo

**Fundo:** `#28272A`

**Layout 2 colunas:**

Coluna esquerda:
```
[Label] PROTECTION ZONE

[Diagrama do logo com zona de proteção marcada]
Minimum clearspace: equal to the height of the "T"
in the wordmark on all sides.

[Label] COLOR VARIANTS
[3 versões do logo:]
● Logo branco — em fundos escuros ou fotográficos
● Logo preto — em fundos claros
● Logo com laranja — apenas em contextos aprovados
```

Coluna direita:
```
[Label] ✗ LOGO MISUSE

[6 exemplos de uso incorreto, cada um com X vermelho:]
✗ Don't distort or stretch
✗ Don't rotate
✗ Don't recolor outside approved variants
✗ Don't separate icon from wordmark in lockups
✗ Don't place on busy backgrounds without overlay
✗ Don't use without Hope Channel in official materials
```

---

## PÁGINA 19 — Abertura Seção Imagery

**Fundo:** `#28272A`

```
[Número — op 8%] 05
[Label] IMAGERY SYSTEM
[Título — Mona Sans/Display/XL]
THE
FIELD.
[Linha — Space Mono/HUD/Default, op 50%]
FOUR LAYERS. ONE VISUAL LANGUAGE.
```

---

## PÁGINA 20 — Os 4 Layers

**Fundo:** `#28272A`

**Layout: 4 cards horizontais, cada um ~25% da largura:**

```
[Card 1 — Layer 1]
[Placeholder de imagem — extreme wide landscape, 16:9 comprimido]
[Label laranja] LAYER 01
[Título — Mona Sans/Heading/H4, #FFFFFF] THE SCALE
[Body — Space Mono/Body/Small, op 70%]
Extreme wide shots.
Human dwarfed by landscape.
"This is impossible."
[Ref — HUD/Micro, op 40%] REF: DUNE · THE ALPINIST

[Card 2 — Layer 2]
[Placeholder — mid shot, motion blur bg]
[Label] LAYER 02
[Título] THE STILLNESS
[Body] Sharp subject, blurred world.
Eyes closed in prayer.
"I need this strength."
[Ref] REF: NIKE "GREATNESS"

[Card 3 — Layer 3]
[Placeholder — handheld POV]
[Label] LAYER 03
[POV]
First-person, unpolished.
You are there. Vulnerable.
"I am in this."
[Ref] REF: VICE NEWS

[Card 4 — Layer 4]
[Placeholder — portrait + HUD overlay]
[Label] LAYER 04
[Título] THE HUD
[Body] Mission intelligence overlay.
Data. Coordinates. Target.
"Here is your mission."
[Ref] REF: DELTA FORCE BRIEFING
```

---

## PÁGINA 21 — HUD System

**Fundo:** `#28272A`

**Layout: exemplo de HUD em grande escala, coluna de specs:**

Coluna esquerda (exemplo visual):
```
[Frame com fundo preto, HUD overlay completo:]

[Space Mono/HUD/Small, #FE5442]  TARGET:
[Space Mono/HUD/XL, #FFFFFF]     TAJIK

[linha separadora 1px #FFFFFF op 20%]

[Space Mono/HUD/Small, #FE5442]  EST. POP:
[Space Mono/HUD/Default, #FFFFFF] 12,313,000

[Space Mono/HUD/Small, #FE5442]  STATUS:
[Space Mono/HUD/Default, #FFFFFF] UNREACHED

[Space Mono/HUD/Small, #FE5442]  ACCESS:
[Space Mono/HUD/Default, #FFFFFF] RESTRICTED

[Space Mono/HUD/Small, #FE5442]  GOSPEL ACCESS:
[Space Mono/HUD/Default, #FFFFFF] 0.1%

[Space Mono/HUD/Small, #FE5442]  BIOME:
[Space Mono/HUD/Default, #FFFFFF] ARID / SEMI-ARID

[Space Mono/HUD/Small, #FE5442]  COORDS:
[Space Mono/HUD/Default, #FFFFFF] 33°N, 65°E

[box-shadow: 0 0 24px rgba(254,84,66,0.20) — HUD glow]
```

Coluna direita:
```
[Label] HUD SYSTEM

[Space Mono/Body/Regular, #FFFFFF, op 70%]
The HUD (Heads-Up Display) is TTE's most
distinctive visual element. It transforms
mission data into tactical intelligence.

Prayer requires information.
The HUD delivers the target.

[Label — #FE5442] DATA FIELDS
TARGET · EST. POP · STATUS
ACCESS · GOSPEL ACCESS
BIOME · COORDS

[Label — #FE5442] TOKEN
--elevation-hud: 0 0 24px rgba(254,84,66,0.20)
--color-hud-text: #FFFFFF
--color-hud-accent: #FE5442
--color-hud-background: #28272A
```

---

## PÁGINA 22 — Biomas

**Fundo:** `#28272A`

**4 cards de bioma — grid 2×2:**

Cada card tem:
- Fundo com a cor do bioma em opacidade 15%
- Borda esquerda 3px com a cor do bioma
- Nome do bioma em Mona Sans/Heading/H4, #FFFFFF
- Cor + token em Space Mono/HUD/Small
- 2-3 linhas de descrição em Space Mono/Body/Small, op 70%

```
[DESERT / ARID · #B86C55]
Sahara. Arabian Peninsula. Central Asia.
Where heat and isolation define the mission field.

[ARCTIC / FROZEN · #7BA7BC]
Siberia. Northern Canada. Greenland.
Where cold and remoteness seal communities from the Gospel.

[URBAN / CITY · #4A4A52]
Tokyo. Mumbai. Cairo. São Paulo.
Millions in proximity — unreached in anonymity.

[TROPICAL / FOREST · #2D5A3D]
Amazon. Congo. Papua New Guinea.
Dense. Hidden. Spiritually isolated.
```

---

## PÁGINA 23 — Regras de Imagery

**Fundo:** `#28272A`

**Layout 2 colunas:**

```
[Label] IMAGERY RULES

[✓ DO]
✓ Use real people in real missionary contexts
✓ Show tension, contemplation, journey, arrival
✓ Honor the dignity of unreached peoples — no pity
✓ Always include the topographic overlay
✓ Always include HUD data (at least partial)
✓ One emphasis word in orange in headlines — rarely two

[✗ DON'T]
✗ Generic stock photography
✗ Staged poses or studio lighting
✗ Smiling Christians in comfortable settings
✗ "Hands raised" / "cross in sunset" clichés
✗ Omit the topographic overlay
✗ Remove the HUD entirely in primary applications
```

**Prompt base para IA (card destacado):**
```
[Card fundo #FFFFFF op 8%, padding 24px, borda esquerda 3px #FE5442]

[Label — #FE5442] AI IMAGE GENERATION PROMPT

[Space Mono/Body/Small, #FFFFFF]
Photojournalism style, [biome: tropical forest / arctic /
desert / urban], missionary context, real people or
landscape, dramatic natural light, high contrast,
muted color grading, editorial feel.

No generic stock photo aesthetics. No staged poses.
Reference: National Geographic documentary photography.
```

---

## PÁGINA 24 — Abertura Seção Sistema

**Fundo:** `#28272A`

```
[Número — op 8%] 06
[Label] DESIGN SYSTEM
[Título — Mona Sans/Display/XL]
THE
TOKENS.
[Linha — Space Mono/HUD/Default, op 50%]
FOUNDATIONS FOR SCALE.
```

---

## PÁGINA 25 — Token Reference

**Fundo:** `#28272A`

**Layout: tabelas compactas em 2 colunas**

Coluna esquerda — Cores:
```
[Label] COLOR TOKENS

[Tabela — Space Mono/HUD/Small]
PRIMITIVE
fire-orange    #FE5442
black          #28272A
white          #FFFFFF
biome/desert   #B86C55
biome/arctic   #7BA7BC
biome/city     #4A4A52
biome/forest   #2D5A3D

SEMANTIC
text/default      → brand.dark
text/inverted     → brand.light
text/accent       → brand.primary
surface/dark      → brand.dark
surface/light     → brand.light
surface/accent    → brand.primary
hud/text          → brand.light
hud/accent        → brand.primary
hud/background    → brand.dark
```

Coluna direita — Spacing e outros:
```
[Label] SPACING SCALE (base 4px)
1 → 4px     2 → 8px     3 → 12px
4 → 16px    5 → 20px    6 → 24px
8 → 32px    10 → 40px   12 → 48px
16 → 64px   20 → 80px   24 → 96px

[Label] BORDER RADIUS
All elements: 0px — no exceptions
Exception: avatars only → 9999px (full)

[Label] ELEVATION
hud: 0 0 24px rgba(254,84,66,0.20)
sm:  0 2px 8px rgba(0,0,0,0.30)
md:  0 4px 16px rgba(0,0,0,0.50)
lg:  0 8px 32px rgba(0,0,0,0.70)

[Label] BORDER
All borders: 1px only
```

---

## PÁGINA 26 — Checklist de Aprovação

**Fundo:** `#28272A`

```
[Label — #FE5442] APPROVAL CHECKLIST
[Subtítulo — Mona Sans/Heading/H3, #FFFFFF]
BEFORE YOU PUBLISH,
CHECK EVERY BOX.
```

**4 grupos de checklist — grid 2×2:**

```
[VISUAL]
□ Palette within approved system
□ Mona Sans + Space Mono only
□ Logo in correct variant for background
□ Protection zone respected
□ Hope Channel lockup present (official materials)
□ Border radius zero — all elements

[IMAGERY]
□ Real missionary context photography
□ Topographic overlay present
□ HUD data present (at least partial)
□ Emphasis word in orange (if headline)
□ No generic stock
□ No staged / studio aesthetics

[COPY & TONE]
□ Direct and imperative language
□ Specific — real place, number, story
□ No sentimentalism without call to action
□ No empty superlatives

[TECHNICAL]
□ Colors via tokens — no hardcoded hex
□ Text styles from system applied
□ Assets in correct formats
  (SVG logos · PNG/WebP photos)
```

---

## PÁGINA 27 — Contracapa

**Fundo:** `#FE5442`

```
[Topographic overlay — opacidade 8%]

[Logo TTE stacked — versão preta — centralizado]

[Divider — linha 1px #28272A, op 30%]

[Citação — Mona Sans/Heading/H2, #28272A]
"YOU WILL BE MY WITNESSES...
TO THE ENDS OF THE EARTH."
[Space Mono/HUD/Small, #28272A, op 60%]
ACTS 1:8

[Rodapé]
[Space Mono/HUD/Micro, #28272A, op 50%]
TO THE ENDS OF THE EARTH · A HOPE CHANNEL INITIATIVE
BRAND SYSTEM v1.0 · 2026
tte.hopechannel.com
```

---

## Componente: Rodapé (todas as páginas)

**Criar como componente e aplicar em todas as páginas:**

```
[Altura: 40px · fundo: transparente · borda top: 1px #FFFFFF op 10%]
[padding horizontal: 80px]

[esquerda — Space Mono/HUD/Micro, #FFFFFF, op 35%]
TO THE ENDS OF THE EARTH · BRAND SYSTEM v1.0 · CONFIDENTIAL

[direita — Space Mono/HUD/Micro, #FFFFFF, op 35%]
HOPE CHANNEL INTERNATIONAL
```

---

## Componente: Número de seção background

**Criar como componente reutilizável:**
```
Mona Sans/Display/2XL
Cor: #FFFFFF ou cor do fundo com alta opacidade
Opacidade: 8%
Posição: canto superior direito, fora do grid, cortando o frame
```

---

*Spec gerada em: Jun 2026*
*Versão: 1.0*
*Próximo passo após conclusão no Figma: Claude Code gera brand-book.html + GitHub Pages*
