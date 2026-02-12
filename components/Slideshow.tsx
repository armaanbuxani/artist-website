"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { Slide } from "@/lib/types";

type Props = {
  slides: Slide[];
  intervalMs?: number;
};

type Direction = "next" | "prev";

export default function Slideshow({ slides, intervalMs = 10000 }: Props) {
  const safeSlides = useMemo(() => slides ?? [], [slides]);

  const [index, setIndex] = useState(0); 
  const [displayIndex, setDisplayIndex] = useState(0); 
  const [animating, setAnimating] = useState(false);
  const [dir, setDir] = useState<Direction>("next");
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  const animTimeout = useRef<number | null>(null);

  const goTo = (nextIndex: number, direction: Direction) => {
    if (safeSlides.length <= 1) return;
    if (animating) return;
    if (nextIndex === index) return;

    setDir(direction);
    setPrevIndex(index);

    setIndex(nextIndex);
    setAnimating(true);

    if (animTimeout.current) window.clearTimeout(animTimeout.current);

    animTimeout.current = window.setTimeout(() => {
      setAnimating(false);
      setPrevIndex(null);
      setDisplayIndex(nextIndex); 
    }, 520);
  };

  const prev = () => {
    const nextIndex = (index - 1 + safeSlides.length) % safeSlides.length;
    goTo(nextIndex, "prev");
  };

  const next = () => {
    const nextIndex = (index + 1) % safeSlides.length;
    goTo(nextIndex, "next");
  };

  useEffect(() => {
    if (safeSlides.length <= 1) return;
    if (animating) return;

    const t = window.setInterval(() => {
      const nextIndex = (index + 1) % safeSlides.length;
      goTo(nextIndex, "next");
    }, intervalMs);

    return () => window.clearInterval(t);
  }, [safeSlides.length, intervalMs, index, animating]);

  useEffect(() => {
    return () => {
      if (animTimeout.current) window.clearTimeout(animTimeout.current);
    };
  }, []);

  if (safeSlides.length === 0) {
    return (
      <div className="h-72 w-full rounded-2xl border bg-neutral-50 flex items-center justify-center text-sm text-neutral-500">
        Add slideshow images in /public/images and update mockContent.ts
      </div>
    );
  }

  const currentImage = safeSlides[index];
  const previousImage = prevIndex !== null ? safeSlides[prevIndex] : null;

  const currentText = safeSlides[displayIndex];

  const leavingTo = dir === "next" ? "-translate-x-[8%]" : "translate-x-[8%]";

  return (
    <div className="w-full">
      <div className="mx-auto space-y-6">
        <div className="relative overflow-hidden rounded-3xl shadow">
          <div className="relative h-[60vh] w-full">
            {previousImage && (
              <img
                src={previousImage.src}
                alt={previousImage.alt}
                className={[
                  "absolute inset-0 h-full w-full object-cover",
                  "transition-all duration-500 ease-in-out",
                  animating ? `opacity-0 ${leavingTo}` : "opacity-0",
                ].join(" ")}
              />
            )}

            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className={[
                "absolute inset-0 h-full w-full object-cover",
                "transition-all duration-500 ease-in-out",
                "opacity-100 translate-x-0",
              ].join(" ")}
            />

            {prevIndex !== null && (
              <img
                key={`incoming-${index}-${dir}`}
                src={currentImage.src}
                alt={currentImage.alt}
                className={[
                  "absolute inset-0 h-full w-full object-cover",
                  "transition-all duration-500 ease-in-out",
                  animating ? "opacity-100 translate-x-0" : "opacity-0",
                ].join(" ")}
                style={{
                  transform: animating ? "translateX(0)" : undefined,
                }}
              />
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

            {safeSlides.length > 1 && (
              <>
                <button
                  onClick={prev}
                  aria-label="Previous slide"
                  className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-4 py-3 text-lg shadow hover:bg-white"
                >
                  ‹
                </button>
                <button
                  onClick={next}
                  aria-label="Next slide"
                  className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/85 px-4 py-3 text-lg shadow hover:bg-white"
                >
                  ›
                </button>
              </>
            )}
          </div>
        </div>

        <div
          className={[
            "space-y-3",
            "text-center",
            "transition-all duration-500 ease-in-out",
            animating ? "opacity-0 -translate-y-1" : "opacity-100 translate-y-0",
          ].join(" ")}
        >
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {currentText.title}
          </h1>
          <p className="mx-auto max-w-3xl text-xl md:text-2xl leading-relaxed text-neutral-700">
            {currentText.description}
          </p>
        </div>

        {safeSlides.length > 1 && (
          <div className="flex items-center justify-center gap-3 pt-2">
            {safeSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > displayIndex ? "next" : "prev")}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-3 w-3 rounded-full border ${
                  i === displayIndex ? "bg-neutral-900" : "bg-white"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}