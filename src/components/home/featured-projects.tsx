"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function FeaturedProjects() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="mt-2 text-sm text-muted">
              Some of my recent work
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:flex"
          >
            View all
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group block rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:border-white/10 hover:bg-card-hover hover:shadow-lg hover:shadow-purple-500/5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-xs text-muted">{project.date}</span>
                  <ArrowUpRight className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
                <h3 className="mb-2 text-lg font-semibold group-hover:text-white">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm text-muted line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
