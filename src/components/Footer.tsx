import { Github, Linkedin, Mail } from "lucide-react";
import { type ReactNode } from "react";

const links: { label: string; href: string; icon: ReactNode }[] = [
  { label: "Email", href: "mailto:aditrahman5945@gmail.com", icon: <Mail className="size-4" /> },
  { label: "GitHub", href: "https://github.com/adit-rah", icon: <Github className="size-4" /> },
  { label: "LinkedIn", href: "https://linkedin.com/in/adit-rahman", icon: <Linkedin className="size-4" /> },
];

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-background border-t border-border/40">
      <div className="max-w-2xl mx-auto space-y-6 text-center">
        <h2 className="text-xl font-medium text-foreground">
          Let&rsquo;s connect
        </h2>
        <p className="text-sm text-muted-foreground">
          Open to opportunities, collaborations, or just a good conversation.
        </p>
        <div className="flex justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-xs text-muted-foreground/40 pt-4">
          &copy; {new Date().getFullYear()} Adit Rahman
        </p>
      </div>
    </footer>
  );
}
