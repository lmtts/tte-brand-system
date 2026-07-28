import CoverSection from "@/components/sections/CoverSection";

export default function Home() {
  return (
    <main>
      <CoverSection />

      {/* §02 scroll target — real section arrives once the updated Figma frame lands. */}
      <section
        id="the-brand"
        className="flex min-h-dvh items-center bg-ink px-6 md:px-[96px]"
      >
        <p className="font-mono uppercase tracking-[0.06em] text-hud-sm text-muted">
          <span className="text-fire">02</span> · The Brand — in progress
        </p>
      </section>
    </main>
  );
}
