import { GlassCard } from "@/components/GlassCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

type Category = "All" | "Web" | "Data" | "Java";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: Exclude<Category, "All">;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "Sales Dashboard",
    description:
      "Interactive Excel-based sales analytics dashboard with pivot tables, KPI cards, and trend charts — enabling fast business decision-making.",
    tech: ["Excel", "Pivot Tables", "Charts", "Data Analysis"],
    category: "Data",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Personal Portfolio Website",
    description:
      "Responsive dark-theme portfolio showcasing projects and skills, built with semantic HTML, custom CSS animations, and Tailwind CSS utility-first design.",
    tech: ["HTML5", "CSS3", "Tailwind CSS", "JavaScript"],
    category: "Web",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "Student Grade Manager",
    description:
      "Java console application that manages student records, calculates GPA, sorts grades, and generates class performance reports using OOP principles.",
    tech: ["Core Java", "OOP", "Collections", "File I/O"],
    category: "Java",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    title: "QC Process Tracker",
    description:
      "SQL-driven defect tracking system that logs quality issues, calculates defect rates per batch, and produces summary reports for QC teams.",
    tech: ["SQL", "Excel", "QC Methodology", "Reporting"],
    category: "Data",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Responsive Landing Page",
    description:
      "Clean, modern SaaS-style landing page with hero section, feature grid, pricing cards, and contact form — fully responsive for all screen sizes.",
    tech: ["HTML5", "Tailwind CSS", "JavaScript"],
    category: "Web",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Inventory Management App",
    description:
      "Java desktop CLI tool for managing product inventory: add/update/remove items, low-stock alerts, and CSV export for reporting.",
    tech: ["Core Java", "OOP", "Data Structures"],
    category: "Java",
    liveUrl: "#",
    githubUrl: "#",
  },
];

const FILTERS: Category[] = ["All", "Web", "Data", "Java"];

export function ProjectsSection() {
  const [filter, setFilter] = useState<Category>("All");
  const shown =
    filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <SectionWrapper id="projects" muted data-ocid="projects.section">
      <SectionHeading
        label="My Work"
        title="Featured"
        titleHighlight="Projects"
        description="Real-world projects that reflect my growth across web development, data analytics, and Java programming."
      />

      {/* Filter tabs */}
      <div
        className="flex flex-wrap justify-center gap-2 mb-10"
        data-ocid="projects.filter_tabs"
      >
        {FILTERS.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`px-5 py-2 rounded-xl text-sm font-semibold transition-all duration-300 ${
              filter === f
                ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow-sm"
                : "glass glass-hover text-muted-foreground hover:text-foreground"
            }`}
            data-ocid={`projects.filter.${f.toLowerCase()}_tab`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {shown.map((project, i) => (
          <GlassCard
            key={project.title}
            className="p-6 flex flex-col group"
            glow
            data-ocid={`projects.item.${i + 1}`}
          >
            {project.featured && (
              <span className="inline-block mb-3 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase gradient-text border border-violet-500/30 self-start">
                Featured
              </span>
            )}
            <h3 className="font-display font-bold text-foreground text-lg mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-violet-400 group-hover:to-cyan-400 transition-all duration-300">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 glass rounded-md text-xs text-muted-foreground font-mono"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-3 mt-auto pt-2 border-t border-white/5">
              <a
                href={project.liveUrl}
                className="inline-flex items-center gap-1.5 text-sm font-semibold gradient-text hover:opacity-80 transition-smooth"
                data-ocid={`projects.live_demo.${i + 1}`}
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
              <span className="text-white/10">|</span>
              <a
                href={project.githubUrl}
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-smooth"
                data-ocid={`projects.github.${i + 1}`}
              >
                <Github size={14} />
                GitHub
              </a>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
