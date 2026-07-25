import { useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-24 max-w-[1600px] items-center justify-between px-6 sm:px-8 lg:h-28 lg:px-12 xl:px-16">
        <Link
          to="/"
          className="flex shrink-0 items-center"
          aria-label="Aarti Buxani home"
          onClick={() => setOpen(false)}
        >
          <img
            src="/artist-logo.png"
            alt="Aarti Buxani"
            className="h-auto w-[150px] object-contain sm:w-[175px] lg:w-[205px]"
          />
        </Link>

        <ul className="hidden items-center gap-5 lg:flex xl:gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative block whitespace-nowrap py-2 text-[10px] uppercase tracking-[0.18em] text-black transition-opacity duration-300 after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:bg-black after:transition-transform after:duration-300 ${
                    isActive
                      ? "after:scale-x-100"
                      : "opacity-60 after:scale-x-0 hover:opacity-100 hover:after:scale-x-100"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          className="flex h-11 w-11 items-center justify-center text-black lg:hidden"
          onClick={() => setOpen((current) => !current)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-black/5 bg-white lg:hidden"
            id="mobile-navigation"
          >
            <ul className="flex flex-col items-center gap-7 px-6 py-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `text-[11px] uppercase tracking-[0.24em] transition-opacity ${
                        isActive ? "text-black" : "text-black/50 hover:text-black"
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
