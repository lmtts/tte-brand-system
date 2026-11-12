# Fase 1 — Inventário e taxonomia dos posts TTE

> Leitura da página `06 · Social Media` (`169:2`) do arquivo "To The Ends of The Earth"
> (`QJpddccb8biAnsDiSKjcNf`) em 12/11/2026. Só leitura, nada foi alterado no Figma.
> Base para a Fase 2 (Post Kit). Famílias de carrossel definidas pelo Lucas.

## Achados gerais

- **Slides já são frames filhos nomeados `1`…`N`** dentro do frame largo do carrossel. Bom ponto de partida.
- **Camadas genéricas** (`Vector N`, `Frame N`, `Group N`, `Rectangle N`, `image N`): 24–85% por peça.
  Piores: singles de dossiê (`523:89` 84%, `527:223` 75%) e o Bengali base (`600:19` 53%).
- **Elementos que atravessam slides** existem e são parte da estética: linha laranja entre slides 4→5
  (Mission Briefing), figura que cruza a divisa (TTE-0041), capa que ocupa 2 slides (TTE-2026-10-021).
  O kit precisa permitir isso: o carrossel continua um frame largo, com slides dentro.
- **Fixos em todas as famílias:** slide CTA final, lockup, swipe `>>>>>>>`, grão, topografia no fundo do CTA.

---

## Carrosséis — 5 famílias

### F1 · Mission Briefing (people group) — 7 slides, sequência fixa
Exemplos: TTE-2026-10-014 Sylheti (`809:37`), TTE-2026-10-020 Kazakh (`855:2`), **TTE-0033 Bhil (`939:2`, referência)**. Base antiga: Bengali (`600:19`).

| # | Tipo de slide | Fixo | Varia |
|---|---|---|---|
| 1 | Capa-retrato | rótulo `MISSION BRIEFING // NN`, ficha HUD 5 linhas, lockup + swipe no rodapé | nome do povo (Space Mono Bold ~146px, topo esq.), retrato fullbleed |
| 2 | Culture Briefing | rótulo, 2 blocos `IDENTITY + COMMUNITY` / `FAITH + EXPOSURE` | texto, foto (posição muda: baixo, direita, centro) |
| 3 | The Terrain | "WITHIN REACH. STILL UNREACHED.", caixa HUD 4 linhas | dados, mapa do país com região destacada |
| 4 | The Barrier (**fundo claro**) | rótulo, 2 blocos de texto laranja, rótulo `<PAÍS> STATS //` | texto, 2–3 números grandes |
| 5 | Impossible Tension | frase "THE STATISTIC FEELS IMPOSSIBLE…", grade de pixels, ficha | retrato à direita, dados da ficha |
| 6 | Prayer Intelligence | 4 prayer points com rótulo laranja | texto dos pontos |
| 7 | Join the Watch (CTA) | "PRAY NOW. SAVE THIS BRIEFING…", SAVE // PRAY // SHARE, lockup | nome do povo na linha |

**Potencial de automação: muito alto.** Estrutura e copy praticamente fixas; variam 3 fotos, 1 mapa e os dados.

### F2 · Biomes — 5 slides
Exemplos: TTE-2026-10-010 Monsoon (`782:56`), -019 Eurasian Steppe (`845:153`), -023 Subtropical (`872:42`),
TTE-0037 Forested Hills (`936:153`), **TTE-0038 Tropical Coastlines (`941:350`, referência)**, TTE-0039 Desert Fortresses (`948:33`). Base: `638:2`.

| # | Tipo de slide | Fixo | Varia |
|---|---|---|---|
| 1 | Capa-paisagem | lockup no topo, cantoneiras `+` | **2 variantes, escolhidas pela imagem:** (a) título à esquerda no alto, lead-in embaixo (céu limpo: Steppe, Forested, Subtropical); (b) lead-in + título centralizados sobre a foto (Monsoon, Coastlines, Desert) |
| 2 | Location Highlight | rótulo `/// LOCATION HIGHLIGHT`, caixa HUD com cauda angulada, fonte no rodapé | local, mapa com região, texto + dado digital |
| 3 | Barriers / Life across | rótulo `///`, 3 blocos `TÍTULO ///` + texto | foto (metade de baixo, direita ou fundo) |
| 4 | Let the landscape shape your prayers | rótulo, "THESE ARE A FEW PLACES TO BEGIN.", caixa-pergunta "WHAT ELSE IS THE HOLY SPIRIT…" | 3 bullets, foto |
| 5 | Join the Watch (CTA) | JOIN THE WATCH, BECOME A PRAYER PARTNER, SAVE // PRAY // SHARE, lockup | linha "CARRY THE COMMUNITIES OF…" |

**Potencial: muito alto.** Explica a falha do teste (Monsoon `800:2`): a capa usou a variante errada para a imagem.

### F3 · Editorial P&B — 5–7 slides, fundo off-white, figuras P&B geradas no Magnific
Exemplos: TTE-2026-10-011 (`783:218`), -016 Love (`826:104`), TTE-0049 Devoted (`932:32`), TTE-0041 Psalm 13 (`960:2`),
TTE-0042 (`962:304`), TTE-0043 (`985:13`), TTE-0044 Habakkuk (`989:200`). Base: `621:2`.
(`962:304` e `985:13` não renderizaram: o MCP cai nessas duas peças.)

