import { useState } from "react";
import DisplayCards from "@/components/ui/display-cards";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";
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
];

export default function Projects() {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <FadeInGroup className="max-w-2xl mx-auto">
          <FadeIn>
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
          </FadeIn>
          <FadeIn>
            <div className={expanded ? "" : "flex justify-center -translate-x-12 mt-10"}>
              <DisplayCards
                projects={projects}
                expanded={expanded}
                onToggle={() => setExpanded((v) => !v)}
              />
            </div>
          </FadeIn>

          <FadeIn>
            <div className={expanded ? "mt-12" : "mt-56"}>
              <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-6">
                Games
              </h2>
              <div className="space-y-6">
                <a
                  href="https://adit-rah.github.io/driving-simulator/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group rounded-xl border border-border overflow-hidden hover:border-muted-foreground/40 transition-colors"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src="./driving-sim-v1.png"
                      alt="Driving Simulator screenshot"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm p-1.5 text-rose-400">
                        <Gamepad2 className="size-4" />
                      </span>
                      <h3 className="text-base font-medium text-foreground drop-shadow-md">
                        Driving Simulator
                      </h3>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Browser-based driving sim with procedurally generated infinite
                      city, realistic vehicle physics, 4 camera modes, and chunk
                      streaming. Built with Three.js, Rapier3D, and TypeScript.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground/50">
                        TypeScript, Three.js, Rapier3D, Vite
                      </span>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        Play it &rarr;
                      </span>
                    </div>
                    <a
                      href="https://github.com/adit-rah/driving-simulator"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-block pt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View source on GitHub &rarr;
                    </a>
                  </div>
                </a>

                <a
                  href="https://adit-rah.github.io/chess-engine/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group rounded-xl border border-border overflow-hidden hover:border-muted-foreground/40 transition-colors"
                >
                  <div className="relative h-44 overflow-hidden">
                    <img
                      src="./chess-engine-v1.png"
                      alt="Chess Engine screenshot"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 flex items-center gap-2">
                      <span className="inline-flex items-center justify-center rounded-full bg-background/80 backdrop-blur-sm p-1.5 text-amber-400">
                        <Crown className="size-4" />
                      </span>
                      <h3 className="text-base font-medium text-foreground drop-shadow-md">
                        Chess Engine
                      </h3>
                    </div>
                  </div>
                  <div className="px-5 py-4 space-y-2">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Fully functional chess engine with Minimax search and Alpha-Beta
                      pruning. Supports human vs human, human vs AI, and AI vs AI with
                      four difficulty levels. C++ core compiled to WebAssembly.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground/50">
                        C++, WebAssembly, SDL2
                      </span>
                      <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                        Play it &rarr;
                      </span>
                    </div>
                    <a
                      href="https://github.com/adit-rah/chess-engine"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground transition-colors inline-block pt-1"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View source on GitHub &rarr;
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </FadeIn>
        </FadeInGroup>
      </div>
      <Footer />
    </>
  );
}
