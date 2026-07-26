import { motion } from "framer-motion";
import type { Sculpture } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  sculptures: Sculpture[];
}

const Sculptures = ({ sculptures }: Props) => {
  return (
    <section
      id={SECTION_IDS.sculptures}
      className="bg-white px-6 pb-24 pt-12 sm:px-8 sm:pt-16 md:pb-32 lg:px-12 lg:pb-40 lg:pt-20 xl:px-16"
      aria-label="Sculptures"
    >
      <div className="mx-auto max-w-[1600px]">
        {sculptures.length === 0 ? (
          <div className="flex min-h-[42vh] items-center justify-center">
            <p className="text-center text-sm text-black/50">
              New sculptures are coming soon.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16">
            {sculptures.map((sculpture, index) => (
              <motion.figure
                key={`${sculpture.title}-${index}`}
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
                    src={sculpture.image}
                    alt={sculpture.title}
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
                    {sculpture.title}
                  </h2>

                  {(sculpture.medium || sculpture.year > 0) && (
                    <p className="mt-2 text-[12px] leading-6 text-black/50">
                      {[
                        sculpture.medium,
                        sculpture.year > 0 ? sculpture.year : null,
                      ]
                        .filter(Boolean)
                        .join(" | ")}
                    </p>
                  )}
                </figcaption>
              </motion.figure>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Sculptures;
