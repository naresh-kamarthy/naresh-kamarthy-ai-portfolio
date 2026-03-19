import { useMemo } from "react";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import WhatIBuildSection from "@/components/portfolio/WhatIBuildSection";
import FeaturedProjectsSection, { FEATURED_SLUGS } from "@/components/portfolio/FeaturedProjectsSection";
import OtherProjectsSection from "@/components/portfolio/OtherProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ProfessionalExperienceSection from "@/components/portfolio/ProfessionalExperienceSection";
import EducationSection from "@/components/portfolio/EducationSection";
import GitHubSection from "@/components/portfolio/GitHubSection";
import CareerDirectionSection from "@/components/portfolio/CareerDirectionSection";
import ContactSection from "@/components/portfolio/ContactSection";
import { useGitHubData } from "@/hooks/useGitHubData";

const Portfolio = () => {
  const { profile, aiRepos } = useGitHubData();

  // Repos that appear in the "Other Selected Projects" section:
  // ai-project topic repos that are NOT one of the 4 featured slugs
  const otherAiRepos = useMemo(
    () => aiRepos.filter((r) => !FEATURED_SLUGS.includes(r.name as any)),
    [aiRepos]
  );

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <WhatIBuildSection />
      <FeaturedProjectsSection repos={aiRepos} />
      <OtherProjectsSection repos={otherAiRepos} />
      <SkillsSection />
      <ProfessionalExperienceSection />
      <EducationSection />
      <GitHubSection
        profile={profile}
        featuredCount={Math.min(FEATURED_SLUGS.length, 4)}
        otherCount={otherAiRepos.length}
      />
      <CareerDirectionSection />
      <ContactSection />
      <footer className="border-t border-border/40 py-8 px-6 text-center">
        <span className="font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} Naresh Kamarthy</span>
      </footer>
    </div>
  );
};

export default Portfolio;
