"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { SectionHeading } from "@/components/ui/section-heading";
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
    <div className="px-6 py-24">
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
                "rounded-full border px-4 py-1.5 text-xs transition-all",
                activeFilter === filter
                  ? "border-accent bg-accent/10 text-accent"
                  : "border-border text-muted hover:border-white/10 hover:text-foreground"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-white/10 hover:bg-card-hover hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs text-muted">{project.date}</span>
                  <span className="rounded-full border border-border bg-white/[0.03] px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted">
                    {project.category}
                  </span>
                </div>

                <h3 className="mb-2 text-lg font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted line-clamp-2">
                  {project.description}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
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
                    className="inline-flex items-center gap-1 text-xs text-muted transition-colors hover:text-foreground"
                  >
                    Details
                    <ArrowUpRight className="h-3 w-3" />
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
