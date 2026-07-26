import {
  useCallback,
  useEffect,
  useState,
  type KeyboardEvent,
} from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { CauseProject } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  projects: CauseProject[];
}

interface ProjectSlideshowProps {
  project: CauseProject;
  projectIndex: number;
}

const ProjectSlideshow = ({
  project,
  projectIndex,
}: ProjectSlideshowProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: project.images.length > 1,
  });
  const [current, setCurrent] = useState(0);

  const scrollPrevious = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const updateCurrent = () => {
      setCurrent(emblaApi.selectedScrollSnap());
    };

    updateCurrent();
    emblaApi.on("select", updateCurrent);
    emblaApi.on("reInit", updateCurrent);

    return () => {
      emblaApi.off("select", updateCurrent);
      emblaApi.off("reInit", updateCurrent);
    };
  }, [emblaApi]);

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollPrevious();
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollNext();
    }
  };

  const eventDetails = [project.date, project.location]
    .filter(Boolean)
    .join(" | ");

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7 }}
    >
      <header className="mb-5 text-center">
        <h2 className="font-playfair text-2xl tracking-wide text-black md:text-3xl">
          {project.title}
        </h2>

        {eventDetails && (
          <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-black/45">
            {eventDetails}
          </p>
        )}
      </header>

      <div
        className="group relative outline-none focus-visible:ring-2 focus-visible:ring-black/30"
        role="region"
        aria-roledescription="carousel"
        aria-label={`${project.title} image gallery`}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <div ref={emblaRef} className="overflow-hidden bg-black/[0.04]">
          <div className="flex">
            {project.images.map((image, imageIndex) => (
              <div
                key={`${project.id}-${imageIndex}`}
                className="min-w-0 flex-[0_0_100%]"
                role="group"
                aria-roledescription="slide"
                aria-label={`Image ${imageIndex + 1} of ${
                  project.images.length
                }`}
              >
                <div className="flex h-[clamp(260px,42vh,460px)] items-center justify-center">
                  <img
                    src={image}
                    alt={`${project.title} — image ${imageIndex + 1}`}
                    className="block h-full w-full object-contain"
                    loading={
                      projectIndex === 0 && imageIndex === 0 ? "eager" : "lazy"
                    }
                    fetchPriority={
                      projectIndex === 0 && imageIndex === 0 ? "high" : "auto"
                    }
                    onError={(event) => {
                      event.currentTarget.hidden = true;
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {project.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={scrollPrevious}
              className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm transition-colors hover:bg-white md:left-5"
              aria-label={`Previous image for ${project.title}`}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/90 text-black shadow-sm transition-colors hover:bg-white md:right-5"
              aria-label={`Next image for ${project.title}`}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </>
        )}
      </div>

      {project.images.length > 1 && (
        <div className="mt-3 flex items-center justify-center gap-3">
          {project.images.map((_, imageIndex) => (
            <button
              key={imageIndex}
              type="button"
              onClick={() => emblaApi?.scrollTo(imageIndex)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                current === imageIndex
                  ? "w-7 bg-black"
                  : "w-1.5 bg-black/25 hover:bg-black/50"
              }`}
              aria-label={`Show image ${imageIndex + 1}`}
              aria-current={current === imageIndex ? "true" : undefined}
            />
          ))}

          <span className="ml-2 text-[10px] tracking-[0.15em] text-black/40">
            {current + 1} / {project.images.length}
          </span>
        </div>
      )}

      {project.description && (
        <p className="mx-auto mt-5 max-w-2xl text-center text-[14px] leading-7 text-black/60">
          {project.description}
        </p>
      )}
    </motion.article>
  );
};

const ArtForCause = ({ projects }: Props) => {
  return (
    <section
      id={SECTION_IDS.artForCause}
      className="bg-white px-6 pb-20 pt-8 sm:px-8 sm:pt-10 md:pb-24 lg:px-12 lg:pb-32 lg:pt-12 xl:px-16"
      aria-label="Art for a Cause"
    >
      <div className="mx-auto max-w-[900px]">
        {projects.length === 0 ? (
          <div className="flex min-h-[42vh] items-center justify-center">
            <p className="text-center text-sm text-black/50">
              New cause-based projects are coming soon.
            </p>
          </div>
        ) : (
          <div className="space-y-28 md:space-y-40">
            {projects.map((project, projectIndex) => (
              <ProjectSlideshow
                key={project.id}
                project={project}
                projectIndex={projectIndex}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ArtForCause;
