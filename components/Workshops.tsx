import type { WorkshopItem } from "@/lib/types";

type Props = {
  workshops: WorkshopItem[];
};

export default function Workshops({ workshops }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {workshops.map((w) => (
        <article key={w.title} className="rounded-2xl border p-4 shadow-sm">
          <img src={w.image} alt={w.title} className="h-44 w-full rounded-xl object-cover" />
          <div className="mt-3">
            <div className="text-sm text-neutral-500">{w.date}</div>
            <h3 className="text-lg font-semibold">{w.title}</h3>
            <p className="mt-1 text-sm text-neutral-700">{w.description}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
