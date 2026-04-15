import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "home" },
  { label: "About", href: "about" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Experience", href: "experience" },
  { label: "Certifications", href: "certifications" },
  { label: "Contact", href: "contact" },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href);
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setActive(e.target.id);
        }
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 },
    );
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  const handleNav = (id: string) => {
    setOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "glass border-b border-white/10 shadow-glow-sm"
          : "bg-transparent",
      )}
      data-ocid="navbar"
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="font-display font-bold text-xl gradient-text tracking-tight"
          data-ocid="navbar.logo_link"
        >
          Alex.dev
        </button>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                type="button"
                onClick={() => handleNav(link.href)}
                className={cn(
                  "px-3 py-1.5 rounded-lg text-sm font-body transition-all duration-200",
                  active === link.href
                    ? "gradient-text font-semibold"
                    : "text-muted-foreground hover:text-foreground",
                )}
                data-ocid={`navbar.${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          type="button"
          onClick={() => handleNav("contact")}
          className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:scale-105"
          data-ocid="navbar.cta_button"
        >
          Hire Me
        </button>

        {/* Hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg glass transition-smooth"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          data-ocid="navbar.hamburger_toggle"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="lg:hidden glass border-t border-white/10 px-4 pb-4 pt-2"
          data-ocid="navbar.mobile_menu"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              onClick={() => handleNav(link.href)}
              className={cn(
                "block w-full text-left px-3 py-2.5 rounded-lg text-sm font-body transition-smooth",
                active === link.href
                  ? "gradient-text font-semibold bg-white/5"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5",
              )}
              data-ocid={`navbar.mobile.${link.label.toLowerCase()}_link`}
            >
              {link.label}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleNav("contact")}
            className="mt-2 w-full text-center px-4 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white"
            data-ocid="navbar.mobile.cta_button"
          >
            Hire Me
          </button>
        </div>
      )}
    </header>
  );
}
