import React from 'react';
import projectsData from '../content/projects.json';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  status: string;
  featured: boolean;
}

const Projects: React.FC = () => {
  const projects = projectsData as Project[];

  return (
    <div className="text-terminal-green space-y-6">
      <div className="text-2xl text-shadow-terminal-lg mb-6">
        ┌─ PROJECT DATABASE ──────────────┐
      </div>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={project.id} className="border border-terminal-green/30 p-4 rounded-sm">
            <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl text-terminal-green text-shadow-terminal">
                  [{String(index + 1).padStart(2, '0')}] {project.title}
                {project.featured && (
                  <span className="ml-2 text-sm text-terminal-amber">★ FEATURED</span>
                )}
              </h2>
              <div className={`text-sm px-2 py-1 rounded ${
                project.status === 'Completed' ? 'bg-green-900/50 text-green-400' :
                project.status === 'In Development' ? 'bg-yellow-900/50 text-yellow-400' :
                'bg-blue-900/50 text-blue-400'
              }`}>
                {project.status}
              </div>
            </div>

            <p className="text-terminal-green/90 mb-4 leading-relaxed">
              {project.description}
            </p>

            <div className="mb-4">
              <h3 className="text-terminal-green font-bold mb-2">Tech Stack:</h3>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="bg-terminal-green/10 text-terminal-green px-2 py-1 text-sm rounded border border-terminal-green/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex gap-4 text-sm">
              {project.github && (
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-terminal-amber transition-colors text-shadow-terminal"
                >
                  → GitHub Repository
                </a>
              )}
              {project.demo && (
                <a 
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-terminal-amber transition-colors text-shadow-terminal"
                >
                  → Live Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 border border-terminal-green/30 rounded-sm bg-terminal-green/5">
        <h3 className="text-terminal-green text-shadow-terminal mb-2">
          [CONTRIBUTION STATS]
        </h3>
        <div className="text-terminal-green/90 space-y-1">
          <p>Total Projects: {projects.length}</p>
          <p>Featured Projects: {projects.filter(p => p.featured).length}</p>
          <p>Active Development: {projects.filter(p => p.status === 'In Development').length}</p>
        </div>
      </div>

      <div className="text-terminal-green/70 text-sm">
        └─────────────────────────────────┘
        <br />
        Database last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default Projects;
