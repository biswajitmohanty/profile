export const personalInfo = {
  name: 'Biswajit Mohanty',
  title: 'Technical Lead / Full-Stack Architect',
  experience: '10+ years',
  email: 'biswajit.fullstackdev@gmail.com',
  linkedin: 'linkedin.com/in/biswajit01',
  location: 'India',
  bio: 'A seasoned Technical Lead and Full-Stack Architect with over 10 years of experience building scalable enterprise solutions across fintech, healthcare, and e-commerce domains. Passionate about clean architecture, cloud-native systems, and empowering engineering teams.',
  shortBio: 'I architect and build production-grade systems that scale — from microservices backends to cloud-native deployments and cross-platform mobile apps.',
};

export const roles = [
  'Technical Lead',
  'Full-Stack Architect',
  'App Developer',
  'Cloud Engineer',
  'Microservices Expert',
];

export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '12+', label: 'Engineers Led' },
  { value: '40%', label: 'Scalability Improvement' },
  { value: '80%', label: 'Faster Deployments' },
  { value: '25%', label: 'Incident Reduction' },
  { value: '6+', label: 'Industries Served' },
];

export const skills = {
  backend: ['Java', 'Spring Boot', 'Spring Cloud', 'Hibernate/JPA', 'Microservices', 'Kafka', 'REST APIs', 'GraphQL'],
  frontend: ['React.js', 'Angular', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
  mobile: ['React Native', 'Flutter'],
  cloud: ['AWS EC2', 'AWS S3', 'AWS EKS', 'AWS Lambda', 'Docker', 'Kubernetes', 'Jenkins', 'GitHub Actions', 'CI/CD'],
  database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Elasticsearch'],
  tools: ['Git', 'Jira', 'Confluence', 'Splunk', 'SonarQube', 'Swagger/OpenAPI', 'JWT', 'OAuth2'],
};

export const experience = [
  {
    role: 'Technical Lead',
    company: 'Bristlecone',
    period: 'Sep 2022 – Present',
    color: '#00d4ff',
    achievements: [
      'Led migration of Experian fraud detection platform to AWS-based cloud-native architecture, improving scalability by 40% and reducing deployment time by 30%',
      'Designed microservices architecture handling high-volume financial transactions with enhanced security and compliance controls',
      'Implemented CI/CD pipelines in Jenkins, reducing release cycle time from 10 days to 2 days',
      'Optimized performance and monitoring using Splunk and CloudWatch, reducing production incidents by 25%',
      'Mentored and guided a team of 12 engineers, driving architectural best practices and ensuring sprint delivery commitments',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Perforator',
    period: 'Mar 2020 – Jul 2022',
    color: '#7c3aed',
    achievements: [
      'Led end-to-end development of a performance testing platform to simulate high-traffic scenarios, improving system reliability and identifying bottlenecks before production',
      'Designed RESTful microservices using Spring Boot and integrated with frontend interfaces for real-time performance visualization',
      'Automated CI/CD workflows using Jenkins pipelines, reducing manual deployment effort by 40% and accelerating release cycles',
      'Improved application response time by optimizing backend processing and database queries',
      'Collaborated with QA and DevOps teams to ensure seamless production rollout and zero-downtime releases',
    ],
  },
  {
    role: 'Senior Developer',
    company: 'HCL Technologies',
    period: 'May 2018 – Feb 2020',
    color: '#10b981',
    achievements: [
      'Developed and maintained SEPA Instant payment processing systems for European banking clients, ensuring high availability, security, and regulatory compliance',
      'Implemented secure transaction workflows with OAuth2 authentication and encryption standards aligned with European payment regulations',
      'Optimized backend processing logic to handle real-time payment transactions with minimal latency',
      'Collaborated with cross-functional global teams to deliver mission-critical releases within strict compliance deadlines',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Betsol',
    period: 'Jun 2017 – May 2018',
    color: '#f59e0b',
    achievements: [
      "Contributed to development of Vistair's SafetyNet aviation compliance platform, enhancing operational safety tracking and audit workflows",
      'Built scalable backend services using Java and Spring framework to support aviation compliance data processing',
      'Collaborated with cross-functional teams to troubleshoot and resolve critical issues in UAT and production',
    ],
  },
  {
    role: 'Developer II',
    company: 'Productive Edge',
    period: 'Jul 2015 – May 2017',
    color: '#ef4444',
    achievements: [
      'Developed healthcare service portals aimed at improving patient engagement and digital service accessibility',
      'Designed and implemented REST APIs and integrated third-party healthcare services for seamless data exchange',
      'Enhanced UI/UX responsiveness using modern frontend technologies, improving overall user interaction',
    ],
  },
];

export const projects = [
  {
    title: 'FinPay',
    subtitle: 'Payment Dashboard & Transaction Monitor',
    description:
      'Real-time financial transaction dashboard with role-based access, analytics charts, and webhook logging for fintech operations.',
    longDescription:
      'FinPay is a comprehensive payment management platform designed for fintech operations. It features real-time transaction monitoring with WebSocket updates, advanced role-based access control (RBAC) for different user types, interactive analytics dashboards with drill-down capabilities, webhook event logging and replay functionality, and seamless Stripe API integration for payment processing.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'Stripe API', 'JWT', 'Docker', 'AWS'],
    category: 'Fintech',
    color: '#00d4ff',
  },
  {
    title: 'ShopTrack',
    subtitle: 'Multi-Vendor E-Commerce Platform',
    description:
      'Full e-commerce backend with admin dashboard supporting multi-vendor operations, inventory management, and payment processing.',
    longDescription:
      'ShopTrack is a scalable multi-vendor e-commerce platform built for enterprise retail operations. It supports unlimited vendor onboarding with isolated storefronts, real-time inventory tracking with low-stock alerts, advanced search and filtering powered by Elasticsearch, Redis caching for high-performance product listings, and a comprehensive admin dashboard for platform management.',
    tech: ['Spring Boot', 'React', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker'],
    category: 'E-Commerce',
    color: '#7c3aed',
  },
  {
    title: 'LinkVault',
    subtitle: 'AI-Powered Social Bookmarking App',
    description:
      'Save and organize links from YouTube, Instagram, TikTok, Reddit with AI-powered title suggestions and tag organization.',
    longDescription:
      'LinkVault is an intelligent bookmarking application that uses the Gemini API to automatically extract and suggest metadata for saved links. It supports content from major social platforms, provides AI-powered tag recommendations, enables smart collections and folders, and offers a beautiful, distraction-free reading experience with link previews.',
    tech: ['React', 'Vite', 'Supabase', 'Gemini API', 'Vercel'],
    category: 'SaaS',
    color: '#10b981',
  },
  {
    title: 'MedConnect',
    subtitle: 'Telehealth Appointment Platform',
    description:
      'Patient-doctor booking system with video consultations, digital prescriptions, and calendar management.',
    longDescription:
      'MedConnect is a HIPAA-compliant telehealth platform that bridges the gap between patients and healthcare providers. Features include intelligent appointment scheduling, WebRTC-powered HD video consultations, digital prescription generation and management, integration with pharmacy networks, calendar sync with Google Calendar, and automated email/SMS reminders via SendGrid.',
    tech: ['Next.js', 'Spring Boot', 'PostgreSQL', 'WebRTC', 'AWS S3', 'SendGrid'],
    category: 'Healthcare',
    color: '#f59e0b',
  },
  {
    title: 'CloudOps',
    subtitle: 'Infrastructure Monitoring Dashboard',
    description:
      'Application health and infrastructure metrics dashboard with real-time alerts, error log viewer, and deployment history.',
    longDescription:
      'CloudOps is a unified observability platform for DevOps teams managing cloud infrastructure. It provides real-time infrastructure health monitoring with customizable dashboards, intelligent alerting with PagerDuty integration, structured log aggregation and search, deployment pipeline visualization with rollback capabilities, and time-series metrics stored in TimescaleDB for historical analysis.',
    tech: ['React', 'Node.js', 'WebSocket', 'PostgreSQL', 'TimescaleDB', 'Docker'],
    category: 'DevOps',
    color: '#ef4444',
  },
  {
    title: 'TaskFlow',
    subtitle: 'Project Management App',
    description:
      'Kanban-style project management with drag-and-drop boards, sprint planning, and real-time team collaboration.',
    longDescription:
      'TaskFlow is a modern project management tool designed for agile development teams. It features intuitive drag-and-drop Kanban boards with swim lanes, comprehensive sprint planning and velocity tracking, real-time collaboration with presence indicators via WebSocket, file attachments stored on AWS S3, time tracking with burndown charts, and customizable workflow automation.',
    tech: ['React', 'Spring Boot', 'PostgreSQL', 'WebSocket', 'AWS S3'],
    category: 'SaaS',
    color: '#8b5cf6',
  },
];

export const services = [
  {
    title: 'Custom Web Application Development',
    description:
      'End-to-end web applications with React, Angular, Spring Boot, and Node.js — scalable, secure, and production-ready.',
    icon: 'Code2',
  },
  {
    title: 'Cross-Platform Mobile Development',
    description: 'Native-quality mobile apps for iOS and Android using React Native and Flutter.',
    icon: 'Smartphone',
  },
  {
    title: 'Cloud Architecture & AWS Deployment',
    description:
      'Design and deploy cloud-native architectures on AWS with EC2, EKS, Lambda, S3, and CloudWatch.',
    icon: 'Cloud',
  },
  {
    title: 'API Development & Integrations',
    description:
      'RESTful and GraphQL APIs with third-party integrations for payment, auth, messaging, and more.',
    icon: 'Zap',
  },
  {
    title: 'Legacy System Modernization',
    description:
      'Migrate monolithic applications to microservices architecture with zero downtime strategies.',
    icon: 'RefreshCw',
  },
  {
    title: 'Technical Consulting & Fractional CTO',
    description:
      'Strategic technical guidance, architecture reviews, and fractional CTO services for startups and scale-ups.',
    icon: 'Briefcase',
  },
];

export const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'Engineering Manager, HCL Technologies',
    content:
      'Biswajit consistently delivers beyond expectations. His ability to architect complex microservices systems while keeping the team aligned is exceptional. The SEPA payment platform he built handles millions of transactions flawlessly.',
    avatar: 'RK',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Product Director, European Banking Client',
    content:
      'Working with Biswajit transformed our payment infrastructure. He reduced our deployment time by 80% and brought a level of technical rigor that elevated the entire team. Highly recommended.',
    avatar: 'SM',
  },
  {
    name: 'Anil Sharma',
    role: 'CTO, Bristlecone',
    content:
      'Biswajit is one of the most technically sound engineers I have worked with. His fraud detection system for Experian was delivered on time and significantly reduced our incident rate by 25%.',
    avatar: 'AS',
  },
  {
    name: 'Priya Nair',
    role: 'Tech Lead, Cognizant',
    content:
      'His full-stack expertise and attention to code quality are remarkable. He mentors junior developers effectively and always brings innovative solutions to complex problems.',
    avatar: 'PN',
  },
  {
    name: 'David Chen',
    role: 'Startup Founder',
    content:
      'Biswajit helped us architect our SaaS platform from scratch. His cloud-native approach gave us the scalability we needed to grow from 100 to 10,000 users without any infrastructure issues.',
    avatar: 'DC',
  },
];
