"use client";

import { useEffect, useRef } from "react";
import { getRandomFloat, getRandomInt } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  color: string;
  shape: "circle" | "square" | "triangle";
}

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: getRandomFloat(0, canvas.width),
          y: getRandomFloat(0, canvas.height),
          size: getRandomFloat(2, 6),
          speedX: getRandomFloat(-0.5, 0.5),
          speedY: getRandomFloat(-0.5, 0.5),
          opacity: getRandomFloat(0.1, 0.6),
          color: `hsl(${getRandomInt(20, 40)}, 70%, 60%)`, // Yemen-inspired warm colors
          shape: ["circle", "square", "triangle"][getRandomInt(0, 2)] as
            | "circle"
            | "square"
            | "triangle",
        });
      }

      particlesRef.current = particles;
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.globalAlpha = particle.opacity;
      ctx.fillStyle = particle.color;

      switch (particle.shape) {
        case "circle":
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
          ctx.fill();
          break;
        case "square":
          ctx.fillRect(
            particle.x - particle.size / 2,
            particle.y - particle.size / 2,
            particle.size,
            particle.size
          );
          break;
        case "triangle":
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y - particle.size / 2);
          ctx.lineTo(
            particle.x - particle.size / 2,
            particle.y + particle.size / 2
          );
          ctx.lineTo(
            particle.x + particle.size / 2,
            particle.y + particle.size / 2
          );
          ctx.closePath();
          ctx.fill();
          break;
      }

      ctx.restore();
    };

    const updateParticle = (particle: Particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;

      // Wrap around screen edges
      if (particle.x < -particle.size)
        particle.x = canvas.width + particle.size;
      if (particle.x > canvas.width + particle.size)
        particle.x = -particle.size;
      if (particle.y < -particle.size)
        particle.y = canvas.height + particle.size;
      if (particle.y > canvas.height + particle.size)
        particle.y = -particle.size;

      // Subtle opacity animation
      particle.opacity +=
        Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.002;
      particle.opacity = Math.max(0.1, Math.min(0.6, particle.opacity));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
      style={{ zIndex: -1 }}
    />
  );
}
