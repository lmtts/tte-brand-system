import localFont from "next/font/local";

// Mona Sans — display, headings, wordmark. Variable font (weights 200–900).
export const mona = localFont({
  src: "./fonts/MonaSans-Variable.woff2",
  weight: "200 900",
  display: "swap",
  variable: "--font-mona",
});

// Space Mono — HUD, data, coordinates, body.
export const spaceMono = localFont({
  src: [
    { path: "./fonts/SpaceMono-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/SpaceMono-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-space",
});
