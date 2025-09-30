import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="text-terminal-green space-y-6">
      <div className="text-2xl text-shadow-terminal-lg mb-6">
        ┌─ PROFESSIONAL RECORD ───────────┐
      </div>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl text-terminal-green text-shadow-terminal">
          [Your Name] - Full Stack Developer
        </h1>
        <a 
          href="/resume.pdf" 
          download
          className="bg-terminal-green/20 border border-terminal-green text-terminal-green px-4 py-2 rounded text-sm hover:bg-terminal-green/30 transition-colors text-shadow-terminal"
        >
          → DOWNLOAD PDF
        </a>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl text-terminal-green text-shadow-terminal">
          [WORK EXPERIENCE]
        </h2>
        
        <div className="space-y-6 pl-4">
          <div className="border-l-2 border-terminal-green/50 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg text-terminal-green font-bold">Senior Developer</h3>
                <p className="text-terminal-green/80">TechCorp Inc.</p>
              </div>
              <span className="text-terminal-green/70 text-sm">2022 - Present</span>
            </div>
            <ul className="text-terminal-green/90 space-y-1 text-sm">
              <li>→ Led development of React-based dashboard serving 10k+ users</li>
              <li>→ Implemented microservices architecture reducing load times by 40%</li>
              <li>→ Mentored 3 junior developers in modern web technologies</li>
              <li>→ Architected CI/CD pipeline improving deployment frequency by 300%</li>
            </ul>
          </div>

          <div className="border-l-2 border-terminal-green/50 pl-4">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-lg text-terminal-green font-bold">Frontend Developer</h3>
                <p className="text-terminal-green/80">StartupXYZ</p>
              </div>
              <span className="text-terminal-green/70 text-sm">2020 - 2022</span>
            </div>
            <ul className="text-terminal-green/90 space-y-1 text-sm">
              <li>→ Built responsive React applications from scratch</li>
              <li>→ Collaborated with design team to implement pixel-perfect UIs</li>
              <li>→ Optimized application performance and SEO</li>
              <li>→ Integrated third-party APIs and payment systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl text-terminal-green text-shadow-terminal">
          [TECHNICAL SKILLS]
        </h2>
        
        <div className="pl-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-terminal-green font-bold mb-2">Frontend</h3>
            <div className="space-y-1 text-sm text-terminal-green/90">
              <div className="flex justify-between">
                <span>React/TypeScript</span>
                <span>████████████ 95%</span>
              </div>
              <div className="flex justify-between">
                <span>Next.js</span>
                <span>██████████░░ 85%</span>
              </div>
              <div className="flex justify-between">
                <span>Tailwind CSS</span>
                <span>███████████░ 90%</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-terminal-green font-bold mb-2">Backend</h3>
            <div className="space-y-1 text-sm text-terminal-green/90">
              <div className="flex justify-between">
                <span>Node.js</span>
                <span>██████████░░ 80%</span>
              </div>
              <div className="flex justify-between">
                <span>Python</span>
                <span>████████░░░░ 75%</span>
              </div>
              <div className="flex justify-between">
                <span>PostgreSQL</span>
                <span>█████████░░░ 70%</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-terminal-green font-bold mb-2">DevOps</h3>
            <div className="space-y-1 text-sm text-terminal-green/90">
              <div className="flex justify-between">
                <span>Docker</span>
                <span>████████░░░░ 70%</span>
              </div>
              <div className="flex justify-between">
                <span>AWS</span>
                <span>██████░░░░░░ 60%</span>
              </div>
              <div className="flex justify-between">
                <span>Git/GitHub</span>
                <span>████████████ 95%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl text-terminal-green text-shadow-terminal">
          [EDUCATION]
        </h2>
        
        <div className="pl-4">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg text-terminal-green font-bold">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-terminal-green/80">University Name</p>
            </div>
            <span className="text-terminal-green/70 text-sm">2016 - 2020</span>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl text-terminal-green text-shadow-terminal">
          [CERTIFICATIONS]
        </h2>
        
        <div className="pl-4 space-y-2 text-terminal-green/90">
          <p>→ AWS Certified Developer Associate (2023)</p>
          <p>→ React Developer Certification (2022)</p>
          <p>→ Google Analytics Certified (2021)</p>
        </div>
      </section>

      <div className="text-terminal-green/70 text-sm mt-8">
        └─────────────────────────────────┘
        <br />
        Record last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default Resume;
