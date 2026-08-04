# The Brand Systematization Method

> A replicable method for turning a brand into a living, connected system — identity, design, code, an AI that generates on-brand assets, and (optionally) a shipped interactive artifact. Distilled from the To The Ends of The Earth (TTE) build, including the full build of its interactive brand book site through live deploy; written to be reused on any brand.

---

## The core idea: four connected systems, in order

```
BRAND  →  DESIGN  →  DEV  →  AGENT
identity  interface  code   generation
```

Each layer inherits and respects the one before it. You never skip forward. The brand is defined first, translated to interface second, connected to code third, and only then handed to an AI that can generate from it. A fifth, optional layer — **shipping an interactive artifact** (a brand book site, a deck, a product) — comes last, once the first four are stable, and consumes them the same way any other output would.

- **Brand System** — who the brand is. Strategy, voice, logo, color, type, imagery, patterns. The atoms of identity.
- **Design System** — how the brand becomes interface. Brand atoms applied as tokens + components on a mature UI base (shadcn/ui), which becomes *your* system.
- **Dev System** — how the system becomes product. Tokens in every format, components in code, docs for developers.
- **Brand Agent** — how the system generates. An AI holding the whole brand, routing to skills that produce copy, imagery prompts, and deliverables.
- **Ship** *(optional)* — the system proven under real use: an interactive site, a PDF, a deck — built from the tokens and components already established, not a parallel one-off.

## The atomic backbone

Every layer is structured the same way: **Atoms → Molecules → Organisms → Templates → Pages.** Applied not only to UI, but to brand assets — logo, color, type, patterns each have their atomic level.

## The loop

All work runs through: **Audit → Plan → Build → Review → Fix → Repeat.** The designer approves the Plan before the Build and signs off after the Review. Everything between is autonomous.

**What "Review" actually means in practice** (not just "look at it"): typecheck clean, lint clean (run it explicitly — see the pitfalls table below), a real screenshot at the reference viewport, and for anything interactive, a real dispatched event — not a read of the code. Ship the fix, then re-verify against the *same* method that caught the bug, not a different weaker one.

## The single-source-of-truth rule (Principle 7)

One value lives in one authoritative place and is mirrored everywhere else **in the same action**. For TTE: `tokens.json` is the source; it mirrors to css/scss/tailwind, to the dev project, and to Figma variables. Change one, change all three faces at once. Documents and skills **point to** the source; they never duplicate it.

A corollary learned the hard way (see Patterns, below): **what's built is not automatically what's canonical.** A page documenting a token should show the token's actual value, even if a specific application elsewhere made a pragmatic, undocumented adjustment. When the two diverge, that's a question for the designer, not an assumption to resolve silently.

---

## The phases (what to do, in order)

| Phase | Goal | Key output |
|-------|------|-----------|
| **0 · Setup** | Prepare the orchestrator | Brand folder in the standard structure; `CLAUDE.md`; first skill + command |
| **1 · Audit** | Map current state vs. a high standard | Gap report + prioritized plan |
| **2 · Brand System** | Structure every identity atom | Tokens (all formats), Foundation pages in Figma, DESIGN.md, brand-quick-reference |
| **3 · Design System** | Translate atoms to interface | shadcn base + branded components + own organisms; Figma component library |
| **4 · Dev System** | Make it consumable by devs | Tokens synced everywhere; dev README; DESIGN.md dev section |
| **5 · Brand Agent** | AI that generates on-brand | Subagent + generation skills + command + packaged skills |
| **6 · Extract** | Distill the replicable pattern | This document + folder template + case study |
| **7 · Ship** *(optional)* | Prove the system under a real, live artifact | An interactive site (or deck/PDF) built on the established tokens + components, deployed, verified on real devices |

Phase 7 is its own loop inside the loop — see "Shipping an interactive artifact," below. It's where most of the *technical* lessons in this document came from; Phases 0–6 produce the system, Phase 7 is where it gets stress-tested against a real browser, a real phone, and a real designer's eye on a live URL.

---

## The folder template (clone this for a new brand)

