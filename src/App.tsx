import { BackgroundBeams } from "@/components/ui/background-beams";

export default function App() {
  return (
    <div className="dark">
      <div className="h-screen w-full bg-background relative flex flex-col items-center justify-center antialiased overflow-hidden">
        <div className="max-w-2xl mx-auto p-4">
          <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-muted-foreground text-center font-sans font-bold">
            Adit Rahman
          </h1>
          <p className="text-muted-foreground max-w-lg mx-auto my-4 text-sm md:text-base text-center relative z-10 leading-relaxed">
            Welcome to my corner of the internet. Software engineer, builder,
            and lifelong learner. This site is a work in progress&mdash;more
            coming soon.
          </p>
          <nav className="flex justify-center gap-6 text-sm text-muted-foreground relative z-10 mt-6">
            <a
              href="https://github.com/aditrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/aditrahman"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </nav>
        </div>
        <BackgroundBeams />
      </div>
    </div>
  );
}
