"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { useParallax, useParallaxRange } from "@/hooks/use-parallax";
import { SectionHeading } from "@/components/ui/section-heading";
import { ParallaxDecoration } from "@/components/ui/parallax-decoration";
import { FloatingDot } from "@/components/ui/floating-elements";
import { skillCategories } from "@/data/skills";
import { siteConfig } from "@/lib/constants";

export function AboutContent() {
  const { ref: bioRef, y: bioY } = useParallax(0.15);
  const { ref: skillsRef, y: skillsY } = useParallax(0.1);
  const { ref: backdropRef, y: backdropY } = useParallaxRange([90, -90]);

  return (
    <div className="relative isolate overflow-hidden px-6 py-24">
      {/* Background decorations */}
      <ParallaxDecoration />
      <FloatingDot position={{ top: "15%", right: "20%" }} color="rgba(139,92,246,0.5)" size={8} speed={0.4} />
      <FloatingDot position={{ top: "45%", left: "8%" }} color="rgba(6,182,212,0.4)" size={6} speed={0.3} />
      <FloatingDot position={{ bottom: "20%", right: "12%" }} color="rgba(236,72,153,0.4)" size={7} speed={0.5} />
      <FloatingDot position={{ bottom: "40%", left: "15%" }} color="rgba(52,211,153,0.3)" size={5} speed={0.35} />

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="absolute top-1/4 -right-40 h-[400px] w-[400px] rounded-full bg-violet-600/[0.03] blur-[100px]" />
        <div className="absolute bottom-1/4 -left-40 h-[350px] w-[350px] rounded-full bg-cyan-500/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        <motion.div
          ref={backdropRef}
          style={{ y: backdropY }}
          className="pointer-events-none absolute left-1/2 top-8 -z-10 h-[430px] w-[min(780px,calc(100vw-2rem))] -translate-x-1/2"
        >
          <motion.div
            animate={{ scale: [1, 1.06, 1], opacity: [0.55, 0.85, 0.55] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-8 top-4 h-56 rounded-full border border-violet-500/10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.12),transparent_62%)] blur-[1px]"
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-28 h-64 w-64 -translate-x-1/2 rounded-full border border-dashed border-cyan-400/15 shadow-[0_0_80px_rgba(6,182,212,0.08)]"
          />
          <motion.div
            animate={{ rotate: -360, scale: [1, 0.96, 1] }}
            transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full border border-violet-400/10"
          />
          <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.35)_1px,transparent_1px)] [background-size:72px_72px]" />
          <motion.div
            animate={{ x: [0, -18, 0], y: [0, 14, 0], rotate: [12, 28, 12] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-20 top-28 h-24 w-24 border border-violet-400/15"
          />
          <motion.div
            animate={{ x: [0, 16, 0], y: [0, -18, 0], rotate: [-12, -28, -12] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-20 top-40 h-28 w-28 rounded-[28px] border border-cyan-400/15"
          />
          <div className="absolute bottom-8 left-1/2 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />
        </motion.div>

        <SectionHeading
          title="About Me"
          subtitle="Get to know who I am and what I do"
        />

        {/* Bio */}
        <motion.div
          ref={bioRef}
          style={{ y: bioY }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-20 max-w-2xl text-center"
        >
          <div className="group relative mx-auto mb-6 h-28 w-28">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-50 blur-sm transition-opacity duration-500 group-hover:opacity-80" />
            <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-border bg-card">
              <Image
                src={`https://github.com/${siteConfig.githubUsername}.png`}
                alt={siteConfig.name}
                className="h-full w-full object-cover"
                width={112}
                height={112}
                priority
              />
            </div>
          </div>

          <h3 className="mb-2 text-xl font-semibold">{siteConfig.name}</h3>

          <div className="mb-4 inline-flex items-center gap-1.5 text-sm text-muted">
            <MapPin className="h-3.5 w-3.5" />
            {siteConfig.location}
          </div>

          <p className="text-muted leading-relaxed">
            Halo! Saya{" "}
            <span className="font-medium text-foreground">{siteConfig.shortName}</span>,
            seorang fresh graduate dari{" "}
            <span className="font-medium text-foreground">
              SMKN 2 Kota Bekasi
            </span>{" "}
            jurusan Rekayasa Perangkat Lunak (RPL). Saya passionate dalam membangun
            aplikasi web modern dengan code yang bersih dan user experience yang baik.
            Tech stack utama saya meliputi{" "}
            <span className="font-medium text-foreground">Laravel</span>,{" "}
            <span className="font-medium text-foreground">React</span>,{" "}
            <span className="font-medium text-foreground">Next.js</span>, dan{" "}
            <span className="font-medium text-foreground">Java</span>.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div ref={skillsRef} style={{ y: skillsY }} className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category, ci) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15, duration: 0.5 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-500 hover:border-white/10 hover:bg-card-hover"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.05]" />

              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-accent">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, si) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + si * 0.05 }}
                    className="rounded-lg border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-muted transition-all duration-300 hover:border-accent/30 hover:bg-accent/5 hover:text-foreground"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
