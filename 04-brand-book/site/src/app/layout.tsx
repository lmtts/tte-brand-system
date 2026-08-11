import type { Metadata } from "next";
import { mona, spaceMono } from "./fonts";
import "./globals.css";
import LenisProvider from "@/components/LenisProvider";

export const metadata: Metadata = {
  title: "To the Ends of the Earth: Brand System",
  description:
    "The interactive brand system for To the Ends of the Earth, a Hope Channel movement.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${mona.variable} ${spaceMono.variable} antialiased`}
    >
      <body className="min-h-dvh bg-ink text-paper">
        <LenisProvider />
        {children}
      </body>
    </html>
  );
}
