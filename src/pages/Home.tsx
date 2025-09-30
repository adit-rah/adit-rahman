import React from 'react';
import StreamingText from '../components/StreamingText';

const Home: React.FC = () => {
  const homeContent = `ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL
PERSONAL INFORMATION MANAGEMENT SYSTEM
=========================================

AVAILABLE TERMINAL FUNCTIONS:

ABOUT     - PERSONAL INFORMATION
PROJECTS  - SOFTWARE PORTFOLIO
RESUME    - PROFESSIONAL HISTORY
BLOG      - TECHNICAL WRITINGS
CONTACT   - COMMUNICATION OPTIONS
HELP      - DISPLAY ALL COMMANDS

TYPE FUNCTION NAME TO EXECUTE
ENTER "CLEAR" TO CLEAR SCREEN

=========================================
ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM
COPYRIGHT 2075-2077 ROBCO INDUSTRIES
=========================================`;

  return (
    <div className="text-terminal-green font-mono leading-tight whitespace-pre-line">
      <StreamingText 
        text={homeContent}
        speed={20}
        startDelay={500}
      />
    </div>
  );
};

export default Home;