import type { Content } from "./types";

export const mockContent: Content = {
  paintings: [
    {
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1600&h=900&fit=crop",
      title: "Ethereal Light",
      caption: "Oil on canvas · 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=1600&h=900&fit=crop",
      title: "Abstract Horizon",
      caption: "Acrylic on linen · 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=1600&h=900&fit=crop",
      title: "Silent Conversations",
      caption: "Mixed media · 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1600&h=900&fit=crop",
      title: "Chromatic Field",
      caption: "Oil on panel · 2023",
    },
    {
      image: "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=1600&h=900&fit=crop",
      title: "The Weight of Time",
      caption: "Oil on canvas · 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=1600&h=900&fit=crop",
      title: "Vessel of Memory",
      caption: "Acrylic and gold leaf · 2024",
    },
    {
      image: "https://images.unsplash.com/photo-1578321272176-b7bbc0679853?w=1600&h=900&fit=crop",
      title: "Marble Dreams",
      caption: "Oil on canvas · 2023",
    },
  ],

  sculptures: [
    {
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&h=1000&fit=crop",
      title: "Emergence",
      medium: "Carrara marble",
      year: 2024,
    },
    {
      image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=1000&fit=crop",
      title: "Form & Void",
      medium: "Cast bronze",
      year: 2024,
    },
    {
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&h=1000&fit=crop",
      title: "Infinite Loop",
      medium: "Polished steel",
      year: 2023,
    },
    {
      image: "https://images.unsplash.com/photo-1531913764164-f85c3e01b2aa?w=800&h=1000&fit=crop",
      title: "Breath",
      medium: "White terracotta",
      year: 2023,
    },
    {
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=800&h=1000&fit=crop",
      title: "Memory Vessel",
      medium: "Ceramic and gold leaf",
      year: 2024,
    },
    {
      image: "https://images.unsplash.com/photo-1594732832278-abd644401c43?w=800&h=1000&fit=crop",
      title: "Shelter",
      medium: "Patinated bronze",
      year: 2023,
    },
  ],

  about: {
    heading: "Elena Vasquez",
    body: "Elena Vasquez is a contemporary artist whose work explores the intersection of form, light, and memory. Working across painting and sculpture, she draws inspiration from the quiet poetry of everyday objects and the landscapes of her Mediterranean heritage.\n\nHer pieces have been exhibited in galleries across Europe and North America, including the Whitechapel Gallery in London, Galerie Perrotin in Paris, and the Museum of Contemporary Art in Los Angeles. Each work invites the viewer into a space of contemplation — where texture becomes language and silence speaks.\n\nElena holds an MFA from the Royal Academy of Fine Arts and currently divides her time between her studios in Barcelona and New York.",
    image: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1000&fit=crop",
  },

  workshops: [
    {
      title: "Fragments of Light — Solo Exhibition",
      date: "2024-09-15",
      type: "past",
      description:
        "A curated collection of twelve new oil paintings exploring the interplay between natural light and architectural form. Held at Galerie Blanche, Paris.",
      image: "https://images.unsplash.com/photo-1594732832278-abd644401c43?w=600&h=400&fit=crop",
    },
    {
      title: "Sculpture Garden Installation",
      date: "2024-06-20",
      type: "past",
      description:
        "Three large-scale bronze works installed in the Jardí Botànic de Barcelona as part of the city's summer arts programme.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
    },
    {
      title: "Art Basel Miami — Group Show",
      date: "2023-12-05",
      type: "past",
      description:
        "Selected works presented alongside international contemporary artists at the annual Art Basel fair in Miami Beach.",
      image: "https://images.unsplash.com/photo-1531913764164-f85c3e01b2aa?w=600&h=400&fit=crop",
    },
    {
      title: "New Works — Spring Collection",
      date: "2025-04-10",
      type: "upcoming",
      description:
        "A preview of Elena's latest series of abstract landscapes, inspired by the volcanic terrain of Lanzarote. Opening reception at Pace Gallery, New York.",
      image: "https://images.unsplash.com/photo-1501084817091-a4f3d1d19e07?w=600&h=400&fit=crop",
    },
    {
      title: "Venice Biennale 2025",
      date: "2025-05-20",
      type: "upcoming",
      description:
        "Elena will present a site-specific installation exploring the concept of impermanence, commissioned for the Spanish Pavilion.",
      image: "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=600&h=400&fit=crop",
    },
  ],

  contact: {
    email: "studio@elenavasquez.art",
    whatsapp: "+34612345678",
    instagram: "elenavasquez.studio",
    blurb:
      "For inquiries about commissions, exhibitions, or acquisitions, please reach out through any of the channels below.",
  },
};
