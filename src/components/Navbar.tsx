import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Paintings", to: "/paintings" },
  { label: "Sculptures", to: "/sculptures" },
  { label: "Pyrography", to: "/pyrography" },
  { label: "Workshops", to: "/workshops" },
  { label: "Art for a Cause", to: "/art-for-a-cause" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/30">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 md:px-10 lg:px-16 h-16">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/artist-logo.png"
            alt="Artist Logo"
            className="h-[90px] w-auto object-contain opacity-90"

          />
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-5 lg:gap-8">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `text-[9px] lg:text-[10px] tracking-[0.18em] lg:tracking-[0.22em] uppercase whitespace-nowrap transition-colors duration-300 ${
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
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
            id="mobile-navigation"
          >
            <ul className="flex flex-col items-center py-10 gap-7">
              {navItems.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-[11px] tracking-[0.3em] uppercase transition-colors ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
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
