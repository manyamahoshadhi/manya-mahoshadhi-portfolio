import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaJs,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiTailwindcss,
  SiKubernetes,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiVercel,
  SiPostman,
  SiFramer,
  SiMysql,
} from 'react-icons/si';
import { TbBrandCpp, TbBrandVscode } from 'react-icons/tb';
import { DiDatabase } from 'react-icons/di';
import { BiCodeAlt } from 'react-icons/bi';
import { HiOutlineCloud } from 'react-icons/hi';
import { VscTools } from 'react-icons/vsc';

/** Central portfolio content — update this file to refresh the site. */
export const personalInfo = {
  name: 'Manya Mahoshadhi',
  title: 'Software Engineer',
  tagline:
    'Crafting elegant, scalable digital experiences with modern web technologies and a passion for clean architecture.',
  email: 'manyamahoshadhi101@gmail.com',
  github: 'https://github.com/manyamahoshadhi',
  linkedin: 'https://www.linkedin.com/in/manya-mahoshadhi',
  resumeUrl: '/Manya_Mahoshadhi_resume.pdf',
  //resumeUrl: '/resume.pdf',
  location: 'Sri Lanka',
};

export const about = {
  introduction:
    'I am a Software Engineering professional passionate about building practical and user-focused technology solutions. With experience in frontend and full-stack development, enterprise applications, API integration, automation, and AI-powered systems, I enjoy transforming real-world problems into reliable and intuitive software.',
  education:
    'Completed BSc (Hons) in Information Technology, specializing in Software Engineering, at the Sri Lanka Institute of Information Technology (SLIIT). My academic journey has included software development, machine learning, microservices, databases, and full-stack application development.',
  objective:
    'To join a forward-thinking engineering team where I can contribute to impactful products, grow as a craftsman, and help shape delightful user experiences at scale.',
  interests: [
    'Open Source',
    'Software Engineering',
    'Full-Stack Development',
    'Backend Development',
    'Frontend Development',
    'Cloud & DevOps',
    'Artificial Intelligence',
    'Machine Learning',
    'System Design',
    'UI/UX',
    'Competitive Programming',
  ],
  timeline: [
    {
      year: '2022',
      title: 'Started Software Engineering Journey',
      description:
        'Began my BSc (Hons) in Information Technology, specializing in Software Engineering, at SLIIT.',
    },

    {
      year: '2024',
      title: 'Expanded Software Development Skills',
      description:
        'Developed full-stack and mobile applications using technologies including MERN, React Native, Firebase, and Kotlin.',
    },

    {
      year: '2025-2026',
      title: 'Industry Experience',
      description:
        'Gained professional experience through internships in frontend development and enterprise application development, working with React.js, Power Apps, Power Automate, SharePoint, and REST APIs.',
    },

    {
      year: '2026',
      title: 'Research & Software Engineering',
      description:
        'Completed my final-year research project focused on AI-powered assistive technologies and contributed to an IEEE-published conference paper.',
    },

    {
      year: '2026',
      title: 'Beginning My Professional Career',
      description:
        'Completed four years of undergraduate study and am currently awaiting graduation while pursuing opportunities in software and technology.',
    },
  ],
};

