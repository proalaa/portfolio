"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  TrendingUp,
  Users,
  Zap,
  Shield,
  Smartphone,
  Monitor,
  Code,
  Target,
  Award,
  Clock,
  BarChart3,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Performance Optimization",
    subtitle: "Reducing load times and improving conversion rates",
    challenge:
      "The main e-commerce platform was experiencing slow load times during peak traffic, leading to cart abandonment and reduced conversion rates. Users were reporting frustration with the checkout process.",
    role: "Lead Frontend Developer",
    solution:
      "Implemented code splitting, lazy loading, and optimized the critical rendering path. Redesigned the checkout flow with progressive enhancement and added real-time performance monitoring.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Webpack",
      "Web Vitals",
      "Redis",
    ],
    outcomes: [
      { metric: "Page Load Time", improvement: "65% faster", icon: Zap },
      { metric: "Conversion Rate", improvement: "+23%", icon: TrendingUp },
      { metric: "Cart Abandonment", improvement: "-31%", icon: Target },
      { metric: "User Satisfaction", improvement: "+40%", icon: Users },
    ],
    duration: "3 months",
    impact: "High",
    category: "Performance",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Mobile-First Checkout Experience",
    subtitle: "Redesigning the mobile payment flow",
    challenge:
      "Mobile users represented 70% of traffic but had a significantly lower conversion rate due to a complex checkout process that wasn't optimized for mobile devices.",
    role: "Frontend Developer & UX Collaborator",
    solution:
      "Redesigned the entire mobile checkout experience with a focus on one-handed usage, implemented biometric authentication, and created a progressive web app with offline capabilities.",
    technologies: [
      "React Native",
      "PWA",
      "WebAuthn",
      "Stripe API",
      "Service Workers",
      "IndexedDB",
    ],
    outcomes: [
      { metric: "Mobile Conversion", improvement: "+45%", icon: Smartphone },
      { metric: "Checkout Time", improvement: "50% faster", icon: Clock },
      { metric: "User Retention", improvement: "+28%", icon: Users },
      { metric: "App Store Rating", improvement: "4.8/5", icon: Award },
    ],
    duration: "4 months",
    impact: "High",
    category: "Mobile",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    subtitle: "Building a comprehensive merchant analytics platform",
    challenge:
      "Merchants needed real-time insights into their sales, inventory, and customer behavior, but the existing dashboard was slow and provided limited visualization options.",
    role: "Senior Frontend Developer",
    solution:
      "Built a real-time dashboard with WebSocket connections, interactive charts, and customizable widgets. Implemented data virtualization for handling large datasets efficiently.",
    technologies: [
      "Vue.js",
      "D3.js",
      "WebSockets",
      "Chart.js",
      "Vuex",
      "WebWorkers",
    ],
    outcomes: [
      { metric: "Data Processing", improvement: "10x faster", icon: BarChart3 },
      { metric: "User Engagement", improvement: "+60%", icon: Users },
      { metric: "Decision Speed", improvement: "3x faster", icon: Target },
      { metric: "Platform Adoption", improvement: "+85%", icon: TrendingUp },
    ],
    duration: "5 months",
    impact: "High",
    category: "Analytics",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Design System & Component Library",
    subtitle: "Creating a scalable design system for the platform",
    challenge:
      "Multiple teams were building inconsistent UI components, leading to design debt, slower development cycles, and poor user experience across different platform areas.",
    role: "Frontend Architect & Design System Lead",
    solution:
      "Developed a comprehensive design system with reusable components, design tokens, and automated testing. Created documentation and migration tools for existing projects.",
    technologies: [
      "Storybook",
      "Styled Components",
      "Design Tokens",
      "Jest",
      "Chromatic",
      "Figma API",
    ],
    outcomes: [
      { metric: "Development Speed", improvement: "+40%", icon: Code },
      { metric: "Design Consistency", improvement: "95%", icon: Shield },
      { metric: "Bug Reduction", improvement: "-55%", icon: Target },
      { metric: "Team Adoption", improvement: "100%", icon: Users },
    ],
    duration: "6 months",
    impact: "Very High",
    category: "Architecture",
    color: "from-orange-500 to-red-500",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Real-world challenges I&apos;ve solved at Zid, showcasing my
            approach to complex frontend problems and the measurable impact of
            my solutions.
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <div className="space-y-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Case Study Header */}
              <div className="p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-3 h-3 rounded-full bg-gradient-to-r ${study.color}`}
                      />
                      <span className="text-sm font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wide">
                        {study.category}
                      </span>
                      <span className="text-sm text-neutral-400">•</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400">
                        {study.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {study.title}
                    </h3>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {study.subtitle}
                    </p>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        study.impact === "Very High"
                          ? "bg-red-100 text-red-800 dark:bg-red-900/20 dark:text-red-300"
                          : "bg-orange-100 text-orange-800 dark:bg-orange-900/20 dark:text-orange-300"
                      }`}
                    >
                      {study.impact} Impact
                    </span>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center">
                      <Target className="w-5 h-5 mr-2 text-red-500" />
                      Challenge
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center">
                      <Code className="w-5 h-5 mr-2 text-green-500" />
                      Solution
                    </h4>
                    <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Role */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-blue-500" />
                    My Role
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {study.role}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-purple-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-full text-sm font-medium border border-neutral-200 dark:border-neutral-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4 flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-green-500" />
                    Measurable Outcomes
                  </h4>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {study.outcomes.map((outcome, outcomeIndex) => (
                      <motion.div
                        key={outcome.metric}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.4,
                          delay: outcomeIndex * 0.1,
                        }}
                        viewport={{ once: true }}
                        className="bg-white dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <outcome.icon className="w-5 h-5 text-primary-600" />
                          <span className="text-lg font-bold text-green-600 dark:text-green-400">
                            {outcome.improvement}
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400">
                          {outcome.metric}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-6 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-xl"
        >
          <div className="flex items-start gap-4">
            <Shield className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-100 mb-2">
                Confidentiality Notice
              </h4>
              <p className="text-amber-800 dark:text-amber-200 leading-relaxed">
                Due to the internal nature of my work at Zid, I can&apos;t share
                source code publicly, but I&apos;m happy to discuss the
                technical details, architecture decisions, and implementation
                strategies in a live conversation.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
            Want to Learn More?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
            I&apos;d love to discuss these projects in detail and share how my
            experience can benefit your team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Schedule a Discussion
            </Button>
            <Button size="lg" variant="outline">
              <ChevronRight className="w-4 h-4 mr-2" />
              View My Resume
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
