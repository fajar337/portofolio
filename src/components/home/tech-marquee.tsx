"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";

export function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="overflow-hidden border-y border-border py-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Row 1 - left to right */}
        <div className="group mb-4 flex gap-12 whitespace-nowrap">
          <div className="animate-marquee flex gap-12 [animation-play-state:running] group-hover:[animation-play-state:paused]">
            {doubled.map((tech, i) => (
              <span
                key={`a-${tech}-${i}`}
                className="text-sm font-medium text-muted/30 transition-colors duration-300 hover:text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 - right to left */}
        <div className="group flex gap-12 whitespace-nowrap">
          <div className="animate-marquee flex gap-12 direction-reverse [animation-direction:reverse] [animation-play-state:running] group-hover:[animation-play-state:paused]">
            {[...doubled].reverse().map((tech, i) => (
              <span
                key={`b-${tech}-${i}`}
                className="text-sm font-medium text-muted/30 transition-colors duration-300 hover:text-accent-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