```
<brand>/
├── CLAUDE.md                    # orchestrator context + rules for THIS brand
├── README.md                    # what it is / how to use it (front door)
├── METHOD.md                    # this method (copy as-is)
├── SHARING.md                   # how to share the agent + repo
├── 00-archive/                  # old versions, pre-approval exploration, source stock
├── 01-brand-system/             # identity atoms
│   ├── atoms/                   # color · typography · logo · icon · pattern
│   ├── tokens/                  # tokens.json (source) + .css/.scss/.tailwind.js
│   ├── imagery/                 # imagery guide + AI prompts
│   └── docs/                    # DESIGN.md · brand-quick-reference · voice · workflow master · case study
├── 02-design-system/            # translation to interface
│   ├── components/              # brand-specific components
│   └── specs/                   # component specs
├── 03-dev-system/                # code consumable by devs
│   ├── README.md
│   └── <ui-app>/                # Vite + React + Tailwind + shadcn, tokens plugged in
├── 04-brand-book/                # brand book — Figma export, PDF, and/or the interactive site
│   └── site/                    # if Phase 7 runs: Next.js (or similar), own package.json, own plan doc
├── 05-applications/             # final applications (social, print, etc.)
└── .claude/                     # orchestrator intelligence
    ├── agents/                  # the brand agent
    ├── skills/                  # generation skills (copy, imagery, deliverables) + audit
    ├── commands/                # slash commands
    └── dist/                    # packaged .skill files for Chat/team
```

**To instantiate:** copy the tree, replace `CLAUDE.md` with the new brand's context, and run Phase 1 (audit) → forward.

**A note on multi-app repos:** `03-dev-system/<ui-app>` and `04-brand-book/site` are two *separate* apps with their own `package.json`, dependencies, and dev server — they don't share a workspace alias. If a component needs to appear in both (e.g. a live Button demo in the brand book), it gets rebuilt by hand in the second app rather than imported, matching that app's own patterns. This is a deliberate simplicity trade, not an oversight — don't "fix" it into a monorepo workspace setup unless the designer asks.

---

## Shipping an interactive artifact (Phase 7)

This is the phase most likely to repeat on future brands almost verbatim — the traps are architectural, not brand-specific.

### Fidelity rule
Desktop is **pixel-matched to the Figma frame** (1440 reference, verified side-by-side before moving on) using literal values pulled from the file — never eyeballed, never substituted with a repo asset that merely looks similar. **Mobile is 100% dev discretion** — the designer draws desktop only; don't wait for a mobile frame that isn't coming.

### The fluid-scale unit pattern (`--u`)
A single CSS custom property (`--u`, "one design pixel") scales an entire composition to the viewport as one block, instead of hardcoded px or loose fluid typography per element: `calc(150 * var(--u))` reads exactly like the Figma spec (150px) but scales down on smaller screens. Two failure modes to know going in:
- **It only exists inside its defining scope class** (e.g. `.secd`). Any element that escapes that scope — most commonly something rendered `position: fixed` for a global nav/footer, or portaled to `document.body` — silently loses it and every `calc()` using it resolves to garbage. This bit the same project three times before the pattern was recognized: add the scope class directly to the escaping element.
- **A single shrinking floor is not enough once mobile stops being a scaled-down two-column layout and becomes single-column.** A floor tuned for "don't get illegibly small on a narrow *desktop* window" (e.g. 0.66px vs. a 1px cap) still reads cramped once the whole right-column content collapses under the left column instead of beside it — buttons, cards, and tables built for a 1440 canvas end up rendered at ~66% scale in a completely different layout. The fix that actually worked: a `max-width` media query override that gives mobile/tablet a fixed, closer-to-desktop-max scale instead of continuing to shrink with viewport width.

### The singleton chrome pattern
Anything meant to be "always visible" — a persistent nav, a footer bar, a HUD frame — must be mounted **once**, at the page root, as a sibling of the scrolling content, reading its active state from a shared hook (e.g. an `IntersectionObserver`-backed "what section is active" hook). Mounting it *inside* a component that repeats per section causes it to visually repeat and scroll along with the content. This exact bug recurred (nav, then footer) before the pattern was named and applied consistently.

### Multi-page sections
Some numbered sections need more than one screen (a two-page typography spread, a logo-misuse page after the logo showcase). Model this as a list of page IDs on the section's config entry (`pageIds: [...]`, defaulting to `[id]`), with a resolver that maps any page ID back to its parent section index for nav/footer purposes. Build the plumbing once, before you need it for the first multi-page section — cheap to add early, awkward to retrofit.

