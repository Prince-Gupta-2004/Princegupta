import { GlassCard } from "@/components/GlassCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { Award, BarChart3, Code2, Database } from "lucide-react";

const STATS = [
  { label: "Projects Completed", value: "6+" },
  { label: "Technologies Used", value: "12+" },
  { label: "Certifications", value: "4" },
  { label: "Months of Experience", value: "8+" },
];

const HIGHLIGHTS = [
  {
    Icon: Code2,
    title: "Web Development",
    desc: "HTML, CSS, Tailwind CSS, JavaScript — building responsive, accessible UIs.",
  },
  {
    Icon: Database,
    title: "Data & SQL",
    desc: "Excel, SQL, data cleaning and analysis — turning raw data into actionable insights.",
  },
  {
    Icon: BarChart3,
    title: "Quality Control",
    desc: "QC process analysis, defect tracking, and reporting using structured methodologies.",
  },
  {
    Icon: Award,
    title: "Java & OOP",
    desc: "Core Java concepts, object-oriented programming, and algorithmic problem solving.",
  },
];

export function AboutSection() {
  return (
    <SectionWrapper id="about" muted data-ocid="about.section">
      <SectionHeading
        label="Who I Am"
        title="About"
        titleHighlight="Me"
        description="A motivated fresher bridging development and data — ready to contribute from day one."
      />

      {/* Stats strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        {STATS.map((s, i) => (
          <GlassCard
            key={s.label}
            className="p-5 text-center"
            data-ocid={`about.stat.${i + 1}`}
          >
            <div className="text-3xl font-display font-bold gradient-text mb-1">
              {s.value}
            </div>
            <div className="text-xs text-muted-foreground font-mono">
              {s.label}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Bio + highlights */}
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <div>
          <h3 className="text-xl font-display font-semibold text-foreground mb-4">
            Fresher. Curious. <span className="gradient-text">Driven.</span>
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm an entry-level developer with a solid foundation in frontend web
            technologies and a genuine passion for clean code. My background
            spans both development and data analytics — giving me a unique
            perspective that blends technical precision with business awareness.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            During my academic journey I completed hands-on projects in data
            analysis, QC process improvement, and small development tasks — each
            sharpening my ability to learn fast and deliver results. I'm now
            eager to apply these skills in a collaborative, growth-oriented
            team.
          </p>
          <button
            type="button"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-violet-500 to-cyan-500 text-white shadow-glow-sm hover:shadow-glow-md transition-all duration-300 hover:scale-105"
            data-ocid="about.download_cv_button"
          >
            Download CV
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {HIGHLIGHTS.map(({ Icon, title, desc }, i) => (
            <GlassCard
              key={title}
              className="p-5"
              glow
              data-ocid={`about.highlight.${i + 1}`}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center mb-3">
                <Icon size={20} className="gradient-text" />
              </div>
              <h4 className="font-display font-semibold text-foreground text-sm mb-1">
                {title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {desc}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
