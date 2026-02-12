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
  workshops: [
  {
    title: "Floral Sculpting Masterclass",
    date: "March 28, 2026",
    description:
      "An immersive hands-on workshop exploring textured floral forms and sculptural paste detailing.",
    image: "https://picsum.photos/1200/800",
  },
  {
    title: "Botanical Texture Series",
    date: "January 15, 2026",
    description:
      "A focused session on creating depth using layered paste and botanical references.",
    image: "https://picsum.photos/1200/800",
  },
  {
    title: "Sculptural Canvas Techniques",
    date: "October 3, 2025",
    description:
      "Exploring dimensional compositions and raised textures for dramatic statement pieces.",
    image: "https://picsum.photos/1200/800",
  },
  {
    title: "Contemporary Floral Forms",
    date: "July 12, 2025",
    description:
      "A modern interpretation of traditional floral sculpting techniques.",
    image: "https://picsum.photos/1200/800",
  },
],
  contact: {
    blurb: "For commissions, exhibitions, collaborations, or purchases, reach out below.",
    email: "aartibux@gmail.com",
    instagram: "https://www.instagram.com/aartibuxaniart/",
    facebook: "https://www.facebook.com/AartiBux/",
  },
};