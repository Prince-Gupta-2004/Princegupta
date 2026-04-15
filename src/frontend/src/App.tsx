import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "@/pages/AboutSection";
import { CertificationsSection } from "@/pages/CertificationsSection";
import { ContactSection } from "@/pages/ContactSection";
import { ExperienceSection } from "@/pages/ExperienceSection";
import { HeroSection } from "@/pages/HeroSection";
import { ProjectsSection } from "@/pages/ProjectsSection";
import { SkillsSection } from "@/pages/SkillsSection";

export default function App() {
  return (
    <div className="dark min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
