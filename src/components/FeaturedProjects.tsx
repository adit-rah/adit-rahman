import { Link } from "react-router-dom";

const featured = [
  {
    title: "Lock-In",
    tech: "Python, PyTorch, OpenCV, Streamlit, SQLite",
    description:
      "Real-time focus detection classifying engagement via webcam with a fine-tuned ResNet trained on the State Farm distracted-driver dataset (22K+ images), reaching 0.79 F1. Fully on-device PyTorch + OpenCV pipeline with temporal prediction smoothing—zero cloud dependency.",
    href: "https://github.com/adit-rah/lock-in",
  },
  {
    title: "Event Aggregator",
    tech: "Go, React, TypeScript, SQLite, WebSocket, Docker",
    description:
      "Real-time aggregator in Go using goroutines and channels for concurrent data collection, REST APIs for dynamic listener management without restarts, and a WebSocket streaming layer for concurrent clients.",
    href: "https://github.com/adit-rah/chronicle",
  },
  {
    title: "Chess Engine",
    tech: "C++20, SDL2, WebAssembly",
    description:
      "Cross-platform engine with SDL2 and a WASM browser build. Five AI levels with Alpha-Beta pruning, piece-square evaluation, and quiescence search—cuts evaluated states ~95%, move time from ~4s to ~200ms.",
    href: "https://github.com/adit-rah/chess-engine",
  },
  {
    title: "GeoGuard",
    tech: "React Native, Flask, MongoDB",
    description:
      "Crime-aware mobile navigation leveraging 40K+ data points to generate the safest routes via OpenRouteService.",
    href: "https://github.com/TamirPol/GeoGuard",
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
