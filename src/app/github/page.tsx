import type { Metadata } from "next";
import {
  fetchGitHubStats,
  fetchContributions,
  fetchEvents,
  fetchRepos,
  fetchLanguageStats,
} from "@/lib/github";
import { GitHubDashboardContent } from "@/components/github/github-dashboard-content";

export const metadata: Metadata = {
  title: "GitHub Dashboard",
  description: "Real-time GitHub statistics, contributions, and activity feed.",
};

export const revalidate = 3600;

export default async function GitHubPage() {
  let stats = null;
  let contributions = null;
  let events = null;
  let languages = null;

  try {
    const [s, c, e, repos] = await Promise.all([
      fetchGitHubStats(),
      fetchContributions(),
      fetchEvents(),
      fetchRepos(),
    ]);
    stats = s;
    contributions = c;
    events = e;
    languages = await fetchLanguageStats(repos);
  } catch {
    // Will show fallback UI
  }

  return (
    <GitHubDashboardContent
      stats={stats}
      contributions={contributions}
      events={events}
      languages={languages}
    />
  );
}
