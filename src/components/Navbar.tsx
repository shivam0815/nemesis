import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const navLink =
  "px-3 py-2 rounded-xl text-white/90 hover:text-white hover:bg-white/10 transition";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0B4FA8]/55 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-2xl bg-white/12 border border-white/15 grid place-items-center shadow-soft">
            <span className="font-bold tracking-wide">NG</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">NEMESIS GROUP</div>
            <div className="text-[11px] text-white/70">Certified Professional Training</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLink}>Home</NavLink>

          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className={`${navLink} flex items-center gap-1`}
              aria-haspopup="menu"
              aria-expanded={open}
            >
              Services <ChevronDown size={16} className="opacity-90" />
            </button>

            {open && (
              <div
                className="absolute right-0 mt-2 w-64 rounded-2xl bg-[#0A3F86]/95 border border-white/15 shadow-soft overflow-hidden"
                role="menu"
                onMouseLeave={() => setOpen(false)}
              >
                <Link
                  to="/services/hr-training"
                  className="block px-4 py-3 hover:bg-white/10 transition"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  HR Training
                  <div className="text-xs text-white/70">Human Resource (HR) program</div>
                </Link>
                <Link
                  to="/services/customer-training"
                  className="block px-4 py-3 hover:bg-white/10 transition"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  Customer Care Training
                  <div className="text-xs text-white/70">Support, communication, process</div>
                </Link>
                <div className="h-px bg-white/10" />
                <Link
                  to="/services"
                  className="block px-4 py-3 hover:bg-white/10 transition"
                  role="menuitem"
                  onClick={() => setOpen(false)}
                >
                  View All Services
                </Link>
              </div>
            )}
          </div>

          <a href="#contact" className={navLink}>Contact</a>
        </nav>

        <Link
          to="/services"
          className="md:hidden px-3 py-2 rounded-xl bg-white/12 border border-white/15"
        >
          Services
        </Link>
      </div>
    </header>
  );
}
