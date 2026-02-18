import { motion } from "framer-motion";
import type { EventItem } from "@/lib/types";
import { format, parseISO } from "date-fns";

interface Props {
  title: string;
  subtitle: string;
  events: EventItem[];
  id: string;
}

const EventCard = ({ event, index }: { event: EventItem; index: number }) => {
  const formattedDate = (() => {
    try {
      return format(parseISO(event.date), "MMMM d, yyyy");
    } catch {
      return event.date;
    }
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="overflow-hidden mb-5">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
        {formattedDate}
      </p>
      <h3 className="font-playfair text-xl text-foreground mb-2 tracking-wide">
        {event.title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed">
        {event.description}
      </p>
    </motion.div>
  );
};

const EventsSection = ({ title, subtitle, events, id }: Props) => {
  if (events.length === 0) return null;

  return (
    <section id={id} className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
          {subtitle}
        </p>
        <h2 className="font-playfair text-4xl md:text-5xl text-foreground tracking-wide">
          {title}
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
        {events.map((event, i) => (
          <EventCard key={i} event={event} index={i} />
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
