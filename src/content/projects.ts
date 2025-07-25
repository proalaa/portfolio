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
    id: "merchant-dashboard",
    title: "Merchant Dashboard",
    description:
      "Comprehensive merchant dashboard for e-commerce platform management with advanced analytics and business tools.",
    longDescription:
      "As a frontend developer, I was responsible for implementing many key features in the merchant dashboard. This platform serves as the central hub for merchants to manage their stores, track performance, handle orders, and analyze business metrics. I contributed significantly to the development of various modules and features that enhance the merchant experience.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Vuex",
      "PHP",
      "Laravel",
      "Docker",
      "Zidsa/ui",
      "Jira",
    ],
    category: "web-app",
    status: "completed",
    featured: true,
    images: [
      "/projects/merchant-dashboard-1.jpg",
      "/projects/merchant-dashboard-2.jpg",
    ],
    challenges: [
      "Managing complex state across multiple dashboard modules",
      "Implementing real-time data updates for merchant analytics",
      "Creating responsive and intuitive interfaces for business users",
      "Handling large datasets for performance metrics and reporting",
    ],
    solutions: [
      "Implemented Vuex for centralized state management",
      "Built modular component architecture for maintainability",
      "Optimized performance with virtual scrolling and pagination",
      "Used Docker for containerization and deployment",
      "Utilized Laravel as a middleware layer between the Vue SPA and remote backend services for secure and efficient data handling",
      "Used Jira for project management",
    ],
    impact: [
      "Improved merchant productivity and user experience",
      "Enhanced dashboard performance and responsiveness",
      "Streamlined business operations for thousands of merchants",
    ],
    year: 2024,
  },
  {
    id: "catalog-system",
    title: "Catalog/Storefront Project",
    description:
      "Main storefront platform for Zid stores featuring product browsing, offers, cart, and checkout functionality.",
    longDescription:
      "Contributed to the development of the main storefront/catalog project, which serves as the customer-facing interface for Zid stores. This platform handles product display, offers, shopping cart functionality, and checkout processes. I have contributed to various features throughout my time at Zid, including implementing ZAD project features to enhance charitable stores' ability to receive donations and showcase donation opportunities.",
    technologies: [
      "Laravel",
      "Laravel Blade",
      "Vue.js",
      "Twig",
      "PHP",
      "MySQL",
      "Jira",
    ],
    category: "web-app",
    status: "completed",
    featured: false,
    images: ["/projects/catalog-1.jpg", "/projects/catalog-2.jpg"],
    challenges: [
      "Implementing features to enhance charitable donation display",
      "Integrating ZAD project features into existing storefront",
      "Maintaining consistent user experience across different store types",
      "Ensuring smooth cart and checkout functionality",
    ],
    solutions: [
      "Implemented ZAD project features for charitable stores",
      "Enhanced donation opportunity display and accessibility",
      "Contributed to various storefront features and improvements",
      "Used Jira for project management and task tracking",
    ],
    impact: [
      "Enhanced charitable stores' ability to receive donations",
      "Improved donation opportunity visibility for users",
      "Contributed to ongoing storefront platform improvements",
    ],
    year: 2024,
  },
  {
    id: "ngo-platform",
    title: "NGO Platform (Tabaru Stores)",
    description:
      "Charitable donation aggregation platform that showcases donation opportunities from various Zid charitable stores.",
    longDescription:
      "As the lead developer, I customized and developed a specialized platform for charitable organizations (منصة تبرع خاصة بالجمعيات الخيرية المتواجده بزد التابعة لوزارة الموارد البشرية). This platform serves as an aggregation hub that displays donation opportunities from various charitable stores on Zid. When users click on a donation opportunity, they are redirected to the original charitable store to complete their donation, as this platform focuses on discovery rather than direct transactions.",
    technologies: [
      "Laravel",
      "Laravel Blade",
      "MySQL",
      "Bootstrap",
      "PHP",
      "Jira",
    ],
    category: "web-app",
    status: "completed",
    featured: false,
    images: ["/projects/ngo-platform-1.jpg", "/projects/ngo-platform-2.jpg"],
    demoUrl: "https://ngo.zid.sa",
    challenges: [
      "Customizing existing zidmall platform for charitable purposes",
      "Implementing proper redirection to original charitable stores",
      "Ensuring seamless user experience without cart/checkout functionality",
      "Maintaining platform simplicity while serving charitable discovery needs",
    ],
    solutions: [
      "Forked and customized existing zidmall project for charitable use case",
      "Implemented clean redirection system to original charitable stores",
      "Built simple, focused interface for donation opportunity discovery",
      "Used Laravel Blade for server-side rendering and Bootstrap for responsive design",
      "Used Jira for project management and stakeholder coordination",
    ],
    impact: [
      "Created centralized platform for discovering charitable donation opportunities",
      "Simplified the process of finding and accessing charitable stores on Zid",
      "Provided charitable organizations with additional visibility and reach",
    ],
    year: 2024,
  },
  {
    id: "hermes-platform",
    title: "Hermes Platform - Merchant Dashboard Rewrite",
    description:
      "Complete rewrite of the merchant dashboard using modern React stack with MUI, Remix, and TypeScript to improve delivery efficiency and user experience.",
    longDescription:
      "Contributed to the development of Hermes, a comprehensive rewrite of the merchant dashboard project. This initiative was driven by the need to reduce complexity, increase delivery efficiency, and standardize the design approach across Zid's platform.",

    technologies: [
      "React",
      "TypeScript",
      "MUI (Material-UI)",
      "Remix Framework",
      "React Query",
      "Ky (HTTP client)",
      "ESLint & Prettier",
      "Caddy (Reverse Proxy)",
      "Emotion (CSS-in-JS)",
      "Jira",
    ],
    category: "web-app",
    status: "in-progress",
    featured: true,
    images: ["/projects/hermes-1.jpg", "/projects/hermes-2.jpg"],
    challenges: [
      "Reducing codebase complexity while maintaining feature parity",
      "Implementing strict TypeScript typings and linting rules",
      "Standardizing design approach with MUI components and Figma integration",
      "Restructuring pages and URLs for better UX and Geo expansion support",
      "Ensuring fast browsing experience with SPA architecture and HTTP caching",
      "Managing handover from contractor team to internal FE team",
    ],
    solutions: [
      "Built modular architecture with reusable components and API SDK",
      "Implemented MUI design system with Figma integration for consistent UI",
      "Used Remix framework for SPA with directory-based routing",
      "Created optimistic UI patterns and progressive web app features",
      "Implemented reverse proxy layer (Hermod) for backend communication",
      "Established comprehensive training program for internal team transition",
      "Used Jira for project management and team coordination across contractors and internal team",
    ],
    impact: [
      "Improved delivery efficiency and reduced development time",
      "Enhanced code quality through strict TypeScript and linting rules",
      "Standardized design system across all Zid websites",
      "Enabled better support for multiple stores and localization",
      "Reduced cost of developing features and improved time to market",
      "Established foundation for AI integration and A/B testing capabilities",
    ],
    year: 2024,
  },
  {
    id: "mazeed-sa",
    title: "Mazeed.sa Platform",
    description:
      "Complete frontend implementation of a specialized e-commerce platform from ground up.",
    longDescription:
      "As the responsible frontend developer, I implemented this project from the ground up, handling all aspects of the frontend development. Mazeed.sa is a specialized e-commerce platform that provides unique features and functionality tailored to specific market needs. I was in charge of the entire frontend architecture, component development, and user experience implementation.",
    technologies: [
      "Vue.js",
      "TypeScript",
      "Nuxt.js",
      "Apollo Client",
      "Tailwind CSS",
      "Vite",
      "Pinia",
      "PrimeVue",
      "Vue I18n",
      "Jira",
    ],
    category: "web-app",
    status: "completed",
    featured: true,
    images: ["/projects/mazeed-1.jpg", "/projects/mazeed-2.jpg"],
    demoUrl: "https://mazeed.sa",
    challenges: [
      "Building a complete e-commerce platform from scratch",
      "Implementing complex business logic and workflows",
      "Creating responsive and accessible user interfaces",
      "Integrating multiple third-party services and APIs",
    ],
    solutions: [
      "Designed scalable component architecture from the ground up",
      "Implemented comprehensive state management with Redux Toolkit",
      "Built responsive design system with Tailwind CSS",
      "Created seamless integration with payment and shipping services",
      "Used Jira for project management and development workflow",
    ],
    impact: [
      "Successfully launched a complete e-commerce platform",
      "Delivered high-quality user experience and performance",
      "Established solid foundation for platform growth and scaling",
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
