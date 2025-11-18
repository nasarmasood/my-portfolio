
import { FaReact, FaNodeJs, FaStripe,FaRegFileAlt, FaShieldAlt } from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiNextdotjs, SiBootstrap, SiChartdotjs,
  SiRedux, SiMongoose, SiSocketdotio, SiRedis, SiTwilio, SiAmazons3,
  SiFirebase, SiJsonwebtokens, SiNodemon, SiPrettier, SiEslint,
  SiMui, SiAmazon, SiAmazoncloudwatch, SiGooglecalendar, SiEditorconfig
} from "react-icons/si";

import { MdStackedLineChart, MdEmail, MdOutlineQueue,MdOutlineGroups, MdOutlineLocalHospital  } from "react-icons/md";
import { TbChecks, TbGauge } from "react-icons/tb";
import { AiOutlineFilePdf, AiOutlineFileExcel,AiOutlineShareAlt } from "react-icons/ai";
import { GiHelmet } from "react-icons/gi";

import { BsCalendarCheck, BsChatDots, BsClockHistory } from "react-icons/bs";
import { IoMdSync } from "react-icons/io";


export interface FeatureType {
  name: string;
  logo: React.ReactElement;
}

export interface TechType {
  name: string;
logo: React.ReactElement
}

export interface TechStackType {
  core: TechType[];
  additional: TechType[];
}

export interface SliderImageObjectType
{
    desktop:string,
    mobile:string
}

export interface sliderTextObjectType
{
    title:string,
    description:string
}
export interface SliderItemType {
  image: SliderImageObjectType;
  text: sliderTextObjectType;
}

export interface ProjectDetailType {
  id: number;
  name: string;
  type?: string; // web app, mobile app, website
  description: string; // 1-3 lines
  heroimagesrc: string; // image url
  sliders: SliderItemType[]; // combined image + text
  features: FeatureType[];
  highlight?: boolean; // whether this project is featured
  techStack: TechStackType;
  liveurl:string,
  githuburl:string,
}

