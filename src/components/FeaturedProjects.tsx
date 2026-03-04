import { Link } from "react-router-dom";

const featured = [
  {
    title: "Lock-In",
    tech: "Python, PyTorch, OpenCV",
    description:
      "Real-time focus detection using a fine-tuned ResNet CNN with a rolling attention-scoring algorithm. Fully on-device for privacy.",
    href: "https://github.com/adit-rah/lock-in",
  },
  {
    title: "GeoGuard",
    tech: "React Native, Flask, MongoDB",
    description:
      "Crime-aware mobile navigation leveraging 40K+ data points to generate the safest routes via OpenRouteService.",
    href: "https://github.com/TamirPol/GeoGuard",
  },
  {
    title: "Event Aggregator",
    tech: "Go, React, WebSocket, Docker",
    description:
      "Real-time event streaming with Go goroutines, dynamic listener management, and WebSocket delivery to concurrent clients.",
    href: "https://github.com/adit-rah/chronicle",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-10 px-6 bg-background">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
            Projects
          </h2>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="space-y-4">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border border-border rounded-lg p-5 hover:border-muted-foreground/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-base font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs text-muted-foreground/60 shrink-0 hidden sm:inline">
                  {project.tech}
                </span>
              </div>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
