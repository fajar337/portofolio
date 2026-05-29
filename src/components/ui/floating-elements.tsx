"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface FloatingBadgeProps {
  label: string;
  color: "violet" | "cyan" | "pink" | "amber" | "emerald";
  position: { top?: string; bottom?: string; left?: string; right?: string };
  speed?: number;
  rotate?: number;
  delay?: number;
  side?: "left" | "right";
}

const colorMap = {
  violet: "from-violet-500/20 to-purple-600/20 border-violet-500/30 text-violet-300 shadow-violet-500/10",
  cyan: "from-cyan-500/20 to-blue-500/20 border-cyan-500/30 text-cyan-300 shadow-cyan-500/10",
  pink: "from-pink-500/20 to-rose-500/20 border-pink-500/30 text-pink-300 shadow-pink-500/10",
  amber: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300 shadow-amber-500/10",
  emerald: "from-emerald-500/20 to-green-500/20 border-emerald-500/30 text-emerald-300 shadow-emerald-500/10",
};

export function FloatingBadge({
  label,
  color,
  position,
  speed = 0.3,
  rotate = 0,
  delay = 0,
  side = "left",
}: FloatingBadgeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 120, speed * -120]);
  const r = useTransform(scrollYProgress, [0, 1], [-rotate, rotate]);

  return (
    <div ref={ref} className="absolute pointer-events-none" style={position}>
      <motion.div
        initial={{ opacity: 0, x: side === "left" ? -80 : 80, scale: 0.6 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ delay: 0.8 + delay, duration: 0.8, ease: "easeOut" }}
        style={{ y, rotate: r }}
      >
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
          className={`rounded-xl border bg-gradient-to-br px-4 py-2 text-xs font-medium shadow-lg backdrop-blur-sm ${colorMap[color]}`}
        >
          {label}
        </motion.div>
      </motion.div>
    </div>
  );
}

export function FloatingDot({
  position,
  color,
  size = 8,
  speed = 0.5,
}: {
  position: { top?: string; bottom?: string; left?: string; right?: string };
  color: string;
  size?: number;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, speed * -80]);

  return (
    <div ref={ref} className="absolute pointer-events-none" style={position}>
      <motion.div
        style={{ y }}
        className="rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <div
          className="rounded-full"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            boxShadow: `0 0 ${size * 3}px ${color}, 0 0 ${size * 6}px ${color}40`,
          }}
        />
      </motion.div>
    </div>
  );
}
