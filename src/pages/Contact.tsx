import React, { useState } from 'react';
import StreamingText from '../components/StreamingText';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with a service like Formspree
    console.log('Form submitted:', formData);
    alert('Message transmission initiated! (This is a demo - integrate with Formspree for real functionality)');
  };

  const contactContent = `COMMUNICATION TERMINAL
=========================================

DIRECT CHANNELS:

EMAIL: your.email@example.com
GITHUB: github.com/yourusername  
LINKEDIN: linkedin.com/in/yourprofile
LOCATION: Your City, Country

STATUS:
- OPEN TO NEW OPPORTUNITIES
- AVAILABLE FOR FREELANCE WORK  
- RESPONSE TIME: USUALLY WITHIN 24 HOURS
- PREFERRED CONTACT: EMAIL

INTERESTS:
- FULL-STACK DEVELOPMENT OPPORTUNITIES
- OPEN SOURCE COLLABORATION
- TECHNICAL WRITING AND BLOGGING
- MENTORING AND KNOWLEDGE SHARING
- INNOVATIVE WEB TECHNOLOGIES

MESSAGE TRANSMISSION FORM:
USE THE INTERFACE BELOW TO SEND ENCRYPTED
COMMUNICATIONS. ALL TRANSMISSIONS ARE LOGGED
FOR QUALITY ASSURANCE.

SECURITY NOTICE:
YOUR INFORMATION WILL NEVER BE SHARED WITH
THIRD PARTIES.

=========================================
COMMUNICATION PROTOCOLS LAST UPDATED: ${new Date().toLocaleDateString()}`;

  return (
    <div className="text-terminal-green space-y-6">

      <div className="mb-6">
        <StreamingText 
          text={contactContent}
          speed={20}
          startDelay={300}
        />
      </div>

      {/* Simple Contact Form */}
      <div className="border-t border-terminal-green/30 pt-6 mt-6">
        <div className="text-terminal-green/80 text-sm mb-4">
          MESSAGE TRANSMISSION INTERFACE:
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 font-mono">
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green/70 w-20">NAME:</span>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="flex-1 bg-transparent border-b border-terminal-green/50 text-terminal-green outline-none font-mono"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green/70 w-20">EMAIL:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="flex-1 bg-transparent border-b border-terminal-green/50 text-terminal-green outline-none font-mono"
              required
            />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-terminal-green/70 w-20">SUBJECT:</span>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              className="flex-1 bg-transparent border-b border-terminal-green/50 text-terminal-green outline-none font-mono"
              required
            />
          </div>
          
          <div>
            <div className="text-terminal-green/70 text-sm mb-2">MESSAGE:</div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={4}
              className="w-full bg-transparent border border-terminal-green/50 text-terminal-green p-2 outline-none font-mono resize-none"
              required
            />
          </div>
          
          <button
            type="submit"
            className="bg-transparent border border-terminal-green text-terminal-green px-6 py-2 hover:bg-terminal-green/20 transition-colors font-mono"
          >
            &gt; TRANSMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
