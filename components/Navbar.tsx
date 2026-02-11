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
    <header className="sticky top-0 z-50 border-b bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 items-center px-8 py-8">
        
        {/* LEFT SIDE — BRAND */}
        <div className="text-4xl font-semibold tracking-wide">
          Aarti Buxani
        </div>

        {/* RIGHT SIDE — NAVIGATION */}
        <nav className="hidden md:flex justify-end gap-10 text-lg">
          {items.map((it) => (
            <button
              key={it.id}
              onClick={() => scrollTo(it.id)}
              className="text-neutral-700 hover:text-black transition"
            >
              {it.label}
            </button>
          ))}
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="absolute right-6 md:hidden text-2xl"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-6xl px-6 py-4 space-y-3">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => scrollTo(it.id)}
                className="block w-full text-left text-lg"
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