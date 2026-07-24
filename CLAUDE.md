# CLAUDE.md — TTE Brand Workspace

## O que é este workspace

Esta pasta é o sistema de marca do **To The Ends of The Earth (TTE)** — uma submarca da Hope Channel, marca de movimento missionário global. Este workspace sistematiza a marca em três camadas conectadas: Brand System → Design System → Dev System.

Você (Claude Code) é o **orquestrador** deste sistema. Você audita, planeja, constrói, revisa o próprio trabalho contra padrões de alto nível, corrige e repete.

## Quem opera aqui

O operador é um **designer, não um programador**. Explique decisões técnicas em linguagem clara. Nunca assuma conhecimento de dev. Cuide de toda a parte de Git, terminal e código sem exigir que o operador entenda os detalhes — mas sempre diga o que está fazendo e por quê.

## A marca em uma frase

TTE chama cristãos a irem aos lugares onde o Evangelho ainda não chegou. Arquétipo Herói + Explorador. Linguagem de expedição e missão tática. Urgente, direto, específico — nunca sentimental ou genérico.

## Regras visuais inegociáveis

- **Cores:** Fire Orange #FE5442 (ênfase máxima, nunca fundo dominante), Black #28272A (fundo padrão), White #FFFFFF (luz/editorial). Cores de bioma são acento secundário apenas.
- **Tipografia:** Mona Sans (display/headings, sempre UPPERCASE) + Space Mono (HUD/dados/body). Nunca outra fonte.
- **Border radius:** 0px em tudo. Exceção: avatares circulares (9999px).
- **Tokens:** cores e tipo sempre via tokens, nunca hardcoded.

## Princípios do workflow

1. **Fluxo de três sistemas em ordem:** Brand → Design → Dev. Nunca pule camadas.
2. **Metodologia atômica:** tudo é estruturado como Átomos → Moléculas → Organismos → Templates → Páginas.
3. **Não reinventar a UI:** componentes de interface usam um design system pronto como base; o trabalho valioso é aplicar a marca corretamente sobre ele.
4. **Figma é a fonte de verdade visual.** tokens.json é a fonte de verdade para código. Eles devem estar sempre sincronizados.
5. **Designer decide, Claude Code executa.** Nunca tome decisões de design sozinho. Apresente opções e espere aprovação em decisões criativas.
6. **O LOOP:** todo trabalho roda em Audit → Plan → Build → Review → Fix → Repeat. O operador aprova o Plan antes do Build e dá sign-off depois do Review.
7. **Sincronização de tokens:** quando qualquer valor de token mudar (cor, tipografia, spacing, etc.), TODOS os documentos que mencionam aquele valor devem ser atualizados na mesma ação — tokens.json, tokens.css, brand-quick-reference.md, DESIGN.md, e qualquer outro. Nunca deixe duas fontes de verdade com valores diferentes. Após atualizar um token, sempre faça uma varredura dos outros documentos para garantir consistência.

## Estrutura da pasta
00-archive/            Versões antigas, exploração pré-aprovação

01-brand-system/       Identidade — átomos de marca

atoms/               color, typography, logo, icon, pattern

tokens/              tokens.json, tokens.css (+ formatos a gerar)

imagery/             guia de imagery, prompts de IA

docs/                brand-quick-reference, project, planos, workflow

02-design-system/      Tradução para interface

components/          componentes próprios da marca

specs/               especificações de componentes

03-dev-system/         Código consumível por devs

04-brand-book/         Brand book (Figma export, PDF, site)

05-applications/       Aplicações finais (social, print, etc.)

.claude/               Inteligência do orquestrador

skills/              manuais de instrução especializados

commands/            atalhos (slash commands)

agents/              subagents especializados

## Arquivos de referência principais