export const skills = [
  {
    category: 'Programming Languages',
    icon: BiCodeAlt,
    items: [
      { name: 'JavaScript', level: 90, Icon: FaJs },
      { name: 'Python', level: 80, Icon: FaPython },
      { name: 'TypeScript', level: 75, Icon: SiTypescript },
      { name: 'Java', level: 60, Icon: FaJava },
      { name: 'C++', level: 70, Icon: TbBrandCpp },
      { name: 'PHP', level: 65, Icon: BiCodeAlt },
    ],
  },
  {
    category: 'Frontend',
    icon: FaReact,
    items: [
      { name: 'React', level: 90, Icon: FaReact },  
      { name: 'Tailwind CSS', level: 90, Icon: SiTailwindcss },
      { name: 'React Native', level: 80, Icon: FaReact },
      { name: 'HTML5', level: 95, Icon: FaHtml5 },
      { name: 'CSS3', level: 90, Icon: FaCss3Alt },
    ],
  },
  {
    category: 'Backend & APIs',
    icon: FaNodeJs,
    items: [
      { name: 'Node.js', level: 88, Icon: FaNodeJs },
      { name: 'Express', level: 85, Icon: SiExpress },
      { name: 'Microservices', level: 88, Icon: BiCodeAlt },
      { name: 'REST APIs', level: 90, Icon: BiCodeAlt },
    ],
  },
  {
    category: 'Databases',
    icon: DiDatabase,
    items: [
      { name: 'MongoDB', level: 85, Icon: SiMongodb },
      { name: 'MySQL', level: 75, Icon: SiMysql },
      { name: 'SharePoint', level: 80, Icon: DiDatabase },
    ],
  },
  {
    category: 'Cloud & DevOps',
    icon: HiOutlineCloud,
    items: [
      { name: 'Docker', level: 78, Icon: FaDocker },
      {name:'Kubernetes',level:80,Icon:SiKubernetes},
      { name: 'Firebase', level: 70, Icon: SiFirebase },
      { name: 'Vercel', level: 85, Icon: SiVercel },
    ],
  },
  {
    category: 'AI & Machine Learning',
    icon: BiCodeAlt,
    items: [
      { name: 'TensorFlow / Keras', level: 78, Icon: FaPython },
      { name: 'MediaPipe', level: 75, Icon: FaPython },
      { name: 'Computer Vision', level: 78, Icon: FaPython },
      { name: 'Machine Learning', level: 78, Icon: FaPython },
      { name: 'Deep Learning', level: 75, Icon: FaPython },
    ],
  },
  {
    category: 'Tools',
    icon: VscTools,
    items: [
      { name: 'VS Code', level: 95, Icon: TbBrandVscode },
      { name: 'Figma', level: 75, Icon: FaFigma },
      { name: 'Postman', level: 85, Icon: SiPostman },
    ],
  },
  {
    category: 'Version Control',
    icon: FaGitAlt,
    items: [
      { name: 'Git', level: 90, Icon: FaGitAlt },
      { name: 'GitHub', level: 92, Icon: FaGithub },
    ],
  },
   {
    category: 'Microsoft Power Platform',
    icon: VscTools,
    items: [
      { name: 'Power Apps', level: 85, Icon: VscTools },
      { name: 'Power Automate', level: 85, Icon: VscTools },
      { name: 'SharePoint', level: 80, Icon: VscTools },
    ],
  },

];