**Duas variantes vivas da mesma família** (confirmado pelo Lucas, 12/11/2026). A escolha vem do pedido do editor; o Lucas sinaliza no brief.
Cada variante tem prompts e referências próprios no Magnific.
**O que define a variante é a imagem, não a tipografia.** Dentro da simples a tipografia varia (Space Mono laranja em 011/016/024;
rótulo `THE X //` + Mona Sans + pílula de referência em 0049/0044).
- **Simples** (011, **016 = referência**, 024, 0049, 0043, 0044): figuras pequenas e contidas no slide, muito ar.
  Imagens: ilustração (gravura) ou fotografia (pessoas ou objetos, vista lateral ou de cima).
- **Rica** (só **0041** e **0042**): figuras grandes (escultura, fumaça) que podem cruzar slides.

**Jobs do Magnific** (prompts + referências visuais; viram regra na `tte-imagery`):
- Simples, ilustração: https://www.magnific.com/app/creation/dtOwIWwXSL
- Simples, fotografia: https://www.magnific.com/app/creation/kscrzqt16B
- Rica: https://www.magnific.com/app/creation/5jTY4scKxe
- Mapas (F1 e F2): https://www.magnific.com/app/creation/ovPt3jC829 · https://www.magnific.com/app/creation/gOBCqM4SXO · https://www.magnific.com/app/creation/xSMa0sTjfW

| Tipo de slide | Conteúdo |
|---|---|
| Capa-pergunta | lead-in + palavra/frase grande em laranja (ou cartão/tablet com a pergunta) |
| Texto + figura | título/rótulo, figura no centro, corpo, referência |
| Citação (variante escura) | versículo grande com trecho em laranja (TTE-2026-10-024) |
| Lista | "A FEW PLACES TO BEGIN" + bullets |
| CTA | pergunta final + BECOME A PRAYER PARTNER + SAVE // PRAY // SHARE + lockup |

**Potencial: alto no layout.** Gargalo: a figura gerada (prompt + referência).

### F4 · Halftone Laranja — 5–6 slides, claro, duotone
Exemplos: **Halftone Orange Carousel (`612:2`, referência)**, TTE-2026-10-017 Intercession (`824:6`), TTE-2026-10-021 Join the Watch (`865:40`).

| Tipo de slide | Conteúdo |
|---|---|
| Capa | foto halftone fullbleed + caixa branca com título e cantoneiras (em 021 a capa ocupa 2 slides) |
| Ponto numerado | `NN // TÍTULO` ou `// título`, citação + referência, faixa de imagem halftone, corpo |
| Texto + recorte | figura halftone recortada (pessoa, satélite) cruzando o slide |
| CTA | título laranja + texto + SAVE // PRAY // SHARE + lockup |

**Potencial: médio-alto.** O halftone depende da foto (ver relatório).

### F5 · Gerais — estética misturada
Exemplos: What is TTE? (`707:3`), What is a Prayer Partner? (`711:127`), Who are UPGs? (`719:2`), TTE-0076 "A country is not a people group" (`918:36`).

- Escuros, com foto, rótulo em caixa com cauda angulada, mapas e blocos de texto.
- Também têm slides claros e quebras de grade (foto metade + texto metade).
- **Não têm sequência própria: reusam tipos de slide das F1/F2** (mapa, caixa HUD, rótulo, texto + foto).
- **Potencial: médio.** O agente monta a partir do kit; você define a sequência no brief.

---

## Singles — 4 tipos (incluídos na análise)

| Tipo | Exemplos | Estrutura | Potencial |
|---|---|---|---|
| **S1 · Tonight, Pray for the X** | TTE-2026-10-015 Sylheti (`806:3`), -018 Kazakh (`865:2`), TTE-0028 (`932:2`), 0029 Bhil (`941:319`), 0030 Malay (`947:2`), 0031 Rajput (`964:491`). Origem: Fulani (`401:133`) | Retrato centralizado, "TONIGHT," em Space Mono + "PRAY FOR THE X" em Mona Black no topo, ficha HUD de 2 linhas à direita, lockup no rodapé central, topografia, grão. Camadas `Photo` duplicadas = recorte de profundidade | **Altíssimo.** Muda nome, dados e retrato. Primeiro candidato da automação |
| **S2 · Statement** | Podcast (`747:2`), Pray with us (`757:697`), TTE-2026-10-009 (`764:2`), -025 (`872:2`), -026 (`880:259`) | Headline grande em Mona Black com palavra laranja, foto ou objeto, lockup no topo, linha de apoio opcional | Alto. Composição pela imagem |
| **S3 · Field Report / BTS** | BTS Template v1 (`834:47`), v2 (`844:2`) | Colagem de fotos (selo, papel rasgado), "FIELD REPORT: LOCAL", ficha de produção | Médio: colagem é manual |
| **S4 · Dossiê de dados** | People Group (`523:89`), Text Stats (`527:223`) | Card HUD, ficha, mapa, números | Alto. São as peças com camadas mais genéricas |

---

## Decisões do Lucas (12/11/2026)

1. TTE-2026-10-024 (`876:178`) é **F3 Editorial P&B, variante simples**.
2. F3 tem **duas variantes vivas** (simples e rica), escolhidas pelo pedido do editor.
3. Referências aprovadas: F1 → TTE-0033 · F2 → TTE-0038 · F3 simples → TTE-2026-10-016 · F3 rica → TTE-0041/0042 · F4 → Halftone Orange Carousel · S1 → TTE-0029.
4. S3 (Field Report / BTS) **fica para depois**: é raro.
5. Protocolo de imagem: testar o retângulo `FOCUS` desenhado pelo Lucas sobre o sujeito.
6. Jobs do Magnific das variantes F3 e dos mapas recebidos (links na seção F3); viram regra na `tte-imagery`.
