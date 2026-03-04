import { BackgroundBeams } from "@/components/ui/background-beams";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen w-full bg-background relative flex flex-col items-center justify-center overflow-hidden">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
          Adit Rahman
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10 leading-relaxed">
          CS @ Waterloo &middot; Building software that matters.
        </p>
        <div className="flex justify-center gap-6 text-sm text-muted-foreground relative z-10 mt-6">
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
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/adit-rahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