export const projects = [
  {
    id: 1,
    title: 'Hospital Microservices System',
    description:
      'Developed a microservices-based hospital management system supporting appointments, billing, laboratory services, prescriptions, and role-based access.',
    technologies: [
      'React.js',
      'Tailwind CSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST APIs',
      'Microservices',
    ],
    github:
      'https://github.com/SLIIT-Group-projects/SLIIT-CTSE-ASSIGNMENT-01',
    live: '',
    gradient: 'from-blue-600/40 to-cyan-500/30',
  },

  {
    id: 2,
    title: 'Cloud-Native Food Ordering & Delivery System',
    description:
      'Developed a cloud-native food ordering and delivery application using a microservices architecture to support restaurant ordering and delivery workflows.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'Microservices',
    ],
    github: 'https://github.com/SLIIT-Group-projects/SLIIT-Y3S2-DS.git',
    live: '',
    gradient: 'from-cyan-600/40 to-blue-500/30',
  },

  {
    id: 3,
    title: 'Finance Tracking Backend API',
    description:
      'Built a RESTful finance management API supporting transaction tracking, budgeting, financial goals, reporting, authentication, and role-based access.',
    technologies: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'REST API',
      'JWT',
    ],
    github: 'https://github.com/SE1020-IT2070-OOP-DSA-25/project-manyamahoshadhi.git',
    live: '',
    gradient: 'from-indigo-600/40 to-blue-400/30',
  },

  {
    id: 4,
    title: 'Heart Disease Prediction using Machine Learning',
    description:
      'Developed and compared supervised machine learning models to predict heart disease risk using preprocessed patient health and lifestyle data.',
    technologies: [
      'Python',
      'Machine Learning',
      'Scikit-learn',
      'Logistic Regression',
      'Decision Tree',
      'Random Forest',
      'KNN',
    ],
    github:
      'https://github.com/SLIIT-Group-projects/SLIIT-ML-ASSIGNMENT-01.git',
    live: '',
    gradient: 'from-sky-600/40 to-teal-500/30',
  },

  {
    id: 5,
    title: 'Construction Management System',
    description:
      'Developed a MERN-based construction management web application for Shan Constructions, contributing to the Tender Management module.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'MERN',
    ],
    github:
      'https://github.com/IT22230874/ITP-F.git',
    live: '',
    gradient: 'from-violet-600/40 to-blue-500/30',
  },
   {
    id: 6,
    title: 'Garbage Management Web Application',
    description:
      'Developed a MERN-based garbage management system focused on user interaction and efficient waste collection operations, including user and driver management, QR-based garbage pickup verification, product management, and payment gateway integration.',
    technologies: [
      'MongoDB',
      'Express.js',
      'React.js',
      'Node.js',
      'MERN',
    ],
    github:
      'https://github.com/it22242204/CSSE_V2.git',
    live: '',
    gradient: 'from-green-600/40 to-teal-500/30',
  },
   {
    id: 7,
    title: 'Translator Web Application',
    description:
      'Developed a web-based English–Sinhala and Sinhala–English translation application achieving approximately 90% translation accuracy, with additional features including voice translation, word games, favorites, and bookmarks.',
    technologies: [
      'React.js',
      'Python',
      'Tailwind CSS',
      'Natural Language Processing',
      'Translation',
    ],
    github:
      'https://github.com/asho-1308/Translator_App',
    live: '',
    gradient: 'from-purple-600/40 to-blue-500/30',
  },
   {
    id: 8,
    title: 'Garbage Management Mobile App',
    description:
      'Developed a mobile application for garbage management and collection using React Native and Firebase.',
    technologies: [
      'React Native',
      'Firebase',
    ],
    github:
      'https://github.com/IT22591852/garbage_app',
    live: '',
    gradient: 'from-emerald-600/40 to-cyan-500/30',
  },
  {
    id: 9,
    title: 'Countries Information App',
    description:
      'Developed a React web application that retrieves country information using the REST Countries API with Wikipedia and Unsplash API integrations.',
    technologies: [
      'React.js',
      'REST APIs',
      'Wikipedia API',
      'Unsplash API',
    ],
    github:
      'https://github.com/SE1020-IT2070-OOP-DSA-25/af-2-manyamahoshadhi.git',
    live: '',
    gradient: 'from-orange-600/40 to-blue-500/30',
  },
  {
    id: 10,
    title: 'TaskTrack – To-Do Mobile App',
    description:
      'Developed a Kotlin-based mobile application for organizing and managing day-to-day activities.',
    technologies: [
      'Kotlin',
      'Android',
    ],
    github:
      'https://github.com/manyamahoshadhi/TaskTrack.git',
    live: '',
    gradient: 'from-pink-600/40 to-purple-500/30',
  },
   {
    id: 11,
    title: 'Space Dash – Meteor Dodge Game',
    description:
      'Developed a Kotlin-based mobile game focused on real-time player interaction and meteor avoidance gameplay.',
    technologies: [
      'Kotlin',
      'Android',
      'Game Development',
    ],
    github:
      'https://github.com/manyamahoshadhi/SpaceDashMetoerDodge',
    live: '',
    gradient: 'from-red-600/40 to-purple-500/30',
  },
];

