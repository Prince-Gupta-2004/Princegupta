import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useTypingEffect } from "@/hooks/use-typing-effect";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Twitter,
} from "lucide-react";

const TYPED_WORDS = [
  "Frontend Developer",
  "Data Analyst",
  "Problem Solver",
  "Java Enthusiast",
  "Quality Engineer",
];

export function HeroSection() {
  const typed = useTypingEffect({ words: TYPED_WORDS });
  const [ref, visible] = useIntersectionObserver<HTMLDivElement>({
    triggerOnce: false,
  });

  const scrollDown = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1400x900.jpg')",
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/90" />
      <div
        className="absolute top-1/4 -left-20 w-96 h-96 rounded-full blur-glow opacity-30"
        style={{ background: "oklch(0.72 0.22 260 / 0.25)" }}
      />
      <div
        className="absolute bottom-1/3 -right-20 w-80 h-80 rounded-full blur-glow opacity-20"
        style={{ background: "oklch(0.68 0.2 180 / 0.2)" }}
      />

      {/* Content */}
      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        data-ocid="hero.section"
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 text-sm font-mono text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Available for Opportunities
        </div>

        <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl text-foreground mb-4 leading-tight tracking-tight">
          Hi, I'm <span className="gradient-text">Alex</span>
        </h1>

        {/* Typing effect */}
        <div className="h-12 flex items-center justify-center mb-6">
          <span
            className="font-display text-2xl sm:text-3xl text-muted-foreground typing-cursor pr-1"
            data-ocid="hero.typed_text"
          >
            {typed}
          </span>
        </div>

        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Entry-level developer passionate about crafting clean, accessible web
          experiences and turning data into meaningful insights.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            type="button"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow-md hover:shadow-glow-lg transition-all duration-300 hover:scale-105"
            data-ocid="hero.download_cv_button"
          >
            <Download size={18} />
            Download CV
          </button>
          <button
            type="button"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold glass glass-hover border border-white/20 text-foreground transition-all duration-300 hover:scale-105"
            data-ocid="hero.contact_button"
          >
            <Mail size={18} />
            Get in Touch
          </button>
        </div>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mb-14">
          {[
            { Icon: Github, label: "GitHub" },
            { Icon: Linkedin, label: "LinkedIn" },
            { Icon: Twitter, label: "Twitter" },
          ].map(({ Icon, label }) => (
            <button
              key={label}
              type="button"
              aria-label={label}
              className="p-2.5 glass glass-hover rounded-xl text-muted-foreground hover:text-foreground hover:shadow-glow-sm transition-all duration-300"
              data-ocid={`hero.${label.toLowerCase()}_link`}
            >
              <Icon size={20} />
            </button>
          ))}
        </div>

        {/* Scroll down */}
        <button
          type="button"
          onClick={scrollDown}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth mx-auto"
          aria-label="Scroll down"
          data-ocid="hero.scroll_down_button"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <ArrowDown size={18} className="animate-bounce" />
        </button>
      </div>
    </section>
  );
}
