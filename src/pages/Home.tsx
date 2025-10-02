import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to Adit Rahman's Portfolio
        </h1>
        <p className="text-xl text-gray-600">
          Full-Stack Developer & Software Engineer
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">About Me</h2>
          <p className="text-gray-700 mb-4">
            Passionate software developer with expertise in modern web technologies, 
            creating scalable applications and innovative solutions.
          </p>
          <p className="text-sm text-blue-600">Use terminal: type "about"</p>
        </div>

        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">Projects</h2>
          <p className="text-gray-700 mb-4">
            Explore my portfolio of web applications, mobile apps, and 
            open-source contributions across various technologies.
          </p>
          <p className="text-sm text-green-600">Use terminal: type "projects"</p>
        </div>

        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">Resume</h2>
          <p className="text-gray-700 mb-4">
            View my professional experience, technical skills, and 
            educational background in software development.
          </p>
          <p className="text-sm text-purple-600">Use terminal: type "resume"</p>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-orange-800 mb-4">Contact</h2>
          <p className="text-gray-700 mb-4">
            Get in touch for collaboration opportunities, project discussions, 
            or just to connect with a fellow developer.
          </p>
          <p className="text-sm text-orange-600">Use terminal: type "contact"</p>
        </div>
      </div>

      <div className="text-center bg-gray-50 p-8 rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Navigate Using the Terminal
        </h3>
        <p className="text-gray-600 mb-4">
          This website features a unique Fallout-style terminal interface. 
          Use the terminal on the left to navigate between sections.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm">
          <span className="bg-gray-200 px-3 py-1 rounded">about</span>
          <span className="bg-gray-200 px-3 py-1 rounded">projects</span>
          <span className="bg-gray-200 px-3 py-1 rounded">resume</span>
          <span className="bg-gray-200 px-3 py-1 rounded">blog</span>
          <span className="bg-gray-200 px-3 py-1 rounded">contact</span>
          <span className="bg-gray-200 px-3 py-1 rounded">help</span>
        </div>
      </div>
    </div>
  );
};

export default Home;