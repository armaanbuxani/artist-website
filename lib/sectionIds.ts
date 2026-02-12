export const SECTION_IDS = {
  paintings: "paintings",
  sculptures: "sculptures",
  about: "about",
  events: "events",
  contact: "contact",
} as const;

export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS];