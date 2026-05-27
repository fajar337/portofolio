"use client";

import { motion } from "framer-motion";
import { Flame, Trophy } from "lucide-react";
import type { GitHubStats } from "@/types/github";

export function StreakCounter({ stats }: { stats: GitHubStats }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-xl border border-border bg-card p-5 text-center"
      >
        <Flame className="mx-auto mb-2 h-6 w-6 text-orange-400" />
        <div className="text-3xl font-bold">{stats.currentStreak}</div>
        <div className="mt-1 text-xs text-muted">Current Streak</div>
        <div className="mt-0.5 text-[10px] text-muted/60">days</div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1 }}
        className="rounded-xl border border-border bg-card p-5 text-center"
      >
        <Trophy className="mx-auto mb-2 h-6 w-6 text-yellow-400" />
        <div className="text-3xl font-bold">{stats.longestStreak}</div>
        <div className="mt-1 text-xs text-muted">Longest Streak</div>
        <div className="mt-0.5 text-[10px] text-muted/60">days</div>
      </motion.div>
    </div>
  );
}
