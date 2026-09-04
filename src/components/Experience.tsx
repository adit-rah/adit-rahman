const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Faire",
    period: "Sep 2026 – Dec 2026",
    bullets: [
      "Incoming on the Security Engineering team, working on backend infrastructure in Kotlin and Kubernetes",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    period: "Jan 2026 – Apr 2026",
    bullets: [
      "Designed and shipped a production job system using Node.js, BullMQ, Redis, and Kubernetes worker pods to process 122K+ daily tasks with custom Prometheus metrics and OpenTelemetry instrumentation",
      "Migrated production tables from Vitess to YugabyteDB for Shopify's ads domain, processing 11.6M records with zero downtime across a system serving 18M+ ads/month",
      "Unblocked a cross-team Airflow DAG involved in ad delivery within hours by diagnosing a 130K-row data inconsistency, tracing the root cause to composite primary key duplication",
      "Built the Product Network app's first staging environment with Docker, Kubernetes, and Buildkite CI/CD, enabling pre-production validation and catching breaking changes before release",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    period: "Sep 2025 – Dec 2025",
    bullets: [
      "Rebuilt the merchant eligibility pipeline with parallel validation and a decoupled cache layer for safe migration off an external dependency, sustaining p50 32ms latency across 10.2M lookups at a 97.4% cache hit rate",
      "Decoupled the ads-publisher service from the merchant model by introducing a request abstraction and updating GraphQL resolvers, unlocking onboarding for 230K merchants previously blocked by the legacy integration",
      "Built centralized shop disablement logic handling 581 merchant lifecycle transitions, consolidating previously fragmented merchant lifecycle management",
      "Optimized the merchant earnings page with client-side data fetching, reducing initial load time by 8x",
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
