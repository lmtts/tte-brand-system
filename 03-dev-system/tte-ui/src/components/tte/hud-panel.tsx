import * as React from "react"

import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"

/**
 * HUD Panel — the signature TTE organism.
 *
 * A tactical data readout: a Fire Orange live-tick, a Space Mono title, an
 * optional status badge, and a stack of LABEL : VALUE rows on hairline
 * separators. This is what turns statistics human — the "mission intel" layer.
 */
function HudPanel({
  title,
  status,
  children,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  title: React.ReactNode
  status?: React.ReactNode
}) {
  return (
    <div
      data-slot="hud-panel"
      className={cn("border border-border bg-card", className)}
      {...props}
    >
      {/* live-tick — signals an active readout */}
      <div aria-hidden className="h-0.5 w-full bg-primary" />

      <div className="flex items-center justify-between gap-4 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2">
          <span aria-hidden className="size-2 shrink-0 bg-primary" />
          <span className="font-mono text-[12px] font-bold uppercase tracking-[0.06em]">
            {title}
          </span>
        </div>
        {status != null &&
          (typeof status === "string" ? (
            <Badge variant="outline">{status}</Badge>
          ) : (
            status
          ))}
      </div>

      <div className="flex flex-col">{children}</div>
    </div>
  )
}

function HudRow({
  label,
  value,
  accent = false,
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "value"> & {
  label: React.ReactNode
  value: React.ReactNode
  accent?: boolean
}) {
  return (
    <div
      data-slot="hud-row"
      className={cn(
        "flex items-center justify-between gap-4 border-b border-border/60 px-4 py-2.5 font-mono text-[12px] uppercase tracking-[0.06em] last:border-b-0",
        className
      )}
      {...props}
    >
      <span className="text-muted-foreground">{label}</span>
      <span className={cn("text-right", accent && "text-primary")}>{value}</span>
    </div>
  )
}

export { HudPanel, HudRow }
