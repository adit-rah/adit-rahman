import React from 'react';

const About: React.FC = () => {
  return (
    <div className="text-terminal-green">
      PERSONNEL FILE - ADIT RAHMAN
      <br />
      =========================================
      <br />
      <br />
      NAME: ADIT RAHMAN
      <br />
      ROLE: FULL-STACK DEVELOPER
      <br />
      LOCATION: [YOUR LOCATION]
      <br />
      STATUS: AVAILABLE FOR OPPORTUNITIES
      <br />
      <br />
      BACKGROUND:
      <br />
      PASSIONATE SOFTWARE DEVELOPER WITH EXPERTISE
      <br />
      IN MODERN WEB TECHNOLOGIES. FOCUSES ON
      <br />
      BUILDING SOLUTIONS THAT SOLVE REAL PROBLEMS
      <br />
      AND IMPROVE USER EXPERIENCES.
      <br />
      <br />
      CORE TECHNOLOGIES:
      <br />
      - REACT / TYPESCRIPT
      <br />
      - NODE.JS / EXPRESS
      <br />
      - PYTHON / FASTAPI
      <br />
      - POSTGRESQL / MONGODB
      <br />
      - DOCKER / AWS
      <br />
      - TAILWIND CSS
      <br />
      - NEXT.JS
      <br />
      <br />
      PHILOSOPHY:
      <br />
      "THE BEST CODE IS CODE THAT DOESN'T NEED
      <br />
      TO EXIST." - COMMITTED TO WRITING CLEAN,
      <br />
      MAINTAINABLE CODE AND STAYING CURRENT
      <br />
      WITH INDUSTRY BEST PRACTICES.
      <br />
      <br />
      =========================================
      <br />
      FILE LAST UPDATED: {new Date().toLocaleDateString()}
    </div>
  );
};

export default About;
