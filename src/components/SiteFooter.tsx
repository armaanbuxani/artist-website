import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "@/lib/navigation";

const SiteFooter = () => (
  <footer className="border-t border-black/10 bg-white px-6 py-14 sm:px-8 lg:px-12 lg:py-16 xl:px-16">
    <div className="mx-auto max-w-[1600px]">
      <nav aria-label="Footer navigation">
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-4 sm:gap-x-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="text-[10px] uppercase tracking-[0.18em] text-black/55 transition-colors duration-300 hover:text-black"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-10 text-center text-[10px] uppercase tracking-[0.18em] text-black/40">
        © {new Date().getFullYear()} Aarti Buxani · All rights reserved
      </p>
    </div>
  </footer>
);

export default SiteFooter;
