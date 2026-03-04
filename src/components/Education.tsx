const coursework = [
  "Object-Oriented Software Development",
  "Functional Programming (Advanced)",
  "Algorithm Design & Data Abstraction",
  "Graph Theory",
  "Linear Algebra",
  "Statistics",
  "Logic and Computation",
];

export default function Education() {
  return (
    <section className="py-10 px-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Education
        </h2>
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
            <div>
              <span className="text-foreground font-medium">
                University of Waterloo
              </span>
              <span className="text-muted-foreground">
                {" "}· B.CS, Co-op
              </span>
            </div>
            <span className="text-xs text-muted-foreground/60 shrink-0">
              Sep 2024 – Dec 2028
            </span>
          </div>
          <p className="text-sm text-muted-foreground">cGPA: 3.86 / 4.00</p>
          <div className="flex flex-wrap gap-2 pt-1">
            {coursework.map((course) => (
              <span
                key={course}
                className="text-xs text-muted-foreground bg-muted/50 px-2.5 py-1 rounded-md"
              >
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
