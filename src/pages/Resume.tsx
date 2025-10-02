import React from 'react';

const Resume: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Adit Rahman</h1>
        <p className="text-xl">
          Computer Science Student & Software Engineer
        </p>
        <p className="text-sm mt-2">
          Ottawa, Ontario | aditrahman5945@gmail.com | 613-263-2672
        </p>
        <div className="mt-4">
          <a href="/resume.pdf" target="_blank" className="text-white px-6 py-2 rounded hover:bg-blue-500 transition-colors">
            Download PDF
          </a>
        </div>
      </header>

      <div className="space-y-12">
        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-2">
            Education
          </h2>
          
          <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <h3 className="text-xl font-semibold">Bachelor of Computer Science, Co-op</h3>
              <span className="text-sm">Sept. 2024 – June 2029</span>
            </div>
            <p className="font-medium mb-2">University of Waterloo | cGPA: 3.86/4.00</p>
            <p className="text-sm mb-2"><strong>Relevant Coursework:</strong></p>
            <ul className="text-sm space-y-1">
              <li>• Object-Oriented Software Development, Functional Programming (Advanced)</li>
              <li>• Algorithm Design & Data Abstraction, Graph Theory</li>
              <li>• Linear Algebra, Calculus I/II, Statistics, Logic and Computation</li>
            </ul>
          </div>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-2">
            Professional Experience
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white border-l-4 border-blue-500 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold">Software Engineer</h3>
                <span className="text-sm">September 2025 – December 2025</span>
              </div>
              <p className="font-medium mb-2">Shopify | Ottawa, Ontario</p>
              <ul className="space-y-1">
                <li>• Implemented OpenTelemetry instrumentation to collect and report application metrics to Observe, improving visibility into performance and system health</li>
                <li>• Eliminated race conditions in database operations by refactoring upsert logic, ensuring smoother concurrent writes</li>
                <li>• Enhanced server-side stacktrace reporting to Observe, improving error visibility and reducing debugging time</li>
                <li>• Authored setup documentation and contributed to integration testing planning for a large-scale project</li>
              </ul>
            </div>

            <div className="bg-white border-l-4 border-green-500 pl-6 py-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-semibold">Instructor</h3>
                <span className="text-sm">July 2021 – August 2024</span>
              </div>
              <p className="font-medium mb-2">KUMON | Ottawa, Ontario</p>
              <ul className="space-y-1">
                <li>• Tutored 100+ students aged 6 to 17 in core subjects regardless of their initial understanding</li>
                <li>• Developed personalized learning strategies to accommodate different learning styles</li>
                <li>• Maintained detailed progress tracking and provided regular feedback to parents</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technical Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b-2 border-blue-200 pb-2">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Languages</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-blue-100 px-2 py-1 rounded">Python</div>
                <div className="bg-blue-100 px-2 py-1 rounded">C/C++</div>
                <div className="bg-blue-100 px-2 py-1 rounded">Rust</div>
                <div className="bg-blue-100 px-2 py-1 rounded">TypeScript/JavaScript</div>
                <div className="bg-blue-100 px-2 py-1 rounded">Go</div>
                <div className="bg-blue-100 px-2 py-1 rounded">Ruby</div>
                <div className="bg-blue-100 px-2 py-1 rounded">Java</div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Frameworks & Libraries</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-green-100 px-2 py-1 rounded">React</div>
                <div className="bg-green-100 px-2 py-1 rounded">React Native</div>
                <div className="bg-green-100 px-2 py-1 rounded">Flask</div>
                <div className="bg-green-100 px-2 py-1 rounded">Three.js</div>
                <div className="bg-green-100 px-2 py-1 rounded">Cannon.js</div>
                <div className="bg-green-100 px-2 py-1 rounded">WebSockets</div>
              </div>
            </div>

            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Tools & Technologies</h3>
              <div className="space-y-2 text-sm">
                <div className="bg-purple-100 px-2 py-1 rounded">MongoDB</div>
                <div className="bg-purple-100 px-2 py-1 rounded">SQLite</div>
                <div className="bg-purple-100 px-2 py-1 rounded">Docker</div>
                <div className="bg-purple-100 px-2 py-1 rounded">Git</div>
                <div className="bg-purple-100 px-2 py-1 rounded">Linux</div>
                <div className="bg-purple-100 px-2 py-1 rounded">Bash</div>
                <div className="bg-purple-100 px-2 py-1 rounded">Observe</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Resume;