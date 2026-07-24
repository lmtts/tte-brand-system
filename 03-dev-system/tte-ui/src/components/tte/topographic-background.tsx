import * as React from "react"

import { cn } from "@/lib/utils"
import topo from "@/assets/topographic-pattern.svg"

/**
 * Topographic Background — TTE organism.
 *
 * Lays the topographic contour pattern behind its children at the brand's
 * canonical 12% opacity (semantic.opacity.topographic-overlay). The pattern
 * ships in Fire Orange, so on a dark surface it reads as faint fire contours —
 * the signature TTE texture.
 */
function TopographicBackground({
  className,
  opacity = 0.12,
  children,
  ...props
}: React.ComponentProps<"div"> & { opacity?: number }) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${topo})`, opacity }}
      />
      {children != null && <div className="relative">{children}</div>}
    </div>
  )
}

export { TopographicBackground }
