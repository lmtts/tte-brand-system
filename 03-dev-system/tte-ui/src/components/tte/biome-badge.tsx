import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Biome Badge — TTE organism.
 *
 * A HUD tag that carries a spiritual biome. Biome colours are a SECONDARY
 * accent (brand rule): they appear only as the small swatch, never replacing
 * Fire Orange as the signal colour. The tag itself stays neutral + angular.
 */
const BIOMES = {
  desert: { name: "Desert", swatch: "bg-biome-desert" },
  arctic: { name: "Arctic", swatch: "bg-biome-arctic" },
  city: { name: "City", swatch: "bg-biome-city" },
  forest: { name: "Forest", swatch: "bg-biome-forest" },
} as const

export type Biome = keyof typeof BIOMES

function BiomeBadge({
  biome,
  className,
  ...props
}: { biome: Biome } & React.ComponentProps<"span">) {
  const b = BIOMES[biome]
  return (
    <span
      data-slot="biome-badge"
      data-biome={biome}
      className={cn(
        "inline-flex w-fit items-center gap-1.5 border border-border px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.06em] text-foreground",
        className
      )}
      {...props}
    >
      <span className={cn("size-2.5 shrink-0", b.swatch)} aria-hidden />
      {b.name}
    </span>
  )
}

export { BiomeBadge, BIOMES }
