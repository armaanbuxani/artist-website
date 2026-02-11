"use client";

import { useEffect, useMemo, useState } from "react";
import type { Slide } from "@/lib/types";

type Props = {
  slides: Slide[];
  intervalMs?: number;
};

export default function Slideshow({ slides, intervalMs = 3500 }: Props) {
  const safeSlides = useMemo(() => slides ?? [], [slides]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    const t = setInterval(() => {
      setIndex((i) => (i + 1) % safeSlides.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [safeSlides.length, intervalMs]);

  if (safeSlides.length === 0) {
    return (
      <div className="h-72 w-full rounded-2xl border bg-neutral-50 flex items-center justify-center text-sm text-neutral-500">
        Add slideshow images in /public/images and update mockContent.ts
      </div>
    );
  }

  const current = safeSlides[index];

  const prev = () =>
    setIndex((i) => (i - 1 + safeSlides.length) % safeSlides.length);
  const next = () => setIndex((i) => (i + 1) % safeSlides.length);

  return (
    <div className="space-y-3">
      <div className="relative">
        <img
          src={current.src}
          alt={current.alt}
          className="h-72 w-full rounded-2xl object-cover shadow"
        />

        {safeSlides.length > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
            >
              ‹
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 px-3 py-2 text-sm shadow hover:bg-white"
            >
              ›
            </button>
          </>
        )}
      </div>

      {safeSlides.length > 1 && (
        <div className="flex items-center gap-2">
          {safeSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full border ${
                i === index ? "bg-neutral-900" : "bg-white"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}