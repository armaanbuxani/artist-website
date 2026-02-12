export type Paintings = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type Sculptures = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

export type WorkshopItem = {
  title: string;
  date: string;
  description: string;
  image: string;
};

export type AboutContent = {
  heading: string;
  body: string;
  image: string;
};

export type ContactContent = {
  blurb: string;
  email: string;
  whatsapp: string;
  instagram: string;
};

export type SiteContent = {
  paintings: Paintings[];
  sculptures: Sculptures[];
  about: AboutContent;
  eventsPast: WorkshopItem[];
  contact: ContactContent;
};
