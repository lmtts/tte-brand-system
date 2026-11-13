# Composição foto + texto — referência TTE

> Criada em 13/11/2026 depois da rodada 3 (Sahel, nota 5). Texto ok; o que falhou foi a imagem: posição,
> relação com o texto e o "socorro" com degradês grandes. Estudada nas peças do Lucas: capa TTE-2026-10-019
> (`845:248`) e slides 3 e 4 da TTE-0037 (`936:196`, `936:213`). Complementa o [protocolo FOCUS](protocolo-focus.md).

## Princípio
**A imagem é preparada para o texto, não o contrário.** Se a foto não tem área limpa, cria-se área
(expandir o teto, afastar o enquadramento) e separa-se o sujeito do fundo. **Degradê grande para salvar
texto é proibido**: ele estraga a composição. O único escurecimento permitido é o **glow** (elipse com
desfoque) entre o fundo e o sujeito recortado.

## Receita 1 — Separação de sujeito (TTE-0037, slides 3 e 4)
Ordem das camadas, de baixo para cima:

| Camada | Valores da referência |
|---|---|
| `SLOT / Photo · Fundo (P&B + dither)` | foto **expandida**; filtros `saturation −1`, `exposure −0.25` (slide 3); shader de dither (copiar o efeito de `937:264`) |
| `Glow` | elipse `#28272A`, **layer blur 500**, ~1324×1757 (rotacionada) cobrindo a área do texto, entre fundo e sujeito (copiar `936:198` ou `937:277`) |
| `SLOT / Photo · Cutout` | a mesma foto expandida, só os sujeitos, **colorida**, mesma geometria do fundo |
| textos, micrografias, caixa HUD | caixa da pergunta: fill `#28272A` 50% + background blur 44 (`936:229`) |
| `Grain` | topo |

- Sujeitos embaixo (slide 3) ou à direita (slide 4), **sem tocar o texto**; o texto fica sobre o fundo P&B + glow.
- Resultado medido: corpo branco com contraste ≥ 7:1 sem nenhum degradê.

## Receita 2 — Capa de bioma com texto no céu (TTE-2026-10-019)
- Texto escuro `#28272A` sobre céu claro. **A caixa inteira do texto precisa estar limpa** (sem árvore,
  palmeira, poste, linha do horizonte). Se não estiver: expandir o céu (teto) e descer a foto.
- **Lead-in criativo em Space Mono:** ~46px, linhas completadas com `/` até a largura exata do título
  ("WHEN THE SEASONS SHIFT, //////"). Quebra por sentido, uma frase por linha.
- Micrografia com função: linha laranja fina saindo do sujeito pelo horizonte até a borda (0019) — aponta o
  protagonista pequeno na paisagem. Usar quando o sujeito é pequeno e não colide com outros elementos.
- **Lockup:** a cor do divisor e do símbolo Hope Channel segue o **fundo atrás deles** (ver regra abaixo).

## Regra de contraste do lockup (Lucas, 13/11/2026)
- Cada marca é decidida pelo contraste **do que está atrás dela**, não pela cor do texto. "Acompanhar o
  texto" só vale quando os dois estão sobre o mesmo fundo.
- Divisor + símbolo Hope Channel são uma unidade: sempre a mesma cor entre si (preto ou branco).
- Pássaro TTE nunca recolore; se o contraste dele falhar, trocar a variante do componente.
- Fundo misto atrás do lockup: deslocar alguns px para uma área uniforme; glow suave só em último caso.

## Expandir e recortar automaticamente (Magnific)
As ferramentas de IA do Figma (Isolate/Expand) não estão na Plugin API. O fluxo é pelo Magnific:

1. Enviar a foto original (`creations_request_upload` → PUT → `creations_finalize_upload`, pasta TTE).
2. **Expandir** com `images_expand` em **tamanho exato**: `customWidth/customHeight` + `imageX/imageY`
   posicionando a foto original dentro do novo quadro (ex.: `imageY` alto = ganha teto). Prompt curto
   descrevendo a continuação ("continuation of the same pale sky above, clear and empty"). 130 créditos.
   Conferir o resultado (`creations_read`) — corpo gerado (roupa, chão) costuma funcionar; mãos e rostos, não pedir.
3. **Recortar:**
   - sujeito único → `images_remove_background` (3 créditos);
   - grupo em terreno aberto → `images_remove_background` **mantém o chão**; usar `images_segment`
     (SAM, 35 créditos) **uma caixa por pessoa** e juntar com `tools/merge_masks.py`.
4. Subir no Figma (`upload_assets`) no fundo e no Cutout — mesma geometria, encaixe exato.

Custo típico de um carrossel de bioma com 3 fotos: ~400–800 créditos.

## Verificação (não confiar no olho)
`tools/check_composition.py` mede, para cada caixa de texto: contraste no pior ponto (WCAG), sujeira
(desvio de luminância), densidade de bordas e sobreposição com o sujeito.
- **Sempre usar `--plate`**: render do slide com os textos ocultos. Sem isso, um obstáculo da mesma cor do
  texto (a copa escura da palmeira atrás do lead-in escuro) é confundido com as letras e passa.
- Calibração: TTE-0037 slide 3 aprova; Sahel v1 capa reprova (lead-in 1,77:1 — palmeira); Sahel v2 aprova (6,6:1).
- Rótulo laranja `#FE5442` sobre `#28272A` conta como texto grande (34px) → mínimo 3:1.

## Checklist de imagem (antes de compor o texto)
- [ ] A foto tem área limpa para o texto? Se não → expandir.
- [ ] O sujeito precisa passar à frente de algo ou o fundo é ruidoso? → separar sujeito (Receita 1).
- [ ] Nenhum degradê grande. Só glow entre fundo e sujeito.
- [ ] Sujeito não toca o texto; rosto nunca coberto.
- [ ] Lockup com cor pelo fundo atrás dele.
- [ ] `check_composition.py --plate` aprovado em todas as caixas.
