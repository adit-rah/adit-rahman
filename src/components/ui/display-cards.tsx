import { cn } from "@/lib/utils";
import { useCallback, useRef, type ReactNode } from "react";
import { motion } from "framer-motion";

interface ProjectCardData {
  icon: ReactNode;
  title: string;
  tech: string;
  description: string;
  href: string;
  iconClassName?: string;
  titleClassName?: string;
}

interface DisplayCardsProps {
  projects: ProjectCardData[];
  expanded: boolean;
  onToggle: () => void;
}

function ProjectCard({
  project,
  index,
  total,
  expanded,
  onClick,
  anchorRef,
}: {
  project: ProjectCardData;
  index: number;
  total: number;
  expanded: boolean;
  onClick: () => void;
  anchorRef: (el: HTMLDivElement | null) => void;
}) {
  const reverseIndex = total - 1 - index;
  const isTopCard = reverseIndex === total - 1;
  const stackX = reverseIndex * 56;
  const stackY = reverseIndex * 40;

  return (
    <div
      ref={anchorRef}
      style={!expanded ? { gridArea: "stack", zIndex: total - index, pointerEvents: "none" } : undefined}
    >
    <motion.button
      style={{ pointerEvents: "auto" }}
      layout
      onClick={onClick}
      className={cn(
        "relative text-left cursor-pointer rounded-xl border-2 bg-muted/70 backdrop-blur-sm px-5 select-none overflow-hidden",
        expanded
          ? "w-full border-border hover:border-muted-foreground/40 hover:bg-muted/60"
          : cn(
              "w-[22rem] h-[9rem] border-border/60",
              !isTopCard &&
                "before:absolute before:inset-0 before:rounded-xl before:bg-background/50 before:content-[''] before:transition-opacity before:duration-700 grayscale-[100%] hover:before:opacity-0 hover:grayscale-0",
              "hover:border-white/20 hover:bg-muted",
              "after:absolute after:-right-1 after:top-[-5%] after:h-[110%] after:w-[20rem] after:bg-gradient-to-l after:from-background after:to-transparent after:content-['']",
            ),
      )}
      initial={false}
      animate={
        expanded
          ? { x: 0, y: 0, skewY: 0, opacity: 1 }
          : { x: stackX, y: stackY, skewY: -8, opacity: 1 }
      }
      whileHover={
        expanded
          ? {}
          : { y: stackY - 10 }
      }
      transition={{ type: "spring", stiffness: 250, damping: 28 }}
    >
      <div className={cn("py-4 flex flex-col", !expanded && "h-full justify-between")}>
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "relative inline-flex items-center justify-center rounded-full bg-muted p-1.5",
              project.iconClassName,
            )}
          >
            {project.icon}
          </span>
          <h3
            className={cn(
              "text-lg font-medium",
              project.titleClassName || "text-foreground",
            )}
          >
            {project.title}
          </h3>
          {expanded && (
            <span className="ml-auto text-xs text-muted-foreground/50 hidden sm:inline">
              {project.tech}
            </span>
          )}
        </div>

        {expanded ? (
          <div className="mt-3">
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              {project.description}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit inline-block"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub &rarr;
            </a>
          </div>
        ) : (
          <>
            <p className="text-sm text-muted-foreground truncate pr-12">
              {project.description}
            </p>
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors w-fit"
              onClick={(e) => e.stopPropagation()}
            >
              View on GitHub &rarr;
            </a>
          </>
        )}
      </div>
    </motion.button>
    </div>
  );
}

function smoothScrollTo(targetY: number, duration = 800) {
  const startY = window.scrollY;
  const diff = targetY - startY;
  let startTime: number | null = null;

  function ease(t: number) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(timestamp: number) {
    if (!startTime) startTime = timestamp;
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    window.scrollTo(0, startY + diff * ease(progress));
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

export default function DisplayCards({
  projects,
  expanded,
  onToggle,
}: DisplayCardsProps) {
  const cardEls = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleCardClick = useCallback(
    (clickedIndex: number) => {
      if (!expanded) {
        onToggle();
        setTimeout(() => {
          const el = cardEls.current[clickedIndex];
          if (el) {
            const rect = el.getBoundingClientRect();
            const targetY = window.scrollY + rect.top - window.innerHeight / 2 + rect.height / 2;
            smoothScrollTo(targetY);
          }
        }, 150);
      } else {
        onToggle();
        setTimeout(() => {
          smoothScrollTo(0);
        }, 100);
      }
    },
    [expanded, onToggle],
  );

  return (
    <motion.div
      ref={containerRef}
      layout
      className={cn(
        "relative",
        expanded
          ? "flex flex-col gap-4 w-full"
          : "grid [grid-template-areas:'stack'] place-items-center",
      )}
      transition={{ type: "spring", stiffness: 250, damping: 28 }}
    >
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          project={project}
          index={index}
          total={projects.length}
          expanded={expanded}
          onClick={() => handleCardClick(index)}
          anchorRef={(el) => { cardEls.current[index] = el; }}
        />
      ))}
    </motion.div>
  );
}
