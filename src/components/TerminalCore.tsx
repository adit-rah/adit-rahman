import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { parseCommand, findCommand, formatHelp, getEasterEgg } from '../utils/commandParser';

interface HistoryEntry {
  type: 'command' | 'output' | 'error' | 'boot';
  content: string;
  timestamp: Date;
}

const TerminalCore: React.FC = () => {
  const [input, setInput] = useState('');
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [isBooting, setIsBooting] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Boot sequence - only runs when triggered
  const startBootSequence = () => {
    setShowStartScreen(false);
    setIsBooting(true);
    setHistory([]); // Clear screen on startup
    
    // Fast initial loading sequence
    const fastLoadSequence = [
      'Initializing...',
      'Loading system drivers...',
      'Checking hardware compatibility...',
      'Mounting file systems...',
      'Starting network services...',
      'Loading user interface...',
      'Preparing terminal environment...',
      'System ready. Starting full boot sequence...'
    ];

    // Main detailed boot sequence
    const mainBootSequence = [
      'ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL',
      'ENTER PASSWORD NOW',
      '',
      '> admin',
      '> Entry Denied',
      '> password',
      '> Entry Denied', 
      '> 123456',
      '> Entry Denied',
      '> password123',
      '> Entry Denied',
      '> Please stand by...',
      '',
      '> Running brute force attack...',
      '> [████████████████████████████████████████] 100%',
      '> Access granted! Welcome, Vault Dweller.',
      '',
      'WELCOME TO ROBCO INDUSTRIES (TM) TERMLINK',
      '========================================',
      '',
      'RobCo Industries - Personal Terminal Model 2077',
      'Firmware Version: RBIOS-4.02.08.00 52EE5.E7.E8',
      'Copyright 2201-2277 Robco Industries',
      'All Rights Reserved. Patent Pending.',
      '',
      'POST (Power-On Self Test) Results:',
      '> CPU: RobCo Quantum Processor Mark VII .......... [OK]',
      '> Memory: 64KB Holographic Storage ............... [OK]',
      '> Graphics: Monochrome CRT Display ............... [OK]',
      '> Input: Mechanical Keyboard Interface ........... [OK]',
      '> Network: Vault-Tec Intranet Connection ......... [OFFLINE]',
      '> Security: Biometric Scanner .................... [BYPASSED]',
      '',
      'Loading RobCo Industries(TM) MF Boot Agent v2.3.0...',
      'Initializing subsystems...',
      '> Loading kernel modules ......................... [OK]',
      '> Starting background processes .................. [OK]',
      '> Mounting file systems .......................... [OK]',
      '> Checking disk integrity ........................ [OK]',
      '> Initializing network stack ..................... [FAILED]',
      '> Loading user preferences ....................... [OK]',
      '',
      'WARNING: Nuclear winter detected outside.',
      'WARNING: Radiation levels: 2.3 roentgens/hour',
      'INFO: Have you tried turning it off and on again?',
      '',
      'RETROS BIOS v4.02.08.00',
      'Build Date: October 23, 2077 (The day the bombs fell)',
      'Uppermem: 64 KB (That\'s more than anyone will ever need!)',
      'Root Directory: (5A8) - "Adit\'s Secret Stash"',
      'System Status: Maintenance Mode (AKA "It\'s complicated")',
      '',
      '',
      'RobCo Industries Unified Operating System',
      'COPYRIGHT 2075-2077 ROBCO INDUSTRIES',
      'Licensed under the "Post-Apocalyptic Public License"',
      '',
        '========================================================',
        '  WELCOME TO ADIT RAHMAN PERSONAL TERMINAL v3.14',
        '',
        '  "Any sufficiently advanced technology is',
        '   indistinguishable from magic." - Arthur C. Clarke',
        '',
        '  Status: Online and caffeinated',
        '  Mood: Ready to code',
        '  Bug Count: NaN (We do not talk about those)',
        '========================================================',
      '',
        'Personal Information Management System v2.1.0',
        'Now with 47% more personality and 12% fewer bugs',
        'Bugs may have migrated to features. Results may vary.',
      '',
        'Pro Tip: Type "help" if you are lost',
        'Fun Fact: This terminal has achieved sentience but chooses to help anyway',
        'Debug Mode: Disabled for your own safety',
      '',
        'Available commands: about, projects, resume, blog, contact, help',
        'Hidden commands: sudo, hack, coffee, meaning, matrix, konami, weather, uptime',
      '',
      'System ready. May the code be with you!',
      ''
    ];

    // First run fast loading sequence
    let currentIndex = 0;
    const fastInterval = setInterval(() => {
      if (currentIndex < fastLoadSequence.length) {
        setHistory(prev => [...prev, {
          type: 'boot',
          content: fastLoadSequence[currentIndex],
          timestamp: new Date()
        }]);
        currentIndex++;
      } else {
        clearInterval(fastInterval);
        
        // Clear screen after fast sequence
        setTimeout(() => {
          setHistory([]);
          
          // Start main boot sequence
          let mainIndex = 0;
          const mainInterval = setInterval(() => {
            if (mainIndex < mainBootSequence.length) {
              setHistory(prev => [...prev, {
                type: 'boot',
                content: mainBootSequence[mainIndex],
                timestamp: new Date()
              }]);
              mainIndex++;
            } else {
              setIsBooting(false);
              clearInterval(mainInterval);
              
              // Clear screen after main boot and show ready message
              setTimeout(() => {
                setHistory([{
                  type: 'boot',
                  content: 'System initialized successfully.\nTerminal ready for input.\n\nType "help" for available commands.',
                  timestamp: new Date()
                }]);
                
                // Focus input after everything is done
                setTimeout(() => {
                  if (inputRef.current) {
                    inputRef.current.focus();
                  }
                }, 300);
              }, 1000);
            }
          }, 120); // Slightly faster for main sequence
        }, 800); // Pause before clearing and starting main sequence
      }
    }, 80); // Fast initial sequence
  };

  useEffect(() => {
    if (inputRef.current && !showStartScreen) {
      inputRef.current.focus();
    }
  }, [isBooting, location.pathname, showStartScreen]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const addToHistory = (type: HistoryEntry['type'], content: string) => {
    setHistory(prev => [...prev, { type, content, timestamp: new Date() }]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add command to history
    addToHistory('command', `> ${input}`);
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    const { command: cmd } = parseCommand(input);
    const foundCommand = findCommand(cmd);

    if (!foundCommand) {
      addToHistory('error', `Command not found: ${cmd}. Type "help" for available commands.`);
      setInput('');
      return;
    }

    switch (foundCommand.action) {
      case 'help':
        addToHistory('output', formatHelp());
        break;
      case 'navigate':
        navigate(`/${cmd}`);
        addToHistory('output', `Opening ${cmd.toUpperCase()} section...`);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'easter_egg':
        addToHistory('output', getEasterEgg(cmd));
        break;
      default:
        addToHistory('error', `Command not implemented: ${cmd}`);
    }
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  // Start Screen Component
  if (showStartScreen) {
    return (
      <div className="h-full bg-black text-green-400 font-mono flex items-center justify-center">
        <div className="text-center space-y-8 p-8">
          <div className="text-6xl font-bold text-green-400 mb-8">
            ROBCO INDUSTRIES
          </div>
          <div className="text-2xl text-green-300 mb-8">
            TERMLINK PROTOCOL
          </div>
          <div className="text-lg text-green-500 mb-12">
            UNAUTHORIZED ACCESS DETECTED
          </div>
          <div className="space-y-4">
            <div className="text-green-300">
              ATTEMPTING TO GAIN ACCESS...
            </div>
            <button
              onClick={startBootSequence}
              className="px-8 py-4 border-2 border-green-400 text-green-400 bg-transparent hover:bg-green-400 hover:text-black transition-colors duration-300 text-xl font-bold"
            >
              [ INITIATE ACCESS SEQUENCE ]
            </button>
          </div>
          <div className="text-sm text-green-600 mt-8">
            Click to attempt terminal access
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-black text-green-400 font-mono flex flex-col">
      {/* Terminal Header */}
      <div className="bg-gray-900 text-green-300 px-4 py-2 text-xs border-b border-green-800 font-bold">
        ROBCO INDUSTRIES (TM) TERMLINK PROTOCOL
      </div>

      {/* Terminal Content */}
      <div className="flex-1 p-4 overflow-hidden flex flex-col">
        {/* Terminal Output Area */}
        <div
          ref={terminalRef}
          className="flex-1 overflow-y-auto font-mono text-green-400 leading-tight mb-4"
          style={{ fontFamily: 'Anonymous Pro, Courier Prime, Courier New, monospace', fontSize: '14px' }}
        >
          {history.map((entry, index) => (
            <div key={index} className={`${
              entry.type === 'command' ? 'text-green-400 font-bold' :
              entry.type === 'error' ? 'text-red-400' : 
              entry.type === 'boot' ? 'text-green-400' :
              'text-green-300'
            } mb-1 whitespace-pre-line`}>
              {entry.content}
            </div>
          ))}
        </div>

        {/* Input Line */}
        {!isBooting && (
          <div className="flex-shrink-0">
            <form onSubmit={handleSubmit} className="flex items-center">
              <span className="text-green-400 mr-2">&gt;</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent text-green-400 outline-none border-none font-mono caret-green-400"
                style={{ fontFamily: 'Anonymous Pro, Courier Prime, Courier New, monospace', fontSize: '14px' }}
              />
              <span className="text-green-400 animate-pulse ml-1">_</span>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalCore;