### Motion rules
1. **Self-contained, not ref-from-parent, for anything responsive components might duplicate.** If a layout dual-renders content for desktop/mobile breakpoints (common: one hidden branch per breakpoint, both mounted), a child using `forwardRef`/`useImperativeHandle` with a single ref held by the parent will have both instances write to the same ref — only the last-mounted "wins," and the visible instance's imperative call can silently fire on the *other*, invisible instance. Symptom: CSS hover changes fire, the actual imperative effect never appears, no error anywhere. Fix once, as a rule: build interactive motion components to find their own trigger element (`element.closest("a, button")`) and manage their own DOM/state in a `useEffect`, never depending on an externally-supplied single ref.
2. **Gate by visibility, not mount.** Any "reveal" animation (count-up, decode/scramble, typewriter) must trigger on `IntersectionObserver` entry, not component mount — on a long scrolling page, a mount-triggered animation has already finished before the user scrolls to it. Build this into the component once; every future use inherits it.
3. **Respect `prefers-reduced-motion`,** tested live via `Emulation.setEmulatedMedia`, not assumed from reading the code — confirm the reduced state renders the *final* content instantly, with no dependency on the animation ever running.
4. **Product-facing brand components get the motion natively, not just a brand-book demo of it.** If a piece of new marketing motion (e.g. a hover-scramble effect) is meant to represent how the brand's real components should behave, it belongs in the actual component library too, ported to that app's own primitives — not left as a one-off shown only in the documentation site.

### Mobile scroll: don't inherit desktop's interaction model uncritically
A "locked slide" scroll-snap feel (each section is exactly one viewport, scrolling settles on the nearest one) is a legitimate desktop decision for a two-column layout tuned to a 1024 reference height. It does **not** automatically translate to a single-column mobile layout, where a section is very often taller than one viewport. Forcing the same mandatory snap there produces exactly what it sounds like: scroll fighting itself, jumping between sections, and — if you also try to compensate by clamping each mobile section to one viewport with its own internal scroll — a nested scrollbar-inside-a-scrollbar that's worse than either problem alone. The fix that held: gate the smooth-scroll/snap library entirely behind a `matchMedia("(min-width: <breakpoint>)")` check, reacting to resize; below that breakpoint, do nothing and let the browser's native scroll handle it. Simpler is correct here, not a compromise.

---

## Recurring technical pitfalls (brand-agnostic — check for these on any system)

| Symptom | Real cause | Fix | The generalized lesson |
|---|---|---|---|
| A component's imperative effect (e.g. a hover animation) fires the underlying event but visibly does nothing | A single ref shared by two mounted instances of the same component (see "dual-render," above) | Self-contained component, no parent-owned ref | Any layout that duplicates content per breakpoint needs *self-contained* interactive children |
| One value out of a known, finite set renders correctly; the others silently don't (e.g. one color swatch out of four) | A CSS utility class built from a template string (`` `bg-${key}` ``) — the build tool's class scanner never sees the literal string, so it purges *both* the utility and the CSS variable behind it | Use a literal value (hex, or an explicit map with literal keys) instead of constructing the class name at runtime | Never build a utility-framework class name dynamically from a variable when the underlying value is already known and finite |
| A fixed/min-height element renders correctly in Chrome (including production) but collapses to zero on real iOS Safari | `flex-basis: 0%` (what `flex-1`/`flex-grow` utilities compile to) combined with `min-height`, inside a flex container whose own height is `auto` — a real, longstanding WebKit flexbox resolution bug | Remove flexbox from the ambiguous chain entirely: plain block layout + `min-height`, flexing only where the parent has a genuinely bounded height (e.g. gated to a wider breakpoint) | When you can't reproduce a reported rendering bug in your own test browser, don't guess at a clever CSS fix — prefer the *least ambiguous* CSS possible, since you can't verify your own assumption |
| A fixed-position global element scales to nearly nothing | It sits outside the CSS custom property's defining scope class | Add the scope class to the element directly | (see the `--u` section above — this is worth calling out generically because it recurs) |
| Numbers/dates render in the wrong locale in production even though the whole product is single-language | `toLocaleString()` / `Intl.*` called with `locale: undefined`, which resolves to the *runtime's* locale, not the product's | Pass the explicit locale (`"en-US"`, etc.) always | Never leave locale implicit in a single-language product |
| A reveal animation has already played out by the time the user scrolls to it | Triggered on mount instead of on-visible | `IntersectionObserver`, threshold ~0.4, disconnect after first fire | Any "on mount" motion on a long scrolling page is suspect by default |
| The builder violates the brand's own documented editorial rule (e.g. uses an em dash when the style guide bans them) while writing brand copy | No self-check pass against the rules before calling copy "done" | Re-read new copy against the brand's own editorial rules explicitly, as a step, not by feel | The system's rules apply to the system's own author too — build in the same self-check a human copywriter would need |
| A brand-book page shows a value that doesn't match the canonical token | The page was built to reflect an ad-hoc adjustment made *during* construction, not the documented value | Show the token's real value; flag the discrepancy to the designer rather than resolving it silently | "What got built" and "what's canonical" can diverge — a documentation page's job is the latter |
| A lint rule fires that nothing visual ever surfaced | `react-hooks/static-components` (components defined inside a render body reset identity every render), `react-hooks/set-state-in-effect` (synchronous `setState` in an effect body), and similar rules catch real bugs with zero visual symptom | Run lint explicitly and periodically — don't rely on typecheck + screenshot alone | A clean screenshot is not a clean codebase |

