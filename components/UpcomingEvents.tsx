import type { EventItem } from "@/lib/types";
import Events from "./Events";

type Props = {
  events: EventItem[];
};

export default function UpcomingEvents({ events }: Props) {
  // Reuse the same card layout
  return <Events events={events} />;
}