import { motion } from "framer-motion";
import { format, parseISO } from "date-fns";
import type { EventItem } from "@/lib/types";
import { SECTION_IDS } from "@/lib/sectionIds";

interface Props {
  workshops: EventItem[];
}

const formatDate = (dateStr: string) => {
  try {
    return format(parseISO(dateStr), "MMMM d, yyyy");
  } catch {
    return dateStr;
  }
};

const WorkshopCard = ({ event, index }: { event: EventItem; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.65, delay: index * 0.1 }}
    className="group"
  >
    <div className="overflow-hidden mb-5">
      <img
        src={event.image}
        alt={event.title}
        className="w-full h-[260px] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        loading="lazy"
      />
    </div>
    <div className="flex items-start justify-between mb-3">
      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
        {formatDate(event.date)}
      </p>
      <span
        className={`text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 border ${
          event.type === "upcoming"
            ? "border-foreground/30 text-foreground"
            : "border-border text-muted-foreground"
        }`}
      >
        {event.type === "upcoming" ? "Upcoming" : "Past"}
      </span>
    </div>
    <h3 className="font-playfair text-xl text-foreground mb-3 tracking-wide leading-snug">
      {event.title}
    </h3>
    <p className="text-muted-foreground text-sm leading-[1.8]">{event.description}</p>
  </motion.article>
);

const Workshops = ({ workshops }: Props) => {
  const past = workshops.filter((e) => e.type === "past");
  const upcoming = workshops.filter((e) => e.type === "upcoming");

  return (
    <section id={SECTION_IDS.events} className="py-28 md:py-40 px-6 md:px-16 max-w-[1400px] mx-auto">
      {/* Upcoming */}
      {upcoming.length > 0 && (
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
              What's Next
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground tracking-wide">
              Upcoming
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {upcoming.map((event, i) => (
              <WorkshopCard key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      )}

      {/* Divider */}
      {upcoming.length > 0 && past.length > 0 && (
        <div className="border-t border-border/30 mb-24" />
      )}

      {/* Past */}
      {past.length > 0 && (
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <p className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground mb-4">
              Exhibition History
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl text-foreground tracking-wide">
              Past Events
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
            {past.map((event, i) => (
              <WorkshopCard key={i} event={event} index={i} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Workshops;
