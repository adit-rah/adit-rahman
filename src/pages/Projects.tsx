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
    <div className="text-terminal-green">
      PROJECT DATABASE
      <br />
      =========================================
      <br />
      <br />
        {projects.map((project, index) => (
          <div key={project.id}>
            [{String(index + 1).padStart(2, '0')}] {project.title}
            {project.featured && ' ★ FEATURED'}
            <br />
            STATUS: {project.status.toUpperCase()}
            <br />
            <br />
            {project.description}
            <br />
            <br />
            TECH STACK: {project.tech.join(', ')}
            <br />
            <br />
            {project.github && (
              <>
                GITHUB: {project.github}
                <br />
              </>
            )}
            {project.demo && (
              <>
                DEMO: {project.demo}
                <br />
              </>
            )}
            <br />
            =========================================
            <br />
            <br />
          </div>
        ))}
      
      CONTRIBUTION STATS:
      <br />
      TOTAL PROJECTS: {projects.length}
      <br />
      FEATURED PROJECTS: {projects.filter(p => p.featured).length}
      <br />
      ACTIVE DEVELOPMENT: {projects.filter(p => p.status === 'In Development').length}
      <br />
      <br />
      DATABASE LAST UPDATED: {new Date().toLocaleDateString()}
    </div>
  );
};

export default Projects;
