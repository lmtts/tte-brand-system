# Relatório — Teste de posts do TTE feitos por IA (E8)

> **Para quê:** base de uma sessão neste workspace para **templetizar os posts** do TTE
> até o Claude conseguir fazê-los sozinho. Reúne tudo o que foi feito, medido e
> aprendido no teste E8 (14/10 a 21/10/2026).
> **Origem:** o teste foi rodado a partir da pasta da ideia "Design como Serviço"
> (`C:\.jarvis\projects\empreendimentos\ideias-saas-startup\design-as-a-service\e8-teste-motor\`),
> que guarda o registro completo em português. Este relatório é a síntese para uso aqui.
> **Skill viva:** `.claude/skills/tte-social-post/SKILL.md` (v1, inglês, commit `5fa193f`).
> Ela é a fonte das regras; este relatório explica de onde cada regra veio.

---

## 1. Resumo em 10 linhas

1. **Sem contexto, a IA faz slop** (nota 1/10): cor e fonte fora da marca, halftone falso, sem lockup.
2. **Com uma skill escrita a partir das peças aprovadas, a peça já é TTE** (6/10).
3. **Com engenharia reversa + peça base lida no Figma + avaliador, chega a 9/10.**
4. **Single sobre template, com tempo medido:** 2 min de ajuste do Lucas × **6 min 25 s** fazendo à mão → **~2/3 do tempo do designer economizado**.
5. **Carrossel narrativo:** 6,5/10 e 7 min de ajuste. Compor cada slide pela imagem ainda é julgamento.
6. **Figma Agent com a mesma skill:** empata no single (7,5) e perde no carrossel (4).
7. **Post de rede social não se resolve com tokens.** Precisa de **peças base + repertório de receitas com faixas** de valores.
8. **Template é ponto de partida, não regra:** compor sempre a partir da imagem.
9. **"Remover fundo" do Figma só existe na interface** (não na API): o recorte de profundidade precisa de um clique do designer.
10. **O que falta para o Claude fazer sozinho:** está na seção 8 deste relatório.

---

## 2. O arquivo do Figma

- **Arquivo:** "To The Ends of The Earth", file key `QJpddccb8biAnsDiSKjcNf`, equipe **GC COM** (plano Pro, seat Full do Lucas).
- **Página `06 · Social Media` (`169:2`):** peças originais e templates.
- **Página `Test` (`754:2`):** cópias das peças base usadas no teste + todas as saídas do teste.

### Peças base (originais na página 06 · Social Media)

| Peça | Node | Mood | Usar quando |
|---|---|---|---|
| Post - Pray - people group (Fulani) | `401:133` (cópia no Test: `755:27`) | Quente, humano, foto em tela cheia | Convite à oração por um povo, com rosto |
| Post - TTE podcast | `747:2` (Test: `755:50`) | Escuro, cena, teaser | Anúncio, lançamento |
| Post - People Group (Thai) | `523:89` / `558:2` (Test: `755:73`) | Escuro, dossiê HUD | Ficha de um povo, com dados e mapa |
| Post - Text Stats (Thailand) | `527:223` (Test: `755:139`) | Escuro, relatório | Números de um país ou região |
| Unreached Group Carousel (Bengali, 7) | `600:19` (Test: `755:183`) | Escuro, dossiê | Carrossel completo sobre um povo |
| **Halftone Orange Carousel** (5) | `612:2` (só no 06) | **Claro**, duotone laranja/branco | Devocional, oração, conteúdo luminoso |
| Editorial/Theological Carousel (5) | `621:2` (Test: `755:480`) | Claro, figuras recortadas pequenas | Texto reflexivo, pergunta → resposta |
| Biome Specific Content (4) | `638:2` (Test: `755:532`) | Paisagem + mapa | Conteúdo sobre um bioma |
| What is TTE? (5) | `707:3` (Test: `755:578`) | Marca | Apresentação do movimento |
| What is a Prayer Partner? | `711:127` | — | (não analisado) |
| Who are Unreached People Groups? (5) | `719:2` (Test: `755:633`) | Retratos + etiquetas | Conteúdo explicativo |

**Contexto do Lucas:** muitas dessas peças são **posts base / templates** para os próximos.
Os novos mudam muita coisa, mas partem delas na essência.

---

## 3. Engenharia reversa (o que as peças ensinaram)

Método: print de cada peça + leitura das camadas no Figma (só leitura) → inventário
semântico (o **papel** de cada elemento) → hipótese do porquê → perguntas ao Lucas →
regras. Esse método funcionou e é o recomendado para qualquer marca nova.

### Padrões confirmados

1. **Duas vozes tipográficas:** Mona Sans Black (grande, espaçamento negativo) = a voz que comanda; Space Mono = dado, HUD, texto de apoio.
2. **Laranja é a cor de acento:** ornamentos, palavras de destaque, linhas, topografia, números. No mood claro (Halftone Orange) vira a cor principal.
3. **Camadas de textura:** grão de filme em quase tudo; linhas topográficas; grade de fundo; cruzes nos cantos. O Lucas varia opacidade, cor e modo de mesclagem por peça.
4. **Dado como estética (micrographics, camada 4 HUD):** fichas, "////", barras segmentadas, grade de pixels. Ele usa referências de fora para micrographics.
5. **Pessoas com dignidade:** retrato próximo, protagonista; foto tratada.
6. **Claro ou escuro:** decidido pelo template e pelo mood do post.
7. **Lockup no topo ou no rodapé:** depende do post e da imagem.
8. **Recorte de profundidade:** foto duplicada; na de cima, "remover fundo" do Figma; o sujeito passa por cima de linhas e texto.
9. **Arco dos carrosséis:** gancho (rosto ou pergunta) → contexto → território → barreira (dado) → tensão → oração → CTA (SAVE // PRAY // SHARE).

### Correções que o Lucas fez à análise (importantes)

- **Não há escala tipográfica nem margem padrão:** tamanho e margem são no olho, peça a peça.
- **Os 18 estilos de texto do arquivo são para código** (site, app). Em post eles **engessam**. O mesmo vale para transformar textura em componente.
- **Espaçamento entre letras da Space Mono depende do contexto:** **negativo (~−5%) em HUD e micrographics**; **positivo** em texto auxiliar de post mais livre; 0% em texto corrido.
- **"Contraste extremo de escala e família" não é gosto dele** (raramente faz).
- **"Um único acento de cor" não é regra.**
- **Camadas sem nome são hábito dele** e atrapalham o próprio fluxo.

### Valores medidos nos arquivos (referência, não regra)

| Item | Valor |
|---|---|
| Formato | 1080 × 1350 |
| Mona Sans Black (headline) | 71-123 px, espaçamento −1% a −6% |
| Space Mono HUD/ficha | 12-23 px, ~−5% |
| Rótulo de seção ("THE TERRAIN //") | Space Mono Bold ~22 px, +6% |
| Texto corrido | Space Mono Regular ~26 px, 0% |
| Número grande em Space Mono | Bold 41-123 px, −3% a −6% |
| Margens nos singles | 113 px (Fulani); 58 px (podcast) |
| Grão | textura em mosaico, 10-11%, máximo 12% |
| Cores no arquivo | `#FFFFFF`, `#28272A`, `#FE5442`, `#545454` (grade de pixels — fora da paleta) |
| Variáveis de cor | coleção "Collection 1": Primitives, Brand, Text, Surface, Icon, Border, HUD, ParentBrand |

### Receitas técnicas lidas no Figma

- **Duotone halftone laranja** (Halftone Orange Carousel, slide 1), de baixo para cima:
  1. `BG` branco.
  2. Foto com filtros (saturação −1, contraste +0,97, exposição +0,22, realces +0,65) e **shader de halftone** da biblioteca — id `91040247ba61849c1772a9a1caf10833c2700c71/605`, parâmetros: rotação 15, dotSize 5,5 (4,5 nos slides internos), softness 0,22 (0,10 nos internos), dotScale 1, centerPos 50/50.
  3. `Duotone`: retângulo `#FE5442` em **Screen**.
  4. Texto e micrographics.
  5. `Noise`: imagem em mosaico (hash `db2061842d5c9fbc1f8a85b62cd9e45947d89f2c`), 12%.

  Para aplicar igual em outra peça, **copie o objeto do efeito** (`effects`) e o `imageHash` — funciona pela API.
- **Dithering P&B** (People Group Thai): foto em Screen + shader "Bayer 16x16" em Soft Light ~16%.
- **Topografia:** vetor com degradê até transparente, ~50%, cor puxada da foto (no Fulani, creme `#F0DAAF`).
- **Brilho desfocado:** elipse `#28272A` com desfoque de 44 a 600.
- **Degradê de fusão:** `#28272A` de 100% a 0% sobre foto ou mapa.

---

## 4. Regras que saíram do teste

Todas já estão na skill `tte-social-post` v1.

**Contraste** (fixa, vem antes da preferência do brief):
- Mínimo 4,5:1 em texto pequeno e médio; 3:1 em texto grande. Medir no pior ponto.
- **Ordem de correção (Lucas):** (1) trocar a cor do texto; (2) mover o texto; (3) só então brilho desfocado. **A foto fica sem edição na maioria dos casos.**
- No duotone em Screen, nada fica mais escuro que `#FE5442`: texto `#28272A` é seguro em qualquer ponto (4,6:1); texto branco não (3,2:1).
- Texto claro com sombra suave também vale (o Figma Agent fez assim e teve a mesma nota).

**Lockup** (TTE + Hope Channel com divisor vertical):
- Pássaro do TTE **sempre na versão com contorno branco**; nunca recolorir.
- Variação aprovada: pássaro todo branco com o **fundo vazado** (espaço negativo), como no Text Stats.
- Símbolo da Hope Channel muda de cor para contrastar com o fundo.
- **Carrossel:** lockup no último slide (e na capa só quando o template tem); **nunca nos internos**.

**Composição:**
- **Template é ponto de partida, não regra.** Compor pela imagem: onde está o sujeito, onde está o espaço vazio.
- Enquadrar a foto antes do texto (altura da cabeça, corte, onde o rosto cai).
- Texto que encosta em pessoa: recorte de profundidade ou mover o texto.
- **Halftone depende da foto:** os valores da peça base foram calibrados para mãos em close com luz frontal; em foto contra a luz o rosto vira laranja chapado. Preferir sujeito em tons médios.

**Tipografia:**
- Sem viúvas (palavra curta solta no fim ou começo de linha).
- Carrossel: corpo perto de 26-30 px; agrupar por proximidade (título junto do texto, espaço maior entre grupos); variar peso e tamanho para não virar relatório.

**Micrographics:**
- As linhas contêm o texto inteiro; nada vaza além delas.
- Gráficos e sua largura preenchem a área que ocupam.
- Cantoneiras exatamente nos cantos do que emolduram.

**Carrossel — semântica:**
- ">>>>>>>" só nos slides internos.
- Último slide: SAVE // PRAY // SHARE + lockup, **sem setas**.

**Camadas:** nomear pelo papel (`BG`, `Photo`, `Photo / Cutout`, `Duotone`, `Topography`,
`Glow`, `Headline`, `Lead-in`, `HUD / Data`, `Micro / Corners`, `Lockup`, `Grain`).

---

## 5. As rodadas do teste

### Rodada 1 (16-19/10) — post single "Pray with us tonight"

Brief: *"A shared mission. A gathered community." / "Pray with us tonight."* — grupo em
semicírculo aberto ao espectador, halftone laranja, texto escuro. Foto placeholder do
Lucas (grupo em pé, contra a luz). Gabarito: o post real do Lucas, **não lido** por
nenhuma versão.

| Versão | Quem | Frame (página Test) | Nota | Ajuste |
|---|---|---|---|---|
| (a) sem contexto | agente novo, só o brief | `775:44` | 1 | refazer (~20 min estimado) |
| (b) com a skill v0 | agente novo, brief + skill | `775:26` | 6 | 10-15 min |
| (c) sistema completo | Claude Code + engenharia reversa + peça base + avaliador | `775:10` | 9 | até 10 min |

Problemas: (b) inverteu a hierarquia e deixou viúva ("MISSION. A"); (c) rostos
ilegíveis (halftone calibrado para outra foto) e lockup recolorido (erro: pássaro nunca
se recolore).

### Rodada 2 (20/10) — só versão (c), skill v1, tempo medido

| Peça | Frame | Nota Claude Code | Ajuste | Figma Agent | À mão (Lucas) |
|---|---|---|---|---|---|
| Single "Tonight, Pray for the Sylheti" (clone do Fulani) | `797:2` | **7,5** | **2 min** | 7,5 · 2 min · agente levou 5 min | **6 min 25 s** |
| Carrossel "Monsoon Wetlands", 4 slides (clone do Biome + ritmo do Who are) | `800:2` | **6,5** | **7 min** (capa refeita) | 4 · refazer · agente levou 9 min 50 s | 32 min (outro carrossel, 7 slides, template Unreached Group) |

Frames do Figma Agent: `804:2` e `803:9`.

**Comentários do Lucas:**
- **Single Claude Code:** posicionamento da imagem; micrographics vazando além das linhas; aumentaria os graphics e a largura deles.
- **Single Figma Agent:** sombra atrás + texto claro, funcionou; imagem melhor posicionada; micrographics também imperfeitos.
- **Carrossel Claude Code:** imagens geradas muito boas, usáveis de verdade. Capa problemática (copiou o título do Biome; o sujeito cobriu o texto e sobrou espaço vazio). Slide 2: mapa certo, mas layout "jogado" e texto pequeno. Slide 3: ok, espaçamento e interesse do texto. Slide 4: gostou da imagem no fundo; texto pequeno, viúvas, sem agrupamento.
- **Carrossel Figma Agent:** parece relatório; engessado; não entendeu a semântica (último slide sem CTA e com setas); lockup em todos os slides (errado). Bons: cantoneiras, barra de progresso.

---

## 6. Ferramentas e limites técnicos

| O quê | Como | Limite |
|---|---|---|
| Ler e escrever no Figma | Figma MCP (`use_figma`, Plugin API) + skill `figma-use` | Plano Starter: 20 chamadas/mês; Pro: 200/dia. O teste rodou na GC COM (Pro) |
| Clonar peça base | `node.clone()` e trocar foto/texto | O jeito mais fiel de partir de um template |
| Imagem nova no Figma | `upload_assets` (MCP) com `nodeIds` | `createImageAsync` não existe na API |
| Reusar imagem do arquivo | copiar `imageHash` do fill | — |
| Copiar shader (halftone) | copiar o objeto do efeito | — |
| **Remover fundo** | **só na interface do Figma** | Precisa de clique do designer. O motor deixa a camada pronta: `Photo / Cutout — remover fundo aqui` |
| Expandir imagem | Magnific `images_expand` | Créditos |
| Gerar imagem placeholder | Magnific, modelo **GPT 2.5** (`gpt-2-mini`, variante `flare`), 1080×1350, **100 créditos por imagem**, prompts pela skill `tte-imagery` | Placeholder; o padrão do TTE continua sendo foto real curada pelo Lucas |
| Unsplash | **bloqueia download automático** | O Lucas cura e coloca na página |

**Prompts que funcionaram** (rodada 2, ambos aprovados pelo Lucas como usáveis):
- **Camada 1, Scale:** haor alagado na monção, vilas que viraram ilhas, barco de madeira com um barqueiro pequeno (~8% do quadro), céu de monção, grade Deakins teal-orange, grão Portra 400.
- **Camada 3, POV:** da proa de um barco de madeira cruzando o haor ao amanhecer, mão gasta na borda em primeiro plano, névoa, grade Lubezki natural, grão grosso.

Textos completos dos prompts: `e8-teste-motor/` na pasta da ideia, e no histórico do Magnific (projeto Personal).

---

## 7. Por que o Claude ainda não faz sozinho

1. **O sistema do TTE foi feito para código.** O post não tinha skill (a documentação dizia "precisa de designer"), nem templates nomeados, nem regras de composição. A skill `tte-social-post` resolveu parte disso.
2. **Camadas sem nome:** "Rectangle 2" não diz "grão a 11%". Ao clonar um template, a IA precisa adivinhar o papel de cada camada.
3. **Templates não declaram o que é fixo e o que muda:** o motor copiou o título do Biome como se fosse regra.
4. **Composição pela imagem** (onde o sujeito cai, onde há espaço) é o ponto mais fraco nas duas rodadas.
5. **Uma ação depende da interface** (remover fundo).
6. **Carrossel** exige decisão nova por slide; o motor erra tamanho, agrupamento e ritmo.

---

## 8. Recomendações para templetizar (pauta da próxima sessão)

1. **Organizar cada peça base como template "legível"** na página 06 · Social Media:
   - camadas nomeadas pelo papel (seção 4);
   - **slots marcados**: `SLOT / Photo`, `SLOT / Headline`, `SLOT / Lead-in`, `SLOT / HUD`, `SLOT / Body`;
   - camadas fixas da marca marcadas como fixas (lockup, grão, cantoneiras).
2. **Uma ficha por template** (texto curto, na skill ou ao lado do frame):
   - quando usar (mood, papel do post);
   - o que é fixo e o que varia;
   - **o que muda conforme a imagem** (posição do texto, lado do lockup, recorte);
   - faixas de tamanho dos textos daquele template;
   - copy máximo que cabe em cada slot.
3. **Biblioteca de tipos de slide de carrossel**: capa com rosto, capa com paisagem, contexto, mapa/território, dado/barreira, tensão, oração, CTA. Cada tipo com 1-2 layouts aprovados. O carrossel passa a ser "escolher e compor tipos de slide", não desenhar do zero.
4. **Formato padrão de brief** (copy por slot + template + mood + foto), igual ao que o Lucas mandou na rodada 2 — funcionou bem.
5. **Checklist de entrega** a partir da rubrica da skill, com os erros que se repetiram: micrographics vazando, viúvas, texto pequeno, lockup no lugar errado, foto mal enquadrada.
6. **Rodada 3 de teste só de carrossel** depois disso, cronometrada, para medir se a templetização sobe a nota (hoje 6,5) e baixa o ajuste.
7. **Ponto aberto:** o `CLAUDE.md` deste workspace ainda diz "Fire Orange nunca fundo dominante" e "tokens sempre, nunca hardcoded", **sem a exceção de social** que já está no `DESIGN.md` (regras 1 e 4) e no agente da marca desde 19/10/2026. Decidir se o `CLAUDE.md` recebe a mesma exceção.

---

## 9. Onde está cada coisa

| O quê | Onde |
|---|---|
| Skill viva | `.claude/skills/tte-social-post/SKILL.md` |
| Exceção de social na marca | `01-brand-system/DESIGN.md` (regras 1 e 4); `.claude/agents/tte-brand-agent.md` |
| Skill de imagem | `.claude/skills/tte-imagery/` |
| Registro completo do teste (PT) | `C:\.jarvis\projects\empreendimentos\ideias-saas-startup\design-as-a-service\e8-teste-motor\` — `01-engenharia-reversa.md`, `02-skill-tte-social-post.md` (v0 congelada), `03-resultados.md` |
| Peças do teste | Figma, página `Test` (`754:2`), y ≥ 13600 |
