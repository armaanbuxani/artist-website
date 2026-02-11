import Navbar from "@/components/Navbar";
import Slideshow from "@/components/Slideshow";
import About from "@/components/About";
import Events from "@/components/Events";
import UpcomingEvents from "@/components/UpcomingEvents";
import Contact from "@/components/Contact";

import { SECTION_IDS } from "@/lib/sectionIds";
import { mockContent } from "@/lib/mockContent";

export default function Home() {
  const content = mockContent;

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-4 py-10 space-y-20">
        <section id={SECTION_IDS.home} className="space-y-6">
          <h1 className="text-3xl font-semibold">Aarti Buxani</h1>
          <Slideshow slides={content.slides} />
        </section>

        <section id={SECTION_IDS.about} className="space-y-6">
          <About about={content.about} />
        </section>

        <section id={SECTION_IDS.events} className="space-y-6">
          <h2 className="text-2xl font-semibold">Events</h2>
          <Events events={content.eventsPast} />
        </section>

        <section id={SECTION_IDS.upcoming} className="space-y-6">
          <h2 className="text-2xl font-semibold">Upcoming</h2>
          <UpcomingEvents events={content.eventsUpcoming} />
        </section>

        <section id={SECTION_IDS.contact} className="space-y-4 pb-10">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <Contact contact={content.contact} />
        </section>
      </main>
    </>
  );
}