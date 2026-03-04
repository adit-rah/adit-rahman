const links = [
  { label: "Email", href: "mailto:aditrahman5945@gmail.com" },
  { label: "GitHub", href: "https://github.com/adit-rah" },
  { label: "LinkedIn", href: "https://linkedin.com/in/adit-rahman" },
];

export default function Contact() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
          Contact
        </h1>
        <div className="mb-10" />
        <p className="text-muted-foreground leading-relaxed">
          Want to chat about a project, an opportunity, or just say
          hi? Reach out through any of the links below.
        </p>
        <ul className="space-y-3">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
              >
                {link.label} &rarr;
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
