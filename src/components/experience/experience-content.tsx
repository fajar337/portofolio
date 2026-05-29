"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/data/experience";

export function ExperienceContent() {
  const { ref: timelineRef, y: timelineY } = useParallax(0.1);

  return (
    <div className="overflow-hidden px-5 py-20 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey and education"
        />

        <motion.div ref={timelineRef} style={{ y: timelineY }} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 h-full w-px bg-border md:left-1/2" />

          {experiences.map((exp, i) => {
            const Icon = exp.type === "work" ? Briefcase : GraduationCap;
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`relative mb-12 flex items-start gap-6 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full border-2 border-accent bg-background md:left-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                </div>

                {/* Content */}
                <div
                  className={`ml-12 w-[calc(100%-3rem)] text-left md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div
                    className={`rounded-xl border border-border bg-card p-5 transition-colors hover:border-white/10 ${
                      isLeft ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <div className={`mb-2 flex items-center gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                      <Icon className="h-4 w-4 text-accent" />
                      <span className="text-xs uppercase tracking-wider text-accent">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold">{exp.title}</h3>
                    <p className="text-sm text-muted">{exp.organization}</p>
                    <p className="mt-1 text-xs text-muted/60">
                      {exp.startDate} - {exp.endDate} &middot; {exp.location}
                    </p>
                    <ul className={`mt-3 space-y-1 ${isLeft ? "md:text-right" : ""}`}>
                      {exp.description.map((desc, di) => (
                        <li key={di} className="text-sm text-muted">
                          {desc}
                        </li>
                      ))}
                    </ul>
                    <div className={`mt-3 flex flex-wrap gap-1.5 ${isLeft ? "md:justify-end" : ""}`}>
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="rounded-full border border-border bg-white/[0.03] px-2 py-0.5 text-[10px] text-muted"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
