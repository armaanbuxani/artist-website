import type { SiteContent } from "./types";

export const mockContent: SiteContent = {
  paintings: [
    { src: "https://picsum.photos/1200/800", alt: "Artwork slide 1", title: "Slide 1", description: "Description for slide 1"},
    { src: "https://picsum.photos/1200/800", alt: "Artwork slide 2", title: "Slide 2", description: "Description for slide 2" },
    { src: "https://picsum.photos/1200/800", alt: "Artwork slide 3", title: "Slide 3", description: "Description for slide 3" },
  ],
  sculptures: [
    { src: "https://picsum.photos/1200/800", alt: "Artwork slide 1", title: "Slide 1", description: "Description for slide 1"},
    { src: "https://picsum.photos/1200/800", alt: "Artwork slide 2", title: "Slide 2", description: "Description for slide 2" },
    { src: "https://picsum.photos/1200/800", alt: "Artwork slide 3", title: "Slide 3", description: "Description for slide 3" },
  ],
  about: {
    heading: "About",
    body:
      "Aarti Buxani creates paintings and sculptural works inspired by nature, texture, and intricate detail. This is dummy copy — replace later with your real bio.",
    image: "https://picsum.photos/1200/800",
  },
  eventsPast: [
    {
      title: "Exhibition at XYZ Gallery",
      date: "Jan 2026",
      description: "A curated selection of paintings and sculptures.",
      image: "https://picsum.photos/1200/800",
    },
    {
      title: "Workshop Showcase",
      date: "Dec 2025",
      description: "Live demo + showcase of recent work.",
      image: "https://picsum.photos/1200/800",
    },
  ],
  contact: {
    blurb: "For commissions, exhibitions, collaborations, or purchases, reach out below.",
    email: "aarti@example.com",
    whatsapp: "+91 90000 00000",
    instagram: "https://picsum.photos/1200/800",
  },
};