export const experience = [
  {
    id: 1,
    company: 'Fonterra Brands Sri Lanka (Lactalis-Mainland Dairy)',
    position: 'IT Intern | Application Development & Automation',
    duration: 'Oct 2025 — Mar 2026',
    responsibilities: [
      'Developed and maintained enterprise business applications using Microsoft Power Apps and Power Automate.',
      'Participated in the full software development lifecycle, including requirements gathering, development, testing, and deployment.',
      'Built automated workflows to streamline business processes and improve operational efficiency.',
      'Integrated SharePoint with Power Platform solutions for centralized data management.',
      'Prepared technical documentation, including BRDs, ERDs, user flows, and user manuals, to support software development and business processes.',
      'Delivered technical presentations and collaborated with stakeholders to communicate system functionality and project progress.',
      'Provided IT operational support through device configuration, software deployment, system updates, and technical troubleshooting.',
      'Collaborated with cross-functional teams to design and deliver business-focused software solutions following Agile methodologies.',
    ],
    achievements: [
      'Delivered Power Platform solutions that supported internal business process automation.',
      'Developed integrated applications leveraging Microsoft Power Platform and SharePoint technologies.',
      'Contributed to enterprise software projects within a collaborative Agile team environment.',
      'Strengthened expertise in Microsoft Power Platform, SharePoint integration, and enterprise application development.',
    ],
  },
  {
    id: 2,
    company: 'Aerix Global',
    position: 'Frontend Developer Intern',
    duration: 'Feb 2025 — Sep 2025',
    responsibilities: [
      'Built responsive frontend applications using React.js, Tailwind CSS, and JavaScript.',
      'Integrated REST APIs to deliver dynamic, data-driven user interfaces.',
      'Designed reusable UI components to improve maintainability and consistency.',
      'Developed core POS features including cart management, order processing, and pricing calculations.',
      'Collaborated with backend developers to ensure seamless API integration and application functionality.',
      'Performed UI testing, debugging, and responsive optimization across multiple screen sizes.',
    ],
    achievements: [
      'Delivered production-ready frontend features for commercial web applications.',
      'Enhanced application usability through responsive and user-centered interface design.',
      'Successfully contributed to multiple development projects within an Agile team environment.',
      'Applied Git/GitHub workflows for collaborative development and version control.',
      'Expanded expertise in frontend architecture, API integration, and scalable React development.',
    ],
  },
  
];

export const education = [
  {
    id: 1,
    degree: 'BSc (Hons) in Information Technology – Specializing in Software Engineering',
    university: 'Sri Lanka Institute of Information Technology (SLIIT)',
    year: '2022 — 2026',
    coursework: [
      'Software Engineering',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'Database Management Systems',
      'Web and Mobile Application Development',
      'Software Architecture',
      'Software Testing and Quality Assurance',
      'Cloud Computing',
      'Artificial Intelligence',
      'Agile Software Development',
      'Software Project Management',
    ],
  },
  {
    id: 2,
    degree: 'Diploma in English',
    university: 'Sabaragamuwa University of Sri Lanka',
    year: '2021 — 2022',
    coursework: [
      'English Language Skills',
      'Academic Writing',
      'Communication Skills',
      'Professional Communication'
    ],
  },
  {
    id: 3,
    degree: 'Secondary Education',
    university: 'Ferguson High School, Ratnapura',
    year: 'Completed',
    coursework: [
      'G.C.E. Advanced Level (A/L) – Physical Science Stream',
      'G.C.E. Ordinary Level (O/L)',
      'General Education'
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: 'Software Engineer',
    issuer: 'HackerRank',
    date: '2026',
    credentialId: '9c8da2b5d197',
    url: 'https://www.hackerrank.com/certificates/9c8da2b5d197',
    color: 'from-orange-500/20 to-yellow-500/10',
  },
  {
    id: 2,
    name: 'SQL (Advanced) Certificate',
    issuer: 'HackerRank',
    date: '2026',
    credentialId: '3853D8B49F01',
    url: 'https://www.hackerrank.com/certificates/3853d8b49f01',
    color: 'from-blue-500/20 to-cyan-500/10',
  },
  {
    id: 3,
    name: 'Java (Basic) Certificate',
    issuer: 'HackerRank',
    date: '2026',
    credentialId: '8AB867770C79',
    url: 'https://www.hackerrank.com/certificates/8ab867770c79',
    color: 'from-green-500/20 to-emerald-500/10',
  },
  {
    id: 4,
    name: 'Python for Beginners',
    issuer: 'University of Moratuwa',
    date: '2024',
    credentialId: 'PcbUakdvDR',
    url: 'https://open.uom.lk/verify',
    color: 'from-red-500/20 to-blue-500/10',
  },
];

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { label: 'Projects', value: 20, suffix: '+' },
  { label: 'Technologies', value: 25, suffix: '+' },
  { label: 'Open Source PRs', value: 40, suffix: '+' },
  { label: 'Years Coding', value: 4, suffix: '+' },
];
