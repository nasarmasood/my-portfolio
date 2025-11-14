export interface FeatureType {
  name: string;
  src: string;
}

export interface TechType {
  name: string;
  src: string;
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
      { name: 'Admin, Doctor, Patient & Hospital Portals', src: '/images/features/portals.svg' },
      { name: 'Online & Physical Appointment Booking', src: '/images/features/appointment.svg' },
      { name: 'Customizable Appointment & Patient Forms', src: '/images/features/forms.svg' },
      { name: 'Report Sharing & Doctor Instructions', src: '/images/features/report.svg' },
      { name: 'Real-time Chat & Notifications', src: '/images/features/chat.svg' },
      { name: 'Doctor & Patient History Tracking', src: '/images/features/history.svg' },
      { name: 'Stripe Payment Integration', src: '/images/features/payment.svg' },
      { name: 'Hospital Packages with Access Levels', src: '/images/features/packages.svg' },
      { name: 'Athena & ACW Integrations', src: '/images/features/integrations.svg' },
      { name: 'Scalable & Secure Architecture', src: '/images/features/security.svg' },
    ],
    techStack: {
      core: [
        { name: 'MongoDB', src: '/images/tech/mongodb.svg' },
        { name: 'Express.js', src: '/images/tech/express.svg' },
        { name: 'React.js', src: '/images/tech/react.svg' },
        { name: 'Next.js', src: '/images/tech/nextjs.svg' },
        { name: 'Node.js', src: '/images/tech/nodejs.svg' },
      ],
      additional: [
        { name: 'Material UI (MUI)', src: '/images/tech/mui.svg' },
        { name: 'Emotion', src: '/images/tech/emotion.svg' },
        { name: 'Bootstrap Icons', src: '/images/tech/bootstrap.svg' },
        { name: 'ApexCharts', src: '/images/tech/apexcharts.svg' },
        { name: 'Chart.js', src: '/images/tech/chartjs.svg' },
        { name: 'Redux Toolkit', src: '/images/tech/redux.svg' },
        { name: 'React Hook Form', src: '/images/tech/react-hook-form.svg' },
        { name: 'Yup Validation', src: '/images/tech/yup.svg' },
        { name: 'Express', src: '/images/tech/express.svg' },
        { name: 'Mongoose', src: '/images/tech/mongoose.svg' },
        { name: 'Stripe', src: '/images/tech/stripe.svg' },
        { name: 'Socket.IO', src: '/images/tech/socketio.svg' },
        { name: 'Redis', src: '/images/tech/redis.svg' },
        { name: 'Twilio', src: '/images/tech/twilio.svg' },
        { name: 'AWS S3', src: '/images/tech/aws-s3.svg' },
        { name: 'Athena Integration', src: '/images/tech/athena.svg' },
        { name: 'ACW Integration', src: '/images/tech/acw.svg' },
        { name: 'Firebase Admin', src: '/images/tech/firebase.svg' },
        { name: 'Nodemailer', src: '/images/tech/nodemailer.svg' },
        { name: 'Bull Queue', src: '/images/tech/bull.svg' },
        { name: 'JWT Authentication', src: '/images/tech/jwt.svg' },
        { name: 'Helmet.js', src: '/images/tech/helmet.svg' },
        { name: 'Rate Limiter Flexible', src: '/images/tech/rate-limiter.svg' },
        { name: 'Kendo React PDF', src: '/images/tech/kendo.svg' },
        { name: 'React to PDF', src: '/images/tech/pdf.svg' },
        { name: 'XLSX Data Export', src: '/images/tech/xlsx.svg' },
        { name: 'FullCalendar', src: '/images/tech/fullcalendar.svg' },
        { name: 'React Dropzone', src: '/images/tech/dropzone.svg' },
        { name: 'React DatePicker', src: '/images/tech/datepicker.svg' },
        { name: 'SunEditor', src: '/images/tech/editor.svg' },
        { name: 'Nodemon', src: '/images/tech/nodemon.svg' },
        { name: 'Prettier', src: '/images/tech/prettier.svg' },
        { name: 'ESLint', src: '/images/tech/eslint.svg' },
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
          { name: 'Admin, Doctor, Patient & Hospital Portals', src: '/images/features/portals.svg' },
          { name: 'Online & Physical Appointment Booking', src: '/images/features/appointment.svg' },
          { name: 'Customizable Appointment & Patient Forms', src: '/images/features/forms.svg' },
          { name: 'Report Sharing & Doctor Instructions', src: '/images/features/report.svg' },
          { name: 'Real-time Chat & Notifications', src: '/images/features/chat.svg' },
          { name: 'Doctor & Patient History Tracking', src: '/images/features/history.svg' },
          { name: 'Stripe Payment Integration', src: '/images/features/payment.svg' },
          { name: 'Hospital Packages with Access Levels', src: '/images/features/packages.svg' },
          { name: 'Athena & ACW Integrations', src: '/images/features/integrations.svg' },
          { name: 'Scalable & Secure Architecture', src: '/images/features/security.svg' },
        ],
        techStack: {
          core: [
            { name: 'MongoDB', src: '/images/tech/mongodb.svg' },
            { name: 'Express.js', src: '/images/tech/express.svg' },
            { name: 'React.js', src: '/images/tech/react.svg' },
            { name: 'Next.js', src: '/images/tech/nextjs.svg' },
            { name: 'Node.js', src: '/images/tech/nodejs.svg' },
          ],
          additional: [
            { name: 'Material UI (MUI)', src: '/images/tech/mui.svg' },
            { name: 'Emotion', src: '/images/tech/emotion.svg' },
            { name: 'Bootstrap Icons', src: '/images/tech/bootstrap.svg' },
            { name: 'ApexCharts', src: '/images/tech/apexcharts.svg' },
            { name: 'Chart.js', src: '/images/tech/chartjs.svg' },
            { name: 'Redux Toolkit', src: '/images/tech/redux.svg' },
            { name: 'React Hook Form', src: '/images/tech/react-hook-form.svg' },
            { name: 'Yup Validation', src: '/images/tech/yup.svg' },
            { name: 'Express', src: '/images/tech/express.svg' },
            { name: 'Mongoose', src: '/images/tech/mongoose.svg' },
            { name: 'Stripe', src: '/images/tech/stripe.svg' },
            { name: 'Socket.IO', src: '/images/tech/socketio.svg' },
            { name: 'Redis', src: '/images/tech/redis.svg' },
            { name: 'Twilio', src: '/images/tech/twilio.svg' },
            { name: 'AWS S3', src: '/images/tech/aws-s3.svg' },
            { name: 'Athena Integration', src: '/images/tech/athena.svg' },
            { name: 'ACW Integration', src: '/images/tech/acw.svg' },
            { name: 'Firebase Admin', src: '/images/tech/firebase.svg' },
            { name: 'Nodemailer', src: '/images/tech/nodemailer.svg' },
            { name: 'Bull Queue', src: '/images/tech/bull.svg' },
            { name: 'JWT Authentication', src: '/images/tech/jwt.svg' },
            { name: 'Helmet.js', src: '/images/tech/helmet.svg' },
            { name: 'Rate Limiter Flexible', src: '/images/tech/rate-limiter.svg' },
            { name: 'Kendo React PDF', src: '/images/tech/kendo.svg' },
            { name: 'React to PDF', src: '/images/tech/pdf.svg' },
            { name: 'XLSX Data Export', src: '/images/tech/xlsx.svg' },
            { name: 'FullCalendar', src: '/images/tech/fullcalendar.svg' },
            { name: 'React Dropzone', src: '/images/tech/dropzone.svg' },
            { name: 'React DatePicker', src: '/images/tech/datepicker.svg' },
            { name: 'SunEditor', src: '/images/tech/editor.svg' },
            { name: 'Nodemon', src: '/images/tech/nodemon.svg' },
            { name: 'Prettier', src: '/images/tech/prettier.svg' },
            { name: 'ESLint', src: '/images/tech/eslint.svg' },
          ],
        },
        highlight: true,
      })
    ),
  })),
];
