import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * TTE Badge — a HUD tag.
 *
 * Badges carry status and data, so they live in the Space Mono / HUD register:
 * monospace, uppercase, wide tracking, zero radius. This is the base for the
 * richer Biome Badge organism built in Phase 3.3.
 */
const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 overflow-hidden rounded-none border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.06em] whitespace-nowrap transition-colors focus-visible:ring-[2px] focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        // Fire Orange fill — loudest status only (e.g. UNREACHED).
        default: "border-transparent bg-primary text-primary-foreground",
        // Quiet filled tag.
        secondary: "border-transparent bg-secondary text-secondary-foreground",
        // The HUD default — a bordered tag around data.
        outline: "border-border text-foreground",
        // Fire Orange outline — emphasis without a fill (e.g. 0.1% ACCESS).
        accent: "border-primary text-primary",
        ghost: "border-transparent [a&]:hover:bg-accent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
