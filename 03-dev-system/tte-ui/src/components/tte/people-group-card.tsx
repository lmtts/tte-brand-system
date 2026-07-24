import * as React from "react"
import { Target, ChevronRight } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BiomeBadge, type Biome } from "@/components/tte/biome-badge"
import { HudRow } from "@/components/tte/hud-panel"
import { TopographicBackground } from "@/components/tte/topographic-background"

/**
 * People Group Card — TTE organism.
 *
 * The dossier of an unreached people group. Composes the primitives:
 * a media area (photo, or the topographic texture as a dignified placeholder)
 * carrying the status + biome tags and coordinates; a Mona Sans name; a HUD
 * data strip; and the mobilize / operate action pair.
 *
 * Dignity over pity: no photo yet? The topographic field stands in — never a
 * generic grey box.
 */
function PeopleGroupCard({
  name,
  region,
  population,
  access,
  biome,
  status = "Unreached",
  coords,
  image,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  name: React.ReactNode
  region: React.ReactNode
  population: React.ReactNode
  access: React.ReactNode
  biome: Biome
  status?: React.ReactNode
  coords?: React.ReactNode
  image?: string
}) {
  return (
    <div
      data-slot="people-group-card"
      className={cn("flex flex-col border border-border bg-card", className)}
      {...props}
    >
      {/* Media */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-dark">
        {image ? (
          <img src={image} alt="" className="size-full object-cover" />
        ) : (
          <TopographicBackground className="size-full" opacity={0.16} />
        )}
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          <div className="flex items-start justify-between gap-2">
            {typeof status === "string" ? <Badge>{status}</Badge> : status}
            <BiomeBadge biome={biome} />
          </div>
          {coords != null && (
            <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-white/80">
              {coords}
            </span>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-1">
          <h3 className="font-display text-2xl font-extrabold uppercase leading-none tracking-[0.01em]">
            {name}
          </h3>
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
            {region}
          </span>
        </div>

        {/* HUD data strip — rows drop their own px so they align flush with
            the card body (name, buttons); the panel's internal padding would
            otherwise double up against the body padding. */}
        <div className="flex flex-col border-t border-border">
          <HudRow label="Est. pop" value={population} className="px-0" />
          <HudRow label="Gospel access" value={access} accent className="px-0" />
        </div>

        <div className="flex flex-wrap gap-3">
          <Button size="sm">
            <Target />
            Pray now
          </Button>
          <Button intent="operate" size="sm" variant="outline">
            View data
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  )
}

export { PeopleGroupCard }
