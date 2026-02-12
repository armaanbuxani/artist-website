import type { WorkshopItem } from "@/lib/types";

type Props = {
  workshops: WorkshopItem[];
};

export default function Workshops({ workshops }: Props) {
  const upcoming = workshops[0];
  const past = workshops.slice(1, 4);

  const cards = [upcoming, ...past];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {cards.map((w, idx) => {
        const isUpcoming = idx === 0;

        return (
          <article
            key={`${w.title}-${idx}`}
            className="aspect-square rounded-3xl border shadow-sm flex flex-col items-center p-6"
          >
            {/* IMAGE (square + margin) */}
            <div className="w-full flex justify-center">
              <div className="relative w-4/5 aspect-square mb-6">
                <img
                  src={w.image}
                  alt={w.title}
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div className="text-center flex flex-col justify-between flex-1">
              <div>
                <div className="text-sm text-neutral-500">
                  {isUpcoming ? `Upcoming • ${w.date}` : w.date}
                </div>

                <h3 className="text-2xl font-semibold mt-2">
                  {w.title}
                </h3>

                <p className="mt-4 text-neutral-700">
                  {w.description}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}