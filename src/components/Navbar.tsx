import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { SECTION_IDS } from "@/lib/sectionIds";

const navItems = [
  { label: "Home", href: SECTION_IDS.paintings },
  { label: "Sculptures", href: SECTION_IDS.sculptures },
  { label: "About", href: SECTION_IDS.about },
  { label: "Events", href: SECTION_IDS.events },
  { label: "Contact", href: SECTION_IDS.contact },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-16 h-16">
        {/* Logo */}
        <button
          onClick={() => scrollTo(SECTION_IDS.paintings)}
          className="font-playfair text-lg tracking-[0.15em] text-foreground"
        >
          EV
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-background border-b border-border/30"
          >
            <ul className="flex flex-col items-center py-10 gap-7">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className="text-[11px] tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
