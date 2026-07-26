import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink, useLocation } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  useEffect(() => {
    const updateScrolled = () => {
      setScrolled(window.scrollY > 32);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrolled);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`relative overflow-hidden bg-[#e9ebe7] ${
        isHome
          ? "h-[260px] sm:h-[310px] lg:h-[380px] xl:h-[430px]"
          : "h-[190px] sm:h-[220px] lg:h-[250px]"
      }`}
    >
      <img
        src="/navbar_banner.jpeg"
        alt=""
        className="h-full w-full object-cover object-center"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white/20 to-transparent"
        aria-hidden="true"
      />

      <nav
        className={`inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "fixed border-b border-black/5 bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-md"
            : "absolute bg-gradient-to-b from-white/95 via-white/75 to-transparent"
        }`}
        aria-label="Primary navigation"
      >
        <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-end px-5 sm:px-8 lg:h-24 lg:justify-center lg:px-12 xl:px-16">
          <ul className="hidden items-center justify-center gap-6 lg:flex xl:gap-9">
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
            className={`flex h-11 w-11 items-center justify-center rounded-full border text-black transition-colors lg:hidden ${
              scrolled
                ? "border-black/10 bg-white"
                : "border-white/70 bg-white/75 backdrop-blur-sm"
            }`}
            onClick={() => setOpen((current) => !current)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <X size={21} strokeWidth={1.5} />
            ) : (
              <Menu size={21} strokeWidth={1.5} />
            )}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="overflow-hidden border-t border-black/5 bg-white/95 backdrop-blur-md lg:hidden"
              id="mobile-navigation"
            >
              <ul className="flex flex-col items-center gap-7 px-6 py-9">
                {NAV_ITEMS.map((item) => (
                  <li key={item.to}>
                    <NavLink
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `text-[11px] uppercase tracking-[0.24em] transition-opacity ${
                          isActive
                            ? "text-black"
                            : "text-black/50 hover:text-black"
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
    </header>
  );
};

export default Navbar;
