import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { Painting } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  paintings: Painting[];
}

const Paintings = ({ paintings }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [current, setCurrent] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setCurrent(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 6000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section id={SECTION_IDS.paintings} className="relative w-full h-screen">
      <div ref={emblaRef} className="overflow-hidden h-full">
        <div className="flex h-full">
          {paintings.map((painting, i) => (
            <div key={i} className="relative flex-[0_0_100%] min-w-0 h-full">
              <img
                src={painting.image}
                alt={painting.title}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <AnimatePresence mode="wait">
                {i === current && (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute bottom-20 left-6 md:left-16 max-w-xl"
                  >
                    <h2 className="font-playfair text-3xl md:text-5xl text-white mb-3 tracking-wide leading-tight">
                      {painting.title}
                    </h2>
                    <p className="text-white/70 text-xs md:text-sm tracking-[0.25em] uppercase">
                      {painting.caption}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white hover:bg-white/35 transition-all duration-300 border border-white/20"
        aria-label="Previous painting"
      >
        <ArrowLeft size={16} />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-sm text-white hover:bg-white/35 transition-all duration-300 border border-white/20"
        aria-label="Next painting"
      >
        <ArrowRight size={16} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {paintings.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-[2px] rounded-full transition-all duration-500 ${
              i === current ? "bg-white w-8" : "bg-white/40 w-3"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Section label */}
      <div className="absolute top-24 right-6 md:right-16">
        <p className="text-white/50 text-[10px] tracking-[0.35em] uppercase rotate-90 origin-right translate-x-full">
          Paintings
        </p>
      </div>
    </section>
  );
};

export default Paintings;
