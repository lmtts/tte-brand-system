# Sharing the TTE Brand Agent

> New to the repository? Start with **[`README.md`](README.md)** — what this is, how it's organized, and how each role uses it. This file is the deeper guide to *distributing* the Brand Agent specifically.

The Brand Agent generates on-brand assets — copy, AI imagery prompts, and structured deliverables. It is made of two kinds of parts:

- **Portable knowledge** — the skills (Markdown + reference files). Model-agnostic; works anywhere you can set a system prompt.
- **Claude Code machinery** — the subagent routing, the `/tte` command, automatic skill activation. Claude-specific.

That split determines how you share it per channel.

Packaged skill files (ready to upload) live in [`.claude/dist/`](.claude/dist/):
`brand-copy.skill` · `brand-deliverables.skill` · `tte-imagery.skill`

---

## 1. Claude Code (native — the full experience)

Everything works out of the box: the agent, the three skills, and the `/tte` command.

**To share:** share the repository. Anyone who clones it and opens it in Claude Code (CLI, VS Code, or JetBrains) automatically has:
- `/tte <request>` — invokes the Brand Agent
- the `tte-brand-agent` subagent
- the `brand-copy`, `tte-imagery`, `brand-deliverables` skills

No install step. The `.claude/` folder is the whole configuration.

**Use it:** `/tte a prayer-partner appeal for the Tajik` · `/tte a Layer-2 image prompt at golden hour` · `/tte a partner pitch deck outline`.

---

## 2. Claude Chat (claude.ai)

Two ways, depending on how packaged you want it.

### A. Upload the skills (quickest)

In claude.ai, open **Settings → Capabilities → Skills** (or add them inside a Project), and upload the `.skill` files from `.claude/dist/`:
- `brand-copy.skill`
- `tte-imagery.skill`
- `brand-deliverables.skill`

Claude activates them automatically when a request matches. (The `tte-imagery` skill originally came from Chat, so this round-trips.)

### B. Build a "TTE Brand Agent" Project (most complete)

Chat has no subagents, but a **Project** reproduces the agent:

1. Create a Project named **TTE Brand Agent**.
2. Paste the agent's system prompt (`.claude/agents/tte-brand-agent.md`, the text below the frontmatter) into the Project's custom instructions.
3. Add the three `.skill` files to the Project, and/or attach the knowledge docs as Project files: `01-brand-system/DESIGN.md`, `docs/brand-voice-guidelines-tte.md`, `imagery/imagery-guide.md`, `tokens/tokens.json`.
4. The team opens that Project and works from it.

---

## 3. Other AIs (ChatGPT custom GPTs, Gemini Gems, etc.)

The skill content is model-agnostic instruction, so the brand intelligence transfers — you just wire it manually:

1. Create a **custom GPT** (ChatGPT) or **Gem** (Gemini).
2. Paste the relevant `SKILL.md` content (or the agent system prompt) as its instructions.
3. Upload the brand docs as knowledge files: `DESIGN.md`, `brand-voice-guidelines-tte.md`, `imagery-guide.md`, `tokens.json`.

You lose automatic skill activation and subagent routing (those are Claude features), but the voice, rules, and systems carry over intact.

**Standalone bonus:** `.claude/skills/tte-imagery/assets/TTE_Prompt_System.html` is a self-contained interactive prompt builder — open it in any browser, share the file, no AI required.

---

## Keeping it aligned

The skills **point to** the authoritative sources (`DESIGN.md`, `tokens.json`, voice + imagery guides) rather than duplicating them. When a brand value changes, update it in the tokens, the dev project, and Figma together (Principle 7) — the Claude Code skills then read the current value automatically.

Two caveats when distributing copies (Chat uploads, custom GPTs): those copies are **snapshots**. Re-export the `.skill` files and re-upload after a meaningful brand change, so shared copies don't drift from the source of truth.

---

## What the agent will not do

- Make brand/design decisions alone — it proposes and applies the system; the designer decides.
- Produce finished social-media art — that needs a designer; `brand-deliverables` produces structure and templates.
- Invent hex values, fonts, or sizes that a token already defines.
