import HeroSection from "./components/HeroSection";
import ProjectSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import ExperienceSection from "./components/ExperienceSection"
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <div>
     <HeroSection/>
     <ProjectSection/>
     <SkillsSection/>
     <ExperienceSection/>
     <div className="mt-5">    
        <ContactSection/>
</div>
    </div>
  );
}
