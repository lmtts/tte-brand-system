# TTE — Workflow de Sistematização de Marca
**Brand Systematization Workflow · v1.0**
*Construído no TTE · Projetado para replicar em qualquer marca*

---

## O que é este documento

Este é o plano-mãe. Ele define **como** sistematizamos uma marca — o método, não só as tarefas. Construímos no TTE primeiro; a cada etapa que funciona, extraímos o padrão reutilizável para o final do documento (seção "Padrão Replicável").

Tudo aqui é pensado para um designer operar, com o Claude Code fazendo o trabalho pesado de execução.

---

## Princípio central: o fluxo de três sistemas

```
BRAND SYSTEM  →  DESIGN SYSTEM  →  DEV SYSTEM
(identidade)     (tradução)        (código)
```

A marca é definida primeiro. Traduzida em design depois. Conectada a código por último. Nunca o contrário. Cada camada herda e respeita a anterior.

**Brand System** = quem a marca é. Estratégia, voz, logos, cores, tipografia, imagery, patterns — os átomos de identidade.

**Design System** = como a marca vira interface. Os átomos de marca aplicados a tokens e componentes, plugados num sistema de UI pronto (Untitled UI / shadcn / Radix), que vira o sistema da marca.

**Dev System** = como o sistema vira produto. Tokens em código, componentes em React, exports prontos para devs.

---

## A metodologia atômica (espinha dorsal)

Cada camada é estruturada em átomos compostos:

```
ÁTOMOS      →  cores, tipos, ícones, espaçamento, logos (indivisíveis)
MOLÉCULAS   →  combinações simples (botão = cor + tipo + spacing + radius)
ORGANISMOS  →  blocos complexos (HUD panel, card de povo, header)
TEMPLATES   →  layouts que organizam organismos (post, página, slide)
PÁGINAS     →  aplicações finais com conteúdo real
```

Aplicada não só a UI, mas a **assets de marca**: logos, cores, tipografia, ícones, patterns, layouts — tudo tem seu nível atômico.

---

## O princípio do "não reinventar a UI"

O trabalho valioso é definir a marca e seus átomos corretamente. A camada de componentes de interface **não se constrói do zero** — usa-se um design system maduro e adaptável como base. Quando os átomos, moléculas e organismos da marca estão afinados, o plug-in num sistema pronto transforma aquele sistema no *seu* sistema.

- O **brand system** cuida da identidade.
- O **template/UI kit** cuida da interface.
- Juntos = fundação pronta para produção sem reinventar o que já existe.

Base de UI escolhida para o TTE: **a definir na Etapa 3** (candidatos: Untitled UI, shadcn, Radix).

---

## A stack

| Ferramenta | Papel |
|------------|-------|
| **Figma** | Fonte de verdade visual. Tudo editável e organizado para designers. |
| **Claude Code** | Orquestrador central. Audita, planeja, constrói, revisa, corrige. |
| **Claude (chat)** | Espaço de pensamento estratégico e decisão de design. |
| **GitHub** | Fonte de verdade única. Conecta marca ↔ Claude Code ↔ Figma, sempre sincronizados. |

---

## O Claude Code como orquestrador

O Claude Code não executa tarefas soltas — ele coordena o ciclo inteiro. Para isso, ganha infraestrutura própria. Três peças (em linguagem de designer):

**Skills** — manuais de instrução especializados. "Como auditar uma marca", "como gerar tokens do Figma", "como traduzir um átomo em componente". Escrito uma vez, garante padrão de alto nível em qualquer marca.

**Slash commands** — atalhos. `/audit-brand` dispara uma rotina inteira sem reescrever prompt. Como uma action salva.

**Subagents** — assistentes especializados. Um audita, um constrói tokens, um revisa qualidade. Permitem o loop de auto-avaliação: um constrói, outro revisa contra o padrão.

---

## O LOOP — coração do workflow

Todo trabalho de sistematização roda neste ciclo de 6 passos:

```
1. AUDIT     →  Claude Code lê o estado atual (Figma + arquivos) e mapeia o que existe
2. PLAN      →  Gera um plano de passos contra um padrão de alto nível
3. BUILD     →  Subagent executa o passo (tokens, componente, doc, etc.)
4. REVIEW    →  Outro subagent avalia o output contra o padrão (checklist objetivo)
5. FIX       →  Corrige o que falhou na review
6. REPEAT    →  Próximo item, ou próxima etapa
```

O designer entra em dois momentos: aprovar o PLAN antes do BUILD, e dar o sign-off visual depois do REVIEW. O resto é autônomo.

---

## Os outputs (todos sincronizados)

A marca sistematizada existe simultaneamente em:

