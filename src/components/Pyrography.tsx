import { motion } from "framer-motion";
import type { PyrographyItem } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  pyrography: PyrographyItem[];
}

const Pyrography = ({ pyrography }: Props) => {
  return (
    <section
      id={SECTION_IDS.pyrography}
      className="bg-white px-6 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-32 lg:px-12 lg:pb-40 lg:pt-20 xl:px-16"
      aria-label="Pyrography"
    >
      <div className="mx-auto max-w-[1600px]">
        {pyrography.length === 0 ? (
          <div className="flex min-h-[42vh] items-center justify-center">
            <p className="text-center text-sm text-black/50">
              New pyrography work is coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16">
            {pyrography.map((item, index) => (
              <motion.figure
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: (index % 3) * 0.06,
                }}
                className="self-start"
              >
                <div className="flex aspect-square items-center justify-center overflow-hidden bg-black/[0.04]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="block h-full w-full object-contain"
                    loading={index < 3 ? "eager" : "lazy"}
                    fetchPriority={index < 3 ? "high" : "auto"}
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                    }}
                  />
                </div>

                <figcaption className="mt-5 text-center">
                  <h2 className="text-[13px] font-normal tracking-[0.08em] text-black">
                    {item.title}
                  </h2>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Pyrography;
