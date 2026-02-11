export type Slide = {
  src: string;
  alt: string;
};

export type EventItem = {
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
  slides: Slide[];
  about: AboutContent;
  eventsPast: EventItem[];
  eventsUpcoming: EventItem[];
  contact: ContactContent;
};
