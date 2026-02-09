import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { SkipToContent } from "@/components/SkipToContent";
import { AboutSection } from "@/sections/AboutSection";
import { ContactSection } from "@/sections/ContactSection";
import { EducationSection } from "@/sections/EducationSection";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { HeroSection } from "@/sections/HeroSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { SkillsSection } from "@/sections/SkillsSection";

export default function Home() {
  return (
    <div className="min-h-dvh bg-[var(--background)] text-[var(--foreground)]">
      <SkipToContent />
      <Navbar />

      <main id="content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
