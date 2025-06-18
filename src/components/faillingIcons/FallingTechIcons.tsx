"use client";

import { useEffect, useState } from "react";
import {
  Code,
  Zap,
  Palette,
  Globe,
  Shield,
  Cpu,
  Database,
  Cloud,
  Rocket,
  MessageCircle,
  Download,
  ChevronDown,
} from "lucide-react";

const ICONS = [
  Code,
  Zap,
  Palette,
  Globe,
  Shield,
  Cpu,
  Database,
  Cloud,
  Rocket,
  MessageCircle,
  Download,
  ChevronDown,
];

const ICON_COLORS = [
  "#ed7c4a", // primary
  "#0ea5e9", // secondary
  "#eab308", // accent
  "#a3a3a3", // neutral
  "#6366f1", // blue-violet
  "#10b981", // green
];

const ICON_COUNT = 10;

type TechIcon = {
  Icon: React.ComponentType<{
    size: number;
    color: string;
    style: React.CSSProperties;
  }>;
  color: string;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  opacity: number;
};

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export function FallingTechIcons() {
  const [icons, setIcons] = useState<TechIcon[]>([]);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const arr: TechIcon[] = Array.from({ length: ICON_COUNT }).map(() => {
      const Icon = ICONS[Math.floor(Math.random() * ICONS.length)];
      const color = ICON_COLORS[Math.floor(Math.random() * ICON_COLORS.length)];
      const left = randomBetween(5, 95); // vw
      const delay = randomBetween(0, 2); // seconds
      const duration = randomBetween(5, 7); // seconds
      const size = randomBetween(28, 48); // px
      const rotate = randomBetween(-30, 30); // deg
      const opacity = randomBetween(0.7, 1);
      return { Icon, color, left, delay, duration, size, rotate, opacity };
    });
    setIcons(arr);
    const maxDuration = Math.max(...arr.map((f) => f.duration + f.delay));
    const timeout = setTimeout(
      () => setVisible(false),
      (maxDuration + 0.5) * 1000
    );
    return () => clearTimeout(timeout);
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 w-full h-full overflow-hidden"
      style={{ top: 0, left: 0 }}
    >
      {icons.map((f, i) => (
        <span
          key={i}
          style={{
            position: "absolute",
            left: `${f.left}vw`,
            top: `-${f.size}px`,
            width: f.size,
            height: f.size,
            opacity: f.opacity,
            animation: `icon-fall-once ${f.duration}s linear ${f.delay}s 1 both`,
            transform: `rotate(${f.rotate}deg)`,
          }}
        >
          <f.Icon size={f.size} color={f.color} style={{ opacity: 0.85 }} />
        </span>
      ))}
      <style>{`
        @keyframes icon-fall-once {
          0% {
            transform: translateY(0) scale(1) rotate(0deg);
            opacity: 0.7;
          }
          10% {
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) scale(1.05) rotate(20deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
