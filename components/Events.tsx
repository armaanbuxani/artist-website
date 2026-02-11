import type { EventItem } from "@/lib/types";

type Props = {
  events: EventItem[];
};

export default function Events({ events }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {events.map((e) => (
        <article key={e.title} className="rounded-2xl border p-4 shadow-sm">
          <img src={e.image} alt={e.title} className="h-44 w-full rounded-xl object-cover" />
          <div className="mt-3">
            <div className="text-sm text-neutral-500">{e.date}</div>
            <h3 className="text-lg font-semibold">{e.title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{e.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
