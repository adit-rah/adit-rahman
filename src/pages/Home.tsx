import { useCallback } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import SkillsMarquee from "@/components/SkillsMarquee";
import Experience from "@/components/Experience";
import FeaturedProjects from "@/components/FeaturedProjects";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";
import { Link } from "react-router-dom";
import { Github, Linkedin, ChevronDown } from "lucide-react";

// cubic-bezier(0.25, 0.1, 0.25, 1.0) — CSS "ease" curve
function easeBezier(t: number): number {
  const cx = 3 * 0.25,
    bx = 3 * (0.25 - 0.25) - cx,
    ax = 1 - cx - bx;
  const cy = 3 * 0.1,
    by = 3 * (1.0 - 0.1) - cy,
    ay = 1 - cy - by;

  function sampleX(s: number) {
    return ((ax * s + bx) * s + cx) * s;
  }
  function sampleY(s: number) {
    return ((ay * s + by) * s + cy) * s;
  }

  let s = t;
  for (let i = 0; i < 8; i++) {
    const x = sampleX(s) - t;
    if (Math.abs(x) < 1e-6) break;
    const dx = (3 * ax * s + 2 * bx) * s + cx;
    if (Math.abs(dx) < 1e-6) break;
    s -= x / dx;
  }
  return sampleY(s);
}

export default function Home() {
  const scrollPastHero = useCallback(() => {
    const start = window.scrollY;
    const target = window.innerHeight;
    const duration = 900;
    let startTime: number | null = null;

    function step(timestamp: number) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeBezier(progress);
      window.scrollTo(0, start + (target - start) * eased);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-background relative flex flex-col items-center justify-center overflow-hidden">
        <FadeInGroup className="max-w-2xl mx-auto p-4">
          <FadeIn>
            <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
              Adit Rahman
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="text-muted-foreground max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10 leading-relaxed">
              CS @ Waterloo &middot; Building software that matters.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground relative z-10 mt-6">
              <Link
                to="/projects"
                className="hover:text-foreground transition-colors"
              >
                View projects &rarr;
              </Link>
              <a
                href="https://github.com/adit-rah"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                <Github className="size-[18px]" />
              </a>
              <a
                href="https://linkedin.com/in/adit-rahman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                <Linkedin className="size-[18px]" />
              </a>
            </div>
          </FadeIn>
        </FadeInGroup>

        <FadeIn className="absolute bottom-10 z-10">
          <button
            onClick={scrollPastHero}
            className="rounded-full border border-border/60 bg-background/40 backdrop-blur-md p-2 text-muted-foreground hover:text-foreground hover:border-foreground/40 transition-colors cursor-pointer"
          >
            <ChevronDown className="size-5" />
          </button>
        </FadeIn>

        <BackgroundBeams />
      </div>
      <SkillsMarquee />
      <Experience />
      <FeaturedProjects />
      <Education />
      <Footer />
    </>
  );
}
