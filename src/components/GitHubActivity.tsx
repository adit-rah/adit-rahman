import { useEffect, useState } from "react";
import { Github, ExternalLink, GitBranch, GitPullRequest } from "lucide-react";

const GITHUB_USER = "adit-rah";

interface GithubEvent {
  id: string;
  type: string;
  created_at: string;
  payload?: { commits?: unknown[] };
}

function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

export default function GitHubActivity() {
  const [events, setEvents] = useState<GithubEvent[]>([]);
  const [status, setStatus] = useState<
    "loading" | "ok" | "rate-limited" | "error"
  >("loading");
  const [resetTime, setResetTime] = useState<string | null>(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/events`)
      .then((res) => {
        if (res.status === 403) {
          const remaining = res.headers.get("X-RateLimit-Remaining");
          const reset = res.headers.get("X-RateLimit-Reset");
          if (remaining === "0" && reset) {
            const resetDate = new Date(parseInt(reset, 10) * 1000);
            setResetTime(
              resetDate.toLocaleTimeString(undefined, {
                hour: "numeric",
                minute: "2-digit",
              })
            );
            setStatus("rate-limited");
            return null;
          }
        }
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (data === null) return;
        const all = (data as GithubEvent[]).filter(
          (e) =>
            e.type === "PushEvent" ||
            e.type === "CreateEvent" ||
            e.type === "PullRequestEvent" ||
            e.type === "WatchEvent" ||
            e.type === "ForkEvent" ||
            e.type === "IssuesEvent"
        );
        setEvents(all);
        setStatus("ok");
      })
      .catch(() => setStatus("error"));
  }, []);

  const pushes = events.filter((e) => e.type === "PushEvent").length;
  const prs = events.filter((e) => e.type === "PullRequestEvent").length;
  const totalContributions = events.reduce((sum, e) => {
    if (e.type === "PushEvent" && e.payload?.commits) {
      return sum + Math.min((e.payload.commits as unknown[]).length, 5);
    }
    return sum + 1;
  }, 0);
  const lastActive =
    events.length > 0 ? formatTimeAgo(events[0].created_at) : "—";

  if (status === "loading") {
    return (
      <section className="py-10 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-border bg-muted/20 overflow-hidden">
            <div className="px-5 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="rounded-lg bg-muted/60 p-1.5">
                    <Github className="size-4 text-foreground" />
                  </span>
                  <h3 className="text-base font-medium text-foreground">
                    My Activity
                  </h3>
                </div>
                <span className="inline-block size-2 rounded-full bg-muted-foreground animate-pulse" />
              </div>
              <p className="text-xs text-muted-foreground mt-2">Loading…</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (status === "rate-limited") {
    return (
      <section className="py-10 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-border bg-muted/20 overflow-hidden">
            <div className="px-5 py-5">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-muted/60 p-1.5">
                  <Github className="size-4 text-foreground" />
                </span>
                <h3 className="text-base font-medium text-foreground">
                  My Activity
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Too much traffic — we got rate limited.
                {resetTime && ` Try again after ${resetTime}.`}
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (status === "error") {
    return (
      <section className="py-10 px-6 bg-background">
        <div className="max-w-2xl mx-auto">
          <div className="rounded-xl border border-border bg-muted/20 overflow-hidden">
            <div className="px-5 py-5">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-muted/60 p-1.5">
                  <Github className="size-4 text-foreground" />
                </span>
                <h3 className="text-base font-medium text-foreground">
                  My Activity
                </h3>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Couldn&apos;t load activity. Try again later.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <a
          href={`https://github.com/${GITHUB_USER}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-xl border border-border bg-muted/20 overflow-hidden hover:border-muted-foreground/30 transition-colors group"
        >
          <div className="px-5 py-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-muted/60 p-1.5 group-hover:bg-muted/80 transition-colors">
                  <Github className="size-4 text-foreground" />
                </span>
                <h3 className="text-base font-medium text-foreground">
                  My Activity
                </h3>
              </div>
              <ExternalLink className="size-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
            </div>
            <p className="text-xs text-muted-foreground/80 mt-1">
              Public activity only · Last 30 events · Private repos not included
            </p>
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl font-semibold tabular-nums text-foreground">
                  {totalContributions}
                </p>
                <p className="text-xs text-muted-foreground">contributions</p>
              </div>
              <div>
                <p className="text-2xl font-semibold tabular-nums text-foreground">
                  {lastActive}
                </p>
                <p className="text-xs text-muted-foreground">last active</p>
              </div>
              <div className="flex items-center gap-2">
                <GitBranch className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-lg font-semibold tabular-nums text-foreground">
                    {pushes}
                  </p>
                  <p className="text-xs text-muted-foreground">pushes</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <GitPullRequest className="size-4 text-muted-foreground" />
                <div>
                  <p className="text-lg font-semibold tabular-nums text-foreground">
                    {prs}
                  </p>
                  <p className="text-xs text-muted-foreground">PRs</p>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}
