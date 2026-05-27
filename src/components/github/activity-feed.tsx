"use client";

import { motion } from "framer-motion";
import { GitCommitHorizontal, GitPullRequest, CircleDot } from "lucide-react";
import type { GitHubEvent } from "@/types/github";

function timeAgo(dateStr: string): string {
  const seconds = Math.floor(
    (Date.now() - new Date(dateStr).getTime()) / 1000
  );
  if (seconds < 60) return "just now";
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return `${Math.floor(days / 30)}mo ago`;
}

function getEventIcon(type: string) {
  switch (type) {
    case "PushEvent":
      return GitCommitHorizontal;
    case "PullRequestEvent":
      return GitPullRequest;
    default:
      return CircleDot;
  }
}

function getEventDescription(event: GitHubEvent): string {
  const repoName = event.repo.name.split("/")[1] || event.repo.name;
  switch (event.type) {
    case "PushEvent": {
      const count = event.payload.commits?.length || 0;
      const msg = event.payload.commits?.[0]?.message || "";
      return `Pushed ${count} commit${count !== 1 ? "s" : ""} to ${repoName}${msg ? ` — "${msg.split("\n")[0]}"` : ""}`;
    }
    case "PullRequestEvent":
      return `${event.payload.action} PR in ${repoName}${event.payload.pull_request?.title ? ` — "${event.payload.pull_request.title}"` : ""}`;
    case "IssuesEvent":
      return `${event.payload.action} issue in ${repoName}${event.payload.issue?.title ? ` — "${event.payload.issue.title}"` : ""}`;
    case "CreateEvent":
      return `Created branch/tag in ${repoName}`;
    case "WatchEvent":
      return `Starred ${repoName}`;
    case "ForkEvent":
      return `Forked ${repoName}`;
    default:
      return `${event.type.replace("Event", "")} in ${repoName}`;
  }
}

export function ActivityFeed({ events }: { events: GitHubEvent[] }) {
  const filtered = events
    .filter((e) =>
      ["PushEvent", "PullRequestEvent", "IssuesEvent", "CreateEvent", "ForkEvent"].includes(e.type)
    )
    .slice(0, 10);

  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="mb-4 text-sm font-medium">Recent Activity</h3>
      <div className="space-y-3">
        {filtered.length === 0 && (
          <p className="text-sm text-muted">No recent activity</p>
        )}
        {filtered.map((event, i) => {
          const Icon = getEventIcon(event.type);
          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-3"
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm text-muted">
                  {getEventDescription(event)}
                </p>
                <span className="text-xs text-muted/60">
                  {timeAgo(event.created_at)}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
