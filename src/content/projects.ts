export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: "web-app" | "mobile" | "ui-ux" | "tool" | "concept";
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
    id: "ecommerce-dashboard",
    title: "E-commerce Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard for e-commerce platforms with real-time data visualization and merchant insights.",
    longDescription:
      "Built a sophisticated analytics dashboard that helps e-commerce merchants track their performance, understand customer behavior, and make data-driven decisions. The dashboard features real-time updates, interactive charts, and customizable widgets.",
    technologies: [
      "React",
      "TypeScript",
      "D3.js",
      "Tailwind CSS",
      "Next.js",
      "Chart.js",
    ],
    category: "web-app",
    status: "completed",
    featured: true,
    images: ["/projects/dashboard-1.jpg", "/projects/dashboard-2.jpg"],
    demoUrl: "https://demo-dashboard.example.com",
    challenges: [
      "Handling large datasets with optimal performance",
      "Creating intuitive data visualizations",
      "Implementing real-time updates without performance degradation",
    ],
    solutions: [
      "Implemented virtual scrolling and data pagination",
      "Used D3.js for custom, interactive visualizations",
      "Optimized with React.memo and useMemo for efficient re-renders",
    ],
    impact: [
      "Improved merchant decision-making speed by 40%",
      "Reduced data analysis time from hours to minutes",
      "Enhanced user engagement with interactive visualizations",
    ],
    year: 2024,
  },
  {
    id: "payment-flow-redesign",
    title: "Payment Flow Optimization",
    description:
      "Redesigned checkout experience with focus on conversion optimization and user experience improvements.",
    longDescription:
      "Led the redesign of the payment flow to reduce cart abandonment and improve conversion rates. Implemented progressive disclosure, smart form validation, and multiple payment options with seamless UX.",
    technologies: [
      "React",
      "TypeScript",
      "Framer Motion",
      "Stripe API",
      "React Hook Form",
    ],
    category: "ui-ux",
    status: "completed",
    featured: true,
    images: ["/projects/payment-1.jpg", "/projects/payment-2.jpg"],
    challenges: [
      "High cart abandonment rates",
      "Complex payment validation requirements",
      "Supporting multiple payment methods seamlessly",
    ],
    solutions: [
      "Implemented progressive disclosure to reduce cognitive load",
      "Created smart validation with real-time feedback",
      "Designed unified interface for multiple payment providers",
    ],
    impact: [
      "Increased conversion rate by 25%",
      "Reduced cart abandonment by 30%",
      "Improved user satisfaction scores by 40%",
    ],
    year: 2024,
  },
  {
    id: "component-library",
    title: "Design System & Component Library",
    description:
      "A comprehensive design system with reusable components, documentation, and automated testing.",
    longDescription:
      "Developed a scalable design system that ensures consistency across multiple products. Includes 50+ components, comprehensive documentation, and automated visual regression testing.",
    technologies: [
      "React",
      "TypeScript",
      "Storybook",
      "Styled Components",
      "Jest",
      "Chromatic",
    ],
    category: "tool",
    status: "completed",
    featured: true,
    images: ["/projects/design-system-1.jpg", "/projects/design-system-2.jpg"],
    challenges: [
      "Maintaining consistency across multiple teams",
      "Creating flexible yet consistent components",
      "Ensuring accessibility compliance",
    ],
    solutions: [
      "Built comprehensive Storybook documentation",
      "Implemented automated testing and visual regression",
      "Created accessibility-first component architecture",
    ],
    impact: [
      "Reduced development time by 50%",
      "Improved design consistency across 5+ products",
      "Achieved 100% WCAG 2.1 AA compliance",
    ],
    year: 2023,
  },
  {
    id: "mobile-app-concept",
    title: "Mobile Shopping Experience",
    description:
      "Modern mobile app concept with AR features, personalized recommendations, and social shopping elements.",
    longDescription:
      "Conceptual mobile application that reimagines the shopping experience with augmented reality product visualization, AI-powered recommendations, and social features for collaborative shopping.",
    technologies: [
      "React Native",
      "TypeScript",
      "AR Kit",
      "TensorFlow.js",
      "Firebase",
    ],
    category: "mobile",
    status: "concept",
    featured: false,
    images: ["/projects/mobile-1.jpg", "/projects/mobile-2.jpg"],
    challenges: [
      "Integrating AR capabilities smoothly",
      "Creating personalized experiences",
      "Balancing features with performance",
    ],
    solutions: [
      "Leveraged native AR frameworks for optimal performance",
      "Implemented machine learning for smart recommendations",
      "Used progressive loading for feature-rich experience",
    ],
    impact: [
      "Conceptual 60% increase in user engagement",
      "Projected 35% improvement in conversion rates",
      "Enhanced brand differentiation in competitive market",
    ],
    year: 2024,
  },
  {
    id: "performance-optimizer",
    title: "Web Performance Optimization Tool",
    description:
      "Internal tool for analyzing and optimizing web application performance with automated suggestions.",
    longDescription:
      "Developed an internal tool that analyzes web applications for performance bottlenecks and provides automated optimization suggestions. Includes bundle analysis, image optimization, and code splitting recommendations.",
    technologies: [
      "Node.js",
      "TypeScript",
      "Webpack",
      "Lighthouse",
      "React",
      "Express",
    ],
    category: "tool",
    status: "in-progress",
    featured: false,
    images: ["/projects/performance-1.jpg", "/projects/performance-2.jpg"],
    challenges: [
      "Analyzing complex application architectures",
      "Providing actionable optimization suggestions",
      "Integrating with existing development workflows",
    ],
    solutions: [
      "Built modular analysis engine for different frameworks",
      "Created automated reporting with priority recommendations",
      "Integrated with CI/CD pipelines for continuous monitoring",
    ],
    impact: [
      "Improved average page load time by 45%",
      "Reduced bundle sizes by 30%",
      "Automated performance monitoring for 10+ projects",
    ],
    year: 2024,
  },
  {
    id: "accessibility-toolkit",
    title: "Accessibility Testing Toolkit",
    description:
      "Comprehensive toolkit for testing and improving web accessibility with automated scanning and reporting.",
    longDescription:
      "Created a toolkit that helps developers identify and fix accessibility issues in web applications. Features automated scanning, detailed reports, and integration with popular development tools.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "Axe-core",
      "Puppeteer",
      "React",
      "Node.js",
    ],
    category: "tool",
    status: "completed",
    featured: false,
    images: ["/projects/accessibility-1.jpg", "/projects/accessibility-2.jpg"],
    challenges: [
      "Comprehensive accessibility rule coverage",
      "Providing clear, actionable feedback",
      "Integrating with various development environments",
    ],
    solutions: [
      "Leveraged industry-standard accessibility engines",
      "Created intuitive reporting with fix suggestions",
      "Built plugins for popular IDEs and build tools",
    ],
    impact: [
      "Improved accessibility compliance by 80%",
      "Reduced accessibility issues in production by 65%",
      "Enhanced development team awareness of accessibility",
    ],
    year: 2023,
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
