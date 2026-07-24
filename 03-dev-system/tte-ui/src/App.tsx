import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Checkbox } from '@/components/ui/checkbox'
import { Switch } from '@/components/ui/switch'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from '@/components/ui/table'
import { MissionStat } from '@/components/tte/mission-stat'
import { HudPanel, HudRow } from '@/components/tte/hud-panel'
import { BiomeBadge } from '@/components/tte/biome-badge'
import { TopographicBackground } from '@/components/tte/topographic-background'
import { PeopleGroupCard } from '@/components/tte/people-group-card'
import {
  Target,
  Compass,
  ArrowRight,
  Filter,
  Download,
  ChevronRight,
  Radar,
  MapPin,
  Mountain,
  Route,
  Globe,
  Satellite,
  Tent,
  Navigation,
} from 'lucide-react'

/** Section wrapper — Space Mono HUD label + Fire Orange, per Foundation pages. */
function Section({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-1">
        <h2 className="font-mono text-[20px] font-bold uppercase tracking-[0.06em] text-primary">
          {label}
        </h2>
        {hint && (
          <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground">
            {hint}
          </p>
        )}
      </div>
      {children}
    </section>
  )
}

const swatches = [
  { name: 'Fire Orange', hex: '#FE5442', className: 'bg-fire', token: 'brand.primary' },
  { name: 'Black', hex: '#28272A', className: 'bg-brand-dark', token: 'brand.dark' },
  { name: 'White', hex: '#FFFFFF', className: 'bg-brand-light', token: 'brand.light' },
]

const biomes = [
  { name: 'Desert', hex: '#B86C55', className: 'bg-biome-desert' },
  { name: 'Arctic', hex: '#7BA7BC', className: 'bg-biome-arctic' },
  { name: 'City', hex: '#4A4A52', className: 'bg-biome-city' },
  { name: 'Forest', hex: '#2D5A3D', className: 'bg-biome-forest' },
]

const icons = [
  { Icon: Target, name: 'target' },
  { Icon: Compass, name: 'compass' },
  { Icon: Radar, name: 'radar' },
  { Icon: MapPin, name: 'map-pin' },
  { Icon: Mountain, name: 'mountain' },
  { Icon: Route, name: 'route' },
  { Icon: Globe, name: 'globe' },
  { Icon: Satellite, name: 'satellite' },
  { Icon: Tent, name: 'tent' },
  { Icon: Navigation, name: 'navigation' },
]

