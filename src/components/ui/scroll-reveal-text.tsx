"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function ScrollRevealText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      <p className="flex flex-wrap justify-center gap-x-2 gap-y-1">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word key={`${word}-${i}`} range={[start, end]} progress={scrollYProgress}>
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="inline-block text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
    >
      {children}
    </motion.span>
  );
}
