# TTE Post Kit — fichas em texto

Cópia em texto do kit de posts que vive no Figma, para o sistema não depender só do arquivo.
**Figma é a fonte visual; estas fichas são a fonte das regras.** Se mudar uma, atualize a outra.

- Arquivo: "To The Ends of The Earth" (`QJpddccb8biAnsDiSKjcNf`), página `06.1 · Post Kit` (`1002:316`)
- Atualizado: 12/11/2026 (Fase 2 do plano de templetização — ver `../fase2-post-kit.md`)
- Imagens de referência de cada template: [`refs/`](refs/)

## Como usar

1. Escolha a família ou o single pelo brief e leia a ficha correspondente.
2. No Figma, duplique o template inteiro (o carrossel é um frame largo com slides de 1080×1350 dentro).
3. Troque só as camadas `SLOT / …`. `Fixed / …` não muda. Camadas sem prefixo (Glow, Fade, Topography, HUD / Line, Micro / …) são estrutura e ajustam no olho.
4. Marcas fixas são instâncias de componente: não desagrupar, não recolorir.
5. Compare o resultado com a imagem em `refs/`.

## Fichas

| Ficha | Template no Figma | Referência visual |
|---|---|---|
| [F1 · Mission Briefing](F1-mission-briefing.md) | `1002:2` | [refs/F1-mission-briefing.jpg](refs/F1-mission-briefing.jpg) |
| [F2 · Biomes](F2-biomes.md) | `1006:51` + capa a `1006:148` | [refs/F2-biomes.jpg](refs/F2-biomes.jpg), [capa a](refs/F2-biomes-capa-variante-a.jpg) |
| [F3 · Editorial P&B](F3-editorial.md) | simples `1011:83` · rica `1011:129` | [simples](refs/F3-editorial-simples.jpg), [rica](refs/F3-editorial-rica.jpg) |
| [F4 · Halftone Laranja](F4-halftone.md) | `1013:125` | [refs/F4-halftone-laranja.jpg](refs/F4-halftone-laranja.jpg) |
| [F5 · Gerais](F5-gerais.md) | `1015:132` · `1015:191` | [A](refs/F5-gerais-exemplo-A.jpg), [B](refs/F5-gerais-exemplo-B.jpg) |
| [S1 · Tonight, Pray](S1-tonight-pray.md) | `1002:291` | [refs/S1-tonight-pray.jpg](refs/S1-tonight-pray.jpg) |
| [S2 · Statement](S2-statement.md) | S2a `1018:153` · S2b `1018:166` | [S2a](refs/S2a-statement-topo.jpg), [S2b](refs/S2b-statement-central.jpg) |
| [S4 · Dossiê](S4-dossie.md) | S4a `1018:187` · S4b `1018:254` | [S4a](refs/S4a-dossie-people-group.jpg), [S4b](refs/S4b-dossie-pais.jpg) |

S3 · Field Report / BTS fica para depois (raro).

**Imagem:** fotos reais seguem o [protocolo FOCUS](protocolo-focus.md) (aprovado em 12/11/2026). Imagens geradas (figuras do Editorial, mapas) seguem as receitas do Magnific em `.claude/skills/tte-imagery/references/magnific-social-recipes.md`.

## Componentes (seção `1002:319`) — [refs/00-componentes.jpg](refs/00-componentes.jpg)

| Componente | Node | Regra |
|---|---|---|
| Lockup / Compact | set `1008:89` — Bird=Branco vazado `1002:326` · Bird=Laranja contorno branco `1008:88` | Assinatura compacta TTE + Hope Channel. Duas versões aprovadas do pássaro; usar a da peça de referência; **nunca recolorir o pássaro**. Laranja com contorno branco = padrão (Biomes, singles); branco vazado = dossiês. O símbolo Hope muda de cor para contrastar. |
| Lockup / Full | set `1012:125` — Fundo=Escuro `1002:335` · Fundo=Claro `1012:124` | Só no último slide do carrossel, nunca nos internos. Fundo=Claro para off-white (Editorial, Halftone). |
| Micro / Swipe | `1002:337` | `>>>>>>>` só nos internos (e capa), nunca no último slide. Cor pelo fundo (override no texto): branco sobre foto/escuro, preto #28272A sobre off-white, laranja quando o original pede. Opacidade ~40%. |
| Micro / Corner | `1002:341` | Cruz "+" de canto, tamanho único 37px. Alinhar exatamente ao canto/margem que emoldura. |
| Label / Section | `1002:344` | Rótulo "TEXTO //" laranja com contorno; propriedade de texto "Label"; acompanha `Micro / Label Tail`. |
| Texture / Grain | `1006:33` | Grão de filme; sempre a camada do topo; ajustar só a opacidade da instância (10–11% padrão, 9% foto muito limpa, 12% máx.). |

## Tratamentos (seção `1020:200`) — [refs/00-tratamentos.jpg](refs/00-tratamentos.jpg)

Não são componentes: copiar e ajustar no olho.

| Tratamento | Receita |
|---|---|
| Halftone duotone laranja | Fundo branco → foto P&B com shader halftone (contraste +0,97, realces +0,65 como base) → retângulo #FE5442 em Screen do mesmo tamanho → Grain 12%. Depende da foto: tons médios funcionam; contraluz vira laranja chapado. |
| Figura editorial P&B | Fundo off-white → figura (Multiply, exposição +0,44) → **a mesma** figura em Screen com shader de pontilhado → papel 5% Multiply → Grain 12%. |
| Dithering P&B | Retrato P&B → cópia com shader Bayer em Soft Light ~16% → grade de 12 quadrados 6–10% → Grain 11%. |
| Mapa + glow | Mapa do Magnific (linhas brancas, região laranja) sobre #28272A → elipses #28272A com blur grande para apagar bordas e abrir espaço para texto. |
| Topografia | Vetor `pattern-simple` saindo pelo canto, 6–12% (até ~50% em dossiê). Branca, laranja ou com cor tirada da foto. |
| Topografia sobre foto + recorte | Topografia com cor da foto, por cima da imagem e atrás do sujeito; foto duplicada com fundo removido na cópia de cima para o sujeito passar à frente do texto. |

## Regras gerais do kit

- Caixas HUD vetoriais (HUD Box, Question Box, Title Box, rótulo em caixa, pílula de referência): o texto nunca passa da borda — se o texto crescer, **redimensiona-se a caixa**, não só o texto.
- Recorte de profundidade é condicional: só com sujeito único e nítido. Sem isso, apagar a camada Cutout.
- Elementos que atravessam slides: duplicar no slide vizinho com x deslocado em −1080.
- Cor do texto pelo contraste medido atrás dele (ordem: trocar a cor → mover o texto → glow). Ver skill `tte-social-post`.
- Sem viúvas; quebrar por sentido.
