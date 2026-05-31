"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { ParallaxDecoration } from "@/components/ui/parallax-decoration";
import { StatsCards } from "./stats-cards";
import { ContributionGraph } from "./contribution-graph";
import { ActivityFeed } from "./activity-feed";
import { LanguageChart } from "./language-chart";
import { StreakCounter } from "./streak-counter";
import { siteConfig } from "@/lib/constants";
import { useLanguage } from "@/components/language/language-provider";
import type {
  GitHubStats,
  ContributionData,
  GitHubEvent,
  LanguageStat,
} from "@/types/github";

interface Props {
  stats: GitHubStats | null;
  contributions: ContributionData | null;
  events: GitHubEvent[] | null;
  languages: LanguageStat[] | null;
}

function NoDataFallback() {
  const { t } = useLanguage();

  return (
    <div className="px-6 py-24">
      <div className="mx-auto max-w-5xl text-center">
        <SectionHeading
          title={t("github.title")}
          subtitle={`@${siteConfig.githubUsername}`}
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-border bg-card p-12"
        >
          <p className="text-muted">
            {t("github.unavailable")}{" "}
            <code className="rounded bg-white/[0.06] px-1.5 py-0.5 text-xs font-mono">
              GITHUB_TOKEN
            </code>{" "}
            {t("github.unavailableSuffix")}
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export function GitHubDashboardContent({
  stats,
  contributions,
  events,
  languages,
}: Props) {
  const { t } = useLanguage();

  if (!stats) return <NoDataFallback />;

  return (
    <div className="relative px-6 py-24">
      <ParallaxDecoration />
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title={t("github.title")}
          subtitle={`@${siteConfig.githubUsername} - ${t("github.subtitle")}`}
        />

        <div className="space-y-8">
          {/* Stats Cards */}
          <StatsCards stats={stats} />

          {/* Contribution Graph */}
          {contributions && <ContributionGraph data={contributions} />}

          {/* Activity + Languages + Streak */}
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-8">
              {events && <ActivityFeed events={events} />}
            </div>
            <div className="space-y-8">
              {languages && languages.length > 0 && (
                <LanguageChart languages={languages} />
              )}
              <StreakCounter stats={stats} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
