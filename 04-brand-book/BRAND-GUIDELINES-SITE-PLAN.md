# Brand Guidelines Site — Plano de Implementação
**To the Ends of the Earth** · site interativo experiencial (scrollytelling + motion HUD) · deploy Vercel
*Documento vivo — atualizar o status ao fim de cada fase. Criado 2026-07-27.*

---

## 0. Resumo

Um **site experiencial** do brand guidelines — não um documento estático. Cada seção é uma cena com imagem dominante, motion temático e a linguagem tática do TTE, **fiel aos frames do Figma**. Stack profissional, responsivo (mobile por conta do dev), deploy em produção na Vercel. O PDF é uma fase posterior, sob medida.

Regra de ouro que corrige o problema da tentativa anterior: **no desktop o layout é pixel-fiel ao frame de 1440 do Figma** (px, tamanhos, spacing, opacidades e assets literais), verificado lado a lado antes de avançar.

---

## 1. Stack (decidida)

| Camada | Escolha |
|---|---|
| Framework | **Next.js 15** — App Router, TypeScript, `output: 'export'` (site estático) |
| Estilo | **Tailwind v4** conectado aos **tokens TTE** (`tokens.tailwind.js` / `tokens.css`) — zero hardcoded |
| Motion | **GSAP + ScrollTrigger** + **Lenis** (smooth scroll) + **motion tokens** próprios (duração/easing) |
| Fontes | **self-hosted** via `next/font/local` — Mona Sans (variável) + Space Mono, pesos exatos |
| Assets | **exatos exportados do Figma**, commitados no repo (sem substituição) |
| Deploy | **Vercel**, root directory = `04-brand-book/site/` |

O motion também resolve o follow-up "motion ainda não definido" do `DESIGN.md`: os tokens de duração/easing nascem aqui e voltam para o sistema.

---

## 2. Repositório e estrutura (decidida)

**Mesmo repo do TTE Brand System**, site numa subpasta. `node_modules`/builds no `.gitignore` — o versionado é leve. O site consome tokens/assets do brand system (fonte única de verdade).

```
04-brand-book/
  BRAND-GUIDELINES-SITE-PLAN.md      ← este documento
  site/                               ← app Next.js
    app/                              rotas (App Router)
    components/
      primitives/                     Type, Eyebrow, HudLabel, Rule, PoweredBy…
      organisms/                      CoverHero, NavRail, MobileNav, SectionShell, ImageBand…
      sections/                       SectionCover, SectionBrand, … (uma por seção)
    lib/                              motion.ts (tokens de motion), hud/ (efeitos), sections.config.ts
    public/assets/                    fotos/SVGs exatos exportados do Figma
    src/tokens/                       cópia sincronizada dos tokens (via script sync-tokens)
    next.config.ts · tailwind · tsconfig · package.json
```

**Sincronização de tokens:** `01-brand-system/tokens/` continua canônico. Um passo `sync-tokens` copia para `site/src/tokens/` no build — Princípio 7 preservado (nunca duas fontes divergentes).

---

## 3. Fidelidade ao Figma (a correção central)

Cada erro apontado na tentativa anterior e a regra que o elimina:

| Erro anterior | Regra |
|---|---|
| Tamanhos inflados | Desktop = **pixel-match ao frame de 1440**. Px, font-sizes, spacing e posições **literais** do Figma (via `get_design_context` + `get_variable_defs`). Sem type fluido inflando no desktop. |
| Textura com opacidade/posição/rotação erradas | Reproduzir o **transform e a opacidade exatos** do frame (na 02 a textura é rotacionada, ancorada à esquerda, tamanho específico). |
| Logo na versão errada | Usar o **asset exato exportado do frame**, não um SVG genérico do repo. |
| Ícone Hope Channel invertido | Usar o asset na **orientação correta** (sem reproduzir flips do Figma). |
| Espaçamentos de menu errados | Gaps/margens vêm dos **valores do frame**, não de estimativa. |

