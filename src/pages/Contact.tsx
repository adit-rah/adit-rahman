import React, { useState } from 'react';

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

  return (
    <div className="text-terminal-green space-y-6">
      <div className="text-2xl text-shadow-terminal-lg mb-6">
        ┌─ COMMUNICATION TERMINAL ────────┐
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <section>
            <h2 className="text-xl text-terminal-green text-shadow-terminal mb-4">
              [DIRECT CHANNELS]
            </h2>
            
            <div className="space-y-4 pl-4">
              <div className="flex items-center space-x-3">
                <span className="text-terminal-green/70">EMAIL:</span>
                <a 
                  href="mailto:your.email@example.com"
                  className="text-terminal-green hover:text-terminal-amber transition-colors text-shadow-terminal"
                >
                  your.email@example.com
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-terminal-green/70">GITHUB:</span>
                <a 
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-terminal-amber transition-colors text-shadow-terminal"
                >
                  github.com/yourusername
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-terminal-green/70">LINKEDIN:</span>
                <a 
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:text-terminal-amber transition-colors text-shadow-terminal"
                >
                  linkedin.com/in/yourprofile
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-terminal-green/70">LOCATION:</span>
                <span className="text-terminal-green/90">Your City, Country</span>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-terminal-green text-shadow-terminal mb-4">
              [STATUS]
            </h2>
            
            <div className="pl-4 space-y-2 text-terminal-green/90">
              <p>→ Open to new opportunities</p>
              <p>→ Available for freelance work</p>
              <p>→ Response time: Usually within 24 hours</p>
              <p>→ Preferred contact: Email</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl text-terminal-green text-shadow-terminal mb-4">
              [INTERESTS]
            </h2>
            
            <div className="pl-4 space-y-2 text-terminal-green/90 text-sm">
              <p>→ Full-stack development opportunities</p>
              <p>→ Open source collaboration</p>
              <p>→ Technical writing and blogging</p>
              <p>→ Mentoring and knowledge sharing</p>
              <p>→ Innovative web technologies</p>
            </div>
          </section>
        </div>

        {/* Contact Form */}
        <div>
          <section>
            <h2 className="text-xl text-terminal-green text-shadow-terminal mb-4">
              [MESSAGE TRANSMISSION]
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-terminal-green/70 text-sm mb-1">
                  Sender Name:
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-terminal-green/50 text-terminal-green p-2 rounded focus:border-terminal-green focus:outline-none text-shadow-terminal"
                  required
                />
              </div>
              
              <div>
                <label className="block text-terminal-green/70 text-sm mb-1">
                  Email Address:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-terminal-green/50 text-terminal-green p-2 rounded focus:border-terminal-green focus:outline-none text-shadow-terminal"
                  required
                />
              </div>
              
              <div>
                <label className="block text-terminal-green/70 text-sm mb-1">
                  Subject:
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-terminal-green/50 text-terminal-green p-2 rounded focus:border-terminal-green focus:outline-none text-shadow-terminal"
                  required
                />
              </div>
              
              <div>
                <label className="block text-terminal-green/70 text-sm mb-1">
                  Message:
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full bg-transparent border border-terminal-green/50 text-terminal-green p-2 rounded focus:border-terminal-green focus:outline-none text-shadow-terminal resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-terminal-green/20 border border-terminal-green text-terminal-green py-2 px-4 rounded hover:bg-terminal-green/30 transition-colors text-shadow-terminal"
              >
                → TRANSMIT MESSAGE
              </button>
            </form>
          </section>

          <div className="mt-6 p-3 border border-terminal-amber/50 rounded bg-terminal-amber/5">
            <p className="text-terminal-amber/90 text-xs">
              ⚠ Security Notice: All transmissions are encrypted and logged for quality assurance.
              Your information will never be shared with third parties.
            </p>
          </div>
        </div>
      </div>

      <div className="text-terminal-green/70 text-sm">
        └─────────────────────────────────┘
        <br />
        Communication protocols last updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
};

export default Contact;
