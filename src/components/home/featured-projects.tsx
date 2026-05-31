"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Folder } from "lucide-react";
import { useParallax } from "@/hooks/use-parallax";
import { projects } from "@/data/projects";
import { useLanguage } from "@/components/language/language-provider";

const featured = projects.filter((p) => p.featured).slice(0, 3);

export function FeaturedProjects() {
  const { language, t } = useLanguage();
  const { ref: headingRef, y: headingY } = useParallax(0.2);
  const { ref: gridRef, y: gridY } = useParallax(0.1);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          ref={headingRef}
          style={{ y: headingY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="gradient-text">{t("home.featuredTitle")}</span>
            </h2>
            <p className="mt-2 text-sm text-muted">{t("home.featuredSubtitle")}</p>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm text-muted transition-colors hover:text-foreground sm:flex"
          >
            {t("common.viewAll")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <motion.div
          ref={gridRef}
          style={{ y: gridY }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
            >
              <Link
                href={`/projects/${project.slug}`}
                className="group relative block overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-white/10 hover:bg-card-hover hover:shadow-xl hover:shadow-purple-500/5"
              >
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-[0.07]" />

                <div className="mb-4 flex items-center justify-between">
                  <Folder className="h-5 w-5 text-accent" />
                  <ArrowUpRight className="h-4 w-4 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </div>
                <h3 className="mb-2 text-lg font-semibold transition-colors duration-300 group-hover:text-white">
                  {language === "id" ? project.titleId ?? project.title : project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted line-clamp-2">
                  {language === "id" ? project.descriptionId : project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-white/[0.03] px-2.5 py-0.5 text-xs text-muted transition-colors duration-300 group-hover:border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 text-center sm:hidden"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-foreground"
          >
            {t("common.viewAllProjects")}
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
