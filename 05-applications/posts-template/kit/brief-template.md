# Brief padrão — post TTE

> Copie este bloco, preencha e mande para o agente (no chat ou como arquivo `.md`).
> Campos com * são obrigatórios. A copy vai **exata**, em inglês: o agente não escreve nem corta texto.

```markdown
# Brief — <nome da peça ou código, ex. TTE-0050 Malay>

* Formato: carrossel | single
* Template: F1 | F2 | F3-simples | F3-rica | F4 | F5 | S1 | S2a | S2b | S4a | S4b
  Variante: <ex. F2 capa a / capa b — ou "decidir pelo FOCUS">
  Sequência (só F5): <ex. T4 → T5 (2 slides) → T6 (2 slides) → CTA>
* Onde montar: <página do Figma; se vazio, página Test `754:2`>
  Pedido do editor / mood (opcional): <ex. "variante rica", "mais luminoso">

## Copy por slot
<!-- Um bloco por slide, na ordem. Use os nomes de slot da ficha do template. -->
### Slide 01 · <tipo, ex. Capa-retrato>
- SLOT / Headline · Povo: <texto>
- SLOT / HUD · Ficha (5 linhas): <linha 1> / <linha 2> / ...
### Slide 02 · <tipo>
- SLOT / Block 1: <título> — <texto>
...

## Imagens
| Slot | Fonte | FOCUS | Recorte |
|---|---|---|---|
| 01 · SLOT / Photo | <já colocada no frame / link / node do Figma / arquivo> | eu desenho / já desenhado | sim / não |
| 03 · SLOT / Map | gerar: <região> (receita de mapa) | — | — |
| 02 · SLOT / Figure | gerar: <assunto> (F3 simples ilustração / fotografia / rica) | — | — |

## Notas de design (opcional)
- <o que for específico desta peça>
```

## Fluxo (4 passos)

1. **Lucas** manda o brief e cura as fotos (coloca na página ou passa o link/arquivo).
2. **Agente, passada 1:** duplica o template, preenche a copy, coloca as imagens nos slots (sem enquadrar), gera as imagens marcadas como "gerar" e entrega a lista do que falta: quais fotos precisam de `FOCUS` e quais Cutouts precisam de remoção de fundo.
3. **Lucas** desenha os `FOCUS` (`· livre`, `· recorte` quando quiser) e remove o fundo dos Cutouts. ~1–2 min por foto.
4. **Agente, passada 2:** compõe pelo protocolo FOCUS, ajusta texto e caixas, passa o checklist, se autoavalia por screenshot (até 2 rodadas) e entrega com a nota.

Se as fotos já vierem com FOCUS e recorte, os passos 2 e 4 viram uma passada só.

## Exemplo preenchido (single S1)

```markdown
# Brief — TTE-0030 Malay

* Formato: single
* Template: S1
* Onde montar: página Test `754:2`

## Copy por slot
- Fixed / Lead-in: Tonight,
- SLOT / Headline · Povo: Pray for the Malay
- SLOT / HUD (4 dados): MALAYSIA | SOUTHEAST ASIA /// · CHRISTIAN PRESENCE: EST. 0.1% · STATUS: UNREACHED · EST. POP: 14.4M /

## Imagens
| Slot | Fonte | FOCUS | Recorte |
|---|---|---|---|
| SLOT / Photo | node `948:29` (TTE-0030) | eu desenho | sim |
```