1. **Arquivos estruturados** no repositório (tokens.json, tokens.css, tokens.scss)
2. **`DESIGN.md`** — o artefato central que traduz toda a sistematização para IA criar (estilo awesome-design-md)
3. **`brand-quick-reference.md`** — contexto de marca para IA e equipe
4. **Figma** — totalmente editável, organizado por átomos
5. **Brand Book em PDF** — exportado do Figma para stakeholders
6. **Site interativo** — hospedado (GitHub Pages), consultável por qualquer um
7. **Brand Agent** — IA com todo o conhecimento e skills para gerar assets alinhados

---

## ROADMAP DE CONSTRUÇÃO NO TTE

### FASE 0 — Setup do orquestrador
**Objetivo:** Preparar o Claude Code para coordenar o workflow.
- Estruturar a pasta da marca no padrão do workflow
- Criar o repositório GitHub do TTE
- Conectar Figma MCP (✅ já feito)
- Criar o `CLAUDE.md` da pasta — o arquivo que dá ao Claude Code o contexto permanente da marca e as regras do workflow
- Criar a primeira skill: `brand-audit`
- Criar o primeiro slash command: `/audit`

**Entrega:** Claude Code operando na pasta com contexto e um comando funcionando.

---

### FASE 1 — Auditoria do Brand System atual
**Objetivo:** Mapear tudo que o TTE já tem e medir contra o padrão de alto nível.
- Claude Code roda `/audit` na pasta + Figma
- Gera relatório: o que existe, o que está sincronizado, o que falta, o que está fora do padrão atômico
- Define o gap entre estado atual e estado-alvo

**Entrega:** `audit-report.md` + plano de ação priorizado.

---

### FASE 2 — Brand System completo (átomos de marca)
**Objetivo:** Estruturar todos os átomos de identidade no padrão atômico.
- Cores (✅ tokens validados), tipografia (✅ validada), logos, ícones, patterns, imagery
- Organização no Figma por átomos
- Geração de `DESIGN.md` + `brand-quick-reference.md`
- Brand Book (Figma → PDF → site)

**Entrega:** Brand System completo, documentado e sincronizado.

---

### FASE 3 — Design System (tradução + plug-in)
**Objetivo:** Traduzir átomos de marca em sistema de interface.
- Escolher e plugar o UI kit base (Untitled UI / shadcn / Radix)
- Aplicar tokens e átomos da TTE sobre o kit
- Construir moléculas e organismos próprios (HUD panel, biome badge, etc.)
- Sincronizar Figma ↔ código

**Entrega:** Design System TTE pronto para uso em produto.

---

### FASE 4 — Dev System
**Objetivo:** Sistema consumível por desenvolvedores.
- Tokens em todos os formatos (json, css, scss, tailwind config)
- Componentes em código conectados aos tokens
- Documentação de uso para devs

**Entrega:** Dev System no repositório.

---

### FASE 5 — Brand Agent
**Objetivo:** IA com todo o conhecimento da marca e skills para gerar assets.
- Alimentado por DESIGN.md + brand-quick-reference + tokens + brand book
- Skills de geração de assets alinhados (copy, imagery prompts, layouts)
- Acessível para equipe (IA ou humano)

**Entrega:** Brand Agent operacional.

---

### FASE 6 — Extração do padrão replicável
**Objetivo:** Destilar o que funcionou no TTE num workflow genérico.
- Generalizar skills, commands e subagents para qualquer marca
- Criar template de pasta de marca
- Documentar o método replicável

**Entrega:** Workflow reutilizável + template para a próxima marca.

---

## PADRÃO REPLICÁVEL (preenchido conforme extraímos do TTE)

*Esta seção começa vazia e cresce. Cada vez que algo funciona no TTE e vira padrão genérico, registramos aqui. No fim, esta seção É o workflow para qualquer marca.*

### Padrão: Foundation Pages no Figma

Construção de páginas de referência visual para cada átomo de marca. Estabelecido nas páginas Colors e Typography do TTE Brand System.

