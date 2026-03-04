import { useState } from "react";
import DisplayCards from "@/components/ui/display-cards";
import Footer from "@/components/Footer";
import {
  Brain,
  Shield,
  Radio,
  Crown,
  Gamepad2,
} from "lucide-react";

const projects = [
  {
    icon: <Brain className="size-4" />,
    title: "Lock-In",
    tech: "Python, PyTorch, OpenCV, Streamlit, SQLite",
    description:
      "Real-time focus detection system that classifies user engagement through webcam input using a fine-tuned ResNet-based CNN. Features a rolling attention-scoring algorithm with probabilistic inference and a fully on-device AI pipeline for privacy.",
    href: "https://github.com/adit-rah/lock-in",
    iconClassName: "text-purple-400",
    titleClassName: "text-purple-400",
  },
  {
    icon: <Shield className="size-4" />,
    title: "GeoGuard",
    tech: "Python, React Native, Flask, MongoDB",
    description:
      "Mobile navigation app that uses crime-aware pathfinding and geospatial data to generate the safest routes. Leverages 40,000+ crime data points from the GTA and the OpenRouteService API to offer both fastest and safest options.",
    href: "https://github.com/TamirPol/GeoGuard",
    iconClassName: "text-emerald-400",
    titleClassName: "text-emerald-400",
  },
  {
    icon: <Radio className="size-4" />,
    title: "Event Aggregator",
    tech: "Go, React, TypeScript, SQLite, WebSocket, Docker",
    description:
      "Real-time event aggregator built with Go goroutines and channel-based communication. Supports dynamic listener management via RESTful APIs and streams live events to concurrent clients over WebSockets with minimal latency.",
    href: "https://github.com/adit-rah/chronicle",
    iconClassName: "text-sky-400",
    titleClassName: "text-sky-400",
  },
  {
    icon: <Crown className="size-4" />,
    title: "Chess Engine",
    tech: "C++",
    description:
      "Fully functional chess engine using OOP principles with Minimax search and Alpha-Beta pruning. Reduced evaluated game states by 80%, cutting AI move computation from 4s to under 800ms.",
    href: "https://github.com/adit-rah/chess-engine",
    iconClassName: "text-amber-400",
    titleClassName: "text-amber-400",
  },
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex items-baseline justify-between mb-10">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Projects
            </h1>
            <button
              onClick={() => setExpanded((v) => !v)}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {expanded ? "Stack view" : "Flat view"}
            </button>
          </div>
          <div className={expanded ? "" : "flex justify-center -translate-x-8 mt-6"}>
            <DisplayCards
              projects={projects}
              expanded={expanded}
              onToggle={() => setExpanded((v) => !v)}
            />
          </div>

          <div className="mt-20">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
              Games
            </h2>
            <a
              href="#"
              className="block group border border-border rounded-xl p-5 hover:border-muted-foreground/40 transition-colors"
            >
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center justify-center rounded-full bg-muted p-1.5 text-rose-400">
                  <Gamepad2 className="size-4" />
                </span>
                <h3 className="text-base font-medium text-rose-400">
                  Driving Simulator
                </h3>
                <span className="ml-auto text-xs text-muted-foreground/50">
                  Coming soon
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                A browser-based driving simulator. Link coming soon.
              </p>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
