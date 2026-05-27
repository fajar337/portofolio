"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import Link from "next/link";
import { siteConfig } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export function HeroSection() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-6">
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow [animation-delay:1s]" />
        <div className="absolute -bottom-32 left-1/3 h-[300px] w-[300px] rounded-full bg-violet-500/8 blur-[100px] animate-pulse-glow [animation-delay:2s]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs text-muted">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text glow-text">{siteConfig.name}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-lg text-muted sm:text-xl"
        >
          A passionate{" "}
          <span className="text-foreground font-medium">Web Developer</span>{" "}
          crafting modern web experiences with{" "}
          <span className="text-foreground font-medium">Laravel</span>,{" "}
          <span className="text-foreground font-medium">React</span>, and{" "}
          <span className="text-foreground font-medium">Next.js</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--gradient-from)] to-[var(--gradient-to)] px-6 py-3 text-sm font-medium text-white transition-shadow hover:shadow-lg hover:shadow-purple-500/25"
          >
            <FileText className="h-4 w-4" />
            View Projects
            <span className="absolute inset-0 -z-10 bg-gradient-to-r from-[var(--gradient-to)] to-[var(--gradient-from)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </Link>
          <Link
            href="/github"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-white/[0.06]"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub Dashboard
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-5 w-5 text-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
