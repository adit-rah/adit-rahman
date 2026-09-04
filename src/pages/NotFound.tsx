import { Link, useLocation } from "react-router-dom";
import Footer from "@/components/Footer";
import { FadeInGroup, FadeIn } from "@/components/FadeIn";

const suggestions = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function NotFound() {
  const { pathname } = useLocation();

  return (
    <>
      <div className="min-h-screen bg-background pt-32 pb-20 px-6">
        <FadeInGroup className="max-w-2xl mx-auto">
          <FadeIn>
            <p className="text-xs tracking-widest text-muted-foreground/60 uppercase mb-4">
              404
            </p>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              This page doesn&rsquo;t exist
            </h1>
          </FadeIn>
          <FadeIn>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              Nothing is routed at{" "}
              <span className="text-foreground break-all">{pathname}</span>. It
              may have moved, or the link might be mistyped.
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-8 flex flex-wrap gap-2">
              {suggestions.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="text-sm text-muted-foreground border border-border rounded-lg px-4 py-2 hover:text-foreground hover:border-muted-foreground/40 transition-colors"
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </FadeIn>
        </FadeInGroup>
      </div>
      <Footer />
    </>
  );
}
