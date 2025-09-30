import React from 'react';
import StreamingText from '../components/StreamingText';
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

  // Build the content string
  let projectsContent = `PROJECT DATABASE
=========================================

`;

  projects.forEach((project, index) => {
    projectsContent += `[${String(index + 1).padStart(2, '0')}] ${project.title}`;
    if (project.featured) {
      projectsContent += ' ★ FEATURED';
    }
    projectsContent += `
STATUS: ${project.status.toUpperCase()}

${project.description}

TECH STACK: ${project.tech.join(', ')}

`;
    if (project.github) {
      projectsContent += `GITHUB: ${project.github}
`;
    }
    if (project.demo) {
      projectsContent += `DEMO: ${project.demo}
`;
    }
    projectsContent += `
=========================================

`;
  });

  projectsContent += `CONTRIBUTION STATS:
TOTAL PROJECTS: ${projects.length}
FEATURED PROJECTS: ${projects.filter(p => p.featured).length}
ACTIVE DEVELOPMENT: ${projects.filter(p => p.status === 'In Development').length}

DATABASE LAST UPDATED: ${new Date().toLocaleDateString()}`;

  return (
    <div className="text-terminal-green font-mono leading-tight whitespace-pre-line">
      <StreamingText 
        text={projectsContent}
        speed={15}
        startDelay={400}
      />
    </div>
  );
};

export default Projects;
