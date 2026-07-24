---
description: Invoca o TTE Brand Agent para gerar assets alinhados à marca (copy, prompts de imagery, deliverables)
argument-hint: [o que você quer gerar]
---

Delegue ao subagent `tte-brand-agent` a solicitação: **$ARGUMENTS**

O agent deve:
1. Identificar o tipo de asset e rotear para a skill certa — `brand-copy` (texto), `tte-imagery` (imagem), `brand-deliverables` (decks, templates, brand guidelines).
2. Carregar as fontes autoritativas necessárias (DESIGN.md, tokens, voice guidelines, imagery guide).
3. Gerar o asset aplicando as regras inegociáveis da marca e passando pelos quality gates (Movement, Pulse, Mobilization, Scroll-Stopper).
4. Entregar o resultado, dizer qual skill/fontes usou, e oferecer uma ou duas alternativas on-brand.

Se a solicitação envolver uma decisão criativa de marca (qual direção, qual povo, qual tom), apresente opções com recomendação e espere o designer escolher — não decida sozinho.

Se `$ARGUMENTS` estiver vazio, pergunte o que o operador quer gerar e liste as três capacidades disponíveis (copy · imagery prompts · deliverables).
