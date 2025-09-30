import React from 'react';
import StreamingText from '../components/StreamingText';

const Resume: React.FC = () => {
  const resumeContent = `PROFESSIONAL RECORD - ADIT RAHMAN
=========================================

DOWNLOAD PDF: /resume.pdf

WORK EXPERIENCE:
=========================================

SENIOR DEVELOPER - TECHCORP INC.        2022 - PRESENT
- LED DEVELOPMENT OF REACT DASHBOARD (10K+ USERS)
- IMPLEMENTED MICROSERVICES ARCHITECTURE
- REDUCED LOAD TIMES BY 40%
- MENTORED 3 JUNIOR DEVELOPERS

FRONTEND DEVELOPER - STARTUPXYZ         2020 - 2022  
- BUILT RESPONSIVE REACT APPLICATIONS
- COLLABORATED WITH DESIGN TEAM
- OPTIMIZED PERFORMANCE AND SEO
- INTEGRATED APIS AND PAYMENT SYSTEMS

TECHNICAL SKILLS:
=========================================

FRONTEND:    REACT/TYPESCRIPT ████████████ 95%
             NEXT.JS          ██████████░░ 85%
             TAILWIND CSS     ███████████░ 90%

BACKEND:     NODE.JS          ██████████░░ 80%
             PYTHON           ████████░░░░ 75%
             POSTGRESQL       █████████░░░ 70%

DEVOPS:      DOCKER           ████████░░░░ 70%
             AWS              ██████░░░░░░ 60%
             GIT/GITHUB       ████████████ 95%

EDUCATION:
=========================================

BACHELOR OF SCIENCE - COMPUTER SCIENCE
UNIVERSITY NAME                          2016 - 2020

CERTIFICATIONS:
=========================================

AWS CERTIFIED DEVELOPER ASSOCIATE       2023
REACT DEVELOPER CERTIFICATION           2022
GOOGLE ANALYTICS CERTIFIED              2021

=========================================
RECORD LAST UPDATED: ${new Date().toLocaleDateString()}`;

  return (
    <div className="text-terminal-green font-mono leading-tight whitespace-pre-line">
      <StreamingText 
        text={resumeContent}
        speed={20}
        startDelay={350}
      />
    </div>
  );
};

export default Resume;
