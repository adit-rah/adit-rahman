import React from 'react';
import StreamingText from '../components/StreamingText';

const About: React.FC = () => {
  const aboutContent = `PERSONNEL FILE - ADIT RAHMAN
=========================================

NAME: ADIT RAHMAN
ROLE: FULL-STACK DEVELOPER
LOCATION: [YOUR LOCATION]
STATUS: AVAILABLE FOR OPPORTUNITIES

BACKGROUND:
PASSIONATE SOFTWARE DEVELOPER WITH EXPERTISE
IN MODERN WEB TECHNOLOGIES. FOCUSES ON
BUILDING SOLUTIONS THAT SOLVE REAL PROBLEMS
AND IMPROVE USER EXPERIENCES.

CORE TECHNOLOGIES:
- REACT / TYPESCRIPT
- NODE.JS / EXPRESS
- PYTHON / FASTAPI
- POSTGRESQL / MONGODB
- DOCKER / AWS
- TAILWIND CSS
- NEXT.JS

PHILOSOPHY:
"THE BEST CODE IS CODE THAT DOESN'T NEED
TO EXIST." - COMMITTED TO WRITING CLEAN,
MAINTAINABLE CODE AND STAYING CURRENT
WITH INDUSTRY BEST PRACTICES.

=========================================
FILE LAST UPDATED: ${new Date().toLocaleDateString()}`;

  return (
    <div className="text-terminal-green font-mono leading-tight whitespace-pre-line">
      <StreamingText 
        text={aboutContent}
        speed={25}
        startDelay={300}
      />
    </div>
  );
};

export default About;
