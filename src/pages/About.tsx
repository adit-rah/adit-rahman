import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-terminal-green space-y-4">
      <div className="text-2xl text-shadow-terminal-lg mb-6">
        ┌─ PERSONNEL FILE ─────────────────┐
      </div>
      
      <div className="space-y-6 text-terminal-green/90">
        <section>
          <h2 className="text-xl text-terminal-green text-shadow-terminal mb-3">
            [BASIC INFORMATION]
          </h2>
          <div className="pl-4 space-y-2">
            <p>Name: [Your Name Here]</p>
            <p>Role: Full-Stack Developer</p>
            <p>Location: [Your Location]</p>
            <p>Status: Available for Opportunities</p>
          </div>
        </section>

        <section>
          <h2 className="text-xl text-terminal-green text-shadow-terminal mb-3">
            [BACKGROUND]
          </h2>
          <div className="pl-4 space-y-3">
            <p>
              Passionate software developer with expertise in modern web technologies.
              I love building things that solve real problems and make people's lives easier.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing
              to open source projects, or playing video games (especially RPGs like Fallout!).
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl text-terminal-green text-shadow-terminal mb-3">
            [CORE TECHNOLOGIES]
          </h2>
          <div className="pl-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-terminal-green font-bold mb-2">Frontend:</h3>
              <ul className="space-y-1">
                <li>→ React / TypeScript</li>
                <li>→ Next.js</li>
                <li>→ Tailwind CSS</li>
                <li>→ Redux / Zustand</li>
              </ul>
            </div>
            <div>
              <h3 className="text-terminal-green font-bold mb-2">Backend:</h3>
              <ul className="space-y-1">
                <li>→ Node.js / Express</li>
                <li>→ Python / FastAPI</li>
                <li>→ PostgreSQL / MongoDB</li>
                <li>→ Docker / AWS</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl text-terminal-green text-shadow-terminal mb-3">
            [PHILOSOPHY]
          </h2>
          <div className="pl-4 space-y-3">
            <p>
              "The best code is code that doesn't need to exist." - I believe in
              solving problems elegantly and efficiently, always considering the
              end user's experience.
            </p>
            <p>
              I'm committed to writing clean, maintainable code and staying up-to-date
              with industry best practices and emerging technologies.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 text-terminal-green/70 text-sm">
        └─────────────────────────────────┘
        <br />
        Last Updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default About;
