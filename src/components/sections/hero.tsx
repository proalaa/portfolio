"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  MessageCircle,
  Code,
  Zap,
  Palette,
  Globe,
  Shield,
  Cpu,
  Database,
  Cloud,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedBackground } from "@/components/ui/animated-background";

const roles = [
  "Frontend Developer",
  "React Specialist",
  "UI/UX Enthusiast",
  "Problem Solver",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText((prev) =>
          isDeleting
            ? currentRole.substring(0, prev.length - 1)
            : currentRole.substring(0, prev.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentRoleIndex, displayedText, isDeleting]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const nameVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.6, -0.05, 0.01, 0.99],
        delay: 0.3,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <AnimatedBackground />

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-white/80 to-white/95 dark:from-neutral-950/95 dark:via-neutral-950/80 dark:to-neutral-950/95" />

      {/* Subtle Glow Effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-500/5 via-transparent to-transparent" />

      {/* Professional Grid Lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-400/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary-400/20 to-transparent" />
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-accent-400/20 to-transparent" />
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-primary-400/20 to-transparent" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-5xl mx-auto">
          {/* Greeting with enhanced animation */}
          <motion.div variants={itemVariants} className="mb-4">
            <motion.p
              className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-400 font-light tracking-wide"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="inline-block" style={{ direction: "rtl" }}>
                مرحباً، أنا
              </span>
              <span className="mx-4 text-primary-500">•</span>
              <span className="inline-block">Hello, I&apos;m</span>
            </motion.p>
          </motion.div>

          {/* Name with professional animation */}
          <motion.div variants={nameVariants} className="mb-6">
            <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              {/* First name with clean animation */}
              <motion.div
                className="block mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              >
                <span
                  className="inline-block text-neutral-900 dark:text-neutral-100"
                  style={{
                    background:
                      "linear-gradient(135deg, #3b82f6, #8b5cf6, #06b6d4, #10b981)",
                    backgroundSize: "300% 300%",
                    animation: "gradient-shift 4s ease-in-out infinite",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Aladdin Mohamed
                </span>
              </motion.div>

              {/* Last name with subtle animation */}
              <motion.div
                className="block"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
              >
                <span className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  Al-Haddad
                </span>
              </motion.div>
            </motion.h1>
          </motion.div>

          {/* Dynamic Role with enhanced typewriter */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="text-xl sm:text-2xl lg:text-3xl text-neutral-700 dark:text-neutral-300 h-12 flex items-center justify-center">
              <motion.span
                className="font-mono relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <span className="relative">
                  {displayedText}
                  <motion.span
                    className="absolute -right-1 top-0 w-0.5 h-full bg-primary-600"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                  />
                </span>
              </motion.span>
            </div>
          </motion.div>

          {/* Description with slide-in effect */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.p
              className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              A passionate frontend developer from{" "}
              <motion.span
                className="text-primary-600 dark:text-primary-400 font-semibold relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Yemen
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary-600 dark:bg-primary-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.2, duration: 0.6 }}
                />
              </motion.span>
              , crafting beautiful and functional web experiences at{" "}
              <motion.span
                className="text-secondary-600 dark:text-secondary-400 font-semibold relative"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Zid
                <motion.div
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary-600 dark:bg-secondary-400"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 2.4, duration: 0.6 }}
                />
              </motion.span>
              . I love turning ideas into reality through code.
            </motion.p>
          </motion.div>

          {/* CTA Buttons with stagger animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden px-8 py-4 text-lg font-semibold cursor-pointer"
              >
                <motion.span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-xl"
                  >
                    →
                  </motion.div>
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary-700 to-secondary-700"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 text-lg font-semibold border-2 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                Get In Touch
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Button
                variant="ghost"
                size="lg"
                className="group px-8 py-4 text-lg font-semibold"
                asChild
              >
                <a
                  href="/Alaa_AldeenAlHaddad_Resume.pdf"
                  download="Alaa_AldeenAlHaddad_Resume.pdf"
                  aria-label="Download Alaa Aldeen Al Haddad's Resume (PDF)"
                  title="Download my resume as PDF"
                  className="flex flex-row items-center"
                >
                  <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.p
              className="text-sm text-neutral-500 dark:text-neutral-400 mb-4 font-medium tracking-wide"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              Scroll to explore
            </motion.p>
            <motion.button
              onClick={() => scrollToSection("about")}
              className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors p-2 rounded-full hover:bg-primary-50 dark:hover:bg-primary-950"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <ChevronDown className="w-6 h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Enhanced decorative elements */}
      <motion.div
        className="absolute top-32 left-10 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full opacity-30"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-10 w-20 h-20 bg-secondary-200 dark:bg-secondary-800 rounded-full opacity-30"
        animate={{
          y: [0, 20, 0],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-20 w-16 h-16 bg-accent-200 dark:bg-accent-800 rounded-full opacity-30"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Tech Icons */}
      <motion.div
        className="absolute top-1/4 right-16 text-primary-400/20"
        animate={{
          y: [0, -15, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-24 text-secondary-400/20"
        animate={{
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2],
          rotate: [0, 360, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Zap className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-16 text-accent-400/20"
        animate={{
          x: [0, 25, 0],
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <Palette className="w-7 h-7" />
      </motion.div>

      <motion.div
        className="absolute top-2/3 right-24 text-primary-400/15"
        animate={{
          y: [0, -10, 0],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, -360, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3,
        }}
      >
        <Globe className="w-5 h-5" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 right-8 text-secondary-400/15"
        animate={{
          x: [0, -20, 0],
          y: [0, 15, 0],
          opacity: [0.1, 0.4, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      >
        <Shield className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute top-1/2 right-32 text-accent-400/20"
        animate={{
          y: [0, 25, 0],
          opacity: [0.2, 0.5, 0.2],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <Cpu className="w-7 h-7" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-20 text-primary-400/15"
        animate={{
          x: [0, 15, 0],
          y: [0, -20, 0],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 180, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2.5,
        }}
      >
        <Database className="w-5 h-5" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-32 text-secondary-400/20"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.6, 0.2],
          scale: [1, 0.9, 1],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <Cloud className="w-6 h-6" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-8 text-accent-400/15"
        animate={{
          x: [0, -25, 0],
          opacity: [0.1, 0.4, 0.1],
          rotate: [0, -180, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3.5,
        }}
      >
        <Rocket className="w-5 h-5" />
      </motion.div>
    </section>
  );
}
