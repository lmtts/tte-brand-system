// Zips the entire official logo folder (source of truth: 01-brand-system,
// also mirrored in the GitHub repo) into public/downloads/tte-logo-kit.zip.
// Runs automatically before dev/build (see package.json predev/prebuild) so
// the download is always in sync with the brand system — never a
// hand-copied, driftable subset.
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

const README = `TO THE ENDS OF THE EARTH — LOGO KIT
Hope Channel International · Brand System v1.0

The complete logo folder: every lockup, in every exported format
(SVG + PNG, white/black/on-brand variants), plus the pre-optimized set.

  complete/      Stacked + horizontal mark + wordmark — the primary lockups.
  mark/          The icon alone — the bird in flight.
  wordmark/      Type only, including the Fire Orange "THE EARTH" treatment.
  hope-channel/  Co-brand lockups and the "Powered by" endorsement mark.
  optimized/     Web-optimized SVGs of the above.

Rules:
  - Clearspace = the height of the "T" in the wordmark, on all sides.
  - White logo on dark or photographic backgrounds; black logo on light.
  - Never distort, rotate, recolor outside these variants, or separate the
    icon from the wordmark in a combined lockup.

Full system: 01-brand-system/DESIGN.md in the TTE Brand System repository.
`;

async function build() {
  if (!existsSync(LOGO_SRC)) {
    console.error(`[logo-kit] source folder not found: ${LOGO_SRC}`);
    process.exit(1);
  }
  if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

  const output = createWriteStream(OUT_FILE);
  const archive = new ZipArchive({ zlib: { level: 9 } });

  const done = new Promise((resolve, reject) => {
    output.on("close", resolve);
    archive.on("error", reject);
  });

  archive.pipe(output);
  archive.append(README, { name: "README.txt" });
  // Mirror the entire logo/ folder as-is, recursively.
  archive.directory(LOGO_SRC, false);
  await archive.finalize();
  await done;

  console.log(`[logo-kit] wrote ${path.relative(SITE_ROOT, OUT_FILE)} (${archive.pointer()} bytes)`);
}

build().catch((err) => {
  console.error("[logo-kit] failed:", err);
  process.exit(1);
});
