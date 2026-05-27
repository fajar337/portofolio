"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import type { Project } from "@/data/projects";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>

          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-xs uppercase tracking-wider text-muted">
              {project.category}
            </span>
            <span className="text-sm text-muted">{project.date}</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold tracking-tight">
            {project.title}
          </h1>

          <p className="mb-8 text-lg text-muted leading-relaxed">
            {project.longDescription}
          </p>

          <div className="mb-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-white/[0.03] px-3 py-1 text-sm text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/[0.06]"
              >
                <GithubIcon className="h-4 w-4" />
                View Source
              </Link>
            )}
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-5 py-2.5 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-purple-500/25"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
