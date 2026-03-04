const experiences = [
  {
    role: "Software Engineer Intern",
    company: "Shopify",
    period: "Sep 2025 – Apr 2026",
    bullets: [
      "Migrated a core production table (1.2M+ rows) from Vitess to YugabyteDB with zero merchant-facing downtime",
      "Built a background job system to automate recurring operational workflows on production data",
      "Refactored GraphQL APIs to decouple an external app dependency, simplifying merchant onboarding",
      "Diagnosed a production performance regression by identifying non-indexed queries and refactoring data access patterns",
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
            <div key={exp.company} className="space-y-3">
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
