import { motion } from "framer-motion";
import type { Sculpture } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  sculptures: Sculpture[];
}

const Sculptures = ({ sculptures }: Props) => {
  return (
    <section id={SECTION_IDS.sculptures} className="py-28 md:py-40 px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-20 flex items-end justify-between"
      >
        <div>
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
            Three-Dimensional Works
          </p>
          <h2 className="font-playfair text-4xl md:text-6xl text-foreground tracking-wide leading-none">
            Sculptures
          </h2>
        </div>
        <div className="hidden md:block w-24 h-[1px] bg-border mb-4" />
      </motion.div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {sculptures.map((sculpture, i) => {
          // Alternate tall/short for visual rhythm
          const isTall = i % 3 === 0;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.12 }}
              className="group cursor-pointer"
            >
              <div className={`overflow-hidden ${isTall ? "h-[420px] md:h-[540px]" : "h-[320px] md:h-[400px]"}`}>
                <img
                  src={sculpture.image}
                  alt={sculpture.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + (i % 3) * 0.1 }}
                className="mt-4 flex items-start justify-between"
              >
                <div>
                  <h3 className="font-playfair text-lg md:text-xl text-foreground tracking-wide">
                    {sculpture.title}
                  </h3>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground mt-1">
                    {sculpture.medium}
                  </p>
                </div>
                <span className="text-[11px] text-muted-foreground mt-1 shrink-0 ml-4">
                  {sculpture.year}
                </span>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Sculptures;