---

## The verification toolkit

- **Prefer a zero-dependency CDP script (Node's native `fetch` + `WebSocket`) over a browser-automation MCP** for repeated screenshot/interaction checks — each call to a heavier automation tool adds up in token cost fast across a long build. Reserve the heavier tool for the few things a raw CDP script can't do easily, and even then, sparingly.
- **Dispatch real events, not synthetic ones**, when testing interaction: `Input.dispatchMouseEvent` / real `.focus()` calls are markedly more reliable at triggering framework event handlers than `element.dispatchEvent(new Event(...))`.
- **Measure, don't estimate.** `getBoundingClientRect()` / `Range.getClientRects()` for overflow, typographic widows, and layout-shift questions — a "looks a little tight" visual impression was wrong by 40% of the viewport height in one real case on this project.
- **Test the actual reference dimensions, not a convenient stand-in.** A layout that looks fine in an arbitrary test window can overflow badly at the real reference height/width; a mobile check needs the real target width too, since desktop-tuned scaling floors and breakpoints don't reveal their problems at a "close enough" size.
- **Reduced-motion and focus-trap behavior must be tested live**, not read from the code and assumed correct: `Emulation.setEmulatedMedia` for the former, real `Tab`/`Escape` key dispatch plus `document.activeElement` checks for the latter.
- **Performance numbers are only meaningful against a production build**, never a dev server — dev-mode is unoptimized and unminified, and will make an otherwise-clean build look artificially bad.
- **When a fix targets one breakpoint, immediately re-check the others.** Several rounds on this project produced a fix that solved mobile and broke desktop, or vice versa, because the two weren't verified together. Treat "fixed the reported breakpoint" as an open question until the others are re-confirmed too.
- **Verify against the live deployed URL occasionally, not only local dev.** They *usually* match — but when a designer reports a bug from a real device against production, confirm your fix there too before declaring it solved; local-only confirmation isn't proof.
- **A rendering bug you cannot reproduce in your own browser might be engine-specific (WebKit vs. Blink, especially).** Don't burn cycles trying to force-reproduce it; instead make the suspect area maximally unambiguous and ask for a real-device re-check.

---

## Content & copy discipline

- Run a **humanizer-style pass** (stripping AI-writing tells: em dashes, rule-of-three padding, "not just X, it's Y" constructions, inflated significance language) as a **dedicated late-stage round**, not folded into feature work — it's a different mode of attention.
- If the brand — or the operator — has an established voice/tone reference, run that too, as a second filter on top of the general anti-AI pass, even where the copy is third-person brand voice rather than first-person: the general anti-inflation, anti-oversold-resolution principles still transfer even when the narrative-structure parts of a personal-voice guide don't.
- **Hunt typographic widows by measurement, at every breakpoint that has independently-wrapping text** — not just the desktop reference. A rewrite that clears a widow at one width can introduce one at another; a widow-hunting pass isn't done until it's clean everywhere text actually reflows independently.
- Do the widow/copy pass **after** layout and content changes have settled, not before — earlier passes get invalidated by later rewrites and font-size changes.
- Self-check new copy against the brand's own documented editorial rules explicitly (see the pitfalls table) — don't rely on "it reads clean" alone.

---

## Working with the designer

- **Plan before build, every time** — even inside a phase where creative latitude has already been granted for this exact kind of task. A quick plan costs little and catches scope drift before it's built.
- **Sign off phase by phase, never batch.** Build a complete, reviewable unit, report on it plainly (what changed, what works — not a blow-by-blow of every file touched), then wait.
- **When there's no reference for a decision (no frame, no example), propose in text first and wait for approval before building** — creative freedom to decide the *approach* isn't the same as license to skip the check-in.
- **Git commit discipline:** write the message to a scratch file, read it back, and verify it actually matches the diff before committing — never commit from memory or reuse an adapted message from a previous round. A commit message copy-pasted from the wrong round is an easy, embarrassing, and entirely avoidable mistake.
- **Ship fast, then get real-device feedback fast.** However careful the verification toolkit above is, it cannot fully replace a designer opening the live URL on their own phone — several real bugs in this project (a WebKit-only flexbox collapse, chief among them) were invisible to every automated check available and only surfaced that way. Budget for at least one live-device feedback round before calling a UI phase done.
- **A designer's "it's still broken" after a fix means look harder, not argue the metrics.** When automated verification says "fixed" and the designer says "still broken," trust the report and keep investigating — the gap between the two is exactly where the engine-specific and device-specific bugs live.

---

## Generalizing the skills (future work)

The TTE agent and skills are currently **brand-specific** — they hardcode TTE's voice, colors, and rules. To make them a true brand-agnostic starter kit, each needs a pass that replaces brand specifics with placeholders that read from the brand's own docs:

| Asset | Today (TTE-specific) | Generalized (any brand) |
|-------|----------------------|--------------------------|
| `tte-brand-agent` | Persona, rules, sources hardcoded to TTE | Persona + rules loaded from the brand's `DESIGN.md` + voice doc; sources referenced by relative path only |
| `brand-copy` | TTE voice matrix, terminology, editorial rules inline | Reads the brand's voice guidelines; skill provides the *structure* (voice matrix, tone-by-context, quality gates) as a template the brand fills |
| `tte-imagery` | 4-layer TTE system, TTE grades/keywords | Skill provides the *prompt-block architecture*; the brand's imagery guide supplies the layers, grades, and keywords |
| `brand-deliverables` | TTE visual rules inline | Reads the brand's tokens + DESIGN.md; skill provides deck/guidelines *architecture* |
| Tokens | TTE values | A `tokens.json` schema + the 3-layer model (primitives → brand → semantic) |

**The principle:** separate the **method** (which is universal — the structures, the loop, the atomic model, Principle 7) from the **content** (which is per-brand — the actual voice, colors, type). The skills should teach the method and read the content. Do this pass when systematizing the next brand, so the second brand costs a fraction of the first.

---

## What makes this work

1. **Order is non-negotiable.** Brand before design before dev before agent before ship. Each layer is only as good as its foundation.
2. **One source of truth, mirrored in the same action.** No drift — and what's documented as canonical beats what happened to get built somewhere.
3. **Don't reinvent the UI.** A mature base (shadcn) plus correct brand atoms becomes your system. The valuable work is applying the brand, not rebuilding buttons.
4. **The designer decides, the orchestrator executes.** Creative forks go to the human; technical execution is autonomous — but "autonomous" still means plan first, sign off after.
5. **Point, don't duplicate.** Docs and skills reference the authoritative source so the system stays coherent as it grows.
6. **Verify by measuring and by real interaction, not by reading code or eyeballing a screenshot.** Most of the expensive bugs in this project were invisible to a quick look and obvious the moment something actually measured or clicked.
7. **A live artifact on a real device is the final test.** Automated checks catch most things; the last few percent — engine-specific rendering bugs, real scroll feel, real thumb-sized tap targets — only show up there.
