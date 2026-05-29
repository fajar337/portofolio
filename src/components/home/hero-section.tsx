"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { FloatingBadge, FloatingDot } from "@/components/ui/floating-elements";
import { CanvasWrapper } from "@/components/three/canvas-wrapper";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.6], [0.03, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[calc(100svh-4rem)] items-center justify-center overflow-hidden px-5 py-10 sm:min-h-[calc(100vh-4rem)] sm:px-6 sm:py-0"
    >
      {/* 3D Scene - hidden on mobile */}
      <div className="hidden md:block">
        <CanvasWrapper />
      </div>

      {/* Fallback gradient for mobile */}
      <div className="absolute inset-0 -z-10 md:hidden">
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-32 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px] animate-pulse-glow [animation-delay:1s]" />
      </div>

      {/* Grid pattern */}
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          opacity: gridOpacity,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating badges - tech stack badges around hero */}
      <div className="hidden lg:block">
        <FloatingBadge label="Laravel" color="pink" position={{ top: "18%", left: "8%" }} speed={0.4} rotate={8} delay={0} side="left" />
        <FloatingBadge label="React" color="cyan" position={{ top: "25%", right: "10%" }} speed={0.3} rotate={6} delay={0.15} side="right" />
        <FloatingBadge label="PHP" color="violet" position={{ bottom: "30%", left: "5%" }} speed={0.5} rotate={5} delay={0.3} side="left" />
        <FloatingBadge label="TypeScript" color="cyan" position={{ bottom: "25%", right: "7%" }} speed={0.35} rotate={4} delay={0.45} side="right" />
        <FloatingBadge label="Java" color="amber" position={{ top: "40%", left: "12%" }} speed={0.25} rotate={6} delay={0.6} side="left" />
        <FloatingBadge label="MySQL" color="emerald" position={{ top: "35%", right: "5%" }} speed={0.45} rotate={3} delay={0.75} side="right" />
      </div>

      {/* Floating glowing dots */}
      <FloatingDot position={{ top: "20%", left: "20%" }} color="rgba(139,92,246,0.6)" size={6} speed={0.6} />
      <FloatingDot position={{ top: "60%", right: "15%" }} color="rgba(6,182,212,0.6)" size={8} speed={0.4} />
      <FloatingDot position={{ bottom: "25%", left: "30%" }} color="rgba(236,72,153,0.5)" size={5} speed={0.5} />
      <FloatingDot position={{ top: "30%", right: "25%" }} color="rgba(139,92,246,0.4)" size={10} speed={0.3} />
      <FloatingDot position={{ bottom: "40%", right: "35%" }} color="rgba(52,211,153,0.4)" size={7} speed={0.55} />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: textY, opacity: textOpacity }}
        className="relative mx-auto max-w-4xl text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-4 py-1.5 text-xs text-muted backdrop-blur-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 animate-pulse-glow" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-4xl font-bold tracking-tight sm:text-7xl lg:text-8xl"
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text glow-text">{siteConfig.name}</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:mt-6 sm:text-xl"
        >
          A{" "}
          <span className="text-foreground font-medium">Fresh Graduate</span>{" "}
          &amp;{" "}
          <span className="text-foreground font-medium">Web Developer</span>{" "}
          from Bekasi, building modern web apps with{" "}
          <span className="text-foreground font-medium">Laravel</span>,{" "}
          <span className="text-foreground font-medium">React</span>, &amp;{" "}
          <span className="text-foreground font-medium">Next.js</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:mt-10"
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
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-6 py-3 text-sm font-medium text-foreground backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
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
        style={{ opacity: textOpacity }}
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
