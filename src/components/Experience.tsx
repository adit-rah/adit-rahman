const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Designed and shipped a production job system from scratch (Node.js, BullMQ, Redis, Kubernetes worker pods) with custom Prometheus metrics and OpenTelemetry instrumentation, processing 122K+ daily tasks",
      "Migrated production database tables from Vitess (MySQL) to YugabyteDB for Shopify's ads domain, processing 11.59M writes with a 100% success rate across a system serving 18M+ ads/month",
      "Diagnosed a critical 130K-row data inconsistency during production migration, traced root cause to composite primary key duplication across 1.27M rows, and unblocked a cross-team Airflow DAG in the ad-delivery pipeline within hours",
      "Built a staging environment from scratch across 5 repositories, independently configuring Docker and Kubernetes deployments, Buildkite CI/CD pipelines, secrets management, service authentication, and database provisioning",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Re-architected merchant eligibility system with parallel validation for safe migration off an external dependency, achieving p50 32ms response latency and a 97.4% cache hit rate across 10.2M production lookups",
      "Decoupled the ads-publisher service from an external merchant model, refactoring GraphQL APIs, service resolvers, and caching layers while introducing a new request abstraction to eliminate a hard architectural dependency",
      "Built centralized shop disablement logic handling 581 merchant lifecycle events with 0 errors, consolidating previously fragmented merchant lifecycle management",
      "Optimized merchant earnings page by migrating data fetching to a client-side architecture, cutting page load times from 2–4s to ~500ms",
    ],
  },
  {
    role: "Instructor",
    company: "KUMON",
    period: "Jul 2021 – Aug 2024",
    bullets: [
      "Tutored 100+ students aged 6–17 in core subjects regardless of initial understanding",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-10 px-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Experience
        </h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={`${exp.company}-${exp.period}`} className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <div>
                  <span className="text-foreground font-medium">
                    {exp.role}
                  </span>
                  <span className="text-muted-foreground"> · {exp.company}</span>
                </div>
                <span className="text-xs text-muted-foreground/60 shrink-0">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1.5 text-sm text-muted-foreground leading-relaxed">
                {exp.bullets.map((bullet, i) => (
                  <li key={i} className="pl-4 relative before:content-['–'] before:absolute before:left-0 before:text-muted-foreground/40">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
