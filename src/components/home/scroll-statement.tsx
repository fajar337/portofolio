"use client";

import { FloatingDot } from "@/components/ui/floating-elements";
import { ScrollRevealText } from "@/components/ui/scroll-reveal-text";

export function ScrollStatement() {
  return (
    <section className="relative px-6 py-32">
      {/* Floating dots for visual interest */}
      <FloatingDot position={{ top: "20%", left: "10%" }} color="rgba(139,92,246,0.4)" size={6} speed={0.3} />
      <FloatingDot position={{ bottom: "30%", right: "15%" }} color="rgba(6,182,212,0.4)" size={8} speed={0.4} />
      <FloatingDot position={{ top: "50%", right: "30%" }} color="rgba(236,72,153,0.3)" size={5} speed={0.5} />

      <ScrollRevealText
        text="I turn ideas into clean, functional, and beautiful web experiences."
        className="mx-auto max-w-4xl text-center"
      />
    </section>
  );
}
