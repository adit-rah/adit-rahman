import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Github, Linkedin } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/40"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-2xl items-center justify-between px-6 py-4">
        <div className="relative group">
          <NavLink
            to="/"
            className="text-sm font-medium text-foreground tracking-tight inline-block"
          >
            AR
          </NavLink>
          <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            <div className="bg-background/90 backdrop-blur-md border border-border/60 rounded-lg shadow-lg py-4 px-4 min-w-[220px]">
              <p className="font-medium text-foreground">Adit Rahman</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                CS @ Waterloo · Building software that matters
              </p>
              <div className="mt-3 pt-3 border-t border-border/40 flex gap-4">
                <Link
                  to="/resume"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Resume
                </Link>
                <Link
                  to="/contact"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ul className="flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "text-sm transition-colors",
                    isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                cn(
                  "text-sm transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )
              }
            >
              Resume
            </NavLink>
          </li>
          <li className="flex items-center gap-3 ml-6 border-l border-border/40 pl-8">
            <a
              href="https://github.com/adit-rah"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="size-4" />
            </a>
            <a
              href="https://linkedin.com/in/adit-rahman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
