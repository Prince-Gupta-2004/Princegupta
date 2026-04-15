import { GlassCard } from "@/components/GlassCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";

interface Skill {
  name: string;
  level: number;
}
interface SkillGroup {
  category: string;
  color: string;
  skills: Skill[];
}

const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Frontend",
    color: "from-violet-500 to-fuchsia-500",
    skills: [
      { name: "HTML5 & Semantic Web", level: 88 },
      { name: "CSS3 & Animations", level: 82 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 72 },
    ],
  },
  {
    category: "Backend & Languages",
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Core Java & OOP", level: 75 },
      { name: "SQL & Queries", level: 78 },
      { name: "Data Structures (Basic)", level: 65 },
    ],
  },
  {
    category: "Data & Analytics",
    color: "from-emerald-500 to-teal-500",
    skills: [
      { name: "Microsoft Excel", level: 85 },
      { name: "Data Analysis", level: 76 },
      { name: "Quality Control", level: 80 },
      { name: "Process Documentation", level: 78 },
    ],
  },
  {
    category: "Tools & Others",
    color: "from-orange-500 to-amber-500",
    skills: [
      { name: "Git & Version Control", level: 70 },
      { name: "VS Code", level: 88 },
      { name: "Figma (Basic)", level: 60 },
      { name: "Responsive Design", level: 82 },
    ],
  },
];

const TECH_BADGES = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Tailwind CSS",
  "Java",
  "OOP",
  "SQL",
  "Excel",
  "Git",
  "VS Code",
  "Figma",
  "QC Tools",
];

export function SkillsSection() {
  return (
    <SectionWrapper id="skills" data-ocid="skills.section">
      <SectionHeading
        label="My Toolkit"
        title="Skills &"
        titleHighlight="Expertise"
        description="A well-rounded mix of frontend, backend, and analytical capabilities."
      />

      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        {SKILL_GROUPS.map((group, gi) => (
          <GlassCard
            key={group.category}
            className="p-6"
            data-ocid={`skills.group.${gi + 1}`}
          >
            <div
              className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-mono font-semibold text-white bg-gradient-to-r ${group.color}`}
            >
              {group.category}
            </div>
            <div className="space-y-4">
              {group.skills.map((skill, si) => (
                <div
                  key={skill.name}
                  data-ocid={`skills.item.${gi * 4 + si + 1}`}
                >
                  <div className="flex justify-between mb-1.5">
                    <span className="text-sm text-foreground font-body">
                      {skill.name}
                    </span>
                    <span className="text-xs text-muted-foreground font-mono">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className={`h-full rounded-full bg-gradient-to-r ${group.color} transition-all duration-1000`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Tech badges */}
      <div className="text-center">
        <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-4">
          Technologies I've worked with
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {TECH_BADGES.map((t) => (
            <span
              key={t}
              className="px-3 py-1.5 glass rounded-lg text-sm font-body text-muted-foreground hover:text-foreground hover:border-white/20 transition-smooth"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
