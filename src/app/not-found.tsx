"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] min-h-[calc(100svh-4rem)] items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-8xl font-bold">
          <span className="gradient-text">404</span>
        </h1>
        <p className="mt-4 text-lg text-muted">Page not found</p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white/[0.03] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-white/[0.06]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
