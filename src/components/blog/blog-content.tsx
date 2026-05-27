"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { PenLine } from "lucide-react";

export function BlogContent() {
  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionHeading
          title="Blog"
          subtitle="Thoughts on web development and tech"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center rounded-xl border border-border bg-card p-12 text-center"
        >
          <PenLine className="mb-4 h-10 w-10 text-muted/40" />
          <h3 className="mb-2 text-lg font-medium">Coming Soon</h3>
          <p className="text-sm text-muted">
            I&apos;m working on some articles. Stay tuned!
          </p>
        </motion.div>
      </div>
    </div>
  );
}
