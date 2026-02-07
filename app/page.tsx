import Navbar from "@/components/Navbar"
import { SECTION_IDS } from "@/lib/sectionIds";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id={SECTION_IDS.home}>
          <h1>Home</h1>
        </section>

        <section id={SECTION_IDS.about}>
          <h1>About</h1>
        </section>

        <section id={SECTION_IDS.events}>
          <h1>Events</h1>
        </section>

        <section id={SECTION_IDS.upcoming}>
          <h1>Upcoming</h1>
        </section>

        <section id={SECTION_IDS.contact}>
          <h1>Contact</h1>
        </section>
      </main>
    </>
  );
}