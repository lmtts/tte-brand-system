// Copies the four synced token formats into public/downloads/ so the Tokens
// section's download links are always in sync with the brand system source
// of truth — never a hand-duplicated copy. Runs automatically before
// dev/build (see package.json predev/prebuild), same pattern as the logo kit
// and the voice guide.
import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_ROOT = path.resolve(__dirname, "..");
const REPO_ROOT = path.resolve(SITE_ROOT, "..", "..");
const TOKENS_SRC = path.join(REPO_ROOT, "01-brand-system", "tokens");
const OUT_DIR = path.join(SITE_ROOT, "public", "downloads");

const FILES = ["tokens.json", "tokens.css", "tokens.scss", "tokens.tailwind.js"];

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

for (const file of FILES) {
  const src = path.join(TOKENS_SRC, file);
  if (!existsSync(src)) {
    console.error(`[tokens-download] source file not found: ${src}`);
    process.exit(1);
  }
  copyFileSync(src, path.join(OUT_DIR, file));
}

console.log(`[tokens-download] synced ${FILES.join(", ")}`);
