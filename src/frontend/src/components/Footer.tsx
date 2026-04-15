import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";

const NAV = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Experience",
  "Certifications",
  "Contact",
];
const SOCIALS = [
  { Icon: Github, label: "GitHub" },
  { Icon: Linkedin, label: "LinkedIn" },
  { Icon: Twitter, label: "Twitter" },
  { Icon: Mail, label: "Email" },
];

const scrollTo = (id: string) =>
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });

export function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.hostname)
      : "";

  return (
    <footer className="bg-card border-t border-white/10 px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <span className="font-display font-bold text-xl gradient-text">
              Alex.dev
            </span>
            <p className="mt-2 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Entry-level developer passionate about crafting clean web
              experiences and data-driven insights.
            </p>
          </div>

          {/* Quick nav */}
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-1.5">
              {NAV.map((n) => (
                <li key={n}>
                  <button
                    type="button"
                    onClick={() => scrollTo(n)}
                    className="text-sm text-muted-foreground hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-violet-400 hover:to-cyan-400 transition-smooth"
                  >
                    {n}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-3">
              Connect
            </p>
            <div className="flex gap-2">
              {SOCIALS.map(({ Icon, label }) => (
                <button
                  key={label}
                  type="button"
                  aria-label={label}
                  className="p-2.5 glass rounded-xl text-muted-foreground hover:text-foreground hover:shadow-glow-sm transition-all duration-300"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground font-mono">
          <span className="flex items-center gap-1">
            © {year}. Built with{" "}
            <Heart size={11} className="text-pink-400 mx-0.5" /> using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${hostname}`}
              target="_blank"
              rel="noopener noreferrer"
              className="gradient-text hover:opacity-80 transition-smooth"
            >
              caffeine.ai
            </a>
          </span>
          <span className="opacity-50">Designed & built by Alex</span>
        </div>
      </div>
    </footer>
  );
}
