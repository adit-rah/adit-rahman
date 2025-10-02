import React from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: "GeoGuard",
      description: "Mobile navigation app that uses crime-aware pathfinding and geospatial data to generate the safest routes using 40,000+ crime data points from the Greater Toronto Area",
      tech: ["Python", "React Native", "Flask", "MongoDB", "OpenRouteService API"],
      status: "Completed",
      featured: true,
      github: "https://github.com/aditrahman/geoguard"
    },
    {
      id: 2,
      title: "Event Aggregator",
      description: "Fast real-time event aggregator using Go goroutines with dynamic event listener management and WebSocket-based streaming for concurrent clients",
      tech: ["Go", "React", "TypeScript", "SQLite", "WebSocket", "Docker"],
      status: "Completed",
      featured: true,
      github: "https://github.com/aditrahman/event-aggregator"
    },
    {
      id: 3,
      title: "Tiny Chat",
      description: "Real-time chat application supporting 200+ concurrent clients with <150ms median message latency using Rust's async primitives and WebSockets",
      tech: ["Rust", "WebSockets", "React", "TypeScript"],
      status: "Completed",
      featured: true,
      github: "https://github.com/aditrahman/tiny-chat"
    },
    {
      id: 4,
      title: "Chess Engine",
      description: "Fully functional chess engine with Minimax search and Alpha-Beta pruning, reducing AI move computation time from 4s to ~800ms (80% improvement)",
      tech: ["C++"],
      status: "Completed",
      featured: false,
      github: "https://github.com/aditrahman/chess-engine"
    },
    {
      id: 5,
      title: "Driving Simulator",
      description: "3D driving simulation engine with interactive terrain, car dynamics using custom shaders, and planned real-time weather integration",
      tech: ["JavaScript", "Three.js", "Cannon.js", "OpenWeather API"],
      status: "In Development",
      featured: false,
      github: "https://github.com/aditrahman/driving-simulator"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <p className="text-xl">
          A showcase of systems programming, web applications, and innovative solutions
        </p>
      </header>

      <div className="grid gap-8 mb-12">
        {projects.map((project) => (
          <div key={project.id} className={`bg-white border-2 rounded-lg p-6 shadow-lg ${
            project.featured ? 'border-blue-200 bg-blue-50' : 'border-gray-200'
          }`}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === 'Completed' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  View Code
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition-colors"
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 p-8 rounded-lg text-center">
        <h3 className="text-2xl font-semibold mb-4">More Projects</h3>
        <p className="mb-4">
          I'm constantly working on new projects, exploring different programming languages, 
          and contributing to open source. Check out my GitHub for the latest updates and contributions.
        </p>
        <a 
          href="https://github.com/aditrahman" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded hover:bg-gray-700 transition-colors"
        >
          View GitHub Profile
        </a>
      </div>
    </div>
  );
};

export default Projects;