**Estrutura do frame:**
- 1440px largura, auto-layout VERTICAL, padding 80px, gap 96px entre seções
- Fill: brand dark (#28272A)
- Seções: label em Space Mono/HUD/XL Fire Orange + conteúdo

**Padrão de specimen de tipografia (linha por linha):**
- Container HORIZONTAL, gap 48px, align top (counterAxisAlignItems MIN)
- Esquerda: info block VERTICAL, 300px fixo, gap 6px — nome em HUD/Small branco + specs em HUD/Micro branco 40%
- Direita: specimen text com textStyleId aplicado, FILL, branco

**Fontes via MCP:**
- Fontes do Google Fonts: `loadFontAsync` funciona nativamente
- Fontes instaladas localmente (ex: Mona Sans): adicionar como **Shared Font** no team Figma (Settings → Fonts → Upload). Após upload, aparecem em `listAvailableFontsAsync` e funcionam em todas as operações MCP.
- Aplicar estilo via `textStyleId` (não criar texto com fontName manual) — garante vinculação ao sistema de estilos.

**Ordem das Foundation Pages:**
Colors → Typography → Logo → Patterns → Imagery

### Padrão: Importação de assets vetoriais na Foundation Page

Estabelecido nas páginas ◎ Logo e ✦ Patterns do TTE Brand System. **Vetor sempre que possível — PNG só em último caso.** Vetor é editável, escalável e permite vincular cores a variáveis do Figma; PNG não permite nada disso.

**Passo 1 — Otimizar o SVG antes de tudo (obrigatório):**
```
npx svgo -f <pasta> -o <pasta>/optimized --precision=0 --multipass
```
- `--precision=0` corta as casas decimais das coordenadas. Em logos com viewBox de ~1500px, 1px de erro é 0,07% — **visualmente imperceptível**, validado por render comparativo a 1.6× de zoom.
- Redução típica: **43 KB → 5,5 KB (87% menor)**. É o que torna a importação viável.
- Sempre gravar em `optimized/` — nunca sobrescrever o original.

**Passo 2 — Inserir com `createNodeFromSvg`:**
- `const node = figma.createNodeFromSvg(svgString)` → retorna FrameNode com os vetores
- `logoBG.appendChild(node)` **antes** de mexer em sizing
- Depois: `layoutSizingHorizontal/Vertical = 'FIXED'` e `node.resize(w, h)`

**Derivar variantes de cor por substituição (economia grande):**
As variantes de cor costumam compartilhar geometria. A partir do master *orange-on-white* dá para gerar as 4 variantes do wordmark:
```js
const allWhite      = s => s.replace(/#fe5442/g, '#fff');                             // tudo branco
const allBlack      = s => s.replace(/#fff/g,'#28272a').replace(/#fe5442/g,'#28272a'); // tudo escuro
const orangeOnBlack = s => s.replace(/#fff/g, '#28272a');                             // mantém o laranja
```
⚠️ **Verificar antes de assumir:** as versões *white* e *black* dos logos completos e dos marks têm **estruturas diferentes** (5 paths vs 4 — a versão para fundo escuro tem uma silhueta de recorte a mais). Nesses casos não dá para derivar; é preciso ler os dois arquivos. Checar com um hash da geometria ignorando as cores.

**Dimensionar sem cortar:**
O Logo BG tem `clipsContent`, então um nó maior que o card é **cortado silenciosamente**. Calcular a largura útil antes:
```
largura útil = (largura_do_frame - gaps) / n_colunas - padding_do_card
```
Ex.: frame 1280, 3 colunas, gap 24, padding 24 → `(1280 - 48)/3 - 48 ≈ 362px` de teto.

**Limite real da abordagem:**
SVGs muito densos (ex.: `pattern-tile.svg`, 64 KB mesmo otimizado — 37.800 pontos de contorno topográfico) não passam de forma econômica pelo código do `use_figma`. Tentativas de reduzir mais **falham**: simplificação Douglas-Peucker converte curvas em retas e destrói a suavidade dos contornos; refit de Bézier gera arquivo *maior* que o original. Para esses casos: deixar um slot nomeado na página e importar por **drag-and-drop** no Figma (fidelidade 100%, custo zero).

---

## Onde estamos agora

```
FASE 0 · Setup do orquestrador           ✅ Concluído
FASE 1 · Auditoria                       ✅ Concluído (relatório formal: audit-report-2026-07-24.md)
FASE 2 · Brand System                    ✅ Concluído
  └─ Foundation Pages Figma
       🎨 Colors       ✅ Concluída
       Aa Typography   ✅ Concluída
       ◎ Logo          ✅ Concluída
       ✦ Patterns      ✅ Concluída
       🖼 Imagery      ✅ Concluída
FASE 3 · Design System                   ✅ Concluído
  └─ Base shadcn/ui em 03-dev-system/tte-ui
       Fundação técnica (tokens plugados, dark-first, radius 0)  ✅
       Componentes base com marca (Button intent, Badge, forms…)  ✅
       Organismos TTE (HUD Panel, People Group Card, Mission Stat…) ✅
       Escala de tamanho unificada (control 36/44/56)             ✅
       Sincronização Figma (⬡ Components + ⬢ Organisms)           ✅
FASE 4 · Dev System                      ✅ Concluído
  └─ Tokens novos sincronizados nos 4 formatos (control sizes)    ✅
       README do Dev System                                        ✅
       DESIGN.md v2.0 (seções Design System + Dev System)          ✅
FASE 5 · Brand Agent                     ✅ Concluído
  └─ Infraestrutura em .claude/
       Subagent tte-brand-agent (roteia + aplica a marca)        ✅
       Skill brand-copy (voz TTE)                                 ✅
       Skill tte-imagery (portada do archive)                     ✅
       Skill brand-deliverables (decks, brand guidelines)         ✅
       Command /tte + .claude/README.md                           ✅
FASE 6 · Extração do padrão              ✅ Concluído
  └─ METHOD.md (método replicável + template de pasta + generalização)  ✅
       README.md raiz (guia do repo, leigos + IA)                        ✅
       TTE-case-study.md (material de portfólio)                         ✅
       audit-report-2026-07-24.md (verificação de conclusão)            ✅
       SHARING.md cross-linkado                                          ✅

═══════════════════════════════════════════
  SISTEMATIZAÇÃO COMPLETA — todas as 6 fases ✅
  Brand → Design → Dev → Agent, sincronizados
═══════════════════════════════════════════
```

**Trabalho concluído na Fase 5 (Brand Agent):**
- Subagent `.claude/agents/tte-brand-agent.md` — entidade única que carrega o sistema e roteia para 3 skills de geração
- Skills: `brand-copy` (voz TTE, de brand-voice-guidelines), `tte-imagery` (portada de 00-archive com references + builder HTML), `brand-deliverables` (decks/templates/brand guidelines interativo+PDF)
- Command `/tte` para invocar o agent; `.claude/README.md` documenta o uso
- Princípio: skills apontam para as fontes autoritativas (DESIGN.md, tokens, voice, imagery) — não duplicam. Consomem o valor atual, sem desincronizar

**Trabalho concluído na Fase 3 (Design System):**
- Base shadcn/ui em `03-dev-system/tte-ui` (React + Vite + TS + Tailwind v4), dark-first, tokens plugados
- Button com prop `intent` (mobilize=Mona Sans / operate=Space Mono); escala de tamanho tokenizada (control-sm/default/lg)
- Componentes base marcados + 5 organismos TTE (HUD Panel, People Group Card, Mission Stat, Biome Badge, Topographic Background)
- Biblioteca Figma no arquivo TTE — Brand System: páginas ⬡ Components e ⬢ TTE Organisms, vinculadas a variáveis e text styles
- Specs em `02-design-system/specs/` (button, components-base, organisms)

**Trabalho concluído na Fase 4 (Dev System):**
- Escala de controle (36/44/56) sincronizada em tokens.json/css/scss/tailwind.js (radius já era 0 em todos)
- `03-dev-system/README.md` — guia completo para devs (setup, consumo de tokens, regras, componentes, API)
- DESIGN.md atualizado para v2.0 com as seções 13 (Design System) e 14 (Dev System)
- Três faces sincronizadas: tokens canônicos ↔ dev project ↔ Figma

**Trabalho concluído na Fase 2:**
- tokens.json, tokens.css, tokens.scss, tokens.tailwind.js validados e sincronizados com Figma
- DESIGN.md com sistema completo (cores, tipografia, voz, imagery, logo)
- brand-quick-reference.md criado
- Mona Sans adicionada como Shared Font no team Figma → MCP tem acesso completo a todos os 16 pesos
- Foundation Pages: Colors e Typography construídas via MCP com specimens reais
- Foundation Page ◎ Logo: 4 seções (Complete Logo × 6, TTE Mark × 4, Wordmark × 8, Hope Channel Connection × 8) — **22 assets em vetor real** (`createNodeFromSvg`), editáveis e escaláveis
- Foundation Page ✦ Patterns: `pattern-simple` em vetor real (21 paths) + seção Usage com overlay a 12% de opacidade. `pattern-tile` tem slot reservado — precisa de drag-and-drop manual (64 KB, irredutível)
- Foundation Page 🖼 Imagery: página de documentação com 4-Layer System (placeholders com bordas Fire Orange), Color Grading reference e guia Always/Never — aguarda fotografias reais do designer
- **Idioma:** todo o conteúdo das Foundation Pages está em inglês (idioma padrão da marca)
- SVGs otimizados com SVGO (`--precision=0`) em `atoms/logo/optimized/` e `atoms/pattern/optimized/`; originais preservados
- Pasta `atoms/pattern/` limpa: stock e versões antigas movidos para `00-archive/pattern-source-stock/`

---

*Plano-mãe do workflow de sistematização. Tudo daqui pra frente referencia este documento.*
*Construído no TTE · v1.0 · Jun 2026*
