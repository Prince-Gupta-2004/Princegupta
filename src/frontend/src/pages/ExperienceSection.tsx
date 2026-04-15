import { GlassCard } from "@/components/GlassCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  skills: string[];
}

const EXPERIENCES: Experience[] = [
  {
    role: "Data Analysis Intern",
    company: "TechCorp Solutions Pvt. Ltd.",
    period: "Jun 2023 – Aug 2023",
    location: "Mumbai, India (Hybrid)",
    type: "Internship",
    description: [
      "Cleaned and processed datasets of 10,000+ records in Excel, improving data accuracy by 18%.",
      "Built SQL queries to extract and aggregate sales data, supporting monthly reporting cycles.",
      "Created pivot-table-based dashboards to visualize KPIs for the operations team.",
    ],
    skills: ["SQL", "Excel", "Data Cleaning", "Pivot Tables"],
  },
  {
    role: "Quality Control Associate (Part-time)",
    company: "Precision Manufacturing Co.",
    period: "Jan 2023 – May 2023",
    location: "Mumbai, India (On-site)",
    type: "Part-time",
    description: [
      "Monitored production batches for defect rates against ISO quality benchmarks.",
      "Maintained inspection logs in Excel, reducing documentation errors by 25%.",
      "Collaborated with the QC team to identify recurring defect patterns and suggest process improvements.",
    ],
    skills: [
      "Quality Control",
      "Excel",
      "ISO Standards",
      "Process Improvement",
    ],
  },
  {
    role: "Web Development Trainee",
    company: "CodeCraft Academy",
    period: "Sep 2022 – Dec 2022",
    location: "Online",
    type: "Training",
    description: [
      "Completed intensive training in HTML5, CSS3, JavaScript, and responsive web design.",
      "Built three capstone projects including a Tailwind CSS landing page and a JS calculator app.",
      "Practiced Git workflows for version control and code collaboration.",
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Git"],
  },
];

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" data-ocid="experience.section">
      <SectionHeading
        label="Work History"
        title="Experience &"
        titleHighlight="Training"
        description="Hands-on roles that shaped my skills in development, data, and quality engineering."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/60 via-cyan-500/40 to-transparent" />

        <div className="space-y-8">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className="relative flex gap-6 sm:gap-8"
              data-ocid={`experience.item.${i + 1}`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full glass border border-white/20 flex items-center justify-center shadow-glow-sm">
                  <Briefcase size={20} className="gradient-text" />
                </div>
              </div>

              <GlassCard className="flex-1 p-6" glow>
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-display font-bold text-foreground text-lg">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold gradient-text">
                      {exp.company}
                    </p>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-xs font-mono glass border border-white/10 text-muted-foreground">
                    {exp.type}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs text-muted-foreground font-mono">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={12} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} />
                    {exp.location}
                  </span>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.description.map((d) => (
                    <li
                      key={d}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-violet-400" />
                      {d}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.skills.map((s) => (
                    <span
                      key={s}
                      className="px-2 py-0.5 glass rounded-md text-xs text-muted-foreground font-mono"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
