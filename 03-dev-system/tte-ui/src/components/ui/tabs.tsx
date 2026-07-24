import * as React from "react"
import { Tabs as TabsPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

/**
 * TTE Tabs — HUD wayfinding.
 *
 * Tabs are navigation, so they sit in the Space Mono / operate register:
 * monospace uppercase labels on a hairline track, with a Fire Orange
 * underline marking the active tab. Zero radius throughout.
 */
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-6 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex w-fit items-stretch gap-8 border-border group-data-[orientation=horizontal]/tabs:border-b group-data-[orientation=vertical]/tabs:flex-col group-data-[orientation=vertical]/tabs:border-l",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "relative inline-flex items-center justify-center gap-1.5 whitespace-nowrap border-transparent px-1 font-mono text-[12px] font-bold uppercase tracking-[0.06em] text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:text-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=active]:text-foreground data-[state=active]:border-primary",
        // active indicator: Fire Orange line on the shared edge
        "group-data-[orientation=horizontal]/tabs:border-b-2 group-data-[orientation=horizontal]/tabs:pb-3 group-data-[orientation=horizontal]/tabs:-mb-px",
        "group-data-[orientation=vertical]/tabs:border-l-2 group-data-[orientation=vertical]/tabs:justify-start group-data-[orientation=vertical]/tabs:py-1 group-data-[orientation=vertical]/tabs:pl-3 group-data-[orientation=vertical]/tabs:-ml-px",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
