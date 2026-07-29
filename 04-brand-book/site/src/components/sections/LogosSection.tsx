import SectionShell from "@/components/SectionShell";

type LogoCardProps = {
  src: string;
  alt: string;
  label: string;
};

/** A single logo lockup — thin border, HUD label header, logo centered and never oversized. */
function LogoCard({ src, alt, label }: LogoCardProps) {
  return (
    <div className="flex flex-col border border-paper/15">
      <div
        className="flex items-center border-b border-paper/15"
        style={{ gap: "calc(8*var(--u))", padding: "calc(12*var(--u)) calc(14*var(--u))" }}
      >
        <span className="shrink-0 bg-fire" style={{ width: "6px", height: "6px" }} />
        <span
          className="font-mono uppercase leading-none tracking-[0.08em] text-muted"
          style={{ fontSize: "calc(11*var(--u))" }}
        >
          {label}
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center" style={{ padding: "calc(22*var(--u))" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="w-auto object-contain"
          style={{ maxWidth: "72%", maxHeight: "calc(64*var(--u))" }}
        />
      </div>
    </div>
  );
}

function DownloadArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: "calc(14*var(--u))", height: "calc(14*var(--u))" }}>
      <path d="M12 4v12m0 0 4.5-4.5M12 16l-4.5-4.5" />
      <path d="M4 19h16" />
    </svg>
  );
}

/** The four lockups, as a 2×2 grid — clean, spaced, tactical. Sizes scale with --u. */
function LogosGrid() {
  return (
    <div className="grid h-full w-full grid-cols-1 sm:grid-cols-2" style={{ gap: "calc(24*var(--u))" }}>
      <LogoCard src="/assets/logos/complete.svg" alt="To the Ends of the Earth — complete lockup" label="Complete Logo" />
      <LogoCard src="/assets/logos/icon.svg" alt="To the Ends of the Earth — icon mark" label="Icon" />
      <LogoCard src="/assets/logos/wordmark.svg" alt="To the Ends of the Earth — wordmark" label="Wordmark" />
      <LogoCard src="/assets/logos/hope-channel.svg" alt="To the Ends of the Earth, powered by Hope Channel" label="Hope Channel Connection" />
    </div>
  );
}

/** Section 03 — Logos. */
export default function LogosSection() {
  return (
    <SectionShell
      id="logos"
      index="03"
      name="Logos"
      poweredTone="light"
      heading={<>The mark is a dove fused with flame &mdash; forward, upward, unmistakable.</>}
      body={
        <>
          <p>
            Four lockups cover every use: the complete mark for hero moments, the icon alone, the
            wordmark where the icon already stands nearby, and the Hope Channel co-brand for
            official materials.
          </p>
          <p className="mt-[1em]">
            Clearspace equals the height of the &ldquo;T&rdquo; in the wordmark. White on dark or
            photographic backgrounds, black on light. Never distorted, rotated, or recolored
            outside these variants.
          </p>
          <a
            href="/downloads/tte-logo-kit.zip"
            download
            className="mt-[1.6em] inline-flex w-fit items-center border border-paper/30 font-mono font-bold uppercase tracking-[0.08em] text-paper transition-colors hover:border-fire hover:text-fire"
            style={{ gap: "calc(10*var(--u))", padding: "calc(12*var(--u)) calc(18*var(--u))", fontSize: "calc(12*var(--u))" }}
          >
            <DownloadArrow />
            Download logo kit
          </a>
        </>
      }
    >
      <LogosGrid />
    </SectionShell>
  );
}
