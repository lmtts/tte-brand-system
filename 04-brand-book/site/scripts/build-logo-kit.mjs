// Zips a curated set of official logo files (source of truth: 01-brand-system)
// into public/downloads/tte-logo-kit.zip. Runs automatically before dev/build
// (see package.json predev/prebuild) so the download is always in sync with
// the brand system — never a hand-copied, driftable duplicate.
import { createWriteStream, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { ZipArchive } from "archiver";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(SITE_ROOT, "..", "..");
const LOGO_SRC = path.join(REPO_ROOT, "01-brand-system", "atoms", "logo");
const OUT_DIR = path.join(SITE_ROOT, "public", "downloads");
const OUT_FILE = path.join(OUT_DIR, "tte-logo-kit.zip");

// zip-relative path -> source file (relative to LOGO_SRC)
const FILES = {
  "complete/vertical-white.svg": "complete/vertical-white.svg",
  "complete/vertical-black.svg": "complete/vertical-black.svg",
  "complete/horizontal-white.svg": "complete/horizontal-white.svg",
  "complete/horizontal-black.svg": "complete/horizontal-black.svg",
  "icon/mark-full-white.svg": "mark/mark-full-white.svg",
  "icon/mark-full-black.svg": "mark/mark-full-black.svg",
  "wordmark/horizontal-white.svg": "wordmark/horizontal-white.svg",
  "wordmark/horizontal-black.svg": "wordmark/horizontal-black.svg",
  "wordmark/horizontal-orange-white.svg": "wordmark/horizontal-orange-white.svg",
  "wordmark/horizontal-orange-black.svg": "wordmark/horizontal-orange-black.svg",
  "hope-channel/complete-dark-bg.svg": "hope-channel/complete-dark-bg.svg",
  "hope-channel/complete-light-bg.svg": "hope-channel/complete-light-bg.svg",
  "hope-channel/horizontal-powered-white.svg": "hope-channel/horizontal-powered-white.svg",
  "hope-channel/horizontal-powered-black.svg": "hope-channel/horizontal-powered-black.svg",
};

const README = `TO THE ENDS OF THE EARTH — LOGO KIT
Hope Channel International · Brand System v1.0

Four lockups, each in white (for dark/photographic backgrounds) and black
(for light backgrounds):

  complete/      Stacked mark + wordmark — the primary lockup.
  icon/          The mark alone — the bird in flight.
  wordmark/      Type only, with the Fire Orange "THE EARTH" treatment.
  hope-channel/  Co-brand lockup and the "Powered by" endorsement mark.

Rules:
  - Clearspace = the height of the "T" in the wordmark, on all sides.
  - White logo on dark or photographic backgrounds; black logo on light.
  - Never distort, rotate, recolor outside these variants, or separate the
    icon from the wordmark in a combined lockup.

Full system: 01-brand-system/DESIGN.md in the TTE Brand System repository.
`;

async function build() {
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const missing = [];
  for (const rel of Object.values(FILES)) {
    if (!existsSync(path.join(LOGO_SRC, rel))) missing.push(rel);
  }
  if (missing.length) {
    console.error("[logo-kit] missing source files:\n" + missing.map((m) => `  - ${m}`).join("\n"));
    process.exit(1);
  }

  const output = createWriteStream(OUT_FILE);
  const archive = new ZipArchive({ zlib: { level: 9 } });

  const done = new Promise((resolve, reject) => {
    output.on("close", resolve);
    archive.on("error", reject);
  });

  archive.pipe(output);
  archive.append(README, { name: "README.txt" });
  for (const [zipPath, srcRel] of Object.entries(FILES)) {
    archive.file(path.join(LOGO_SRC, srcRel), { name: zipPath });
  }
  await archive.finalize();
  await done;

  console.log(`[logo-kit] wrote ${path.relative(SITE_ROOT, OUT_FILE)} (${archive.pointer()} bytes)`);
}

build().catch((err) => {
  console.error("[logo-kit] failed:", err);
  process.exit(1);
});