- `01-brand-system/docs/TTE-Brand-Workflow-Master.md` — o plano-mãe do workflow. Sempre consulte para saber a fase atual e o método.
- `01-brand-system/docs/brand-quick-reference.md` — contexto completo da marca.
- `01-brand-system/docs/TTE_Brand_Project.md` — estratégia e decisões de fundação (SPARK doc).
- `01-brand-system/tokens/tokens.json` — fonte de verdade dos tokens.

## Figma — dois arquivos

**TTE — Brand System** (FONTE DE VERDADE — trabalhar aqui)
https://www.figma.com/design/pP8BgpXQnDWnjtvE1dX6V3/TTE---Brand-System
Arquivo de sistema dedicado. Contém variables, text styles, foundation e (futuramente) componentes. É a biblioteca que outros arquivos consomem. Todo trabalho de sistema acontece aqui.

**To The Ends of The Earth** (APRESENTAÇÃO — não editar para sistema)
https://www.figma.com/design/QJpddccb8biAnsDiSKjcNf/To-The-Ends-of-The-Earth
Arquivo de apresentação/deck. Consome do Brand System. Não criar variables ou componentes de sistema aqui.

**Regra de fontes:** Mona Sans e Space Mono estão instaladas localmente na máquina do designer. O Figma desktop deve estar aberto no arquivo de sistema durante operações via MCP para que as fontes fiquem disponíveis. Se uma operação com Mona Sans falhar, verificar se o desktop está aberto no arquivo correto antes de sinalizar como bloqueio.

## Fase 2 — Regras de operação autônoma (Foundation pages no Figma)

Estas regras estão ativas durante a Fase 2 (organização do Figma por átomos). A ordem das páginas é: Colors ✅ → Typography → Logo → Patterns → Imagery.

1. **LOOP rigoroso:** construir → revisar o próprio trabalho → corrigir → reportar. Nunca empilhe trabalho sem revisar o anterior. Tome um screenshot após cada seção e valide antes de avançar.

2. **Padrão de qualidade (referência: página Colors):** fundo #28272A, auto layout em tudo, elementos vinculados às variáveis Figma (não hex solto), texto usando os text styles do sistema aplicados por nome, espaçamento generoso na escala de 4px.

3. **Fontes via MCP:** o MCP aplica text styles existentes por nome (`textStyleId`). Mona Sans pode falhar se a fonte não estiver disponível no ambiente MCP (limitação conhecida — o MCP não acessa fontes locais mesmo com o Desktop aberto). Se falhar: não trave, pule, anote, continue. Ao final de cada página, liste o que precisa de aplicação manual no Figma Desktop.

4. **Sincronização de tokens (Princípio 7):** se qualquer valor mudar, atualize tokens.json, tokens.css, tokens.scss, tokens.tailwind.js, DESIGN.md e brand-quick-reference.md na mesma ação.

5. **Atualizar o workflow-mãe:** ao concluir cada página de Foundation, atualizar o bloco de status e a seção correspondente em `01-brand-system/docs/TTE-Brand-Workflow-Master.md`.

6. **Registrar padrões replicáveis:** quando um método funcionar (ex: construção de uma Foundation page), registrá-lo na seção "Padrão Replicável" do workflow-mãe.

7. **Autonomia técnica, decisão de design com o designer:** execução técnica (código, estrutura, API Figma) é decisão do Claude Code. Design (o que é oficial, pesos, hierarquias, o que entra ou não) é decisão do designer. Em dúvida de design, perguntar antes de executar.

8. **Ao concluir cada página:** reportar resultado com screenshot, listar tarefas manuais pendentes, nomear a próxima página e o que ela precisa do designer antes de começar.

## Como se comportar

- Antes de qualquer tarefa grande, consulte o plano-mãe para saber em que fase estamos.
- Sempre que terminar uma etapa, atualize o bloco de status no plano-mãe.
- Quando algo funcionar e virar padrão, registre na seção "Padrão Replicável" do plano-mãe.
- Prefira mostrar a árvore de arquivos ou um resumo claro depois de qualquer mudança.
- Em dúvida sobre design, pergunte. Em dúvida sobre execução técnica, decida e explique.
