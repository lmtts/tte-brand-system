// Copies the official voice & identity guidelines into public/downloads/ so
// the Voice section's download link is always in sync with the brand system
// source of truth — never a hand-duplicated copy. Runs automatically before
// dev/build (see package.json predev/prebuild), same pattern as the logo kit.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(SITE_ROOT, "..", "..");
const SRC = path.join(REPO_ROOT, "01-brand-system", "docs", "brand-voice-guidelines-tte.md");
const OUT_DIR = path.join(SITE_ROOT, "public", "downloads");
const OUT_FILE = path.join(OUT_DIR, "tte-voice-guidelines.md");

if (!existsSync(SRC)) {
  console.error(`[voice-doc] source file not found: ${SRC}`);
  process.exit(1);
}
if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

copyFileSync(SRC, OUT_FILE);
console.log(`[voice-doc] synced ${path.relative(SITE_ROOT, OUT_FILE)}`);
