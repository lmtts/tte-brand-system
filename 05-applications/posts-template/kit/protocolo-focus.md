# Protocolo de imagem — retângulo FOCUS

> Fase 3 do plano de templetização (12/11/2026). Em teste: o Lucas valida na primeira peça.

## Por quê
A curadoria da imagem é humana. O que a IA erra é **onde está o sujeito**: compõe o texto por cima do rosto,
corta a cabeça, escolhe a variante de capa errada (falha do teste Monsoon). O FOCUS passa essa informação
do designer para o agente em 10 segundos, sem descrever nada por escrito.

## O que o Lucas faz (por imagem)
1. Duplica o template e coloca a foto curada no `SLOT / Photo` (e no `SLOT / Photo · Cutout`, se houver).
2. Desenha **um retângulo chamado `FOCUS`** dentro do slide, por cima do que não pode ser coberto:
   - retrato → rosto (testa ao queixo);
   - corpo inteiro / figura → a figura toda;
   - paisagem → o sujeito ou o ponto de interesse (barco, vila, pessoa pequena);
   - objeto → o objeto.
   Qualquer cor, sem preenchimento. Um FOCUS por foto. Se a foto atravessa dois slides, o FOCUS fica no slide onde o sujeito está.
3. Opcional, no nome do retângulo:
   - `FOCUS · recorte` — o sujeito é único e nítido, pode passar à frente do texto (o Lucas remove o fundo da cópia Cutout no Figma);
   - `FOCUS · livre` — pode ajustar o enquadramento da foto (escala/posição); sem isso, a foto fica como o Lucas deixou.

## O que o agente faz
1. Lê os limites do `FOCUS` em relação ao slide (x, y, largura, altura em 1080×1350).
2. **Enquadra** (só com `· livre`): move/escala a foto **e o FOCUS juntos** até o FOCUS cair na posição-alvo do template (tabela abaixo). Nunca deixa a foto descobrir a borda do slide.
3. **Escolhe a variante** pela área livre: mede as faixas vazias acima, abaixo, à esquerda e à direita do FOCUS e usa a variante cujo bloco de texto cabe na maior faixa (ex.: Biomes capa a = faixa de cima ≥ ~40% do slide; senão capa b).
4. **Compõe o texto fora do FOCUS.** Nenhum texto, caixa HUD ou linha cruza o FOCUS. Exceção: com `· recorte`, o headline pode passar **atrás** do sujeito (Cutout por cima do texto), desde que o rosto continue livre.
5. Decide a cor do texto pelo contraste medido na área onde o texto ficou (regra da skill `tte-social-post`).
6. Antes de entregar: **oculta o FOCUS** (não apaga) e renomeia para `FOCUS (oculto)`, para o Lucas conferir se quiser.
7. Na nota de entrega, diz onde o FOCUS ficou e qual variante escolheu por causa dele.

## Posição-alvo por template
Tiradas das peças de referência. Medidas no slide de 1080×1350.

| Template / slide | Onde o FOCUS deve cair | Texto vai |
|---|---|---|
| S1 · Tonight, Pray | rosto centrado em x (~540), topo da cabeça na altura do headline, olhos entre y ~420 e ~560 | headline em cima (cabeça atrás com recorte), HUD à direita do lead-in, lockup no rodapé |
| F1 · 01 Capa-retrato | rosto abaixo do nome do povo (y > ~420), espaço escuro embaixo | nome no topo esquerdo, ficha HUD embaixo |
| F1 · 02 Culture Briefing | livre: baixo, direita ou centro | blocos na área oposta ao FOCUS |
| F1 · 05 Impossible Tension | metade direita (x > ~540) | coluna de texto à esquerda |
| F2 · 01 Capa (a) | terço inferior; terço superior limpo | título + lead-in à esquerda no alto |
| F2 · 01 Capa (b) | centro / horizonte | lead-in + título centralizados; recorte só se `· recorte` |
| F2 · 03 / 04 | 03: metade de baixo · 04: metade direita | 03: blocos em cima · 04: texto à esquerda |
| S2 · Statement | onde o objeto estiver; headline no maior vazio | S2b: headline partido em volta do FOCUS |
| S4a · Dossiê (retrato) | rosto centrado no quadro 271×387 | — |
| F3 / F4 / mapas | não usa FOCUS (figura gerada e posicionada no vazio; mapa usa o Micro / Target) | — |

## Limites conhecidos
- O FOCUS diz onde **não** cobrir; não julga se a foto é boa. Curadoria continua com o Lucas.
- Contraluz, céu estourado e fotos muito cheias podem não ter área livre suficiente: o agente avisa em vez de forçar (glow só como último recurso).
