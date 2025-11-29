
export interface ProjectDataType {
  id: number;
  name: string;
  type?: string; // web app, mobile app, website
  description: string; // 1-3 lines
  src: string; // image url, you can replace later
  highlight?: boolean; // whether this project is featured
}



export const projectsData: ProjectDataType[] = [
  {
    id: 1,
    name: 'Zebra Doctor',
    type: 'Medical/Hospital Management System',
    description: 'Admin portal, Hospital portal, Doctor portal, Patient portal, Appointment form.',
    src: '/images/project_pics/zebra_doctor/Logo.svg',
    highlight: true,
  },
  {
    id: 2,
    name: 'Workscape',
    type: 'Web App & Website',
    description: 'Labor Market Intelligence Platform • SaaS',
    src: '/images/project_pics/workscape/logo.svg',
    highlight: true,
  },
  {
    id: 3,
    name: 'Hajj Project',
    type: 'Operations Management',
    description: 'Manage buses, locations, routes, and timings for Hajj operations.',
    src: '/images/project_pics/hajj/logo.svg',
    highlight: true,
  },
 
   {
    id: 4,
    name: 'Tower',
    type: 'Web & Mobile App',
    description: 'Manage residential buildings efficiently.',
    src: '/images/project_pics/tower/logo.webp',
    highlight: true,
  },
  {
    id: 5,
    name: 'Solar Panel',
    type: 'Management System',
    description: 'Manage solar panel installations and monitor performance.',
    src: '/images/project_pics/solarpanel/logo.svg',
  },
  {
    id: 6,
    name: 'Clove Dental',
    type: 'Medical/Hospital Management System',
    description: 'Comprehensive management for dental clinics.',
    src: '/images/project_pics/clovedental/logo.svg',
  },
  // {
  //   id: 7,
  //   name: 'Clove Web',
  //   type: 'Website',
  //   description: 'Website for Hosiptal or Medical Company.',
  //   src: '/images/project_pics/cloveweb/logo.svg',
  // },
  {
    id: 8,
    name: 'Alfain Website',
    type: 'Website',
    description: 'Simple corporate website for a company.',
    src: '/images/project_pics/alfain/logo.svg',
  },
  {
    id: 9,
    name: 'Open AI Widget',
    type: 'AI Chatbot',
    description: 'AI-based chatbot integration for websites.',
    src: '/images/project_pics/chatboat/logo.jpg',
    highlight: true,
  },
   {
    id: 10,
    name: 'Feedback Uplift',
    type: 'Web App',
    description: 'Assists companies in collecting customer feedback efficiently.',
    src: '/images/project_pics/feedbackuplift/logo.svg',
    
  },
 
  // {
  //   id: 11,
  //   name: 'Arabic GPT',
  //   type: 'AI Chatbot',
  //   description: 'Arabic language AI-based chatbot solution.',
  //   src: '/images/projectpic.svg',
  //   highlight: true,
  // },
];
