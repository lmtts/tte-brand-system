# Audit Report — TTE Brand System
**Data:** 2026-06-18
**Executado por:** Claude Code · skill `brand-audit`
**Fase atual (workflow master):** Fase 0 concluindo → Fase 1 (esta auditoria)
**Fontes lidas:** tokens.json · tokens.css · brand-quick-reference.md · TTE_Brand_Project.md · TTE-Brand-Workflow-Master.md · TTE-BrandBook-Figma-Spec.md · estrutura de pastas completa · Figma MCP (páginas e metadata)

---

## Sumário executivo

| # | Dimensão | Status | Nota rápida |
|---|---|---|---|
| 1 | Brand System — Átomos de identidade | 🟡 Parcial | Estratégia, cores, tipo e logos sólidos. Pattern parcial. Imagery em formato não-markdown. color/ e typography/ vazias. |
| 2 | Organização no Figma | 🟡 Parcial | Crítico: só 1 página ("Cover"). Variables e text styles declarados no quick-ref mas não confirmáveis via MCP nesta sessão. |
| 3 | Documentação | 🟡 Parcial | 4 docs existem e são robustos. Faltam DESIGN.md e o Brand Book construído no Figma. |
| 4 | Design System | ⬜ Ausente | UI kit não escolhido. Nenhum componente, molécula ou organismo. |
| 5 | Dev System | 🟡 Parcial | tokens.json e tokens.css completos. Faltam .scss, tailwind, componentes em código, GitHub. |
| 6 | Sincronização e infraestrutura | ⬜ Ausente | GitHub não criado. Figma ↔ tokens não verificável via MCP. Brand Agent não iniciado. |

**Status geral:** 🟡 Brand System com base sólida, mas com lacunas estruturais no Figma e discrepâncias entre documentos que precisam ser resolvidas antes de avançar para Design System.

---

## Detalhamento por dimensão

### 1. Brand System — Átomos de identidade · 🟡 Parcial

#### O que existe

**Estratégia ✅**
- `TTE_Brand_Project.md` — SPARK doc completo: propósito, missão, visão, valores, arquétipo, público-alvo, tensões culturais, posicionamento competitivo
- `brand-quick-reference.md` — contexto de marca sintetizado, pronto para uso por IA e equipe
- Tom de voz definido com exemplos positivos e negativos de copy

**Cores ✅**
- `tokens.json` com arquitetura de 3 camadas: `primitives` → `brand` → `semantic`
- 3 cores principais definidas: Fire Orange `#FE5442`, Black `#28272A`, White `#FFFFFF`
- 4 cores de bioma definidas (com flag de aprovação pendente)
- 2 cores de marca mãe (Hope Channel) isoladas e documentadas como "parent brand only"
- Tokens semânticos completos: text, surface, icon, border, hud, biome

**Tipografia ✅**
- Escala completa no `tokens.json`: 9 estilos Mona Sans (display-2xl até label-medium) + 8 estilos Space Mono (hud-xl até label-default)
- Cada estilo com fontFamily, fontWeight, fontSize, lineHeight, letterSpacing, textCase
- Referências cruzadas corretas (`{brand.font.primary}`, `{primitives.fontSize.96}`)

**Logo ✅**
- `atoms/logo/complete-logo/` — 12 arquivos (horizontal e vertical, preto e branco, modular) em SVG + PNG
- `atoms/logo/hope-channel-connection/` — 16 arquivos (lockups com marca mãe, variantes de cor) em SVG + PNG
- `atoms/logo/` raiz — 16 wordmarks (horizontal e vertical, 4 variações de cor) em SVG + PNG

**Ícone ✅**
- `atoms/icon/` — 8 arquivos: 4 variantes (dark-bg, light-bg, full-black, full-white) em SVG + PNG

