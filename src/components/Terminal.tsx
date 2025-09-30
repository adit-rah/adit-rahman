import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { parseCommand, findCommand, formatHelp, getEasterEgg } from '../utils/commandParser';

interface TerminalProps {
  children?: React.ReactNode;
}

interface HistoryEntry {
  type: 'command' | 'output' | 'error';
  content: string;
  timestamp: Date;
}

const Terminal: React.FC<TerminalProps> = ({ children }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryEntry[]>([
    {
      type: 'output',
      content: `VAULT-TEC PERSONAL TERMINAL v2.1.7
INITIALIZATION COMPLETE

Welcome to the Vault-Tec Personal Information System
Type "help" for available commands or explore the sections directly.

Ready for input...`,
      timestamp: new Date()
    }
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

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
    <div className="h-screen bg-terminal-black text-terminal-green font-mono text-lg overflow-hidden scanlines-enhanced crt-flicker-enhanced crt-screen">
      <div className="h-full flex flex-col p-4">
        {/* Terminal Header */}
        <div className="flex-shrink-0 mb-4">
          <div className="text-terminal-green text-glow-intense text-lg">
            VAULT-TEC PERSONAL TERMINAL - SESSION ACTIVE
          </div>
          <div className="text-terminal-green/70 text-sm">
            User: DWELLER | Location: {currentPath.toUpperCase()} | Status: ONLINE | Uptime: {Math.floor(Date.now() / 1000)}s
          </div>
          <div className="border-b border-terminal-green/30 mt-2 relative">
            <div className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-terminal-green/50 to-transparent opacity-30"></div>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex overflow-hidden">
          {/* Terminal Output */}
          <div className="flex-1 flex flex-col mr-4">
            <div 
              ref={terminalRef}
              className="flex-1 overflow-y-auto pr-2 space-y-1"
            >
              {history.map((entry, index) => (
                <div key={index} className={`whitespace-pre-wrap ${
                  entry.type === 'command' ? 'text-terminal-green text-glow command-prompt' :
                  entry.type === 'error' ? 'text-red-400 text-glow' : 'text-terminal-green/90'
                }`}>
                  {entry.content}
                </div>
              ))}
            </div>
            
            {/* Input Area */}
            <form onSubmit={handleSubmit} className="flex-shrink-0 mt-4">
              <div className="flex items-center">
                <span className="text-terminal-green text-glow mr-2">
                  {currentPath}@vault-tec:~$
                </span>
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-terminal-green text-glow outline-none border-none font-mono"
                  placeholder="Type a command..."
                  autoFocus
                />
                <span className="text-terminal-green terminal-cursor ml-1">▋</span>
              </div>
            </form>
          </div>

          {/* Content Panel */}
          {children && (
            <div className="flex-1 border-l border-terminal-green/30 pl-4 overflow-y-auto">
              {children}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;
