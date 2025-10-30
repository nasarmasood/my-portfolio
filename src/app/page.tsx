import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection";
import FooterSection from "./components/FooterSection";
import HeaderDesktop from "./components/headerDesktop";

export default function Home() {
  return (
    <div>
      <HeaderDesktop/>
     <HeroSection/>
     <ProjectSection/>
     <SkillsSection/>
     <ExperienceSection/>
     <div className="mt-5">    
        <ContactSection/>
</div>
<div>
<FooterSection/>
</div>
    </div>
  );
}