**Pattern 🟡**
- `atoms/pattern/topography-pattern-1.svg` e `topography-pattern-2.svg` — os SVGs corretos existem
- `atoms/pattern/sketches.ai` — arquivo de sketch/rascunho sem nome descritivo
- `atoms/pattern/920.eps`, `9324470.eps`, `9324473.ai`, `ce8270fa-57be-483d-92c2-931f457ba277.eps`, `e27cac98-f3b1-4776-baae-22fd37347de7.eps` e respectivos `.jpg` — 7 arquivos com nomes de UUID ou números, sem identificação. Status: assets de referência ou exploração não catalogados.
- Falta: padrão HUD formal (o sistema de overlay de dados táticos não tem asset standalone)

**Imagery 🟡**
- `imagery/TTE_Imagery_System.docx` — guia de imagery existe
- `imagery/TTE_Prompt_System.html` — prompts de IA por bioma existem
- `imagery/tte-imagery-skill.skill` — skill de imagery existe
- Falta: versão `.md` do guia (o quick-ref documenta o sistema dos 4 layers, mas o guia completo está em .docx — inacessível para Claude Code e IA)
- Falta: `ai-prompts.md` separado por bioma (os prompts estão em .html, não consultável diretamente)

**Atoms/color/ e atoms/typography/ ⬜**
- Ambas as pastas completamente vazias
- Uso esperado: swatches exportados de cor, specimens de tipografia como assets standalone
- Ausência não trava o workflow (a informação está nos tokens), mas é incompleto para um brand book

#### O que falta
- Converter guia de imagery de .docx para .md
- Converter prompts de IA de .html para ai-prompts.md por bioma
- Nomear e catalogar arquivos UUID em `atoms/pattern/`
- Criar asset HUD overlay como pattern formal
- Definir uso das pastas `atoms/color/` e `atoms/typography/`

---

### 2. Organização no Figma · 🟡 Parcial

#### O que existe
- Arquivo Figma: `QJpddccb8biAnsDiSKjcNf` — acessível via MCP
- **1 página criada:** "Cover" (frame 1920×1080 com o logotipo centralizado)
- Variables declaradas como ✅ no `brand-quick-reference.md` (seção 7, tabela de status)
- Text styles declarados como ✅ no `brand-quick-reference.md`

#### O que falta
- **Crítico:** O arquivo tem apenas a página Cover. Um brand system organizado no Figma precisa de páginas estruturadas. Estrutura esperada (baseada na Brand Book spec):
  - `🔒 _Foundation` — página de referência interna (variables, text styles, tokens)
  - `🎨 Colors` — paleta visual com swatches, nomes, valores e regras de uso
  - `Aa Typography` — specimens de todos os estilos com exemplos
  - `◎ Logo` — todas as variantes com regras de uso e zona de proteção
  - `✦ Patterns` — topographic overlay, HUD, padrões aprovados
  - `🖼 Imagery` — sistema dos 4 layers, referências, grid de biomas
  - `BB·00 – BB·NN` — páginas do Brand Book conforme `TTE-BrandBook-Figma-Spec.md`
- Variables e text styles: declarados como criados no quick-ref, mas **não confirmáveis via MCP** nesta sessão (get_variable_defs requer node selecionado no desktop app). Recomenda-se confirmação manual.
- Nenhum componente criado no Figma (esperado na Fase 3, não é gap crítico agora)

---

### 3. Documentação · 🟡 Parcial

#### O que existe
- `brand-quick-reference.md` ✅ — contexto completo de marca para IA e equipe; inclui estratégia, cores, tipografia, logo, imagery, tokens e checklist de aplicação
- `TTE_Brand_Project.md` ✅ — SPARK doc completo com briefing estratégico, público-alvo, tensões de marca, posicionamento, referências criativas
- `TTE-Brand-Workflow-Master.md` ✅ — plano-mãe do workflow; define método, fases, stack, O LOOP e roadmap
- `TTE-BrandBook-Figma-Spec.md` ✅ — especificação completa do brand book: estrutura de páginas, hierarquia tipográfica, layout de cada seção

