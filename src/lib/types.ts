export interface Painting {
  image: string;
  title: string;
  caption: string;
}

export interface Sculpture {
  image: string;
  title: string;
  medium: string;
  year: number;
}

export interface EventItem {
  title: string;
  date: string;
  description: string;
  image: string;
  type: "past" | "upcoming";
}

export interface About {
  heading: string;
  body: string;
  image: string;
}

export interface Contact {
  email: string;
  whatsapp: string;
  instagram: string;
  blurb: string;
}

export interface Content {
  paintings: Painting[];
  sculptures: Sculpture[];
  about: About;
  workshops: EventItem[];
  contact: Contact;
}
