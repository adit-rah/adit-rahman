const projects = [
  {
    title: "Lock-In",
    tech: "Python, PyTorch, OpenCV, Streamlit, SQLite",
    description:
      "Real-time focus detection system that classifies user engagement through webcam input using a fine-tuned ResNet-based CNN. Features a rolling attention-scoring algorithm with probabilistic inference and a fully on-device AI pipeline for privacy.",
    href: "https://github.com/adit-rah",
  },
  {
    title: "GeoGuard",
    tech: "Python, React Native, Flask, MongoDB",
    description:
      "Mobile navigation app that uses crime-aware pathfinding and geospatial data to generate the safest routes. Leverages 40,000+ crime data points from the GTA and the OpenRouteService API to offer both fastest and safest options.",
    href: "https://github.com/adit-rah",
  },
  {
    title: "Event Aggregator",
    tech: "Go, React, TypeScript, SQLite, WebSocket, Docker",
    description:
      "Real-time event aggregator built with Go goroutines and channel-based communication. Supports dynamic listener management via RESTful APIs and streams live events to concurrent clients over WebSockets with minimal latency.",
    href: "https://github.com/adit-rah",
  },
  {
    title: "Chess Engine",
    tech: "C++",
    description:
      "Fully functional chess engine using OOP principles with Minimax search and Alpha-Beta pruning. Reduced evaluated game states by 80%, cutting AI move computation from 4s to under 800ms.",
    href: "https://github.com/adit-rah",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto space-y-8">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Projects
        </h1>
        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block group border border-border rounded-lg p-5 hover:border-muted-foreground/40 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-4">
                <h2 className="text-lg font-medium text-foreground group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h2>
                <span className="text-xs text-muted-foreground/60 shrink-0 hidden sm:inline">
                  {project.tech}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
