"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ParallaxDecoration() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const y3 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {/* Floating gradient orb - left */}
      <motion.div
        style={{ y: y1, rotate: rotate1 }}
        className="absolute -left-20 top-1/4 h-40 w-40 rounded-full bg-purple-600/[0.04] blur-3xl"
      />
      {/* Floating gradient orb - right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-16 top-1/2 h-32 w-32 rounded-full bg-cyan-500/[0.04] blur-3xl"
      />
      {/* Small accent dot */}
      <motion.div
        style={{ y: y3, rotate: rotate2 }}
        className="absolute left-1/4 bottom-1/4 h-24 w-24 rounded-full bg-violet-500/[0.03] blur-2xl"
      />
    </div>
  );
}
