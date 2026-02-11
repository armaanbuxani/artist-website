"use client";

import { useState } from "react";
import { SECTION_IDS } from "@/lib/sectionIds";

const items = [
  { id: SECTION_IDS.home, label: "Home" },
  { id: SECTION_IDS.about, label: "About" },
  { id: SECTION_IDS.events, label: "Events" },
  { id: SECTION_IDS.upcoming, label: "Upcoming" },
  { id: SECTION_IDS.contact, label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <div className="font-semibold tracking-tight">Aarti Buxani</div>

        <nav className="hidden gap-6 md:flex">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              className="text-sm text-neutral-700 hover:text-neutral-950"
            >
              {it.label}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden rounded-lg border px-3 py-2 text-sm"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-5xl px-4 py-2">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="block w-full py-2 text-left text-sm text-neutral-700 hover:text-neutral-950"
              >
                {it.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}