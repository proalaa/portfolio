"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Zap,
  CheckCircle,
  Clock,
  Lightbulb,
} from "lucide-react";
import { projects, Project } from "@/content/projects";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", label: "All Features", count: projects.length },
  {
    id: "dashboard",
    label: "Dashboard",
    count: projects.filter((p) => p.category === "dashboard").length,
  },
  {
    id: "ui-ux",
    label: "UI/UX",
    count: projects.filter((p) => p.category === "ui-ux").length,
  },
  {
    id: "security",
    label: "Security",
    count: projects.filter((p) => p.category === "security").length,
  },
  {
    id: "performance",
    label: "Performance",
    count: projects.filter((p) => p.category === "performance").length,
  },
  {
    id: "integration",
    label: "Integration",
    count: projects.filter((p) => p.category === "integration").length,
  },
];

const statusIcons = {
  completed: CheckCircle,
  "in-progress": Clock,
  concept: Lightbulb,
};

const statusColors = {
  completed: "text-green-600 dark:text-green-400",
  "in-progress": "text-yellow-600 dark:text-yellow-400",
  concept: "text-purple-600 dark:text-purple-400",
};

export function Features() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="features" className="py-20 bg-white dark:bg-neutral-950">
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
            Featured Features
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of key features I&apos;ve developed at Zid, demonstrating
            my approach to solving real-world challenges and improving the
            merchant experience.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">
                ({category.count})
              </span>
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-neutral-50 dark:bg-neutral-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900/20 dark:to-primary-800/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-transparent" />
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span
                      className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-white/90 dark:bg-neutral-800/90 ${
                        statusColors[project.status]
                      }`}
                    >
                      {(() => {
                        const Icon = statusIcons[project.status];
                        return <Icon className="w-3 h-3" />;
                      })()}
                      {project.status.replace("-", " ")}
                    </span>
                    {project.featured && (
                      <span className="text-xs font-medium px-2 py-1 rounded-full bg-yellow-100 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400">
                        Featured
                      </span>
                    )}
                  </div>
                  <div className="absolute bottom-4 right-4 text-xs text-neutral-500 dark:text-neutral-400 bg-white/90 dark:bg-neutral-800/90 px-2 py-1 rounded">
                    {project.year}
                  </div>

                  {/* Animated Tech Stack */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <motion.div
                          key={tech}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                          className="w-8 h-8 bg-primary-600/20 rounded-lg flex items-center justify-center text-xs font-mono text-primary-700 dark:text-primary-300"
                        >
                          {tech.slice(0, 2)}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.demoUrl && (
                        <Button size="sm" variant="ghost" className="p-2">
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button size="sm" variant="ghost" className="p-2">
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                    </div>
                  </div>

                  <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Impact Preview */}
                  {project.impact.length > 0 && (
                    <div className="flex items-center text-xs text-neutral-500 dark:text-neutral-400">
                      <Zap className="w-3 h-3 mr-1 text-primary-600 dark:text-primary-400" />
                      {project.impact[0]}
                    </div>
                  )}
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Interested in seeing more of my work or discussing how I can
            contribute to your team?
          </p>
          <Button
            size="lg"
            className="bg-primary-600 hover:bg-primary-700 text-white"
          >
            Let&apos;s Connect
          </Button>
        </motion.div>
      </div>

      {/* Feature Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-neutral-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                      {selectedProject.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {selectedProject.year}
                      </span>
                      <span
                        className={`flex items-center gap-1 ${
                          statusColors[selectedProject.status]
                        }`}
                      >
                        {(() => {
                          const Icon = statusIcons[selectedProject.status];
                          return <Icon className="w-4 h-4" />;
                        })()}
                        {selectedProject.status.replace("-", " ")}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 mb-8 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {/* Challenges */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                      Challenges
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                      Solutions
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, index) => (
                        <li
                          key={index}
                          className="flex items-start text-sm text-neutral-600 dark:text-neutral-400"
                        >
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Impact */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    Impact & Results
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.impact.map((impact, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-neutral-600 dark:text-neutral-400"
                      >
                        <Zap className="w-4 h-4 text-primary-600 dark:text-primary-400 mt-0.5 mr-3 flex-shrink-0" />
                        {impact}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4">
                  {selectedProject.demoUrl && (
                    <Button className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Demo
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
