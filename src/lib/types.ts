export interface HomeItem {
  image: string;
  title: string;
  caption: string;
}

export interface Painting {
  image: string;
  title: string;
  caption: string;
}

export interface PyrographyItem {
  image: string;
  title: string;
}

export interface Sculpture {
  image: string;
  title: string;
  medium: string;
  year: number;
}

export interface CauseProject {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  images: string[];
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
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
  home: HomeItem[];
  paintings: Painting[];
  sculptures: Sculpture[];
  pyrography: PyrographyItem[];
  artForCause: CauseProject[];
  about: About;
  workshops: EventItem[];
  contact: Contact;
}
