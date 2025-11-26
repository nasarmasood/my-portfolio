
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

// Only new ones for the non-AWS features (your existing imports already cover FaReact, etc.)


import { FaBookOpen, FaTasks } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";

import {  FaUserShield, FaCrown, FaServer } from "react-icons/fa";

import { SiReactquery } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { FaPenFancy, FaGripLines } from "react-icons/fa";

// React & Node
import { FaFileCsv } from "react-icons/fa";

// Deck.gl / Charts / Misc
import { BsGlobe, BsBarChartLine } from "react-icons/bs";

// Core Tech Logos
import { SiTypescript, SiTailwindcss } from "react-icons/si";
import { SiMapbox } from "react-icons/si"; // close alternative

import { FaBus, FaInfoCircle, FaRoute, FaPrint, FaTabletAlt } from "react-icons/fa";

import { BsGeoAltFill, BsBarChartFill } from "react-icons/bs";


import { FaVideo } from "react-icons/fa";
import { FaWpforms } from "react-icons/fa";
import { GrUserSettings } from "react-icons/gr";
import { MdSupportAgent } from "react-icons/md";

import { RiDeviceLine } from "react-icons/ri";  // This one exists
import { FiGlobe } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFire, FaMapMarkedAlt, FaMicrochip, FaFilePdf, FaTools } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";

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
    image: { desktop:'/images/project_pics/zebra_doctor/slider_2.png', mobile:'/images/project_pics/zebra_doctor/slider_2.png' }, 
    text: { title:'Patient Portal', description:'Patients can book appointments, view reports, and access medical history easily.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_3.png', mobile:'/images/project_pics/zebra_doctor/slider_3.png' }, 
    text: { title:'Doctor Portal', description:'Doctors can manage schedules, patient consultations, and provide instructions seamlessly.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_4.png', mobile:'/images/project_pics/zebra_doctor/slider_4.png' }, 
    text: { title:'Admin Portal', description:'Admins can oversee hospitals, doctors, patients, and system-wide operations efficiently.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_5.png', mobile:'/images/project_pics/zebra_doctor/slider_5.png' }, 
    text: { title:'Appointment Form', description:'Patient Appointment Booking Form.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_6.png', mobile:'/images/project_pics/zebra_doctor/slider_6.png' }, 
    text: { title:'Customiseable Appointment FOrm', description:'Hospitals can customise their appointment form as per their need.' } 
  },
  { 
    image: { desktop:'/images/project_pics/zebra_doctor/slider_7.png', mobile:'/images/project_pics/zebra_doctor/slider_7.png' }, 
    text: { title:'Secure Chat', description:'Patient can create a ticket to open up discussion with the hosptal staff.' } 
  },
],
features : [
  { name: 'Admin, Doctor, Patient & Hospital Portals', logo: <MdOutlineGroups /> },
  { name: 'Online & Physical Appointment Booking', logo: <BsCalendarCheck /> },
  { name: 'Report Sharing & Doctor Instructions', logo: <AiOutlineShareAlt /> },
  { name: 'Real-time Chat & Notifications', logo: <BsChatDots /> },
  { name: 'Doctor & Patient History Tracking', logo: <BsClockHistory /> },
  { name: 'Stripe Payment Integration', logo: <FaStripe /> },
  { name: 'Hospital Packages with Access Levels', logo: <MdOutlineLocalHospital /> },
  { name: 'Athena & ACW Integrations', logo: <IoMdSync /> },
  { name: 'Scalable & Secure Architecture', logo: <FaShieldAlt /> },
  { name: 'PWA (Progressive Web App) Support', logo: <RiDeviceLine /> },
  { name: 'Highly Customizable Appointment Forms', logo: <FaWpforms /> },
  { name: 'Customizable Patient Data Collection & Survey Forms', logo: <GrUserSettings /> },
  { name: 'Built-in Video Call Appointments', logo: <FaVideo /> },
  { name: 'Patient Ticketing System (Queries, Staff Replies, Secure Chat)', logo: <MdSupportAgent /> },
]
,
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
{
  id: 2,
  name: 'Workscape Analytics',
  type: 'Labor Market Intelligence Platform • SaaS',
  description:
    'Workscape Analytics is a full-stack SaaS platform built with the MERN + Next.js stack, delivering real-time access to the latest ORS (Occupational Requirements Survey) and OEWS (Occupational Employment and Wage Statistics) data from the U.S. Bureau of Labor Statistics. Designed for vocational experts and law firms, it provides instant national, state, and local job/wage numbers, DOT titles & codes, RFC checklists, interactive SOC comparison reports, and one-click professional reports in both PDF and CSV formats across 100 or all 455 SOC codes. Features include a multi-tier subscription model (Free Trial → Basic → Premium → Custom), Stripe payment integration, role-based access control (Admin & User roles), and a fast, SEO-friendly, responsive dashboard powered by Next.js.',
  heroimagesrc: '/images/project_pics/workscape/hero_image.png',
  liveurl: 'http://107.23.174.20:3002/',
  githuburl: 'https://github.com/yourusername/workscape-analytics',
  sliders: [
    { image: { desktop: '/images/project_pics/workscape/jobs.png', mobile: '/images/project_pics/workscape/slider_1_mobile.png' }, 
      text: { title: 'National & State Job Numbers', description: 'Instant OEWS employment and wage data at all geographic levels.' } },
    { image: { desktop: '/images/project_pics/workscape/report.png', mobile: '/images/project_pics/workscape/slider_2_mobile.png' }, 
      text: { title: 'ORS Data & SOC Comparison Reports', description: 'Detailed physical/cognitive requirements with interactive charts.' } },
    { image: { desktop: '/images/project_pics/workscape/rfc.png', mobile: '/images/project_pics/workscape/slider_3_mobile.png' }, 
      text: { title: 'RFC Checklist & Rapid Calculations', description: 'Fast residual functional capacity analysis and multi-profile hypotheticals.' } },
    { image: { desktop: '/images/project_pics/workscape/export.png', mobile: '/images/project_pics/workscape/slider_4_mobile.png' }, 
      text: { title: 'PDF + CSV Report Export', description: 'One-click professional reports and raw data export in both PDF and CSV formats.' } },
  ],
  features: [
    { name: 'Latest ORS & OEWS Data Integration', logo: <SiMongodb /> },
    { name: 'National, State & Local Job/Wage Data', logo: <BsGlobe /> },
    { name: '100 + Full 455 SOC Coverage', logo: <MdOutlineWork /> },
    { name: 'Representative DOT Titles & Codes', logo: <FaBookOpen /> },
    { name: 'RFC Checklist & Rapid Calculations', logo: <FaTasks /> },
    { name: 'SOC Comparison Reports', logo: <BsBarChartLine /> },
    { name: 'PDF + CSV Report Export', logo: <FaFileCsv /> },
    { name: 'Free Trial + Multi-Tier Plans', logo: <FaCrown /> },
    { name: 'Stripe Payment Integration', logo: <FaStripe /> },
    { name: 'Admin & User Role-Based Access', logo: <FaUserShield /> },
  ],
  techStack: {
   core: [
  { name: 'MongoDB', logo: <SiMongodb /> },
  { name: 'Express.js', logo: <SiExpress /> },
  { name: 'React.js', logo: <FaReact /> },
  { name: 'Next.js', logo: <SiNextdotjs /> },
  { name: 'Node.js', logo: <FaNodeJs /> },
  { name: 'TypeScript', logo: <SiTypescript /> },
  { name: 'Tailwind CSS 4', logo: <SiTailwindcss /> },
],
   additional: [
      { name: 'TanStack Query', logo: <SiReactquery /> },
      { name: 'Stripe Payments', logo: <FaStripe /> },
      { name: 'ApexCharts + React-ApexCharts', logo: <SiChartdotjs /> },
      { name: 'FullCalendar', logo: <BsCalendar3 /> },
      { name: 'React-Quill Editor', logo: <FaPenFancy /> },
      { name: 'React-DND (Drag & Drop)', logo: <FaGripLines /> },
      { name: 'React-CSV + XLSX Export', logo: <FaFileCsv /> },
      { name: 'Node-Cron Automation', logo: <BsGlobe /> },
      { name: 'AWS EC2 Deployment', logo: <FaServer /> },
    ],
  },
  highlight: true,
},
{
  id: 3,
  name: 'Hajj Bus Tracker',
  type: 'Real-Time Bus Management & Tracking Platform',
  description: 
    'Hajj Bus Tracker is a real-time bus management system for Hajj operations in Saudi Arabia. It integrates GPS data from bus tracking devices to plot buses on interactive maps using Deck.gl and MapLibre GL. Users can monitor bus locations, driver and company information, routes, stops, and regional statistics. The platform supports reporting, charts, and printable route details, facilitating efficient transportation management during Hajj.',
  heroimagesrc: '/images/project_pics/hajj-bus-tracker/hero_image.png',
  liveurl: '', // Add live URL if available
  githuburl: 'https://github.com/yourusername/hajj-bus-tracker',
  sliders: [
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/map_view.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_1_mobile.png' },
      text: { title: 'Interactive Map with Buses', description: 'Real-time bus locations plotted as clickable markers.' }
    },
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/region_stats.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_2_mobile.png' },
      text: { title: 'Region Tracking', description: 'View how many buses are in a specific region at any given time.' }
    },
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/route_print.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_3_mobile.png' },
      text: { title: 'Routes & Stops', description: 'Detailed route information including stops, duration, and printable maps.' }
    },
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/reports.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_4_mobile.png' },
      text: { title: 'Reporting & Analytics', description: 'Generate reports and charts for bus movements, standing times, and operational statistics.' }
    }
  ],
  features: [
    { name: 'Real-time tracking of 5,000+ buses', logo: <FaBus className="text-2xl text-blue-600" /> },
    { name: 'Sub-second SignalR WebSocket updates', logo: <IoMdSync className="text-2xl text-green-500" /> },
    { name: '60fps high-density rendering with Deck.gl', logo: <SiMapbox className="text-2xl text-green-700" /> },
    { name: 'Clickable markers (plate, driver, company, speed)', logo: <FaInfoCircle className="text-2xl" /> },
    { name: 'Geofenced zones (Mina, Arafat, Muzdalifah)', logo: <BsGeoAltFill className="text-2xl text-orange-600" /> },
    { name: 'Live entry/exit counters & occupancy analytics', logo: <BsBarChartFill className="text-2xl text-purple-600" /> },
    { name: 'Historical route playback with timeline', logo: <FaRoute className="text-2xl text-cyan-600" /> },
    { name: 'Printable trip reports (distance, stops, duration)', logo: <FaPrint className="text-2xl" /> },
    { name: 'Idle-time heatmaps & CSV/PDF export', logo: <FaFileCsv className="text-2xl text-green-600" /> },
    { name: 'Responsive control-room dashboard', logo: <FaTabletAlt className="text-2xl" /> },
  ],
  techStack: {
    core: [
      
      { name: 'React.js', logo: <FaReact /> },
      { name: 'Node.js', logo: <FaNodeJs /> },
      { name: 'TypeScript', logo: <SiTypescript /> },
      { name: 'Deck.gl', logo: <SiChartdotjs /> },
      { name: 'MapLibre GL', logo: <SiMapbox /> }, // You may need to import a placeholder icon or custom logo
      { name: 'SignalR', logo: <SiSocketdotio /> },
      { name: 'Real-Time WebSockets', logo: <IoMdSync /> },

      
    ],
    additional: [
      { name: 'React-CSV Export', logo: <FaFileCsv /> },
      { name: 'MUI Components', logo: <SiMui /> },
      { name: 'Charts & Analytics', logo: <BsBarChartLine /> },
      { name: 'Responsive Design', logo: <SiTailwindcss /> }
    ]
  },
  highlight: true
}
,
{
  id: 4,
  name: 'Hajj Bus Tracker',
  type: 'Real-Time Bus Management & Tracking Platform',
  description: 
    'Hajj Bus Tracker is a real-time bus management system for Hajj operations in Saudi Arabia. It integrates GPS data from bus tracking devices to plot buses on interactive maps using Deck.gl and MapLibre GL. Users can monitor bus locations, driver and company information, routes, stops, and regional statistics. The platform supports reporting, charts, and printable route details, facilitating efficient transportation management during Hajj.',
  heroimagesrc: '/images/project_pics/hajj-bus-tracker/hero_image.png',
  liveurl: '', // Add live URL if available
  githuburl: 'https://github.com/yourusername/hajj-bus-tracker',
  sliders: [
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/map_view.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_1_mobile.png' },
      text: { title: 'Interactive Map with Buses', description: 'Real-time bus locations plotted as clickable markers.' }
    },
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/region_stats.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_2_mobile.png' },
      text: { title: 'Region Tracking', description: 'View how many buses are in a specific region at any given time.' }
    },
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/route_print.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_3_mobile.png' },
      text: { title: 'Routes & Stops', description: 'Detailed route information including stops, duration, and printable maps.' }
    },
    {
      image: { desktop: '/images/project_pics/hajj-bus-tracker/reports.png', mobile: '/images/project_pics/hajj-bus-tracker/slider_4_mobile.png' },
      text: { title: 'Reporting & Analytics', description: 'Generate reports and charts for bus movements, standing times, and operational statistics.' }
    }
  ],
  features: [
    { name: 'Real-time tracking of 5,000+ buses', logo: <FaBus className="text-2xl text-blue-600" /> },
    { name: 'Sub-second SignalR WebSocket updates', logo: <IoMdSync className="text-2xl text-green-500" /> },
    { name: '60fps high-density rendering with Deck.gl', logo: <SiMapbox className="text-2xl text-green-700" /> },
    { name: 'Clickable markers (plate, driver, company, speed)', logo: <FaInfoCircle className="text-2xl" /> },
    { name: 'Geofenced zones (Mina, Arafat, Muzdalifah)', logo: <BsGeoAltFill className="text-2xl text-orange-600" /> },
    { name: 'Live entry/exit counters & occupancy analytics', logo: <BsBarChartFill className="text-2xl text-purple-600" /> },
    { name: 'Historical route playback with timeline', logo: <FaRoute className="text-2xl text-cyan-600" /> },
    { name: 'Printable trip reports (distance, stops, duration)', logo: <FaPrint className="text-2xl" /> },
    { name: 'Idle-time heatmaps & CSV/PDF export', logo: <FaFileCsv className="text-2xl text-green-600" /> },
    { name: 'Responsive control-room dashboard', logo: <FaTabletAlt className="text-2xl" /> },
  ],
  techStack: {
    
    core: [
      { name: 'MongoDB', logo: <SiMongodb /> },
  { name: 'Express.js', logo: <SiExpress /> },
  { name: 'React.js', logo: <FaReact /> },
  { name: 'Next.js', logo: <SiNextdotjs /> },
  { name: 'Node.js', logo: <FaNodeJs /> },
      { name: 'TypeScript', logo: <SiTypescript /> },
      { name: 'Deck.gl', logo: <SiChartdotjs /> },
      { name: 'MapLibre GL', logo: <SiMapbox /> }, // You may need to import a placeholder icon or custom logo
      { name: 'SignalR', logo: <SiSocketdotio /> },
      { name: 'Real-Time WebSockets', logo: <IoMdSync /> },

      
    ],
    additional: [
      { name: 'React-CSV Export', logo: <FaFileCsv /> },
      { name: 'MUI Components', logo: <SiMui /> },
      { name: 'Charts & Analytics', logo: <BsBarChartLine /> },
      { name: 'Responsive Design', logo: <SiTailwindcss /> }
    ]
  },
  highlight: true
},
{
  id: 5,
  name: 'Jafa Energy',
  type: 'Manage solar panel installations and monitor performance.',
  description: 
    'Full-stack MERN + Next.js web application to manage solar panel installations across multiple sites. Features real-time performance monitoring with interactive charts (production trends, heatmaps, efficiency analysis), geolocation mapping of sites and devices, alarm notifications for underperformance or inspection needs, automated report generation, and field log entries. Enables operators to track energy output, detect issues early, and optimize fleet-wide solar assets from a single dashboard.',
  heroimagesrc: '/images/project_pics/solarpanel/hero_image.jpg',
  liveurl: '', // Add live URL if available
  githuburl: 'https://github.com/yourusername/hajj-bus-tracker',
  sliders: [
     {
      image: { desktop: '/images/project_pics/solarpanel/slider_2.svg', mobile: '/images/project_pics/hajj-bus-tracker/slider_2_mobile.png' },
      text: { title:  'Dashboard', description: 'All sites/locations important information, performance, alarms, locations etc.'}
    },
    {
      image: { desktop: '/images/project_pics/solarpanel/slider_1.svg', mobile: '/images/project_pics/hajj-bus-tracker/slider_1_mobile.png' },
      text: { title: 'Site Detail', description: 'Information related to a site/location' }
    },
   
    {
      image: { desktop: '/images/project_pics/solarpanel/slider_3.svg', mobile: '/images/project_pics/hajj-bus-tracker/slider_3_mobile.png' },
      text: { title: 'Site Analysis', description: 'heat maps and charts for site analysis' }
    },
    {
      image: { desktop: '/images/project_pics/solarpanel/slider_4.svg', mobile: '/images/project_pics/hajj-bus-tracker/slider_4_mobile.png' },
      text: { title: 'Add New Site', description: 'Add site page' }
    }
  ],
features: [
  { name: 'Live monitoring of 500+ solar sites worldwide', logo: <FiGlobe className="text-2xl text-blue-600" /> },
  { name: 'Real-time energy production & performance charts', logo: <BsGraphUpArrow className="text-2xl text-green-500" /> },
  { name: 'Interactive heatmaps for irradiance & output density', logo: <FaFire className="text-2xl text-orange-600" /> },
  { name: 'Geolocation mapping with site + inverter clustering', logo: <FaMapMarkedAlt className="text-2xl text-teal-600" /> },
  { name: 'Instant alarms for low yield, faults & inspection alerts', logo: <IoAlertCircle className="text-2xl text-red-600" /> },
  { name: 'Device-level drill-down (inverters, meters, sensors)', logo: <FaMicrochip className="text-2xl text-indigo-600" /> },
  { name: 'Trend analysis: daily, monthly & yearly comparisons', logo: <BsBarChartFill className="text-2xl text-purple-600" /> },
  { name: 'Automated PDF/Excel performance & maintenance reports', logo: <FaFilePdf className="text-2xl text-red-700" /> },
  { name: 'Field technician logs & inspection scheduling', logo: <FaTools className="text-2xl text-yellow-600" /> },
  { name: 'Responsive dashboard – mobile & control-room ready', logo: <FaTabletAlt className="text-2xl text-gray-700" /> },
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
    { name: 'TypeScript', logo: <SiTypescript /> },
    { name: 'Tailwind CSS', logo: <SiTailwindcss /> },
    { name: 'MUI v5', logo: <SiMui /> },
    { name: 'React Query', logo: <SiReactquery /> },
    { name: 'React Leaflet', logo: <FaMapMarkedAlt /> },
    { name: 'ApexCharts', logo: <BsBarChartLine /> },
    { name: 'PDF & CSV Reports', logo: <AiOutlineFilePdf /> },
    { name: 'NextAuth.js', logo: <FaShieldAlt /> },
    { name: 'Zod & Formik', logo: <TbChecks /> },
    { name: 'i18n Support', logo: <FiGlobe /> },
  ]
},
  highlight: true
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



