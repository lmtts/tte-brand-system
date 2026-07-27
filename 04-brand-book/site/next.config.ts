import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export — the brand book ships as static HTML/CSS/JS (Vercel / any host).
  output: "export",
  images: { unoptimized: true },
  // Emit /section/ style paths for clean static hosting.
  trailingSlash: true,
};

export default nextConfig;
