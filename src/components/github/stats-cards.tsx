"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Star,
  GitFork,
  Users,
  GitCommitHorizontal,
  Flame,
} from "lucide-react";
import type { GitHubStats } from "@/types/github";

const statConfig = [
  { key: "totalRepos", label: "Repositories", icon: BookOpen },
  { key: "totalStars", label: "Stars", icon: Star },
  { key: "totalForks", label: "Forks", icon: GitFork },
  { key: "followers", label: "Followers", icon: Users },
  { key: "totalCommits", label: "Commits (1y)", icon: GitCommitHorizontal },
  { key: "currentStreak", label: "Current Streak", icon: Flame },
] as const;

export function StatsCards({ stats }: { stats: GitHubStats }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {statConfig.map((cfg, i) => {
        const Icon = cfg.icon;
        const value = stats[cfg.key];
        return (
          <motion.div
            key={cfg.key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="rounded-xl border border-border bg-card p-4 text-center transition-colors hover:border-white/10 hover:bg-card-hover"
          >
            <Icon className="mx-auto mb-2 h-5 w-5 text-accent" />
            <div className="text-2xl font-bold">{value}</div>
            <div className="mt-1 text-xs text-muted">{cfg.label}</div>
          </motion.div>
        );
      })}
    </div>
  );
}
