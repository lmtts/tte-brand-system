---
name: brand-audit
description: Audita o estado de sistematização de uma marca, medindo o que existe contra um padrão de alto nível, e produz um relatório de gaps com plano de ação priorizado. Use quando o operador pedir uma auditoria, quando iniciar trabalho numa marca, ou quando precisar saber o estado atual do sistema antes de planejar próximos passos.
---

# Skill: Brand Audit

## Objetivo

Mapear o estado atual de sistematização de uma marca e medi-lo contra o padrão de alto nível de um brand system completo. O output é um relatório claro que mostra: o que existe, o que está sincronizado, o que falta, e o que está fora do padrão — seguido de um plano de ação priorizado.

## Quando usar

- No início do trabalho com qualquer marca
- Quando o operador roda /audit
- Antes de planejar uma nova fase
- Para verificar sincronização entre Figma, tokens e documentação

## O padrão de alto nível (o que uma marca sistematizada tem)

Audite contra estas seis dimensões. Cada uma recebe um status: ✅ Completo · 🟡 Parcial · ⬜ Ausente.

### 1. Brand System — Átomos de identidade
- Estratégia documentada (propósito, missão, visão, valores, arquétipo, tom de voz)
- Cores definidas em tokens (primitivas → semânticas), sincronizadas com Figma
- Tipografia definida em tokens e text styles, sincronizada com Figma
- Logo em todas as variantes, com regras de uso e zona de proteção
- Ícones do sistema
- Patterns (no TTE: topographic overlay, HUD)
- Imagery documentada (no TTE: sistema de 4 layers + prompts de IA)

### 2. Organização no Figma
- Páginas estruturadas e nomeadas
- Variables criadas (não só aplicadas)
- Text styles criados
- Componentes (se houver) organizados por nível atômico

### 3. Documentação
- brand-quick-reference.md (contexto para IA e equipe)
- DESIGN.md (tradução para IA gerar — estilo awesome-design-md)
- Brand book (Figma + PDF + site)

### 4. Design System
- UI kit base escolhido e plugado
- Tokens aplicados sobre o kit
- Moléculas e organismos próprios da marca
- Sincronização Figma ↔ código

### 5. Dev System
- Tokens em todos os formatos (json, css, scss, tailwind)
- Componentes em código
- Documentação para devs

### 6. Sincronização e infraestrutura
- Repositório GitHub estruturado
- Figma ↔ tokens ↔ docs alinhados
- Brand Agent

## Como executar a auditoria

1. Leia o plano-mãe (TTE-Brand-Workflow-Master.md) para saber a fase atual.
2. Leia a estrutura de pastas e os arquivos existentes em 01-brand-system/.
3. Leia os tokens (tokens.json) e a documentação.
4. Se o Figma MCP estiver disponível, leia variáveis, text styles e estrutura de páginas.
5. Para cada uma das seis dimensões acima, determine o status e anote evidências concretas (o que existe, onde, e o que falta).
6. Identifique discrepâncias entre fontes (ex: token no JSON que não bate com Figma).

## Formato do relatório

Crie um arquivo `audit-report-[data].md` em 01-brand-system/docs/ com:

- **Sumário executivo** — status geral em uma tabela de seis dimensões
- **Detalhamento por dimensão** — o que existe, o que falta, evidências
- **Discrepâncias encontradas** — conflitos entre Figma, tokens e docs
- **Gaps priorizados** — lista ordenada por impacto: o que destrava mais coisas vem primeiro
- **Plano de ação** — próximos passos concretos, cada um marcado como tarefa de Claude Code ou decisão de designer

## Princípios

- Seja específico e baseado em evidências. Nunca diga "tipografia incompleta" — diga "faltam os text styles Display 2XL, XL, L no Figma".
- Não tome decisões de design. Aponte o gap e proponha; o designer decide.
- Priorize por desbloqueio: o que destrava mais trabalho vem primeiro.
- Distinga claramente tarefas de execução (Claude Code) de decisões (designer).
