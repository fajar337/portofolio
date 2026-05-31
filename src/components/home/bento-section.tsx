"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Code2, Database, Palette, Smartphone } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { useParallax } from "@/hooks/use-parallax";
import { siteConfig } from "@/lib/constants";
import { useLanguage } from "@/components/language/language-provider";

const bentoItems = [
  {
    titleKey: "bento.frontendTitle",
    descriptionKey: "bento.frontendDescription",
    icon: Palette,
    gradient: "from-violet-500/10 to-purple-600/10",
    border: "hover:border-violet-500/30",
    span: "sm:col-span-2",
    direction: "left" as const,
  },
  {
    titleKey: "bento.backendTitle",
    descriptionKey: "bento.backendDescription",
    icon: Database,
    gradient: "from-cyan-500/10 to-blue-500/10",
    border: "hover:border-cyan-500/30",
    span: "",
    direction: "right" as const,
  },
  {
    titleKey: "bento.desktopTitle",
    descriptionKey: "bento.desktopDescription",
    icon: Code2,
    gradient: "from-amber-500/10 to-orange-500/10",
    border: "hover:border-amber-500/30",
    span: "",
    direction: "left" as const,
  },
  {
    titleKey: "bento.responsiveTitle",
    descriptionKey: "bento.responsiveDescription",
    icon: Smartphone,
    gradient: "from-pink-500/10 to-rose-500/10",
    border: "hover:border-pink-500/30",
    span: "sm:col-span-2",
    direction: "right" as const,
  },
];

function getInitial(direction: "left" | "right" | "bottom") {
  switch (direction) {
    case "left":
      return { opacity: 0, x: -64, y: 44 };
    case "right":
      return { opacity: 0, x: 64, y: -44 };
    case "bottom":
      return { opacity: 0, y: 40 };
  }
}

export function BentoSection() {
  const { t } = useLanguage();
  const { ref, y } = useParallax(0.1);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          style={{ y }}
          className="grid gap-4 sm:grid-cols-3"
        >
          {bentoItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.titleKey}
                initial={getInitial(item.direction)}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.6, ease: "easeOut" }}
                className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:bg-card-hover ${item.border} ${item.span}`}
              >
                <div className={`absolute inset-0 -z-10 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                <Icon className="mb-3 h-6 w-6 text-muted transition-colors duration-300 group-hover:text-foreground" />
                <h3 className="mb-1 text-base font-semibold">{t(item.titleKey)}</h3>
                <p className="text-sm leading-relaxed text-muted">{t(item.descriptionKey)}</p>
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            className="sm:col-span-3"
          >
            <Link
              href="/github"
              className="group relative flex items-center justify-between overflow-hidden rounded-2xl border border-border bg-gradient-to-r from-violet-500/5 via-purple-500/5 to-cyan-500/5 p-6 transition-all duration-500 hover:border-violet-500/20 hover:from-violet-500/10 hover:via-purple-500/10 hover:to-cyan-500/10"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.05]">
                  <GithubIcon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{t("home.githubCtaTitle")}</h3>
                  <p className="text-sm text-muted">
                    @{siteConfig.githubUsername} - {t("home.githubCtaSubtitle")}
                  </p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
