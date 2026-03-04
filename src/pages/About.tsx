export default function About() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto space-y-10">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          About
        </h1>

        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I&rsquo;m Adit&mdash;a Computer Science student at the University
            of Waterloo (class of 2028, 3.86 cGPA) who loves building software
            that solves real problems.
          </p>
          <p>
            Most recently I interned at Shopify as a Software Engineer, where I
            migrated a core production table with 1.2M+ rows across database
            systems, built background job infrastructure to automate operational
            workflows, and refactored GraphQL APIs to simplify merchant
            onboarding. I got to work across the full stack&mdash;from
            diagnosing production performance regressions to standing up staging
            environments for safe rollouts.
          </p>
          <p>
            Outside of work, I build things for fun: real-time focus detection
            systems, crime-aware navigation apps, event aggregators in Go, and a
            chess engine in C++. I care about clean architecture, fast feedback
            loops, and shipping work that matters.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-medium text-foreground">Skills</h2>
          <div className="space-y-3 text-sm text-muted-foreground">
            <div>
              <span className="text-foreground/70">Languages:</span> Python,
              TypeScript, JavaScript, Ruby, Go, C++, SQL
            </div>
            <div>
              <span className="text-foreground/70">Libraries:</span> React,
              React Native, Flask, PyTorch, OpenCV, OpenTelemetry
            </div>
            <div>
              <span className="text-foreground/70">Tools:</span> Docker,
              Kubernetes, Buildkite, GitHub Actions, Prometheus, Grafana,
              YugabyteDB, MongoDB, Git, Linux
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
