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
import { useCounter } from "@/hooks/use-counter";
import type { GitHubStats } from "@/types/github";

const statConfig = [
  { key: "totalRepos", label: "Repositories", icon: BookOpen, color: "text-violet-400" },
  { key: "totalStars", label: "Stars", icon: Star, color: "text-yellow-400" },
  { key: "totalForks", label: "Forks", icon: GitFork, color: "text-cyan-400" },
  { key: "followers", label: "Followers", icon: Users, color: "text-emerald-400" },
  { key: "totalCommits", label: "Commits (1y)", icon: GitCommitHorizontal, color: "text-blue-400" },
  { key: "currentStreak", label: "Current Streak", icon: Flame, color: "text-orange-400" },
] as const;

function StatCard({
  value,
  label,
  icon: Icon,
  color,
  delay,
}: {
  value: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  delay: number;
}) {
  const { count, ref } = useCounter(value);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 text-center transition-all duration-300 hover:border-white/10 hover:bg-card-hover"
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[var(--gradient-from)] to-[var(--gradient-to)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-[0.05]" />
      <Icon className={`mx-auto mb-2 h-5 w-5 ${color}`} />
      <div className="text-2xl font-bold tabular-nums">{count}</div>
      <div className="mt-1 text-xs text-muted">{label}</div>
    </motion.div>
  );
}

export function StatsCards({ stats }: { stats: GitHubStats }) {
  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
      {statConfig.map((cfg, i) => (
        <StatCard
          key={cfg.key}
          value={stats[cfg.key]}
          label={cfg.label}
          icon={cfg.icon}
          color={cfg.color}
          delay={i * 0.08}
        />
      ))}
    </div>
  );
}
