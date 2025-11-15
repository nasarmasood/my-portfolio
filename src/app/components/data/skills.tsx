import { 
    SiMongodb, 
    SiExpress, 
    SiNextdotjs,
    SiDocker,
    SiKubernetes,
    SiTypescript,
    SiTailwindcss,
    SiBootstrap,
    SiHtml5,
    SiCss3,
    SiMui
  } from "react-icons/si";
  
  import { FaReact, FaNodeJs } from "react-icons/fa";
  
  export const SkillsData = [
    { name: 'MongoDB', logo: <SiMongodb /> },
    { name: 'Express.js', logo: <SiExpress /> },
    { name: 'React.js', logo: <FaReact /> },
    { name: 'Next.js', logo: <SiNextdotjs /> },
    { name: 'Node.js', logo: <FaNodeJs /> },
  
    // Added skills
    { name: 'Docker', logo: <SiDocker /> },
    { name: 'Kubernetes', logo: <SiKubernetes /> },
    { name: 'TypeScript', logo: <SiTypescript /> },
    { name: 'Tailwind CSS', logo: <SiTailwindcss /> },
    { name: 'Material UI', logo: <SiMui /> },
    { name: 'Bootstrap', logo: <SiBootstrap /> },
    { name: 'HTML5', logo: <SiHtml5 /> },
    { name: 'CSS3', logo: <SiCss3 /> },
  ];
  