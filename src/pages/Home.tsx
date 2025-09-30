import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-terminal-green space-y-6">
      <div className="text-2xl text-shadow-terminal-lg mb-8 text-center">
        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
        <br />
        ░░░░░░░░░ VAULT-TEC PERSONAL SYSTEM ░░░░░░░░░
        <br />
        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
      </div>

      <div className="space-y-8">
        <section className="text-center space-y-4">
          <div className="text-6xl text-shadow-terminal-lg mb-4">
            ┌─────────────────────┐
            <br />
            │   SYSTEM  READY     │
            <br />
            └─────────────────────┘
          </div>
          
          <p className="text-xl text-terminal-green/90 max-w-2xl mx-auto leading-relaxed">
            Welcome to my personal terminal interface. Navigate through the system using
            the command line below, or explore the sections directly.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <h3 className="text-lg text-terminal-green text-shadow-terminal mb-2">
              [ABOUT]
            </h3>
            <p className="text-terminal-green/80 text-sm">
              Learn about my background, experience, and what drives me as a developer.
            </p>
            <div className="mt-3 text-xs text-terminal-green/60">
              Command: about
            </div>
          </div>

          <div className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <h3 className="text-lg text-terminal-green text-shadow-terminal mb-2">
              [PROJECTS]
            </h3>
            <p className="text-terminal-green/80 text-sm">
              Browse my development portfolio and explore the things I've built.
            </p>
            <div className="mt-3 text-xs text-terminal-green/60">
              Command: projects
            </div>
          </div>

          <div className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <h3 className="text-lg text-terminal-green text-shadow-terminal mb-2">
              [RESUME]
            </h3>
            <p className="text-terminal-green/80 text-sm">
              View my professional experience, skills, and download my resume.
            </p>
            <div className="mt-3 text-xs text-terminal-green/60">
              Command: resume
            </div>
          </div>

          <div className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <h3 className="text-lg text-terminal-green text-shadow-terminal mb-2">
              [BLOG]
            </h3>
            <p className="text-terminal-green/80 text-sm">
              Read my thoughts on development, technology, and programming.
            </p>
            <div className="mt-3 text-xs text-terminal-green/60">
              Command: blog
            </div>
          </div>

          <div className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <h3 className="text-lg text-terminal-green text-shadow-terminal mb-2">
              [CONTACT]
            </h3>
            <p className="text-terminal-green/80 text-sm">
              Get in touch with me for opportunities or collaborations.
            </p>
            <div className="mt-3 text-xs text-terminal-green/60">
              Command: contact
            </div>
          </div>

          <div className="border border-terminal-green/30 p-4 rounded-sm hover:bg-terminal-green/5 transition-colors">
            <h3 className="text-lg text-terminal-green text-shadow-terminal mb-2">
              [HELP]
            </h3>
            <p className="text-terminal-green/80 text-sm">
              View all available commands and learn how to navigate the terminal.
            </p>
            <div className="mt-3 text-xs text-terminal-green/60">
              Command: help
            </div>
          </div>
        </section>

        <section className="text-center space-y-4 pt-8">
          <div className="text-lg text-terminal-green text-shadow-terminal">
            [QUICK START GUIDE]
          </div>
          <div className="space-y-2 text-terminal-green/90">
            <p>→ Type "help" to see all available commands</p>
            <p>→ Use your keyboard arrow keys to navigate command history</p>
            <p>→ Try typing "sudo" for a surprise 😉</p>
            <p>→ All sections support both command-line and direct navigation</p>
          </div>
        </section>

        <section className="border border-terminal-amber/50 p-4 rounded-sm bg-terminal-amber/5">
          <h3 className="text-terminal-amber text-shadow-terminal mb-2">
            [SYSTEM INFORMATION]
          </h3>
          <div className="text-terminal-amber/90 space-y-1 text-sm">
            <p>Terminal Version: 2.1.7</p>
            <p>Last Boot: {new Date().toLocaleString()}</p>
            <p>Uptime: Connected</p>
            <p>Security Level: Vault-Tec Standard</p>
            <p>User Access: Guest (Elevated permissions available)</p>
          </div>
        </section>
      </div>

      <div className="text-center text-terminal-green/70 text-sm pt-8">
        ═══════════════════════════════════════════
        <br />
        "A brighter future, underground."
        <br />
        - Vault-Tec Corporation
        <br />
        ═══════════════════════════════════════════
      </div>
    </div>
  );
};

export default Home;
