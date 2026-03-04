import { useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import {
  SiPython,
  SiTypescript,
  SiJavascript,
  SiRuby,
  SiGo,
  SiCplusplus,
  SiReact,
  SiFlask,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiPrometheus,
  SiGrafana,
  SiMongodb,
  SiGit,
  SiLinux,
  SiSqlite,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: ReactNode;
  description: string;
}

const skills: Skill[] = [
  { name: "Python", icon: <SiPython />, description: "General-purpose scripting and ML" },
  { name: "TypeScript", icon: <SiTypescript />, description: "Typed JavaScript for scalable apps" },
  { name: "JavaScript", icon: <SiJavascript />, description: "The language of the web" },
  { name: "Ruby", icon: <SiRuby />, description: "Dynamic language powering Rails" },
  { name: "Go", icon: <SiGo />, description: "Fast, concurrent systems language" },
  { name: "C++", icon: <SiCplusplus />, description: "High-performance systems programming" },
  { name: "SQL", icon: <SiSqlite />, description: "Relational database querying" },
  { name: "React", icon: <SiReact />, description: "Component-based UI library" },
  { name: "Flask", icon: <SiFlask />, description: "Lightweight Python web framework" },
  { name: "PyTorch", icon: <SiPytorch />, description: "Deep learning framework" },
  { name: "OpenCV", icon: <SiOpencv />, description: "Computer vision library" },
  { name: "Docker", icon: <SiDocker />, description: "Containerized application deployment" },
  { name: "Kubernetes", icon: <SiKubernetes />, description: "Container orchestration at scale" },
  { name: "GitHub Actions", icon: <SiGithubactions />, description: "CI/CD pipeline automation" },
  { name: "Prometheus", icon: <SiPrometheus />, description: "Metrics and monitoring" },
  { name: "Grafana", icon: <SiGrafana />, description: "Observability dashboards" },
  { name: "MongoDB", icon: <SiMongodb />, description: "Document-based NoSQL database" },
  { name: "Git", icon: <SiGit />, description: "Distributed version control" },
  { name: "Linux", icon: <SiLinux />, description: "Open-source operating system" },
];

function SkillIcon({ skill }: { skill: Skill }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleEnter = () => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setPos({ x: rect.left + rect.width / 2, y: rect.bottom });
    }
    setHovered(true);
  };

  return (
    <div
      ref={ref}
      className="relative flex-shrink-0"
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="w-16 h-16 flex items-center justify-center text-4xl text-muted-foreground hover:text-foreground transition-colors cursor-default">
        {skill.icon}
      </div>
      {hovered &&
        createPortal(
          <div
            className="fixed z-50 px-3 py-2 bg-card/80 backdrop-blur-md border border-border/40 rounded-md shadow-lg whitespace-nowrap -translate-x-1/2"
            style={{ left: pos.x, top: pos.y + 8 }}
          >
            <p className="text-xs font-medium text-foreground">
              {skill.name}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5">
              {skill.description}
            </p>
          </div>,
          document.body,
        )}
    </div>
  );
}

export default function SkillsMarquee() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="py-10 px-6 bg-background overflow-hidden">
      <div className="max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          Skills
        </h2>
      </div>
      <div
        className="relative max-w-4xl mx-auto overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
        }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex gap-10 w-max animate-marquee"
          style={{ animationPlayState: paused ? "paused" : "running" }}
        >
          {skills.map((skill) => (
            <SkillIcon key={skill.name} skill={skill} />
          ))}
          {skills.map((skill) => (
            <SkillIcon key={`dup-${skill.name}`} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
