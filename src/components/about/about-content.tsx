"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/lib/constants";

export function AboutContent() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="Get to know who I am and what I do"
        />

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <div className="mx-auto mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-card">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://github.com/${siteConfig.githubUsername}.png`}
              alt={siteConfig.name}
              className="h-full w-full object-cover"
              width={112}
              height={112}
            />
          </div>
          <p className="text-muted leading-relaxed">
            Hi! I&apos;m <span className="font-medium text-foreground">{siteConfig.name}</span>,
            a passionate web developer from Indonesia. I love building modern web applications
            with clean code and great user experience. My tech stack includes{" "}
            <span className="font-medium text-foreground">Laravel</span>,{" "}
            <span className="font-medium text-foreground">React</span>,{" "}
            <span className="font-medium text-foreground">Next.js</span>, and{" "}
            <span className="font-medium text-foreground">Java</span>.
          </p>
        </motion.div>

        {/* Skills */}
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5 }}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-muted transition-colors hover:border-white/10 hover:text-foreground"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