#### O que falta
- `DESIGN.md` ⬜ — identificado no workflow master como "artefato central que traduz toda a sistematização para IA criar (estilo awesome-design-md)". É o documento que permite geração autônoma de assets alinhados à marca. Bloqueia a Fase 5 (Brand Agent).
- Brand Book construído ⬜ — a spec existe (`TTE-BrandBook-Figma-Spec.md`) mas o Figma só tem a página de Cover. As demais páginas do brand book não foram criadas.
- `TTE-Brand-Workflow-Master.md` precisa de atualização de status — a seção "Onde estamos agora" ainda marca Fase 0 como "🔄 Próximo passo", mas a Fase 0 está sendo concluída com esta auditoria.

---

### 4. Design System · ⬜ Ausente

#### O que existe
- Nenhum componente de design system foi iniciado
- A pasta `02-design-system/` existe e está estruturada (components/, specs/), mas vazia

#### O que falta
- Escolha do UI kit base (candidatos no workflow master: Untitled UI, shadcn, Radix) — **decisão do designer**
- Aplicação dos tokens TTE sobre o kit escolhido
- Componentes próprios da marca: HUD panel, biome badge, mission card, CTA button
- Sincronização Figma ↔ código

*Nota: Esta dimensão está corretamente ausente — conforme o fluxo Brand → Design → Dev, o Design System só começa depois que o Brand System estiver completo (Fase 3).*

---

### 5. Dev System · 🟡 Parcial

#### O que existe
- `tokens/tokens.json` ✅ — estrutura de 3 camadas (primitives → brand → semantic), tipografia completa, spacing, border radius, opacity, elevation. Bem documentado com descriptions.
- `tokens/tokens.css` ✅ — CSS custom properties geradas, comentadas e organizadas por camada

#### O que falta
- `tokens/tokens.scss` ⬜ — mencionado na arquitetura do quick-ref como "a gerar"
- `tokens/tokens.tailwind.js` (ou config equivalente) ⬜ — ausente
- Componentes em código ⬜ — aguardam Fase 4
- Documentação para devs ⬜ — aguardam Fase 4
- Repositório GitHub ⬜ — não estruturado; o workflow master o lista como parte do Dev System

---

### 6. Sincronização e infraestrutura · ⬜ Ausente

#### O que existe
- Figma MCP conectado ✅ — leitura de estrutura funcional nesta sessão

#### O que falta
- GitHub: repositório não criado. O workflow master o define como "fonte de verdade única" que conecta marca ↔ Claude Code ↔ Figma
- Sincronização Figma → tokens: tokens.json declara valores que deveriam espelhar as Figma variables, mas a confirmação bidirecional não é verificável via MCP sem seleção de node no desktop
- Brand Agent ⬜ — aguarda DESIGN.md, brand-quick-reference atualizado, e Fase 5

---

## Discrepâncias encontradas

**6 conflitos entre `brand-quick-reference.md` e `tokens.json`** — os dois documentos são fontes de verdade paralelas e estão desalinhados nos seguintes pontos:

| Token | quick-reference.md | tokens.json | Diferença |
|---|---|---|---|
| `primitives.color.biome.desert` | `#C4613A` | `#B86C55` | Cor diferente — laranja mais saturado vs tom mais frio |
| `typography.spaceMono.hud-xl` lineHeight | `130%` | `120%` | 10% de diferença em line-height |
| `typography.monaSans.heading-h3` lineHeight | `115%` | `100%` | 15% de diferença |
| `typography.monaSans.heading-h4` lineHeight | `120%` | `100%` | 20% de diferença |
| `typography.spaceMono.body-regular` lineHeight | `160%` | `140%` | 20% de diferença — impacto direto na legibilidade |
| `typography.spaceMono.body-small` lineHeight | `160%` | `140%` | 20% de diferença |

**Impacto:** Qualquer geração de asset usando o quick-ref como referência vai produzir resultados diferentes dos tokens em código. Precisa ser resolvido antes de avançar para Design System.

**Decisão necessária do designer:** qual valor prevalece em cada linha? O tokens.json ou o quick-reference.md? Após a decisão, Claude Code sincroniza os dois documentos.

---

## Gaps priorizados por desbloqueio

