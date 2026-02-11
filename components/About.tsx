import type { AboutContent } from "@/lib/types";

type Props = {
  about: AboutContent;
};

export default function About({ about }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">{about.heading}</h2>
      <div className="grid gap-6 md:grid-cols-2">
        <p className="text-neutral-700 leading-relaxed">{about.body}</p>
        <img
          src={about.image}
          alt="About image"
          className="h-72 w-full rounded-2xl object-cover shadow"
        />
      </div>
    </div>
  );
}