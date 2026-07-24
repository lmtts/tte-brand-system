import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Mission Stat — TTE organism.
 *
 * The impossible number, made to land. Mona Sans display at maximum weight,
 * fronted by a Fire Orange tick (emphasis without flooding the layout with
 * orange — the brand rule that orange is never a dominant surface). The label
 * sits below in the Space Mono / HUD register.
 */
function MissionStat({
  value,
  label,
  size = "default",
  className,
  ...props
}: Omit<React.ComponentProps<"div">, "value"> & {
  value: React.ReactNode
  label: React.ReactNode
  size?: "default" | "lg"
}) {
  return (
    <div
      data-slot="mission-stat"
      className={cn("flex flex-col gap-3", className)}
      {...props}
    >
      <div className="flex items-stretch gap-3">
        <span
          aria-hidden
          className="w-1 shrink-0 self-stretch bg-primary"
        />
        <span
          className={cn(
            "font-display font-black uppercase leading-[0.9] tracking-[0.02em]",
            size === "lg"
              ? "text-6xl md:text-8xl"
              : "text-5xl md:text-6xl"
          )}
        >
          {value}
        </span>
      </div>
      <span className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground">
        {label}
      </span>
    </div>
  )
}

export { MissionStat }
