export interface Project {
  name: string;
  type?: string; // web app, mobile app, website
  description: string; // 1-3 lines
  src: string; // image url, you can replace later
  highlight?: boolean; // whether this project is featured
}

export const projects: Project[] = [
  {
    name: 'Zebra Doctor',
    type: 'Medical/Hospital Management System',
    description: 'Admin panel, Doctor portal, Patient portal, Appointment form.',
    src: '/images/projectpic.svg',
    highlight: true,
  },
  {
    name: 'Workscape',
    type: 'Web App & Website',
    description: 'Helps lawyers prepare strong cases for disabled clients.',
    src: '/images/projectpic.svg',
    highlight: true,
  },
  {
    name: 'Hajj Project',
    type: 'Operations Management',
    description: 'Manage buses, locations, routes, and timings for Hajj operations.',
    src: '/images/projectpic.svg',
    highlight: true,
  },
  {
    name: 'Feedback Uplift',
    type: 'Web App',
    description: 'Assists companies in collecting customer feedback efficiently.',
    src: '/images/projectpic.svg',
  },
  {
    name: 'Solar Panel',
    type: 'Management System',
    description: 'Manage solar panel installations and monitor performance.',
    src: '/images/projectpic.svg',
  },
  {
    name: 'Clove Dental',
    type: 'Medical/Hospital Management System',
    description: 'Comprehensive management for dental clinics.',
    src: '/images/projectpic.svg',
  },
  {
    name: 'Clove Web',
    type: 'Medical/Hospital Management System',
    description: 'Full hospital management web application.',
    src: '/images/projectpic.svg',
  },
  {
    name: 'Alfain Website',
    type: 'Website',
    description: 'Simple corporate website for a company.',
    src: '/images/projectpic.svg',
  },
  {
    name: 'Open AI Widget',
    type: 'AI Chatbot',
    description: 'AI-based chatbot integration for websites.',
    src: '/images/projectpic.svg',
    highlight: true,
  },
  {
    name: 'Tower',
    type: 'Web & Mobile App',
    description: 'Manage residential buildings efficiently.',
    src: '/images/projectpic.svg',
    highlight: true,
  },
  {
    name: 'Arabic GPT',
    type: 'AI Chatbot',
    description: 'Arabic language AI-based chatbot solution.',
    src: '/images/projectpic.svg',
    highlight: true,
  },
];
