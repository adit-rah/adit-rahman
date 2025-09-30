import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { parseCommand, findCommand, formatHelp, getEasterEgg } from '../utils/commandParser';

interface TerminalProps {
  children?: React.ReactNode;
}

interface HistoryEntry {
  type: 'command' | 'output' | 'error' | 'boot';
  content: string;
  timestamp: Date;
}

const Terminal: React.FC<TerminalProps> = ({ children }) => {
  const [input, setInput] = useState('');
  const [isBooting, setIsBooting] = useState(true);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Boot sequence
  useEffect(() => {
    const bootSequence = [
      'ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL',
      'ENTER PASSWORD NOW',
      '',
      '> Trying Password...',
      '> Entry Denied',
      '> Trying Password...',
      '> Entry Denied', 
      '> Trying Password...',
      '> Exact match!',
      '> Please wait while system loads.',
      '',
      'WELCOME TO ROBCO INDUSTRIES (TM) TERMLINK',
      '',
      'RobCo Industries - Personal Terminal',
      '>Set Terminal/Inquiry',
      '',
      'Initializing Robco Industries(TM) MF Boot Agent v2.3.0',
      'RETROS BIOS',
      'RBIOS-4.02.08.00 52EE5.E7.E8',
      'Copyright 2201-2203 Robco Ind.',
      'Uppermem: 64 KB',
      'Root (5A8)',
      'Maintenance Mode',
      '',
      'RobCo Industries Unified Operating System',
      'COPYRIGHT 2075-2077 ROBCO INDUSTRIES',
      '-Server 1-',
      '',
      'Personal Information Management System',
      'Enter command or type HELP for assistance.',
      ''
    ];

    let currentIndex = 0;
    const bootInterval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setHistory(prev => [...prev, {
          type: 'boot',
          content: bootSequence[currentIndex],
          timestamp: new Date()
        }]);
        currentIndex++;
      } else {
        setIsBooting(false);
        clearInterval(bootInterval);
        // Focus input after boot
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 500);
      }
    }, 150);

    return () => clearInterval(bootInterval);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addToHistory = (type: HistoryEntry['type'], content: string) => {
    setHistory(prev => [...prev, { type, content, timestamp: new Date() }]);
  };

  const handleCommand = (command: string) => {
    if (!command.trim()) return;

    // Add command to history
    addToHistory('command', `> ${command}`);
    setCommandHistory(prev => [...prev, command]);
    setHistoryIndex(-1);

    const { command: cmd } = parseCommand(command);
    const foundCommand = findCommand(cmd);

    if (!foundCommand) {
      addToHistory('error', `Command not found: ${cmd}. Type "help" for available commands.`);
      return;
    }

    switch (foundCommand.action) {
      case 'help':
        addToHistory('output', formatHelp());
        break;
      case 'navigate':
        addToHistory('output', `Navigating to ${cmd}...`);
        navigate(`/${cmd}`);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'easter_egg':
        addToHistory('output', getEasterEgg(cmd));
        break;
      default:
        addToHistory('error', 'Command not implemented yet.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === commandHistory.length - 1) {
          setHistoryIndex(-1);
          setInput('');
        } else {
          setHistoryIndex(newIndex);
          setInput(commandHistory[newIndex]);
        }
      }
    }
  };

  const currentPath = location.pathname === '/' ? 'root' : location.pathname.slice(1);

  return (
    <div className="h-screen bg-black text-terminal-green font-mono text-base overflow-hidden relative">
      {/* CRT Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="scanlines-enhanced h-full w-full"></div>
        <div className="crt-flicker-enhanced h-full w-full absolute top-0"></div>
      </div>
      
      {/* Monitor Bezel */}
      <div className="h-full p-8 bg-gradient-to-b from-gray-800 via-gray-900 to-black">
        <div className="h-full bg-black border-4 border-gray-600 rounded-lg relative overflow-hidden">
          {/* Screen Content */}
          <div className="h-full p-6 overflow-hidden">
            {/* Terminal Content */}
            <div className="h-full flex flex-col">
              {/* Terminal Output Area */}
              <div 
                ref={terminalRef}
                className="flex-1 overflow-y-auto font-mono text-terminal-green leading-tight"
                style={{ fontFamily: 'Share Tech Mono, Courier New, monospace' }}
              >
                {history.map((entry, index) => (
                  <div key={index} className={`${
                    entry.type === 'command' ? 'text-terminal-green font-bold' :
                    entry.type === 'error' ? 'text-red-400' : 
                    entry.type === 'boot' ? 'text-terminal-green' :
                    'text-terminal-green/90'
                  } mb-1`}>
                    {entry.type === 'command' && '> '}{entry.content}
                  </div>
                ))}
                
                {/* Content Panel for Navigation */}
                {!isBooting && children && (
                  <div className="mt-4 border-t border-terminal-green/30 pt-4">
                    <div className="text-terminal-green/80 text-sm mb-2">
                      === {currentPath.toUpperCase()} SECTION ===
                    </div>
                    <div className="text-terminal-green/90">
                      {children}
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input Line */}
              {!isBooting && (
                <div className="flex-shrink-0 mt-2">
                  <form onSubmit={handleSubmit} className="flex items-center">
                    <span className="text-terminal-green mr-1">&gt;</span>
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="flex-1 bg-transparent text-terminal-green outline-none border-none font-mono caret-terminal-green"
                      style={{ fontFamily: 'Share Tech Mono, Courier New, monospace' }}
                    />
                    <span className="text-terminal-green animate-pulse ml-1">█</span>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