export const projectDetailData: ProjectDetailType[] = [
  {
    id: 1,
    name: 'Zebra Doctor',
    type: 'Medical/Hospital Management System',
    description:
      'Zebra Doctor is a comprehensive, full-scale medical and hospital management system designed to digitalize healthcare operations. It provides separate portals for admins, hospitals, doctors, and patients, ensuring a smooth and role-based experience. The platform supports appointment bookings (both online and physical), real-time chat, and automated notifications. Hospitals can create customizable appointment forms and dynamic patient forms to match their workflows. With Athena and ACW integrations, Zebra Doctor ensures seamless interoperability with existing healthcare systems. It includes Stripe-based online payments, package-based feature access, and complete management of doctors, patients, and hospitals. Patients can view their medical history, reports, and doctor instructions anytime. The system focuses on scalability, performance, and a secure, user-friendly experience for all healthcare stakeholders.',
    heroimagesrc: '/images/project_pics/zebra_doctor/hero_image.png',
    liveurl:'https://zebdoc.com/',
    githuburl:'https://github.com/nasarmasood/my-portfolio',
     sliders: [
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_1.png', mobile:'/images/project_pics/zebra_doctor/slider_1.png' }, 
    text: { title:'Practice Portal', description:'Hospitals can efficiently manage appointments, patients, and workflows.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_2.jpeg', mobile:'/images/project_pics/zebra_doctor/slider_2.jpeg' }, 
    text: { title:'Patient Portal', description:'Patients can book appointments, view reports, and access medical history easily.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_3.jpeg', mobile:'/images/project_pics/zebra_doctor/slider_3.jpeg' }, 
    text: { title:'Doctor Portal', description:'Doctors can manage schedules, patient consultations, and provide instructions seamlessly.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_4.jpeg', mobile:'/images/project_pics/zebra_doctor/slider_4.jpeg' }, 
    text: { title:'Admin Portal', description:'Admins can oversee hospitals, doctors, patients, and system-wide operations efficiently.' } 
  },
],

  features: [
  { name: 'Admin, Doctor, Patient & Hospital Portals', logo: <MdOutlineGroups /> },
  { name: 'Online & Physical Appointment Booking', logo: <BsCalendarCheck /> },
  { name: 'Customizable Appointment & Patient Forms', logo: <FaRegFileAlt /> },
  { name: 'Report Sharing & Doctor Instructions', logo: <AiOutlineShareAlt /> },
  { name: 'Real-time Chat & Notifications', logo: <BsChatDots /> },
  { name: 'Doctor & Patient History Tracking', logo: <BsClockHistory /> },
  { name: 'Stripe Payment Integration', logo: <FaStripe /> },
  { name: 'Hospital Packages with Access Levels', logo: <MdOutlineLocalHospital /> },
  { name: 'Athena & ACW Integrations', logo: <IoMdSync /> },
  { name: 'Scalable & Secure Architecture', logo: <FaShieldAlt /> },
],
    techStack: {
 core: [
  { name: 'MongoDB', logo: <SiMongodb /> },
  { name: 'Express.js', logo: <SiExpress /> },
  { name: 'React.js', logo: <FaReact /> },
  { name: 'Next.js', logo: <SiNextdotjs /> },
  { name: 'Node.js', logo: <FaNodeJs /> },
],

additional: [
  // Frontend/UI/Validation
  { name: 'Material UI (MUI)', logo: <SiMui /> }, // Corrected: Used SiMui instead of SiMaterialui (assuming SiMui is the correct import for MUI)
  { name: 'Emotion', logo: <FaReact /> }, // No direct import, keeping FaReact as a generic frontend tool (or could use a different placeholder)
  { name: 'Bootstrap Icons', logo: <SiBootstrap /> },
  { name: 'ApexCharts', logo: <MdStackedLineChart /> }, // Updated: Using MdStackedLineChart for chart visualization
  { name: 'Chart.js', logo: <SiChartdotjs /> },
  { name: 'Redux Toolkit', logo: <SiRedux /> },
  { name: 'React Hook Form', logo: <FaReact /> }, // No direct import, using FaReact
  { name: 'Yup Validation', logo: <TbChecks /> }, // Updated: Using TbChecks for a validation/check mark icon

  // Backend/Database/Payments/Messaging
  { name: 'Express', logo: <SiExpress /> },
  { name: 'Mongoose', logo: <SiMongoose /> },
  { name: 'Stripe', logo: <FaStripe /> },
  { name: 'Socket.IO', logo: <SiSocketdotio /> },
  { name: 'Redis', logo: <SiRedis /> },
  { name: 'Twilio', logo: <SiTwilio /> },
  { name: 'AWS S3', logo: <SiAmazons3 /> },

  // AWS Integrations
  { name: 'Athena Integration', logo: <SiAmazon /> },
  { name: 'ACW Integration', logo: <SiAmazoncloudwatch /> },

  // Utility/Serverless
  { name: 'Firebase Admin', logo: <SiFirebase /> },
  { name: 'Nodemailer', logo: <MdEmail /> }, // Updated: Using MdEmail for email functionality
  { name: 'Bull Queue', logo: <MdOutlineQueue /> }, // Updated: Using MdOutlineQueue for queuing

  // Security
  { name: 'JWT Authentication', logo: <SiJsonwebtokens /> },
  { name: 'Helmet.js', logo: <GiHelmet /> },
  { name: 'Rate Limiter Flexible', logo: <TbGauge /> },

  // Exporting/Documents
  { name: 'Kendo React PDF', logo: <AiOutlineFilePdf /> },
  { name: 'React to PDF', logo: <AiOutlineFilePdf /> },
  { name: 'XLSX Data Export', logo: <AiOutlineFileExcel /> }, // Updated: Using AiOutlineFileExcel

  // Components/Editors
  { name: 'FullCalendar', logo: <SiGooglecalendar /> },
  { name: 'React Dropzone', logo: <FaReact /> }, // No direct import, using FaReact
  { name: 'React DatePicker', logo: <FaReact /> }, // No direct import, using FaReact
  { name: 'SunEditor', logo: <SiEditorconfig /> }, // Using SiEditorconfig (closest match)

  // DevTools
  { name: 'Nodemon', logo: <SiNodemon /> },
  { name: 'Prettier', logo: <SiPrettier /> },
  { name: 'ESLint', logo: <SiEslint /> },
],
    },
    highlight: true,
  },
  // Remaining projects
  ...[
    'Workscape',
    'Hajj Project',
    'Feedback Uplift',
    'Solar Panel',
    'Clove Dental',
    'Clove Web',
    'Alfain Website',
    'Open AI Widget',
    'Tower',
    'Arabic GPT',
  ].map((name, index) => ({
    ...JSON.parse(
      JSON.stringify({
        id: index + 2,
        name,
        type: 'Medical/Hospital Management System',
        description:
          'Zebra Doctor is a comprehensive, full-scale medical and hospital management system designed to digitalize healthcare operations...',
        heroimagesrc: '/images/project_pics/zebra_doctor/Logo.svg',
      sliders: [
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_1.png', mobile:'/images/project_pics/zebra_doctor/slider_1.png' }, 
    text: { title:'Practice Portal', description:'Hospitals can efficiently manage appointments, patients, and workflows.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_2.jpeg', mobile:'/images/project_pics/zebra_doctor/slider_2.jpeg' }, 
    text: { title:'Patient Portal', description:'Patients can book appointments, view reports, and access medical history easily.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_3.jpeg', mobile:'/images/project_pics/zebra_doctor/slider_3.jpeg' }, 
    text: { title:'Doctor Portal', description:'Doctors can manage schedules, patient consultations, and provide instructions seamlessly.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_4.jpeg', mobile:'/images/project_pics/zebra_doctor/slider_4.jpeg' }, 
    text: { title:'Admin Portal', description:'Admins can oversee hospitals, doctors, patients, and system-wide operations efficiently.' } 
  },
],
         features: [
  { name: 'Admin, Doctor, Patient & Hospital Portals', logo: <MdOutlineGroups /> },
  { name: 'Online & Physical Appointment Booking', logo: <BsCalendarCheck /> },
  { name: 'Customizable Appointment & Patient Forms', logo: <FaRegFileAlt /> },
  { name: 'Report Sharing & Doctor Instructions', logo: <AiOutlineShareAlt /> },
  { name: 'Real-time Chat & Notifications', logo: <BsChatDots /> },
  { name: 'Doctor & Patient History Tracking', logo: <BsClockHistory /> },
  { name: 'Stripe Payment Integration', logo: <FaStripe /> },
  { name: 'Hospital Packages with Access Levels', logo: <MdOutlineLocalHospital /> },
  { name: 'Athena & ACW Integrations', logo: <IoMdSync /> },
  { name: 'Scalable & Secure Architecture', logo: <FaShieldAlt /> },
],
    techStack: {
 core: [
  { name: 'MongoDB', logo: <SiMongodb /> },
  { name: 'Express.js', logo: <SiExpress /> },
  { name: 'React.js', logo: <FaReact /> },
  { name: 'Next.js', logo: <SiNextdotjs /> },
  { name: 'Node.js', logo: <FaNodeJs /> },
],

additional: [
  // Frontend/UI/Validation
  { name: 'Material UI (MUI)', logo: <SiMui /> }, // Corrected: Used SiMui instead of SiMaterialui (assuming SiMui is the correct import for MUI)
  { name: 'Emotion', logo: <FaReact /> }, // No direct import, keeping FaReact as a generic frontend tool (or could use a different placeholder)
  { name: 'Bootstrap Icons', logo: <SiBootstrap /> },
  { name: 'ApexCharts', logo: <MdStackedLineChart /> }, // Updated: Using MdStackedLineChart for chart visualization
  { name: 'Chart.js', logo: <SiChartdotjs /> },
  { name: 'Redux Toolkit', logo: <SiRedux /> },
  { name: 'React Hook Form', logo: <FaReact /> }, // No direct import, using FaReact
  { name: 'Yup Validation', logo: <TbChecks /> }, // Updated: Using TbChecks for a validation/check mark icon

  // Backend/Database/Payments/Messaging
  { name: 'Express', logo: <SiExpress /> },
  { name: 'Mongoose', logo: <SiMongoose /> },
  { name: 'Stripe', logo: <FaStripe /> },
  { name: 'Socket.IO', logo: <SiSocketdotio /> },
  { name: 'Redis', logo: <SiRedis /> },
  { name: 'Twilio', logo: <SiTwilio /> },
  { name: 'AWS S3', logo: <SiAmazons3 /> },

  // AWS Integrations
  { name: 'Athena Integration', logo: <SiAmazon /> },
  { name: 'ACW Integration', logo: <SiAmazoncloudwatch /> },

  // Utility/Serverless
  { name: 'Firebase Admin', logo: <SiFirebase /> },
  { name: 'Nodemailer', logo: <MdEmail /> }, // Updated: Using MdEmail for email functionality
  { name: 'Bull Queue', logo: <MdOutlineQueue /> }, // Updated: Using MdOutlineQueue for queuing

  // Security
  { name: 'JWT Authentication', logo: <SiJsonwebtokens /> },
  { name: 'Helmet.js', logo: <GiHelmet /> },
  { name: 'Rate Limiter Flexible', logo: <TbGauge /> },

  // Exporting/Documents
  { name: 'Kendo React PDF', logo: <AiOutlineFilePdf /> },
  { name: 'React to PDF', logo: <AiOutlineFilePdf /> },
  { name: 'XLSX Data Export', logo: <AiOutlineFileExcel /> }, // Updated: Using AiOutlineFileExcel

  // Components/Editors
  { name: 'FullCalendar', logo: <SiGooglecalendar /> },
  { name: 'React Dropzone', logo: <FaReact /> }, // No direct import, using FaReact
  { name: 'React DatePicker', logo: <FaReact /> }, // No direct import, using FaReact
  { name: 'SunEditor', logo: <SiEditorconfig /> }, // Using SiEditorconfig (closest match)

  // DevTools
  { name: 'Nodemon', logo: <SiNodemon /> },
  { name: 'Prettier', logo: <SiPrettier /> },
  { name: 'ESLint', logo: <SiEslint /> },
],
    },
        highlight: true,
      })
    ),
  })),
];
