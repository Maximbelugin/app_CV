import {} from "react";
import { Navigation } from "@/components/Navigation";
import { PageOverlay } from "@/components/PageOverlay";
import { CustomHero } from "@/sections/CustomHero";
import { ExperienceSection } from "@/sections/ExperienceSection";
import { SkillCards } from "@/components/SkillCards";

import { ProjectsMarquee } from "@/components/ProjectsMarquee";
import { CustomFooter } from "@/sections/CustomFooter";
import { usePageLoad } from "@/hooks/usePageLoad";

function App() {
  const { showOverlay } = usePageLoad(800);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Load Overlay */}
      <PageOverlay isVisible={showOverlay} />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        {/* Hero Section with Decode Animation */}
        <CustomHero />

        {/* Experience Timeline */}
        <ExperienceSection />

        {/* Skill Cards with Color Coding */}
        <div id="skills">
          <SkillCards />
        </div>

        {/* Projects Grid */}
        <div id="projects">
          <ProjectsMarquee />
        </div>
      </main>

      {/* Footer with Contact Form */}
      <CustomFooter />
    </div>
  );
}

export default App;
