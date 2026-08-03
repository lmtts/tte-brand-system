import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789/#*<>[]"

/**
 * Terminal-decrypt hover, baked into every Button so any product surface
 * gets the "mission intel" motion for free. Walks the button's own text
 * nodes directly (not React state) so it works no matter what `children`
 * is — a plain label, a label plus an icon, `asChild` composing onto a
 * different element entirely.
 */
function useScrambleOnHover(ref: React.RefObject<HTMLElement | null>) {
  React.useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let timeoutId = 0

    function scramble() {
      window.clearTimeout(timeoutId)
      const walker = document.createTreeWalker(el as Node, NodeFilter.SHOW_TEXT)
      const nodes: Text[] = []
      for (let n = walker.nextNode(); n; n = walker.nextNode()) nodes.push(n as Text)
      const originals = nodes.map((n) => n.data)
      const total = Math.max(0, ...originals.map((o) => o.length))

      let progress = 0
      const tick = () => {
        progress++
        nodes.forEach((node, i) => {
          const original = originals[i]
          let out = ""
          for (let c = 0; c < original.length; c++) {
            out +=
              c < progress || original[c] === " "
                ? original[c]
                : SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          }
          node.data = out
        })
        if (progress < total) {
          timeoutId = window.setTimeout(tick, 35)
        } else {
          nodes.forEach((node, i) => (node.data = originals[i]))
        }
      }
      tick()
    }

    el.addEventListener("mouseenter", scramble)
    el.addEventListener("focus", scramble, true)
    return () => {
      el.removeEventListener("mouseenter", scramble)
      el.removeEventListener("focus", scramble, true)
      window.clearTimeout(timeoutId)
    }
  }, [ref])
}

/**
 * TTE Button
 *
 * Two orthogonal axes carry the brand:
 *
 *  1. `intent` — the ROLE of the button, which fixes the typeface.
 *       mobilize → Mona Sans (the brand voice). Emotional CTAs. DEFAULT.
 *       operate  → Space Mono (the instrument). System / HUD / data actions.
 *     The rule "Mona Sans mobilizes, Space Mono operates" lives here, in code,
 *     so it cannot be applied by whim. Unmarked buttons default to the voice.
 *
 *  2. `variant` — the visual treatment (colour / border), independent of intent.
 *
 * Brand invariants: zero radius, uppercase, Fire Orange reserved for `default`
 * (maximum emphasis, never a passive surface).
 */
const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2 rounded-none whitespace-nowrap uppercase transition-all outline-none focus-visible:ring-[2px] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      intent: {
        // MOBILIZE — the brand voice. The wordmark's typeface.
        mobilize: "font-display font-extrabold tracking-[0.04em]",
        // OPERATE — the instrument. Same typeface as the HUD data around it.
        operate: "font-mono font-bold tracking-[0.08em]",
      },
      variant: {
        // Maximum emphasis. CTAs only.
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        // The workhorse on dark surfaces.
        outline:
          "border border-foreground/30 bg-transparent text-foreground hover:border-primary hover:text-primary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "bg-transparent hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // Inverted: solid white block, for use on photography.
        inverted: "bg-foreground text-background hover:bg-foreground/90",
      },
      // Heights come from the shared control scale (see index.css).
      size: {
        default: "h-control px-6 text-[13px]",
        sm: "h-control-sm px-4 text-[12px]",
        lg: "h-control-lg px-10 text-[16px]",
        icon: "size-control",
        "icon-sm": "size-control-sm",
      },
    },
    defaultVariants: {
      intent: "mobilize",
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  intent = "mobilize",
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"
  const ref = React.useRef<HTMLElement>(null)
  useScrambleOnHover(ref)

  return (
    <Comp
      ref={ref as React.Ref<never>}
      data-slot="button"
      data-intent={intent}
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ intent, variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