| # | Gap | Trava o quê | Responsável |
|---|---|---|---|
| 1 | Discrepâncias tokens.json ↔ quick-reference.md | Qualquer geração de asset ou design system usa valores errados | **Decisão: designer** · Execução: Claude Code |
| 2 | Figma sem páginas de Brand System | Construção visual do brand book, organização de atoms no Figma, validação de variables | **Claude Code** (estrutura) + designer (aprovação visual) |
| 3 | DESIGN.md ausente | Brand Agent (Fase 5), geração autônoma de assets, instrução padronizada para IA | **Claude Code** gera quando autorizado |
| 4 | Guia de imagery em .docx/.html (não em .md) | Claude Code não consegue ler .docx; imagery system fica inacessível para orquestrador | **Claude Code** — converter TTE_Imagery_System.docx → imagery-guide.md |
| 5 | Arquivos UUID não catalogados em `atoms/pattern/` | Pattern folder não auditável nem usável sem saber o que cada arquivo é | **Claude Code** + designer (identificar o que cada arquivo é) |
| 6 | GitHub não criado | Sincronização marca ↔ código, histórico de versões, Dev System | **Claude Code** quando autorizado |
| 7 | tokens.scss e tailwind config ausentes | Dev System incompleto — devs que usam SCSS ou Tailwind não têm os tokens | **Claude Code** — gerar a partir do tokens.json |
| 8 | Atualização de status no workflow master | Fase 0 ainda marcada como "em progresso" no plano-mãe | **Claude Code** — atualizar após sign-off desta auditoria |

---

## Plano de ação

### Imediato — antes de qualquer próximo passo

**A · [DECISÃO DO DESIGNER]** Resolver as 6 discrepâncias na tabela acima.
Método: designer indica qual valor prevalece → Claude Code atualiza o documento que estiver errado e sincroniza os dois.

---

### Bloco 1 — Fechar a Fase 1 e preparar a Fase 2

**B · [Claude Code]** Atualizar status da Fase 0 no `TTE-Brand-Workflow-Master.md` para ✅ Concluída e marcar Fase 1 como ✅ Concluída após sign-off desta auditoria.

**C · [Claude Code]** Criar `imagery/imagery-guide.md` — converter o conteúdo do TTE_Imagery_System.docx para markdown consultável. *(Requer que o designer copie o conteúdo do .docx ou dê acesso ao arquivo.)*

**D · [Claude Code]** Criar `imagery/ai-prompts.md` — converter TTE_Prompt_System.html para markdown estruturado por bioma.

**E · [Claude Code + designer]** Catalogar arquivos UUID em `atoms/pattern/` — designer identifica o que cada arquivo é; Claude Code renomeia e documenta.

---

### Bloco 2 — Brand System completo no Figma (Fase 2)

**F · [Claude Code via Figma MCP]** Criar páginas estruturadas no Figma:
- `🔒 _Foundation` (variables, text styles, tokens de referência)
- `🎨 Colors` (swatches, nomes, regras)
- `Aa Typography` (specimens)
- `◎ Logo` (variantes e regras)
- `✦ Patterns` (topographic overlay, HUD)
- `🖼 Imagery` (sistema dos 4 layers, biomas)
*Nota: Mona Sans indisponível no MCP — criação de text styles em Mona Sans precisa ser feita manualmente pelo designer.*

**G · [Claude Code]** Gerar `DESIGN.md` — artefato central de tradução da marca para IA.

---

### Bloco 3 — Dev System complementar

**H · [Claude Code]** Gerar `tokens/tokens.scss` a partir do `tokens.json`.

**I · [Claude Code]** Gerar `tokens/tokens.tailwind.js` (ou `tailwind.config.js` com extend) a partir do `tokens.json`.

**J · [Claude Code]** Criar repositório GitHub e estruturar com a pasta atual.

---

### Bloco 4 — Fase 3 em diante

**K · [DECISÃO DO DESIGNER]** Escolher o UI kit base: Untitled UI, shadcn, Radix, ou outro.
*(Só após Brand System completo e aprovado.)*

---

*Audit concluído. Aguardando sign-off do designer para marcar Fase 1 como ✅ e iniciar o Bloco 1.*
