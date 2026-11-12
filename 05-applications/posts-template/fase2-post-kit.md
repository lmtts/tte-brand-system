# Fase 2 — Post Kit no Figma

> Página `06.1 · Post Kit` (`1002:316`) do arquivo "To The Ends of The Earth" (`QJpddccb8biAnsDiSKjcNf`), 12/11/2026.
> Todos os templates são **cópias** das peças de referência: as originais em `06 · Social Media` não foram tocadas.

## Como usar (humano ou IA)

1. Escolha a família/single pelo brief e leia a **ficha** ao lado do template (quando usar, fixo, slots, copy máximo, o que muda pela imagem, de onde vem a imagem).
2. **Duplique o template inteiro** (o carrossel continua um frame largo com slides dentro; elementos podem cruzar slides).
3. Troque só o que está marcado `SLOT / …`. O que está `Fixed / …` não muda. Camadas sem prefixo (Glow, Fade, Topography, HUD / Line, Micro / …) são estrutura e ajustam no olho.
4. Marcas fixas são **instâncias de componente**: não desagrupe, não recolore. Ajuste só o que a descrição do componente permite.

## Seções da página

| Seção | Node | Conteúdo |
|---|---|---|
| Components · Fixos da marca | `1002:319` | Lockup / Compact (variantes Bird = Branco vazado · Laranja contorno branco), Lockup / Full (Fundo = Escuro · Claro), Micro / Swipe, Micro / Corner (cruz "+" única, 37px), Label / Section (prop. de texto "Label"), Texture / Grain |
| Tratamentos · biblioteca | `1020:200` | Halftone duotone laranja, Figura editorial P&B (Multiply + Screen), Dithering P&B, Mapa + glow, Topografia, Topografia sobre foto + recorte — cada um com nota de valores |
| F1 · Mission Briefing | `1002:317` | Template 7 slides (ref. TTE-0033) + ficha |
| S1 · Tonight, Pray | `1002:318` | Template (ref. TTE-0029) + ficha |
| F2 · Biomes | `1006:50` | Template 5 slides (ref. TTE-0038, capa variante b) + capa variante a (TTE-0037) + ficha |
| F3 · Editorial P&B | `1011:82` | Template Simples (ref. TTE-2026-10-016) + Template Rica (ref. TTE-0041) + ficha |
| F4 · Halftone Laranja | `1013:124` | Template 5 slides (ref. Halftone Orange Carousel) + ficha |
| F5 · Gerais | `1015:131` | Biblioteca de tipos de slide T1–T6 + CTA (exemplos What is TTE? e TTE-0076) + ficha |
| S2 · Statement + S4 · Dossiê | `1018:152` | S2a (TTE-2026-10-025), S2b (TTE-2026-10-009), S4a (People Group Thai), S4b (Text Stats) + 2 fichas |

## Regras aprendidas na montagem

- **Grão é componente** (decisão do Lucas, opção B): `Texture / Grain`, sempre a camada do topo; ajustar só a opacidade da instância (9–12%). Topografia e tratamentos de foto ficam livres, na área de tratamentos.
- **Caixas HUD vetoriais** (Micro / HUD Box, Question Box, Title Box, rótulo em caixa): o texto nunca passa da borda — se o texto crescer, redimensiona-se a **caixa**, não só o texto.
- **Recorte de profundidade é condicional:** só quando a foto tem um sujeito único e nítido (barco em Coastlines, retrato no S1, torre/satélite no S2). Sem isso, apagar a camada Cutout.
- **Duas versões do pássaro** no lockup compacto, nunca recolorir: laranja com contorno branco (padrão) e branco vazado (dossiês). Escolher a que a referência usa.
- **Lockup completo tem versão para fundo claro** (Editorial, Halftone).
- **Cor do swipe segue o fundo:** branco sobre foto/escuro, preto sobre off-white, laranja quando o original pede (override no texto da instância).
- **Elementos que cruzam slides** (figura da F3 rica, mapa/foto da F5): duplicar no slide vizinho com x deslocado em −1080.
- **Figura editorial = 2 camadas com a mesma imagem:** Multiply embaixo + Screen com shader em cima.

## Pendências

- Cópia dos componentes para o TTE — Brand System: **adiada** (decisão do Lucas, 12/11/2026). Quando for feita, fazer à mão (Ctrl+C/V da seção de componentes), porque a textura do grão não atravessa arquivos via API.
- Fichas em texto + imagens de referência de cada template: [`kit/`](kit/README.md) (versionado no repositório, para não depender só do Figma).
- S3 Field Report / BTS fica para depois (decisão do Lucas).
- Próximas fases: 3 (protocolo FOCUS + receitas do Magnific na `tte-imagery`), 4 (brief padrão + `tte-social-post` v2), 5 (rodada 3 cronometrada).
