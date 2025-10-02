import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Adit Rahman</h1>
        <p className="text-xl">
          Computer Science Student & Software Engineer
        </p>
        <p className="text-sm mt-2">
          Ottawa, Ontario | University of Waterloo Co-op Program
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="prose prose-lg">
            <h2 className="text-2xl font-semibold mb-4">Background</h2>
            <p className="mb-6">
              I'm Adit Rahman, a Computer Science student at the University of Waterloo with a strong 
              academic record (cGPA: 3.86/4.00) and hands-on industry experience. Currently pursuing 
              my Bachelor's degree through the Co-op program, I've gained valuable experience as a 
              Software Engineer at Shopify, where I worked on performance optimization and system reliability.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Experience Highlights</h2>
            <p className="mb-6">
              At Shopify, I implemented OpenTelemetry instrumentation for application metrics, eliminated 
              race conditions in database operations, and enhanced error reporting systems. My work improved 
              system visibility and reduced debugging time significantly. I also have extensive tutoring 
              experience, having taught 100+ students at KUMON over three years.
            </p>

            <h2 className="text-2xl font-semibold mb-4">Project Focus</h2>
            <ul className="space-y-2">
              <li>• Real-time systems and performance optimization</li>
              <li>• Mobile and web application development</li>
              <li>• Algorithm design and data structures</li>
              <li>• System architecture and scalability</li>
              <li>• Open-source contributions</li>
              <li>• Concurrent programming and distributed systems</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-blue-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Languages</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-blue-100 px-2 py-1 rounded">Python</div>
              <div className="bg-blue-100 px-2 py-1 rounded">C/C++</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Rust</div>
              <div className="bg-blue-100 px-2 py-1 rounded">TypeScript/JavaScript</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Go</div>
              <div className="bg-blue-100 px-2 py-1 rounded">Java</div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Frameworks</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-green-100 px-2 py-1 rounded">React</div>
              <div className="bg-green-100 px-2 py-1 rounded">React Native</div>
              <div className="bg-green-100 px-2 py-1 rounded">Flask</div>
              <div className="bg-green-100 px-2 py-1 rounded">Three.js</div>
              <div className="bg-green-100 px-2 py-1 rounded">WebSockets</div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-3">Tools & Systems</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-purple-100 px-2 py-1 rounded">MongoDB</div>
              <div className="bg-purple-100 px-2 py-1 rounded">SQLite</div>
              <div className="bg-purple-100 px-2 py-1 rounded">Docker</div>
              <div className="bg-purple-100 px-2 py-1 rounded">Git</div>
              <div className="bg-purple-100 px-2 py-1 rounded">Linux/Bash</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
        <p className="mb-4">
          I'm always interested in discussing new opportunities, collaborating on projects, 
          or just connecting with fellow developers and tech enthusiasts.
        </p>
        <p className="text-sm">
          Use the terminal to navigate: type "contact" to get in touch
        </p>
      </div>
    </div>
  );
};

export default About;