import type {
  GitHubUser,
  GitHubRepo,
  ContributionData,
  GitHubStats,
  LanguageStat,
  GitHubEvent,
} from "@/types/github";

const GITHUB_API = "https://api.github.com";
const GITHUB_GRAPHQL = "https://api.github.com/graphql";
const USERNAME = process.env.GITHUB_USERNAME || "fajar337";
const TOKEN = process.env.GITHUB_TOKEN || "";

const headers: HeadersInit = TOKEN
  ? { Authorization: `Bearer ${TOKEN}`, Accept: "application/vnd.github.v3+json" }
  : { Accept: "application/vnd.github.v3+json" };

async function fetchGitHub<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${GITHUB_API}${endpoint}`, {
    headers,
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

async function fetchGraphQL<T>(query: string): Promise<T> {
  if (!TOKEN) throw new Error("GitHub token required for GraphQL");
  const res = await fetch(GITHUB_GRAPHQL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 3600 },
  });
  if (!res.ok) throw new Error(`GitHub GraphQL error: ${res.status}`);
  const json = await res.json();
  return json.data;
}

export async function fetchUser(): Promise<GitHubUser> {
  return fetchGitHub(`/users/${USERNAME}`);
}

export async function fetchRepos(): Promise<GitHubRepo[]> {
  return fetchGitHub(`/users/${USERNAME}/repos?per_page=100&sort=pushed`);
}

export async function fetchEvents(): Promise<GitHubEvent[]> {
  return fetchGitHub(`/users/${USERNAME}/events?per_page=30`);
}

export async function fetchContributions(): Promise<ContributionData> {
  const data = await fetchGraphQL<{
    user: {
      contributionsCollection: {
        contributionCalendar: ContributionData;
      };
    };
  }>(`
    query {
      user(login: "${USERNAME}") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                weekday
                color
              }
            }
          }
        }
      }
    }
  `);
  return data.user.contributionsCollection.contributionCalendar;
}

export async function fetchLanguageStats(repos: GitHubRepo[]): Promise<LanguageStat[]> {
  const languageMap: Record<string, number> = {};

  const promises = repos
    .filter((r) => r.language)
    .slice(0, 20)
    .map(async (repo) => {
      try {
        const langs = await fetchGitHub<Record<string, number>>(
          `/repos/${repo.full_name}/languages`
        );
        for (const [lang, bytes] of Object.entries(langs)) {
          languageMap[lang] = (languageMap[lang] || 0) + bytes;
        }
      } catch {
        // skip repos that fail
      }
    });

  await Promise.all(promises);

  const total = Object.values(languageMap).reduce((a, b) => a + b, 0);
  const languageColors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Java: "#b07219",
    PHP: "#4F5D95",
    Blade: "#f7523f",
    Python: "#3572A5",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Shell: "#89e051",
    "C#": "#178600",
    Dart: "#00B4AB",
  };

  return Object.entries(languageMap)
    .map(([name, bytes]) => ({
      name,
      bytes,
      percentage: Math.round((bytes / total) * 1000) / 10,
      color: languageColors[name] || "#8b8b8b",
    }))
    .sort((a, b) => b.bytes - a.bytes);
}

function calculateStreak(contributions: ContributionData): {
  current: number;
  longest: number;
} {
  const days = contributions.weeks.flatMap((w) => w.contributionDays);
  let current = 0;
  let longest = 0;
  let streak = 0;

  for (const day of days) {
    if (day.contributionCount > 0) {
      streak++;
      longest = Math.max(longest, streak);
    } else {
      streak = 0;
    }
  }

  // current streak: count from the end
  current = 0;
  for (let i = days.length - 1; i >= 0; i--) {
    if (days[i].contributionCount > 0) {
      current++;
    } else {
      break;
    }
  }

  return { current, longest };
}

export async function fetchGitHubStats(): Promise<GitHubStats> {
  const [user, repos, contributions] = await Promise.all([
    fetchUser(),
    fetchRepos(),
    fetchContributions().catch(() => null),
  ]);

  const totalStars = repos.reduce((sum, r) => sum + r.stargazers_count, 0);
  const totalForks = repos.reduce((sum, r) => sum + r.forks_count, 0);
  const streaks = contributions
    ? calculateStreak(contributions)
    : { current: 0, longest: 0 };

  return {
    totalRepos: user.public_repos,
    totalStars,
    totalForks,
    followers: user.followers,
    totalCommits: contributions?.totalContributions ?? 0,
    currentStreak: streaks.current,
    longestStreak: streaks.longest,
  };
}