export default function App() {
  return (
    <main className="min-h-screen bg-background px-10 py-20 md:px-20">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-24">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <p className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground">
            TTE Design System · Phase 3.1 · Foundation
          </p>
          <h1 className="font-display text-[72px] font-black uppercase leading-[0.95] tracking-[0.02em]">
            To the ends
            <br />
            of <span className="text-primary">the earth</span>
          </h1>
        </header>

        <Separator />

        {/* TTE Organisms — the brand-specific layer, leading the showcase */}
        <Section
          label="TTE Organisms"
          hint="The components no kit ships — where it becomes the TTE system"
        >
          <div className="flex flex-col gap-16">
            <MissionStat
              value="3.6 Billion"
              label="People still beyond the reach of the gospel"
              size="lg"
            />

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* HUD Panel */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                  HUD Panel
                </span>
                <HudPanel title="Target · Tajik" status="Unreached">
                  <HudRow label="Est. pop" value="12,000,000" />
                  <HudRow label="Gospel access" value="0.1%" accent />
                  <HudRow label="Biome" value={<BiomeBadge biome="desert" />} />
                  <HudRow label="Coords" value="33.0°N 65.0°E" />
                </HudPanel>
              </div>

              {/* Biome badges + topographic background */}
              <div className="flex flex-col gap-4">
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                  Biome Badge · Topographic Background
                </span>
                <div className="flex flex-wrap gap-3">
                  <BiomeBadge biome="desert" />
                  <BiomeBadge biome="arctic" />
                  <BiomeBadge biome="city" />
                  <BiomeBadge biome="forest" />
                </div>
                <TopographicBackground className="flex min-h-40 flex-1 items-end border border-border p-5">
                  <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                    Topographic overlay · 12%
                  </span>
                </TopographicBackground>
              </div>
            </div>

            {/* People Group Cards */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                People Group Card
              </span>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <PeopleGroupCard
                  name="The Tajik"
                  region="Central Asia"
                  population="12,000,000"
                  access="0.1%"
                  biome="desert"
                  coords="33.0°N 65.0°E"
                />
                <PeopleGroupCard
                  name="The Uyghur"
                  region="East Asia"
                  population="11,500,000"
                  access="0.2%"
                  biome="city"
                  coords="43.8°N 87.6°E"
                />
                <PeopleGroupCard
                  name="The Fulani"
                  region="West Africa"
                  population="38,000,000"
                  access="0.1%"
                  biome="forest"
                  coords="13.5°N 2.1°E"
                />
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Typography */}
        <Section
          label="Typography"
          hint="Mona Sans (display, always uppercase) + Space Mono (HUD, data, body)"
        >
          <div className="flex flex-col gap-6">
            <div className="font-display text-[60px] font-extrabold uppercase leading-none tracking-[0.02em]">
              Display / L
            </div>
            <div className="font-display text-[36px] font-extrabold uppercase tracking-[0.01em]">
              Heading / H2
            </div>
            <div className="font-mono text-[20px] font-bold uppercase tracking-[0.06em]">
              HUD / XL — 33.0°N 65.0°E
            </div>
            <div className="font-mono text-[14px] leading-[1.4] text-muted-foreground">
              Space Mono Body. The statistic feels impossible. The theology says the
              outcome is inevitable.
            </div>
          </div>
        </Section>

        <Separator />

        {/* Color */}
        <Section label="Color" hint="Fire Orange = emphasis only. Never a dominant surface.">
          <div className="flex flex-col gap-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
              {swatches.map((s) => (
                <div key={s.name} className="flex flex-col gap-3">
                  <div
                    className={`h-32 border border-border ${s.className}`}
                    aria-hidden
                  />
                  <div className="flex flex-col gap-0.5">
                    <span className="font-mono text-[12px] uppercase tracking-[0.06em]">
                      {s.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground">
                      {s.hex} · {s.token}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {biomes.map((b) => (
                <div key={b.name} className="flex flex-col gap-3">
                  <div className={`h-20 border border-border ${b.className}`} aria-hidden />
                  <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground">
                    {b.name} · {b.hex}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Separator />

        {/* Buttons */}
        <Section
          label="Buttons"
          hint="intent governs the typeface — mobilize (Mona Sans) vs operate (Space Mono)"
        >
          <div className="flex flex-col gap-12">
            {/* MOBILIZE — the brand voice. intent defaults to this. */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-primary">
                intent="mobilize" · Mona Sans · the voice
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="lg">
                  <Compass />
                  Join the mission
                  <ArrowRight />
                </Button>
                <Button>
                  <Target />
                  Pray now
                </Button>
                <Button variant="outline">Give</Button>
                <Button variant="inverted">Partner</Button>
                <Button variant="link">Learn more</Button>
              </div>
            </div>

            {/* OPERATE — the instrument. Explicit intent for system actions. */}
            <div className="flex flex-col gap-5">
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-primary">
                intent="operate" · Space Mono · the instrument
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Button intent="operate" size="sm">
                  <Download />
                  Export data
                </Button>
                <Button intent="operate" size="sm" variant="outline">
                  <Filter />
                  Filter
                </Button>
                <Button intent="operate" size="sm" variant="outline">
                  View data
                  <ChevronRight />
                </Button>
                <Button intent="operate" size="icon-sm" variant="outline" aria-label="Locate">
                  <MapPin />
                </Button>
              </div>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Icons */}
        <Section
          label="Icons — Lucide"
          hint="Expedition & mission vocabulary. Original terminals preserved (documented exception to zero-radius)."
        >
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-5">
            {icons.map(({ Icon, name }) => (
              <div key={name} className="flex flex-col items-center gap-3">
                <Icon className="size-7 text-primary" strokeWidth={1.75} />
                <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-muted-foreground">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Section>

        <Separator />

        {/* Form + badges */}
        <Section label="Inputs & Badges" hint="Angular, HUD-flavoured, no rounding">
          <div className="flex flex-col gap-8">
            <div className="flex max-w-md flex-col gap-3">
              <label
                htmlFor="email"
                className="font-mono text-[12px] uppercase tracking-[0.06em] text-muted-foreground"
              >
                Email
              </label>
              <Input id="email" type="email" placeholder="you@example.org" />
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge>Unreached</Badge>
              <Badge variant="secondary">Prayer partner</Badge>
              <Badge variant="outline">People group</Badge>
              <Badge variant="accent">0.1% gospel access</Badge>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Card + Tabs */}
        <Section label="Card & Tabs" hint="Mona Sans titles · HUD tab wayfinding with Fire Orange marker">
          <div className="flex flex-col gap-10">
            <Tabs defaultValue="intel" className="w-full">
              <TabsList>
                <TabsTrigger value="intel">Intel</TabsTrigger>
                <TabsTrigger value="prayer">Prayer</TabsTrigger>
                <TabsTrigger value="give">Give</TabsTrigger>
              </TabsList>

              <TabsContent value="intel" className="pt-8">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>The Tajik</CardTitle>
                      <CardDescription>Central Asia · unreached</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.06em]">
                        <span className="text-muted-foreground">Population</span>
                        <span>12,000,000</span>
                      </div>
                      <div className="flex items-center justify-between font-mono text-[12px] uppercase tracking-[0.06em]">
                        <span className="text-muted-foreground">Gospel access</span>
                        <span className="text-primary">0.1%</span>
                      </div>
                    </CardContent>
                    <CardFooter className="gap-3">
                      <Button size="sm">
                        <Target />
                        Pray now
                      </Button>
                      <Button intent="operate" size="sm" variant="outline">
                        View data
                        <ChevronRight />
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Status board</CardTitle>
                      <CardDescription>Live field readout</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-wrap gap-2">
                      <Badge>Unreached</Badge>
                      <Badge variant="accent">Access 0.1%</Badge>
                      <Badge variant="outline">Biome · Arid</Badge>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="prayer" className="pt-8">
                <p className="font-mono text-[14px] leading-[1.5] text-muted-foreground">
                  Prayer is an exercise of delegated authority in the unseen realm.
                </p>
              </TabsContent>
              <TabsContent value="give" className="pt-8">
                <p className="font-mono text-[14px] leading-[1.5] text-muted-foreground">
                  A government can expel a missionary. It cannot stop a video crossing a
                  digital border.
                </p>
              </TabsContent>
            </Tabs>
          </div>
        </Section>

        <Separator />

        {/* Form controls */}
        <Section
          label="Form Controls"
          hint="Checkbox & switch angular · radio circular (documented exception) · Fire Orange when active"
        >
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Checkbox */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                Checkbox
              </span>
              <div className="flex flex-col gap-3">
                <label className="flex items-center gap-3 font-mono text-[13px]">
                  <Checkbox defaultChecked /> Prayer partner
                </label>
                <label className="flex items-center gap-3 font-mono text-[13px]">
                  <Checkbox /> Mission partner
                </label>
              </div>
            </div>

            {/* Radio */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                Radio
              </span>
              <RadioGroup defaultValue="monthly" className="gap-3">
                <label className="flex items-center gap-3 font-mono text-[13px]">
                  <RadioGroupItem value="once" /> One time
                </label>
                <label className="flex items-center gap-3 font-mono text-[13px]">
                  <RadioGroupItem value="monthly" /> Monthly
                </label>
              </RadioGroup>
            </div>

            {/* Switch */}
            <div className="flex flex-col gap-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-muted-foreground">
                Switch
              </span>
              <label className="flex items-center gap-3 font-mono text-[13px]">
                <Switch defaultChecked /> Field updates
              </label>
            </div>
          </div>
        </Section>

        <Separator />

        {/* Select + Dialog + Tooltip */}
        <Section label="Select · Dialog · Tooltip" hint="Overlays inherit zero radius from the token layer">
          <div className="flex flex-wrap items-center gap-6">
            <Select>
              <SelectTrigger className="w-[220px]">
                <SelectValue placeholder="Select a biome" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="desert">Desert / Arid</SelectItem>
                <SelectItem value="arctic">Arctic / Frozen</SelectItem>
                <SelectItem value="city">Urban / City</SelectItem>
                <SelectItem value="forest">Tropical / Forest</SelectItem>
              </SelectContent>
            </Select>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Open briefing</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Mission briefing</DialogTitle>
                  <DialogDescription>
                    The statistic feels impossible. The theology says the outcome is
                    inevitable.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end gap-3">
                  <Button intent="operate" size="sm" variant="ghost">
                    Dismiss
                  </Button>
                  <Button size="sm">
                    <Target />
                    Pray now
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            <Tooltip>
              <TooltipTrigger asChild>
                <Button intent="operate" size="icon-sm" variant="outline" aria-label="Coordinates">
                  <MapPin />
                </Button>
              </TooltipTrigger>
              <TooltipContent>33.0°N 65.0°E</TooltipContent>
            </Tooltip>
          </div>
        </Section>

        <Separator />

        {/* Table */}
        <Section label="Table" hint="Data surface — Space Mono throughout">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>People group</TableHead>
                <TableHead>Population</TableHead>
                <TableHead>Gospel access</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Tajik</TableCell>
                <TableCell>12,000,000</TableCell>
                <TableCell className="text-primary">0.1%</TableCell>
                <TableCell>
                  <Badge variant="outline">Unreached</Badge>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Uyghur</TableCell>
                <TableCell>11,500,000</TableCell>
                <TableCell className="text-primary">0.2%</TableCell>
                <TableCell>
                  <Badge variant="outline">Unreached</Badge>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Section>
      </div>
    </main>
  )
}
