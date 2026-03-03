export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex items-center justify-center px-6">
      <main className="max-w-xl w-full space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">Adit Rahman</h1>
        <p className="text-lg text-neutral-400 leading-relaxed">
          Welcome to my corner of the internet. This site is under
          construction&mdash;check back soon.
        </p>
        <nav className="flex gap-6 text-sm text-neutral-500">
          <a
            href="https://github.com/aditrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-100 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/aditrahman"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-100 transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </main>
    </div>
  );
}
