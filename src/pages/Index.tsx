import { useEffect, useState } from "react";
import type { Content } from "@/lib/types";
import { fetchContent } from "@/lib/fetchContent";
import Navbar from "@/components/Navbar";
import Paintings from "@/components/Paintings";
import Sculptures from "@/components/Sculptures";
import AboutSection from "@/components/AboutSection";
import Workshops from "@/components/Workshops";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [content, setContent] = useState<Content | null>(null);

  useEffect(() => {
    let cancelled = false;

    const loadWebsite = async () => {
      try {
        const data = await fetchContent();

        const firstPainting = data.paintings[0]?.image;

        if (firstPainting) {
          await new Promise<void>((resolve) => {
            const image = new Image();

            image.onload = () => resolve();
            image.onerror = () => resolve();
            image.src = firstPainting;
          });
        }

        if (!cancelled) {
          setContent(data);
        }
      } catch (error) {
        console.error("Failed to fetch content:", error);
      }
    };

    loadWebsite();

    return () => {
      cancelled = true;
    };
  }, []);

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="w-5 h-5 border-2 border-foreground/20 border-t-foreground rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main>
        {/* Home: paintings hero + sculptures below */}
        <Paintings paintings={content.paintings} />
        <Sculptures sculptures={content.sculptures} />

        {/* About */}
        <AboutSection about={content.about} />

        {/* Events / Workshops */}
        <Workshops workshops={content.workshops} />

        {/* Contact */}
        <ContactSection contact={content.contact} />
      </main>
    </div>
  );
};

export default Index;
