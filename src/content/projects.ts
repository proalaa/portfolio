export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "dashboard" | "security" | "ui-ux" | "performance" | "integration";
  status: "completed" | "in-progress" | "concept";
  featured: boolean;
  images: string[];
  demoUrl?: string;
  githubUrl?: string;
  challenges: string[];
  solutions: string[];
  impact: string[];
  year: number;
}

export const projects: Project[] = [
  {
    id: "charity-store-theming",
    title: "Charity Store Theming System",
    description:
      "Custom theming solution for non-profit organizations using the Zid Merchant Dashboard, enhancing their onboarding experience and platform relevance.",
    longDescription:
      "Developed a comprehensive theming system from scratch to adapt the Zid platform's UI for charity stores. This involved creating a reliable solution without a centralized theming system, requiring extensive research and consultation with team members.",
    technologies: [
      "Vue.js",
      "CSS3",
      "SCSS",
      "Design Systems",
      "UI/UX Design",
      "Theme Architecture",
    ],
    category: "ui-ux",
    status: "completed",
    featured: true,
    images: [
      "/projects/charity-theming-1.jpg",
      "/projects/charity-theming-2.jpg",
    ],
    challenges: [
      "No centralized theming system available",
      "Adapting platform identity for non-profit organizations",
      "Ensuring consistency across entire dashboard",
    ],
    solutions: [
      "Built custom theming solution from scratch",
      "Implemented new color themes and visual adjustments",
      "Created comprehensive design documentation",
    ],
    impact: [
      "Smoother onboarding experience for charity merchants",
      "Enhanced platform relevance and trust factor",
      "Positive merchant satisfaction feedback",
    ],
    year: 2024,
  },
  {
    id: "hermes-react-architecture",
    title: "Hermes React & Remix Architecture",
    description:
      "Contributed to building and refining the merchant-facing UI for Zid's new Hermes product using React and Remix.js, accelerating team onboarding.",
    longDescription:
      "Played a key role in Zid's new Hermes product initiative, transitioning from legacy Vue-based systems to modern React + Remix architecture. Allocated self-learning time and built internal sessions to bridge skill gaps efficiently.",
    technologies: [
      "React",
      "Remix.js",
      "TypeScript",
      "Vue.js",
      "JavaScript",
      "Frontend Architecture",
    ],
    category: "dashboard",
    status: "completed",
    featured: true,
    images: ["/projects/hermes-1.jpg", "/projects/hermes-2.jpg"],
    challenges: [
      "Significant learning curve from Vue to React + Remix",
      "Building merchant-facing UI for new product",
      "Preparing system for public launch",
    ],
    solutions: [
      "Allocated dedicated self-learning time",
      "Built internal knowledge-sharing sessions",
      "Contributed to feature implementation and bug fixes",
    ],
    impact: [
      "Accelerated team onboarding process",
      "Reduced time to production-readiness",
      "Enhanced skill development and architecture transition",
    ],
    year: 2024,
  },
  {
    id: "session-timeout-config",
    title: "Session Timeout Configuration",
    description:
      "Implemented front-end logic and UI for merchant-controlled session timeout settings, enhancing account security and platform flexibility.",
    longDescription:
      "Developed a feature allowing store owners to configure their own session timeout settings through the Zid dashboard. This mini-project focused on giving merchants more control over their account security while maintaining platform flexibility.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "UI Components",
      "Form Handling",
      "Security Features",
      "Dashboard Integration",
    ],
    category: "security",
    status: "completed",
    featured: true,
    images: [
      "/projects/session-config-1.jpg",
      "/projects/session-config-2.jpg",
    ],
    challenges: [
      "Implementing secure session management",
      "Creating intuitive configuration interface",
      "Ensuring seamless dashboard integration",
    ],
    solutions: [
      "Built user-friendly configuration UI",
      "Implemented secure session handling logic",
      "Integrated smoothly with existing dashboard",
    ],
    impact: [
      "Enhanced merchant control over account security",
      "Improved platform flexibility and customization",
      "Better user experience for security settings",
    ],
    year: 2024,
  },
  {
    id: "enterprise-pro-enhancements",
    title: "Enterprise & Pro Quick Wins",
    description:
      "Delivered multiple UI/UX improvements, bug fixes, and enhancements for enterprise and professional merchants throughout the dashboard.",
    longDescription:
      "Worked across several user stories in the Enterprise & Pro Quick Wins (Patch 2) initiative, addressing long-standing feedback from high-tier merchants. These cumulative changes contributed to smoother usability and enhanced platform quality.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "CSS3",
      "UI/UX Design",
      "Bug Fixes",
      "Dashboard Features",
    ],
    category: "dashboard",
    status: "completed",
    featured: false,
    images: ["/projects/enterprise-1.jpg", "/projects/enterprise-2.jpg"],
    challenges: [
      "Addressing long-standing merchant feedback",
      "Implementing multiple improvements efficiently",
      "Ensuring high-tier merchant satisfaction",
    ],
    solutions: [
      "Delivered UI/UX improvements across dashboard",
      "Fixed critical bugs and usability issues",
      "Implemented small but impactful enhancements",
    ],
    impact: [
      "Smoother usability for enterprise merchants",
      "Addressed key merchant feedback points",
      "Enhanced overall platform quality",
    ],
    year: 2024,
  },
  {
    id: "performance-optimization",
    title: "Dashboard Performance Optimization",
    description:
      "Implemented various performance improvements across the Zid merchant dashboard to enhance user experience and reduce load times.",
    longDescription:
      "Focused on optimizing the merchant dashboard performance through code splitting, lazy loading, and efficient rendering techniques. These improvements help merchants access their data faster and have a smoother experience.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "Webpack",
      "Performance Optimization",
      "Code Splitting",
      "Lazy Loading",
    ],
    category: "performance",
    status: "in-progress",
    featured: false,
    images: ["/projects/performance-1.jpg", "/projects/performance-2.jpg"],
    challenges: [
      "Optimizing dashboard load times",
      "Implementing efficient data loading",
      "Maintaining functionality while improving performance",
    ],
    solutions: [
      "Implemented code splitting for better resource management",
      "Added lazy loading for non-critical components",
      "Optimized rendering and data fetching patterns",
    ],
    impact: [
      "Improved dashboard responsiveness",
      "Reduced initial load times",
      "Enhanced overall user experience",
    ],
    year: 2024,
  },
  {
    id: "api-integration-enhancements",
    title: "API Integration Improvements",
    description:
      "Enhanced various API integrations within the Zid platform to improve data flow, reliability, and merchant experience.",
    longDescription:
      "Worked on improving API integrations across different parts of the Zid platform, ensuring better data synchronization, error handling, and merchant experience. These improvements help maintain platform reliability and performance.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "API Integration",
      "Error Handling",
      "Data Synchronization",
      "REST APIs",
    ],
    category: "integration",
    status: "completed",
    featured: false,
    images: ["/projects/api-1.jpg", "/projects/api-2.jpg"],
    challenges: [
      "Ensuring reliable API communication",
      "Implementing proper error handling",
      "Maintaining data consistency across integrations",
    ],
    solutions: [
      "Enhanced API error handling and retry logic",
      "Improved data synchronization mechanisms",
      "Implemented better loading states and feedback",
    ],
    impact: [
      "Improved platform reliability",
      "Enhanced merchant experience",
      "Better data consistency across features",
    ],
    year: 2024,
  },
];

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};
