"use client";

import { motion } from "framer-motion";
import {
  ChevronRight,
  TrendingUp,
  Users,
  Shield,
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
    title: "Enhancing Charity Store Experience",
    subtitle: "Zad Project - Adapting platform for non-profit organizations",
    challenge:
      "The Zad Project needed to improve the experience for charity stores using the Merchant Dashboard. The biggest challenge was applying a new identity without a centralized theming system, requiring extensive research and consultation with team members.",
    role: "Frontend Developer",
    solution:
      "Built a reliable theming solution from scratch to adapt the platform's UI and overall experience to match the identity and operational needs of non-profit organizations. Implemented new color themes and visual adjustments across the entire dashboard.",
    technologies: [
      "Vue.js",
      "CSS3",
      "SCSS",
      "Design Systems",
      "UI/UX Design",
      "Theme Architecture",
    ],
    outcomes: [
      { metric: "Onboarding Experience", improvement: "Smoother", icon: Users },
      { metric: "Platform Relevance", improvement: "Enhanced", icon: Target },
      { metric: "Trust Factor", improvement: "Improved", icon: Shield },
      { metric: "Merchant Satisfaction", improvement: "Positive", icon: Award },
    ],
    duration: "2 months",
    impact: "High",
    category: "UI/UX",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Supporting Future Scalability",
    subtitle: "Hermes Project - React & Remix.js architecture",
    challenge:
      "Switching from a legacy Vue-based system to React + Remix was a significant learning curve. The team needed to build and refine the merchant-facing UI while preparing Hermes for public launch.",
    role: "Frontend Developer & Team Collaborator",
    solution:
      "Allocated self-learning time and built internal sessions to bridge skill gaps efficiently. Contributed to building and refining the merchant-facing UI, implementing new features, fixing bugs, and helping prepare for public launch.",
    technologies: [
      "React",
      "Remix.js",
      "TypeScript",
      "Vue.js",
      "JavaScript",
      "Frontend Architecture",
    ],
    outcomes: [
      { metric: "Team Onboarding", improvement: "Accelerated", icon: Users },
      {
        metric: "Production Readiness",
        improvement: "Reduced Time",
        icon: Clock,
      },
      { metric: "Skill Development", improvement: "Enhanced", icon: Code },
      {
        metric: "Architecture Transition",
        improvement: "Successful",
        icon: TrendingUp,
      },
    ],
    duration: "3 months",
    impact: "High",
    category: "Architecture",
    color: "from-green-500 to-emerald-500",
  },
  {
    id: 3,
    title: "Enabling Merchant Control",
    subtitle: "Session Timeout Configuration - Security & flexibility",
    challenge:
      "Store owners needed more control over their account security settings, specifically the ability to configure their own session timeout settings through the dashboard.",
    role: "Frontend Developer",
    solution:
      "Implemented the front-end logic and UI, enabling configuration options to be seamlessly accessible to merchants. This gave them more control over their account security and aligned with the mission to improve platform flexibility.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "UI Components",
      "Form Handling",
      "Security Features",
      "Dashboard Integration",
    ],
    outcomes: [
      { metric: "Merchant Control", improvement: "Enhanced", icon: Shield },
      { metric: "Security Flexibility", improvement: "Improved", icon: Target },
      {
        metric: "Platform Flexibility",
        improvement: "Increased",
        icon: TrendingUp,
      },
      { metric: "User Experience", improvement: "Better", icon: Users },
    ],
    duration: "1 month",
    impact: "Medium",
    category: "Security",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: 4,
    title: "Continuous Enhancement",
    subtitle: "Enterprise & Pro Quick Wins (Patch 2) - Platform improvements",
    challenge:
      "Enterprise and professional merchants had long-standing feedback that needed to be addressed. Multiple quick improvements were needed throughout the merchant dashboard to enhance usability.",
    role: "Frontend Developer",
    solution:
      "Worked across several user stories, delivering UI/UX improvements, bug fixes, and small enhancements throughout the merchant dashboard. These cumulative changes contributed to smoother usability for high-tier merchants.",
    technologies: [
      "Vue.js",
      "JavaScript",
      "CSS3",
      "UI/UX Design",
      "Bug Fixes",
      "Dashboard Features",
    ],
    outcomes: [
      { metric: "Usability", improvement: "Smoother", icon: Users },
      {
        metric: "Merchant Feedback",
        improvement: "Addressed",
        icon: MessageCircle,
      },
      { metric: "Platform Quality", improvement: "Enhanced", icon: Award },
      {
        metric: "High-tier Satisfaction",
        improvement: "Improved",
        icon: Target,
      },
    ],
    duration: "2 months",
    impact: "Medium",
    category: "Enhancement",
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
            Latest Case Studies
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A selection of real-world product contributions I&apos;ve made
            during my time at Zid. These studies highlight my role and the
            impact of my efforts on the platform.
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
            Want to See More?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6 max-w-2xl mx-auto">
            I&apos;d love to share more case studies and discuss how my
            experience can benefit your team. Let&apos;s connect and explore
            potential collaborations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary-600 hover:bg-primary-700 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Let&apos;s Connect
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
