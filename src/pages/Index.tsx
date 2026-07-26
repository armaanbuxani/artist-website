import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { fetchContent } from "@/lib/fetchContent";

const Index = () => {
  const { data: content, isPending, isError } = useQuery({
    queryKey: ["website-content"],
    queryFn: fetchContent,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <main className="min-h-screen bg-white" aria-label="Home">
      <section
        className="flex items-center justify-center px-6 py-10 sm:py-12 lg:py-14"
        aria-label="Aarti Buxani"
      >
        <h1 className="text-center text-2xl font-light tracking-[0.18em] text-black sm:text-3xl sm:tracking-[0.24em]">
          Aarti Buxani
        </h1>
      </section>

      <section
        className="px-6 pb-24 pt-3 sm:px-8 sm:pt-5 md:pb-32 lg:px-12 lg:pb-40 lg:pt-7 xl:px-16"
        aria-label="Featured work"
      >
        <div className="mx-auto max-w-[1600px]">
          {isPending && (
            <div
              className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16"
              aria-label="Loading gallery"
              role="status"
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index}>
                  <div className="aspect-square animate-pulse bg-black/[0.06]" />
                  <div className="mt-5 h-3 w-24 animate-pulse bg-black/[0.08]" />
                </div>
              ))}
            </div>
          )}

          {isError && (
            <div className="flex min-h-[42vh] items-center justify-center">
              <p className="max-w-md text-center text-sm leading-7 text-black/55">
                The gallery could not be loaded. Please try again shortly.
              </p>
            </div>
          )}

          {content && content.home.length === 0 && (
            <div className="flex min-h-[42vh] items-center justify-center">
              <p className="max-w-md text-center text-sm leading-7 text-black/55">
                New work is coming soon.
              </p>
            </div>
          )}

          {content && content.home.length > 0 && (
            <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-9 lg:gap-y-16">
              {content.home.map((item, index) => (
                <motion.article
                  key={`${item.title}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.65, delay: (index % 3) * 0.06 }}
                  className="group"
                >
                  <div className="aspect-square overflow-hidden bg-black/[0.04]">
                    <img
                      src={item.image}
                      alt={item.caption || item.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                      loading={index < 3 ? "eager" : "lazy"}
                      fetchPriority={index < 3 ? "high" : "auto"}
                      onError={(event) => {
                        event.currentTarget.hidden = true;
                      }}
                    />
                  </div>
                  <h2 className="mt-5 text-[12px] font-normal tracking-[0.08em] text-black sm:text-[13px]">
                    {item.title}
                  </h2>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Index;
