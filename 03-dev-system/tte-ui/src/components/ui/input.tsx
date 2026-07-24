import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * TTE Input
 *
 * `size` draws from the shared control scale (see index.css), so an input sits
 * at the same height as a Button or Select of the same size.
 *
 * The native `<input size>` attribute (legacy character-width) is omitted so the
 * prop name can carry the design-system size instead — same trade made for the
 * Button's `role`. Width is controlled with `w-*` / className, not `size`.
 */
const inputVariants = cva(
  "w-full min-w-0 rounded-none border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm dark:bg-input/30 focus-visible:border-ring focus-visible:ring-[2px] focus-visible:ring-ring/50 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 file:inline-flex file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
  {
    variants: {
      size: {
        sm: "h-control-sm",
        default: "h-control",
        lg: "h-control-lg",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
)

function Input({
  className,
  size = "default",
  type,
  ...props
}: Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      data-size={size}
      className={cn(inputVariants({ size }), className)}
      {...props}
    />
  )
}

export { Input, inputVariants }
