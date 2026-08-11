"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  alt: string;
  caption: React.ReactNode;
  onClose: () => void;
};

/**
 * Full-screen image overlay — shared by Imagery and Examples, so both sections open
 * the exact same lightbox. The close button is the only focusable element in the
 * dialog; Tab/Shift+Tab is kept from leaking focus out to the page behind it.
 */
export default function ImageLightbox({ src, alt, caption, onClose }: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        e.preventDefault();
        closeBtnRef.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 backdrop-blur-sm"
      style={{ padding: "calc(48*var(--u))" }}
    >
      <button
        ref={closeBtnRef}
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="fixed flex items-center justify-center border border-paper/20 text-paper transition-colors hover:border-fire hover:text-fire"
        style={{
          top: "calc(24*var(--u))",
          right: "calc(24*var(--u))",
          width: "calc(36*var(--u))",
          height: "calc(36*var(--u))",
          fontSize: "calc(18*var(--u))",
        }}
      >
        &times;
      </button>
      <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} className="block max-h-[78vh] max-w-full object-contain" />
        <figcaption
          className="font-mono uppercase tracking-[0.08em] text-muted"
          style={{ marginTop: "calc(18*var(--u))", fontSize: "calc(11*var(--u))" }}
        >
          {caption}
        </figcaption>
      </figure>
    </div>
  );
}
