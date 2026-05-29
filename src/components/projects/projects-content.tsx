"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Folder } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
import { ParallaxDecoration } from "@/components/ui/parallax-decoration";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));
const filters = ["All", ...allTags];

export function ProjectsContent() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <div className="relative px-6 py-24">
      <ParallaxDecoration />
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Projects"
          subtitle="A collection of things I've built"
        />

        {/* Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "relative rounded-full border px-4 py-1.5 text-xs transition-all duration-300",
                activeFilter === filter
                  ? "border-accent bg-accent/10 text-accent shadow-sm shadow-accent/20"
                  : "border-border text-muted hover:border-white/10 hover:text-foreground"
              )}
            >
              {filter}
              {activeFilter === filter && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute inset-0 -z-10 rounded-full bg-accent/5"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Count */}
        <motion.p
          layout
          className="mb-6 text-center text-xs text-muted/60"
        >
          Showing {filtered.length} project{filtered.length !== 1 ? "s" : ""}
        </motion.p>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -10 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-white/10 hover:bg-card-hover hover:shadow-xl hover:shadow-purple-500/5"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.06]" />

                <div className="mb-4 flex items-center justify-between">
                  <Folder className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                  <span className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-white">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted transition-colors duration-300 group-hover:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 border-t border-border pt-4">
                  {project.githubUrl && (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted transition-colors hover:text-foreground"
                    >
                      <GithubIcon className="h-3.5 w-3.5" />
                      Source
                    </Link>
                  )}
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-accent"
                  >
                    Details
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
