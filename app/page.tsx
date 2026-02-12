import Navbar from "@/components/Navbar";
import Slideshow from "@/components/Paintings";
import SculpturesSlideshow from "@/components/Sculptures";
import About from "@/components/About";
import Events from "@/components/Workshops";
import Contact from "@/components/Contact";

import { SECTION_IDS } from "@/lib/sectionIds";
import { mockContent } from "@/lib/mockContent";
import Workshops from "@/components/Workshops";

export default function Home() {
  const content = mockContent;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-20">
        <section id={SECTION_IDS.paintings} className="space-y-6">
          <Slideshow paintings={content.paintings} />
        </section>

        <section id={SECTION_IDS.sculptures} className="space-y-6">
          <SculpturesSlideshow sculptures={content.sculptures} />
        </section>

        <section id={SECTION_IDS.events} className="space-y-6">
          <h2 className="text-2xl font-semibold">Workshops</h2>
          <Workshops workshops={content.workshops} />
        </section>

        <section id={SECTION_IDS.about} className="space-y-6">
          <About about={content.about} />
        </section>

        <section id={SECTION_IDS.contact} className="space-y-4 pb-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <Contact contact={content.contact} />
        </section>
      </main>
    </>
  );
}