"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/skills";

export function TechMarquee() {
  const doubled = [...techStack, ...techStack];

  return (
    <section className="overflow-hidden border-y border-border py-6">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {/* Row 1 */}
        <div className="group flex gap-8 whitespace-nowrap">
          <div className="animate-marquee flex gap-8 [animation-play-state:running] group-hover:[animation-play-state:paused]">
            {doubled.map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="text-sm font-medium text-muted/50 transition-colors hover:text-foreground"
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
