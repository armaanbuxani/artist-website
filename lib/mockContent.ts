import type { SiteContent } from "./types";

export const mockContent: SiteContent = {
  slides: [
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
  eventsUpcoming: [
    {
      title: "Upcoming Showcase",
      date: "Mar 2026",
      description: "New series launching soon (dummy).",
      image: "https://picsum.photos/1200/800",
    },
    {
      title: "Private Viewing",
      date: "Apr 2026",
      description: "Invite-only viewing for collectors (dummy).",
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