**Verificação obrigatória (LOOP):** ao terminar cada seção, gerar **comparação lado a lado (screenshot do frame Figma × build a 1440)**. Só avançar quando bate. Registrar o print no fim da seção.

---

## 4. Sistema de Motion — Inteligência & Programação

O motion se comporta como um **sistema de dados / engenharia** — leitura de inteligência, não mira ou arma. **Referência de sensação: [contentarchitecture.dev](https://www.contentarchitecture.dev/)** (Next.js + Lenis; transforms guiados por variáveis CSS; easings ~520ms cubic-bezier; efeito *odometer* de texto/números). **Sem qualquer customização de cursor. Sem crosshair, reticle ou iconografia de mira/arma.** Tudo com fallback em `prefers-reduced-motion`.

**Assinaturas de motion:**
- **Odometer / rolling** *(gesto-assinatura da referência)*: números e textos-chave rolam na vertical até a posição final (dígitos/letras em Space Mono), como um contador/painel de dados.
- **Decode / index-in:** labels e coordenadas resolvem por scramble de caracteres monoespaçados (feel de terminal/compilação).
- **Boot / load:** sequência de "compile/index" — blocos e módulos assentam em stagger, readouts de dados populam, barra de progresso preenche. O logo entra por reveal limpo (clip/stroke), sem bracket de mira.
- **Reveal de seção (scroll):** transforms guiados por variável CSS (`--progress`) + ScrollTrigger — clip/opacity/y; uma linha-guia fina Fire Orange conduz a headline; bandas de imagem com scale/clip sutil.
- **Scroll:** Lenis (momentum). **Moldura de instrumento fixa** discreta — marcas de registro (print/tech) nos cantos, índice da seção e coordenadas "live", progresso como leitura de dados. Marcas de registro, nunca mira.
- **Hovers:** transições de cor/opacidade (~300ms) + **troca de label por rolling** (odometer); keyline/sublinhado Fire Orange que desenha; item de nav revela metadado. Sem reticle.
- **Números:** count-up / odometer (ex: 3.6B) em Space Mono.
- **Transição entre seções:** conteúdo "carrega/fetch" com reveal escalonado — sem linguagem de alvo.
- **Loading de rota:** micro-loader estilo "indexing / building".
- **Acento opcional:** campo sutil (canvas/three.js leve) tipo contorno topográfico/partículas, discreto — como a referência usa three.js de forma mínima.

**Motion tokens (`lib/motion.ts`):** durações (fast / base ~300ms / slow ~520ms / cinematic), easings cubic-bezier (reveals suaves; roll mecânico do odometer), staggers — consistentes em todo o site.

---

## 5. Arquitetura (atômica, espelhando o sistema)

- **Primitivos:** Type, Eyebrow, HudLabel, Rule, PoweredBy.
- **Organismos:** CoverHero, NavRail (desktop), MobileNav (overlay), SectionShell, ImageBand, HudFrame (moldura persistente).
- **Uma seção = um componente** (`SectionCover`, `SectionBrand`, …).
- **`sections.config.ts`** = ordem única-fonte da navegação.

**Ordem canônica das seções (definida por Lucas):**
`01 Cover · 02 The Brand · 03 Logos · 04 Color · 05 Typography · 06 Patterns · 07 Imagery · 08 Voice · 09 System · 10 Tokens`

**Navegação persistente (corrigido 2026-07-29):** o índice desktop (`SectionNav`) e a barra mobile (`MobileNav`) são montados **uma única vez** em `page.tsx`, fora de qualquer seção — `position: fixed`, nunca se repetem por seção e nunca scrollam com o conteúdo. Ambos leem o estado "ativo" do hook compartilhado `useActiveSection` (`lib/useActiveSection.ts`), via `IntersectionObserver`.

**Multi-página por seção:** `Section` em `sections.config.ts` aceita `pageIds?: string[]` — uma seção numerada (ex: "03 Logos") pode ocupar mais de uma tela rolável (ex: showcase + regras de uso incorreto) sem precisar de uma entrada extra no índice; o hook resolve qualquer `pageIds` de volta ao índice numérico da seção-mãe. Ainda não usado (nenhuma seção tem uma segunda página construída), mas a arquitetura já suporta.

---

## 6. Responsividade — 100% por conta do dev

Lucas desenha **apenas os frames desktop**. **Toda a responsividade e a adaptação desktop→mobile são responsabilidade do dev** (Claude Code). Abordagem mobile-first; desktop = alvo pixel-fiel de 1440; reflow/escala para tablet e mobile derivados por mim, mantendo a experiência e o tema HUD. Mostro o mobile para aprovação junto de cada seção.

---

## 7. Fases (início → fim)

Legenda de status: ⬜ pendente · 🟡 em andamento · ✅ concluído

- ✅ **Fase 0 — Fundação** *(2026-07-27)*: Next.js 16 + React 19 + Tailwind v4 em `04-brand-book/site/` (`output: export`); tokens TTE via `@theme`; fontes Mona Sans + Space Mono self-hosted (`next/font/local`); GSAP + Lenis; `HudFrame`, `DecodeText`, `CountUp`, `LenisProvider`; `sections.config.ts` + `motion.ts`; home skeleton provando fontes/tokens/motion; `npm run build` verde (static export). `#949494` tokenizado como `text.muted` e sincronizado em tokens.json/css/scss/tailwind.js + DESIGN.md. **Deploy Vercel adiado** (fazer quando conectar a conta).
- ✅ **Fase 1 — 01 Cover** *(2026-07-28)*: fiel ao frame `411:3` — asset exato (logo, mark Hope Channel, pattern-tile), motion de boot + parallax. Composição inteira escala como bloco único (`--u`) ao viewport — corrige o "tamanhos inflados". Sign-off de Lucas obtido.
- ✅ **Fase 2 — 02 The Brand** *(2026-07-29)*: layout de conteúdo (grid 36/24/12col), texto descritivo à esquerda (4 cols) + label, imagem full-bleed à direita, topo laranja (9%). Index desktop = painel colapsável (menu↔X, lista 01–10, 02 ativo). Mobile/tablet = **nav bar fixo no topo** (some na capa) + **menu full-page**. Powered-by com awareness de fundo. Escala proporcional `--u` (como a capa). Refatorado em **`SectionShell` reutilizável** para as próximas seções. Cópia real (Atos 1:8), heading branco.
  - **Regras de seção (aplicar em 03+):** body = **Space Mono 14px** (Body/Small); heading = Mona Sans 22px (H4); label 14px. Layout via `SectionShell` (`image` = direita full-bleed; `children` = conteúdo dentro das margens). Verificação visual com **Chrome headless** (não Playwright — [[feedback_avoid_playwright]]).
- ✅ **Fase 3 — 03 Logos** *(2026-07-29)*: `SectionShell` em modo `children` (conteúdo dentro das margens, não bleed). Grid 2×2 de 4 lockups representativos (Complete, Icon, Wordmark, Hope Channel Connection) em cards estilo HUD (borda fina, label com tick laranja). Texto descritivo + regra de clearspace + **botão "Download logo kit"**. **Kit de logos:** script `scripts/build-logo-kit.mjs` gera `public/downloads/tte-logo-kit.zip` automaticamente (`predev`/`prebuild`) a partir da fonte de verdade `01-brand-system/atoms/logo/` — nunca duplicação manual, sempre sincronizado. Zip não é commitado (gitignored, gerado a cada build).
  - **Correções pós sign-off** *(2026-07-29)*: (1) **Lenis+GSAP** — `LenisProvider` agora roda no ticker do GSAP e sincroniza `ScrollTrigger.update`. (2) **Índice desktop fixo e único** — `SectionNav` virou singleton `position:fixed` montado uma vez em `page.tsx` (não mais um por seção); estado ativo via `useActiveSection`. (3) **Arquitetura multi-página** — `pageIds` em `sections.config.ts` (ver acima). (4) **Margens verticais no `children` mode** — `paddingTop: 150*u` / `paddingBottom: 100*u` no `SectionShell`, alinhando o conteúdo ao índice fixo (topo) e ao rodapé (base); modo `image` continua bleed total (Seção 02 intocada).
  - **Scroll-snap "slide" (2026-07-29, 2ª rodada):** Lucas quer as seções (e futuras páginas dentro delas) se comportando como **slides** — o scroll trava em cada uma, precisa de um scroll mais forte para ir à próxima. Integrado o plugin oficial **`lenis/snap`** (`Snap` class, `type: "mandatory"`) em `LenisProvider`, com todos os `pageIds` de `SECTIONS` (incluindo futuras sub-páginas) como pontos de snap. Corrigido de quebra: a `CoverSection` nunca tinha `id="cover"` no elemento raiz — sem isso ela ficava fora do snap e do observer de seção ativa; adicionado.
- ✅ **Fase 4 — 04 Color** *(2026-07-29)*: **sem frame do Figma** — Lucas autorizou propor o layout direto em código, usando `SectionShell` + as margens já validadas na Logos. Coluna esquerda: regra de emphasis-only + dark-first + biome-secondário. Coluna direita: 3 swatches primários grandes (Fire Orange/Black/White — card HUD com hex+token sobrepostos na própria cor) + 4 swatches de bioma menores, sem header, rotulados "BIOME ACCENTS · SECONDARY, CONTEXT-SPECIFIC". Cor do texto por swatch decidida automaticamente por contraste WCAG (`lib/color.ts`, `contrastTextClass`) — não hardcoded por cor. Corrigido de passagem: emdash na copy da Logos (regra editorial do DESIGN.md proíbe).
  - **Ajustes pós sign-off** *(2026-07-29)*: (1) Fire Orange ganhou override explícito para texto branco (`Swatch.tone`), respeitando a regra documentada do sistema de botões — "Primary CTA = Fire Orange fill, white label" — em vez do cálculo automático de contraste, que preferia texto escuro ali. (2) Swatches viraram `<button>`: clique copia o hex (`navigator.clipboard`), com "Copied" substituindo o hex por 1.4s. (3) **Rodapé virou singleton fixo** (`SectionFooter.tsx`) — mesma arquitetura do índice: uma faixa horizontal `position:fixed` no rodapé, montada uma vez em `page.tsx`, válida em desktop/tablet/mobile (nunca mais um footer inline por seção). `poweredTone` saiu do componente e virou campo em `sections.config.ts` por seção (fonte única), consumido pelo footer global para decidir a cor do "Powered by Hope" e do label. `SectionShell` foi simplificado: perdeu os props `index`/`name`/`poweredTone` e a renderização de `Label`/`PoweredByHope` — agora só cuida de heading/body/image/children.
- ✅ **Fase 5 — 05 Typography** *(2026-07-29)*: **primeira seção multi-página** — usa a arquitetura `pageIds` construída na Fase 3 pela primeira vez de verdade. Duas páginas roláveis sob o mesmo índice "05": `typography-mona` (Mona Sans) e `typography-space` (Space Mono), cada uma seu próprio `SectionShell` com heading/body/botão de download específicos, mas ambas mostrando "05 / TYPOGRAPHY" no índice fixo e no rodapé fixo (resolvido automaticamente por `sectionIndexForPageId`). Layout do specimen (à direita) **aproximado de uma referência visual** que Lucas anexou (glifo "Aa" gigante + coluna de pesos + overview do alfabeto), adaptado para dentro do nosso card HUD (borda única, divisores internos) em vez de copiar o estilo plano da referência. Pesos mostrados = só os documentados no DESIGN.md por fonte (Mona: Medium/Bold/ExtraBold/Black; Space: Regular/Bold), não uma lista genérica. Botão de download linka para o Google Fonts de cada família (`target="_blank"`, sem `download` — são links externos, diferente do zip da Logos).
  - **Ajuste global de arquitetura junto:** `SectionShell` mobile/tablet agora mostra **texto primeiro, depois imagem/conteúdo** (era o inverso) — pedido do Lucas, vale para todas as seções (Brand/Logos/Color/Typography), não só a nova.
- ✅ **Fase 6 — 06 Patterns** *(2026-07-30)*: sem frame, proposta em código. Direita: 2 cards mostrando os **dois assets oficiais** (`pattern-simple.svg`, `pattern-tile.svg`, de `01-brand-system/atoms/pattern/optimized/`) na **cor nativa deles (Fire Orange, não branco)** e na **opacidade oficial do token** `semantic.opacity.topographic-overlay` = 12% — não os valores decorativos (6%/9%) que o site usa contextualmente em Cover/Brand/Logos/Color/Typography. **Decisão explícita do Lucas:** os valores usados nas seções já construídas são só ajustes decorativos/contextuais e não devem ser tratados como regra; a página de Patterns documenta o valor **oficial** do token, que é a fonte de verdade. `tokens.json` não foi alterado (ele já tinha o valor certo — 0.12 — o site é que diverge dele contextualmente; ficou registrado, não corrigido, por decisão do Lucas).
- ✅ **Fase 7 — 07 Imagery** *(2026-07-31)*: sem frame; proposta em código seguindo a referência da página "Imagery — Foundation" do Figma (specs à esquerda, os 4 layers à direita). **Lucas forneceu as 4 peças finalizadas** (`01-brand-system/imagery/examples/layer-{1..4}.png`) — não fotos cruas, mas mockups completos já com headline/HUD/logo aplicados, incluindo o exemplo canônico do Tajik (layer 4) já referenciado no DESIGN.md. Coluna esquerda: heading + intro + specs de color grading em lista label:valor (Reference/Saturation/Shadows/Highlights/Grain — extraído de `imagery-guide.md`). Coluna direita: **1 fileira de 4 cards** (não 2×2 — um grid 2×2 estourava a altura da viewport, verificado por screenshot em 1440×1024 antes de descartar a ideia), `object-contain` para não cropar nenhuma imagem apesar das proporções bem diferentes entre as 4 peças (retrato/paisagem larga/vertical extremo/retrato). Assets otimizados de PNGs de 5–17MB cada para WebP de 75–320KB. **Pendência:** os PNGs originais (~46MB) ficam em `01-brand-system/imagery/examples/`, ainda não versionados — perguntar ao Lucas se comita ou mantém local-only.
  - **Rodada de refinamento** *(2026-07-31)*: (1) parágrafo novo na coluna esquerda explicando o que são as 4 layers (antes do parágrafo dos "dois testes"). (2) Testado grid 2×2 de verdade — coube perfeito na referência 1440×1024, mas medição exata via CDP mostrou que na janela real do Lucas (1266×707) estourava **288px combinados** (122 em cima, 166 embaixo) — muito além do que padding/gap conseguem recuperar (~20-30px). Fechar isso de verdade exigiria achatar a caixa da imagem e croppar também as layers 01/04 (arriscando cortar o headline/HUD que fazem parte da própria composição). Lucas escolheu manter a fileira única de 4 (fallback já pré-autorizado) em vez de arriscar o crop. (3) Layers 02/03 passam a usar `object-cover` com `object-position` calibrado por imagem (não mais `object-contain` só nelas) — preenchem o card no mesmo peso visual de 01/04 sem letterbox; 01/04 continuam em `object-contain` porque têm texto/logo colado nas bordas que não pode ser cortado. (4) Clique em qualquer layer abre um **lightbox** (`ImageLightbox`, componente novo no mesmo arquivo) com a imagem completa sem crop, legenda, fechar por X/backdrop/Esc. **Armadilha encontrada:** a primeira versão usava `createPortal` pro `document.body` — isso quebra a herança de `--u` (é uma custom property que só existe dentro do escopo `.secd`/`.cv-d`), fazendo o botão de fechar `calc(24*var(--u))` virar inválido e cair centralizado em cima da imagem. Corrigido removendo o portal (fixed já escapa do `overflow-hidden` da section sem transform no ancestral, então não precisa de portal aqui).
  - **Novo método de screenshot (verificação sem Playwright):** `chrome --headless --screenshot` sozinho não renderiza nada além do topo da página — a arquitetura de scroll (Lenis + snap) não responde a `#hash` na URL nesse modo, e captura sempre em branco. Solução: script Node mínimo (`fetch` + `WebSocket` nativos do Node 22+, zero deps) que abre uma aba via CDP (`PUT /json/new`), navega, `scrollIntoView` no elemento certo via `Runtime.evaluate`, espera o motion assentar, e tira o screenshot via `Page.captureScreenshot` — também serve pra clicar em elementos (testar o lightbox) e pra medir overflow exato via `getBoundingClientRect()` em vez de estimar visualmente. Guardado como `scripts/cdp-shot.mjs` no site, padrão pras próximas fases em vez de reinventar.
- ✅ **Fase 8 — 08 Voice** *(2026-07-31)*: sem frame; proposta em código a partir de `01-brand-system/docs/brand-voice-guidelines-tte.md` (documento denso: arquétipo, 7 atributos, terminologia, matriz de tom). Conteúdo demais pra uma tela só, então virou a **segunda seção multi-página real** (`pageIds`, mesmo recurso da Fase 5): página 1 `voice` = a âncora **We Are / We Are Not** (7 pares, tabela de duas colunas com regra central) + botão de download do guia oficial; página 2 `voice-terminology` = termos obrigatórios (Prayer Partner, Mission Partner, Unreached people groups, Spiritual biomes, Delegated authority, The midnight cry, cada um com "Not: ...") + tira de termos proibidos riscados (Lost souls, Third world, Crusade, Charity, Emdashes). Ambas as páginas mostram "08 / VOICE" no índice e no rodapé fixos, resolvido automaticamente por `sectionIndexForPageId`. **Download do guia:** `scripts/sync-voice-doc.mjs` copia o `.md` de `01-brand-system/docs/` pra `public/downloads/tte-voice-guidelines.md` no `predev`/`prebuild` (mesmo padrão do kit de logos — nunca duplicação manual, sempre sincronizado da fonte).
  - **Ajuste de layout pós-primeiro-screenshot:** a tabela We Are/We Are Not tinha `h-full` + `justify-center` nas linhas ao mesmo tempo, esticando a borda do card pra altura inteira da coluna com um vão vazio enorme acima/abaixo das 7 linhas. Corrigido: o card agora só cresce até a altura do próprio conteúdo (sem `h-full`), e é o **wrapper externo** (não o card) que centraliza verticalmente — mesmo princípio dos cards de Imagery/Logos, onde quem centraliza é o container, não a borda.
- ✅ **Fase 9 — 09 System** *(2026-07-31)*: sem frame; proposta em código a partir da seção 13 do `DESIGN.md` ("Design System — components"). Primeira versão: 4 botões estáticos + 5 organisms como cards descritivos.
  - **Rodada de refinamento** *(2026-07-31)*: Lucas pediu (1) todos os botões que o sistema tem, com hover de verdade pra testar, e (2) os organisms **ao vivo**, não descritos, também com motion. Isso reescreveu a seção inteira e ela virou **3 páginas**: `system` (todos os 12 botões — 6 variants × 2 intents, `default/outline/secondary/ghost/link/inverted`, com as classes de hover copiadas literalmente do `button.tsx` real do `tte-ui`, traduzidas pros tokens do site — o hover é CSS real, testável no navegador, não um mockup), `system-organisms` (HUD Panel, Mission Stat, Biome Badge e Topographic Background, ao vivo e compactos), `system-people-group` (o People Group Card sozinho, numa página própria, por ser o organism mais rico — compõe todos os outros primitivos). Conteúdo do HUD Panel/People Group Card reusa o exemplo canônico Tajik já usado em Imagery/DESIGN.md (`TARGET: TAJIK`, `EST. POP: 12,313,000`, `GOSPEL ACCESS: 0.1%`, `33°N, 65°E`) — consistência entre seções.
  - **Motion real, não decorativo:** os componentes `CountUp` e `DecodeText` (construídos na Fase 0, nunca usados até agora) disparavam a animação no mount, não quando a seção entra em viewport — nesta página, a animação já teria terminado antes do usuário rolar até lá. Adicionado gate por `IntersectionObserver` (threshold 0.4, dispara uma vez) em ambos — correção de componente compartilhado, não só desta seção, então qualquer uso futuro já herda o comportamento certo.
  - **Bug pego via screenshot:** `CountUp` usava `toLocaleString(undefined, ...)`, que pega o locale do ambiente — no Chrome/Windows daqui isso formatou "3.6B" como "3,6B" e "12,313,000" como "12.313.000" (padrão pt-BR). Corrigido pra `toLocaleString("en-US", ...)` fixo, já que todo o resto do site está em inglês.
  - **Único jeito confiável de verificar hover/motion:** screenshot estático não mostra `:hover`. Criado `cdp-hover-shot.mjs` (variante do `cdp-shot.mjs`) que move o mouse de verdade via `Input.dispatchMouseEvent` do CDP antes de capturar — confirmado visualmente que o botão outline "Give" fica Fire Orange ao hover real, não só na folha de estilo.
- ⬜ **Fase 10 — Seção restante:** Lucas manda o frame **desktop** ou autoriza proposta direta; eu implemento (fidelidade + motion HUD + responsivo mobile) com comparação lado a lado ou 1 screenshot de verificação.
- ⬜ **Fase 11 — Polish global:** transições entre todas as seções, performance (Lighthouse), acessibilidade, reduced-motion, cross-browser, passada mobile completa.
- ⬜ **Fase 12 — Deploy produção:** Vercel (domínio a decidir).
- ⬜ **Fase 13 — PDF (posterior):** build de impressão dedicado.

---

## 8. O que preciso de Lucas

- **GitHub + Vercel:** autorizar o deploy a partir deste repo (root `04-brand-book/site/`). Eu conduzo o técnico, Lucas autoriza. *(Fase 0)*
- **Frames Figma desktop** das seções conforme avançamos. Cover `01` ✅ disponível. **`02` será atualizada** (menu index lateral). Demais: sob demanda.
- **Domínio:** a decidir mais pra frente.

---

## 9. Regras (guardrails)

1. **Fidelidade primeiro:** desktop = frame de 1440, verificado lado a lado antes de avançar.
2. **Tokens sempre**, nunca hardcoded; `#949494` tokenizado e sincronizado nos 4 formatos.
3. **Assets exatos do Figma**, orientação correta, sem substituições.
4. **Duas fontes só** (Mona Sans + Space Mono); **radius 0**; **Fire Orange só ênfase**.
5. **Sempre "To the Ends of the Earth", nunca "TTE".**
6. **Motion** tokenizado, temático (**inteligência & programação** — ref. contentarchitecture.dev) e **reduced-motion safe**. **Sem customização de cursor; sem crosshair / reticle / iconografia de mira ou arma.**
7. **LOOP** por seção: construir → auto-revisar (diff visual) → sign-off de Lucas → próxima. Nunca pular o sign-off.
8. **Sem Artifacts / HTML único** — isto é um repo/site real.

---

## 10. Pendências abertas

- [x] GitHub configurado — repo `lmtts/tte-brand-system`, `gh` autenticado como `lmtts`.
- [ ] **Vercel** — conectar o repo para deploy (root `04-brand-book/site/`). A resolver na Fase 0/deploy.
- [x] Design da **02 The Brand** implementado (index colapsável desktop + nav bar/menu full-page mobile).
- [x] `brand-book.html` (tentativas rejeitadas) movido para `00-archive/`.
- [ ] Domínio de produção.

---

## 11. Log de decisões

| Data | Decisão |
|---|---|
| 2026-07-27 | Pivô de HTML único → site Next.js interativo com motion. |
| 2026-07-27 | Stack: Next.js + Tailwind(tokens) + GSAP + Lenis + Vercel. |
| 2026-07-27 | PDF numa fase posterior (não capturar site ao vivo). |
| 2026-07-27 | Fidelidade: Lucas desenha frames-chave desktop; dev extrapola/responsivo com sign-off. |
| 2026-07-27 | Repo: mesmo repositório, site em `04-brand-book/site/`. |
| 2026-07-27 | Motion 100% temático HUD/mission-intel. |
| 2026-07-27 | Mobile é responsabilidade do dev; Lucas só desenha desktop. |
| 2026-07-27 | Motion refinado: inteligência & programação (ref. contentarchitecture.dev, efeito odometer). Sem cursor custom, sem mira/arma. |
| 2026-07-27 | GitHub confirmado (lmtts/tte-brand-system). Vercel a conectar no deploy. |
| 2026-07-28 | Fase 1 (Cover) aprovada; ajuste de escala proporcional (`--u`) para corrigir tamanhos grandes/margens. |
| 2026-07-29 | Fase 2 (The Brand) aprovada; body 16px→14px vira regra de seção; layout extraído em `SectionShell` reutilizável. |
| 2026-07-29 | Preferência registrada: evitar Playwright (alto custo de tokens), usar Chrome headless via Bash. |
| 2026-07-29 | Fase 3 (Logos): 4 lockups representativos + kit de download gerado por script a partir do brand system (nunca duplicado manualmente). |
| 2026-07-29 | Índice desktop virou singleton fixo (era 1 por seção, causando repetição/scroll junto). Lenis agora sincronizado ao ticker do GSAP. |
| 2026-07-29 | Arquitetura de navegação passa a suportar seções com múltiplas páginas (`pageIds`), para casos como "Logos" ganhar uma página de misuse futuramente. |
| 2026-07-29 | Scroll vira comportamento de **slide/mandatory snap** (plugin oficial `lenis/snap`) — decisão de UX: seções (e páginas futuras) travam no scroll, precisa de scroll mais forte para avançar. |
| 2026-07-29 | Tuning do Lenis suavizado (estava lento demais); Complete/Icon logos trocados; download passa a zipar a pasta `logo/` inteira. |
| 2026-07-29 | Fase 4 (Color) construída **sem frame do Figma** — primeira seção onde Lucas autorizou proposta direta em código, usando o sistema já validado (SectionShell + margens). |
| 2026-07-29 | Rodapé (nome da seção + Powered By) vira singleton fixo `SectionFooter`, mesma arquitetura do índice — nunca mais rola com o conteúdo, vale para todas as breakpoints. |
| 2026-07-29 | Fase 5 (Typography) é a primeira seção real com múltiplas páginas (`pageIds`); mobile/tablet passa a mostrar texto antes de imagem/conteúdo em toda seção. |
| 2026-07-30 | Fase 6 (Patterns) documenta o valor OFICIAL do token (12%, Fire Orange nativo) — Lucas define que os 6%/9% usados no site são decorativos/contextuais, não a regra. |
