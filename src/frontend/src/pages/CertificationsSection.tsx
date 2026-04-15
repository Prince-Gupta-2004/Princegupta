import { GlassCard } from "@/components/GlassCard";
import { SectionHeading, SectionWrapper } from "@/components/SectionWrapper";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Cert {
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  category: string;
  color: string;
}

const CERTS: Cert[] = [
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    credentialId: "fcc-rwd-12345",
    category: "Web",
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Data Analysis with Python",
    issuer: "IBM via Coursera",
    date: "Sep 2023",
    credentialId: "ibm-da-67890",
    category: "Data",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Java Programming Fundamentals",
    issuer: "NPTEL — IIT Bombay",
    date: "Jul 2023",
    credentialId: "nptel-java-11223",
    category: "Programming",
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "SQL for Data Science",
    issuer: "UC Davis via Coursera",
    date: "May 2023",
    credentialId: "ucd-sql-44556",
    category: "Data",
    color: "from-emerald-500 to-teal-500",
  },
];

export function CertificationsSection() {
  return (
    <SectionWrapper
      id="certifications"
      muted
      data-ocid="certifications.section"
    >
      <SectionHeading
        label="Credentials"
        title="Certifications &"
        titleHighlight="Achievements"
        description="Industry-recognised credentials validating my skills across development and data."
      />

      <div className="grid sm:grid-cols-2 gap-6">
        {CERTS.map((cert, i) => (
          <GlassCard
            key={cert.title}
            className="p-6 group flex gap-5 items-start"
            glow
            data-ocid={`certifications.item.${i + 1}`}
          >
            {/* Icon */}
            <div
              className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-glow-sm`}
            >
              <Award size={22} className="text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-display font-bold text-foreground text-base leading-snug group-hover:gradient-text transition-all duration-300">
                  {cert.title}
                </h3>
                <button
                  type="button"
                  aria-label={`View ${cert.title} credential`}
                  className="flex-shrink-0 p-1.5 glass rounded-lg text-muted-foreground hover:text-foreground transition-smooth"
                  data-ocid={`certifications.credential_link.${i + 1}`}
                >
                  <ExternalLink size={14} />
                </button>
              </div>

              <p
                className={`text-sm font-semibold bg-gradient-to-r ${cert.color} bg-clip-text text-transparent mb-2`}
              >
                {cert.issuer}
              </p>

              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground font-mono">
                <span className="flex items-center gap-1">
                  <Calendar size={11} />
                  {cert.date}
                </span>
                <span className="px-2 py-0.5 glass rounded-md">
                  {cert.category}
                </span>
              </div>

              <p className="text-[10px] text-muted-foreground font-mono mt-2 truncate">
                ID: {cert.credentialId}
              </p>
            </div>
          </GlassCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
