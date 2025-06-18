"use client";

import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Zap,
  Users,
  Globe,
  Award,
  MapPin,
  Calendar,
  GitPullRequest,
} from "lucide-react";

const timeline = [
  {
    year: "2020 - Present",
    title: "Frontend Developer",
    company: "Zid",
    location: "Saudi Arabia",
    description:
      "Working as a frontend developer on the e-commerce platform serving thousands of merchants across the Middle East. Contributing to platform features, UI/UX improvements, and technical enhancements.",
    achievements: [
      "Developed and maintained critical platform features",
      "Implemented UI/UX improvements across the dashboard",
      "Contributed to performance optimizations",
      "Worked on various projects including Zad, Hermes, and security features",
    ],
  },
  {
    year: "2020",
    title: "Freelance Fullstack Developer",
    company: "Talap",
    location: "Yemen",
    description:
      "Brief freelance engagement working with Laravel for a company that is no longer in operation. Gained experience in fullstack development and modern web technologies.",
    achievements: [
      "Developed web applications using Laravel",
      "Gained fullstack development experience",
      "Worked with modern web technologies",
      "Learned agile development practices",
    ],
  },
];

const stats = [
  { label: "Years of Experience", value: "4+", icon: Calendar },
  { label: "Pull Requests Opened", value: "454+", icon: GitPullRequest },
  { label: "Commits Authored", value: "2,536+", icon: Zap },
  { label: "Code Reviews", value: "257+", icon: Users },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-neutral-50 dark:bg-neutral-900">
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
            About Me
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A passionate frontend developer based in Saudi Arabia. I believe in
            creating digital experiences that make a difference.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full mb-4">
                <stat.icon className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <div className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-neutral-600 dark:text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Personal Story */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed">
              <p>
                My passion for technology and web development started during my
                university years. The digital world fascinated me with its
                endless possibilities to create, innovate, and solve real-world
                problems.
              </p>
              <p>
                I started my professional journey in 2020 with a brief freelance
                engagement at Talap, where I worked with Laravel and gained
                valuable fullstack development experience. This experience
                helped me understand both frontend and backend development.
              </p>
              <p>
                Since 2020, I&apos;ve been working at Zid, a leading e-commerce
                platform in the Middle East. Here, I&apos;ve had the opportunity
                to work on products that serve thousands of merchants and
                millions of customers across the region, focusing on frontend
                development and user experience.
              </p>
              <p>
                I&apos;m passionate about creating inclusive, accessible, and
                performant web experiences. When I&apos;m not coding,
                you&apos;ll find me exploring new technologies, contributing to
                open source projects, or sharing knowledge with the developer
                community.
              </p>
            </div>

            {/* Location */}
            <div className="flex items-center mt-6 text-neutral-600 dark:text-neutral-400">
              <MapPin className="w-5 h-5 mr-2 text-primary-600 dark:text-primary-400" />
              <span>Currently based in Saudi Arabia</span>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Skills & Expertise
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <Code className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    React & Vue.js
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Built and maintained complex dashboards and e-commerce
                    features at Zid using React and Vue.js, focusing on
                    scalability and maintainability.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Zap className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Performance Optimization
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Improved load times and user experience for high-traffic
                    platforms through code splitting, lazy loading, and best
                    practices.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Palette className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    UI/UX Design
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Designed and implemented modern, accessible interfaces with
                    a focus on usability and aesthetics for e-commerce
                    merchants.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Team Collaboration
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Collaborated with cross-functional teams, participated in
                    code reviews, and mentored junior developers to deliver
                    high-quality features.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Globe className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    E-commerce Platforms
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Deep experience building and enhancing e-commerce solutions,
                    integrating payment gateways, and optimizing for conversion.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Code className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    JavaScript / TypeScript
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Expert in modern JavaScript and TypeScript, applying best
                    practices for maintainable, robust, and scalable codebases.
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Users className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                <div>
                  <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                    Laravel (Backend)
                  </div>
                  <div className="text-neutral-600 dark:text-neutral-400 text-sm">
                    Built and maintained backend APIs and admin panels using
                    Laravel, supporting seamless integration with frontend apps.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-12 text-center">
            Professional Timeline
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-white dark:border-neutral-900 z-10"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="bg-white dark:bg-neutral-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 px-3 py-1 rounded-full">
                        {item.year}
                      </span>
                      <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400">
                        <MapPin className="w-4 h-4 mr-1" />
                        {item.location}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                      {item.company}
                    </p>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                      {item.description}
                    </p>
                    <ul className="space-y-1">
                      {item.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="flex items-start text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <Award className="w-4 h-4 mr-2 mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
