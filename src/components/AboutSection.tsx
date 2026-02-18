import { motion } from "framer-motion";
import type { About } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  about: About;
}

const AboutSection = ({ about }: Props) => {
  const paragraphs = about.body.split("\n\n");

  return (
    <section
      id={SECTION_IDS.about}
      className="py-28 md:py-40 px-6 md:px-16 bg-secondary/30"
    >
      <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16 md:gap-28 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="overflow-hidden">
            <img
              src={about.image}
              alt={about.heading}
              className="w-full h-[560px] md:h-[680px] object-cover"
              loading="lazy"
            />
          </div>
          {/* Decorative offset border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full border border-border/40 -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
        >
          <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-6">
            About the Artist
          </p>
          <h2 className="font-playfair text-4xl md:text-5xl text-foreground mb-10 tracking-wide leading-tight">
            {about.heading}
          </h2>

          <div className="space-y-5">
            {paragraphs.map((para, i) => (
              <p key={i} className="text-muted-foreground leading-[1.9] text-[15px]">
                {para}
              </p>
            ))}
          </div>

          {/* Signature line */}
          <div className="mt-12 flex items-center gap-4">
            <div className="h-[1px] w-12 bg-border" />
            <span className="font-playfair text-sm text-muted-foreground italic tracking-wide">
              Studio, Barcelona & New York
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
