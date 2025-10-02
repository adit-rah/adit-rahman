import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { parseCommand, findCommand, formatHelp, getEasterEgg } from '../utils/commandParser';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import Blog from '../pages/Blog';
import Contact from '../pages/Contact';

interface HistoryEntry {
  type: 'command' | 'output' | 'error' | 'boot';
  content: string;
  timestamp: Date;
}

const VaultTecTerminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [showStartScreen, setShowStartScreen] = useState(true);
  const [isBooting, setIsBooting] = useState(false);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [showPanel, setShowPanel] = useState(false);
  const [currentPanel, setCurrentPanel] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Boot sequence for Vault-Tec terminal
  const startBootSequence = () => {
    setShowStartScreen(false);
    setIsBooting(true);
    setHistory([]);
    
    const bootSequence = [
      'VAULT-TEC CORPORATION',
      'UNIFIED OPERATING SYSTEM',
      'COPYRIGHT 2077 VAULT-TEC CORP.',
      '',
      'Initializing Vault-Tec Terminal...',
      'Loading RobCo Industries(TM) MF Boot Agent v4.02.08.00',
      '',
      'POST (Power-On Self Test) Results:',
      '> CPU: RobCo Quantum Processor Mark VII .......... [OK]',
      '> Memory: 64KB Holographic Storage ............... [OK]',
      '> Graphics: Monochrome CRT Display ............... [OK]',
      '> Input: Mechanical Keyboard Interface ........... [OK]',
      '> Network: Vault-Tec Intranet Connection ......... [OFFLINE]',
      '> Holotape Drive: Model HT-2077 .................. [OK]',
      '',
      'VAULT-TEC TERMINAL READY',
      'Model: VT-2077 Personal Computing Device',
      'Serial: VT-101-2077-ADT',
      'Vault Assignment: Vault 111',
      '',
      'WARNING: This terminal is property of Vault-Tec Corporation',
      'Unauthorized access is strictly prohibited',
      '',
      'Welcome, Overseer Rahman',
      'Security Clearance: Level 9',
      'Last Login: October 23, 2077 - 09:47 AM',
      '',
      'System Status: OPERATIONAL',
      'Vault Status: SEALED',
      'External Conditions: UNKNOWN',
      '',
      'Type "help" for available commands',
      'Type "about" for personal information',
      ''
    ];

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < bootSequence.length) {
        setHistory(prev => [...prev, {
          type: 'boot',
          content: bootSequence[currentIndex],
          timestamp: new Date()
        }]);
        currentIndex++;
      } else {
        setIsBooting(false);
        clearInterval(interval);
        
        setTimeout(() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }, 300);
      }
    }, 150);
  };

  useEffect(() => {
    if (inputRef.current && !showStartScreen && !isBooting) {
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

    addToHistory('command', `> ${input}`);
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);

    const { command: cmd } = parseCommand(input);
    const foundCommand = findCommand(cmd);

    if (!foundCommand) {
      addToHistory('error', `COMMAND NOT RECOGNIZED: ${cmd.toUpperCase()}\nType "help" for available commands.`);
      setInput('');
      return;
    }

    switch (foundCommand.action) {
      case 'help':
        addToHistory('output', formatHelp());
        break;
      case 'navigate':
        addToHistory('output', `ACCESSING ${cmd.toUpperCase()} DATABASE...\nINITIALIZING HOLOGRAPHIC DISPLAY...\nPLEASE STAND BY...`);
        setTimeout(() => {
          setCurrentPanel(cmd);
          setShowPanel(true);
          navigate(`/${cmd}`);
        }, 1500);
        break;
      case 'clear':
        setHistory([]);
        break;
      case 'easter_egg':
        addToHistory('output', getEasterEgg(cmd));
        break;
      default:
        addToHistory('error', `COMMAND NOT IMPLEMENTED: ${cmd.toUpperCase()}`);
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

  const closePanel = () => {
    setShowPanel(false);
    setCurrentPanel('');
    navigate('/');
  };

  const renderPanelContent = () => {
    switch (currentPanel) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'resume':
        return <Resume />;
      case 'blog':
        return <Blog />;
      case 'contact':
        return <Contact />;
      default:
        return <div>Content not found</div>;
    }
  };

  const getPanelTitle = () => {
    switch (currentPanel) {
      case 'about':
        return 'Personal Information';
      case 'projects':
        return 'Project Database';
      case 'resume':
        return 'Professional Record';
      case 'blog':
        return 'Personal Logs';
      case 'contact':
        return 'Communication Protocols';
      default:
        return 'Data Access';
    }
  };

  // Start Screen Component
  if (showStartScreen) {
    return (
      <div className="vault-tec-terminal">
        <div className="terminal-with-panel">
        {/* Terminal Housing */}
        <div className="terminal-housing">
          {/* Top Housing */}
          <div className="terminal-top"></div>
          
          {/* Main Terminal Body */}
          <div className="terminal-body">
            {/* CRT Monitor Bezel */}
            <div className="crt-bezel">
              {/* Screen */}
              <div className="crt-screen">
                <div className="screen-content startup-screen">
                  <div className="vault-tec-logo">
                    <div className="logo-text">VAULT-TEC</div>
                    <div className="logo-subtitle">CORPORATION</div>
                  </div>
                  <div className="startup-text">
                    <div className="status-line">TERMINAL OFFLINE</div>
                    <div className="instruction">PRESS POWER TO ACTIVATE</div>
                  </div>
                  <button
                    onClick={startBootSequence}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        startBootSequence();
                      }
                    }}
                    className="power-button"
                    tabIndex={0}
                    autoFocus
                  >
                    <div className="power-symbol">⏻</div>
                  </button>
                </div>
                {/* Scan lines overlay */}
                <div className="scan-lines"></div>
                {/* Screen curvature effect */}
                <div className="screen-curve"></div>
              </div>
              
              {/* Bezel Details */}
              <div className="bezel-vents">
                <div className="vent-line"></div>
                <div className="vent-line"></div>
                <div className="vent-line"></div>
              </div>
            </div>
            
            {/* Control Panel */}
            <div className="control-panel">
              {/* Holotape Drive */}
              <div className="holotape-drive">
                <div className="drive-slot"></div>
                <div className="drive-label">HOLOTAPE</div>
              </div>
              
              {/* Status Lights */}
              <div className="status-lights">
                <div className="status-light red"></div>
                <div className="status-light amber"></div>
                <div className="status-light green"></div>
              </div>
              
              {/* Control Knobs */}
              <div className="control-knobs">
                <div className="knob">
                  <div className="knob-indicator"></div>
                </div>
                <div className="knob">
                  <div className="knob-indicator"></div>
                </div>
              </div>
            </div>
            
            {/* Vault-Tec Branding */}
            <div className="terminal-branding">
              <div className="brand-text">PROPERTY OF VAULT-TEC CORPORATION</div>
              <div className="serial-number">SN: VT-2077-ADT-001</div>
            </div>
          </div>
          
          {/* Keyboard Edge */}
          <div className="keyboard-edge">
            <div className="keyboard-keys">
              <div className="key-row">
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key"></div>
                <div className="key wide"></div>
                <div className="key"></div>
                <div className="key"></div>
              </div>
            </div>
          </div>
          
          {/* Base/Stand */}
          <div className="terminal-base"></div>
        </div>
        </div>
      </div>
    );
  }

  return (
    <div className="vault-tec-terminal">
      <div className={`terminal-with-panel ${showPanel ? 'panel-open' : ''}`}>
      {/* Terminal Housing */}
      <div className="terminal-housing">
        {/* Top Housing */}
        <div className="terminal-top"></div>
        
        {/* Main Terminal Body */}
        <div className="terminal-body">
          {/* CRT Monitor Bezel */}
          <div className="crt-bezel">
            {/* Screen */}
            <div className="crt-screen active">
              <div className="screen-content">
                {/* Terminal Header */}
                <div className="terminal-header">
                  <div className="header-left">VAULT-TEC TERMINAL</div>
                  <div className="header-right">VT-2077</div>
                </div>

                {/* Terminal Output Area */}
                <div
                  ref={terminalRef}
                  className="terminal-output"
                >
                  {history.map((entry, index) => (
                    <div key={index} className={`terminal-line ${entry.type}`}>
                      {entry.content}
                    </div>
                  ))}
                </div>

                {/* Input Line */}
                {!isBooting && (
                  <div className="terminal-input-line">
                    <form onSubmit={handleSubmit} className="input-form">
                      <span className="prompt">&gt;</span>
                      <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="terminal-input"
                      />
                      <span className="cursor">_</span>
                    </form>
                  </div>
                )}
              </div>
              
              {/* Screen Effects */}
              <div className="scan-lines"></div>
              <div className="screen-curve"></div>
              <div className="phosphor-glow"></div>
            </div>
            
            {/* Bezel Details */}
            <div className="bezel-vents">
              <div className="vent-line"></div>
              <div className="vent-line"></div>
              <div className="vent-line"></div>
            </div>
          </div>
          
          {/* Control Panel */}
          <div className="control-panel">
            {/* Holotape Drive */}
            <div className="holotape-drive">
              <div className="drive-slot"></div>
              <div className="drive-label">HOLOTAPE</div>
            </div>
            
            {/* Status Lights */}
            <div className="status-lights">
              <div className="status-light red"></div>
              <div className="status-light amber active"></div>
              <div className="status-light green active"></div>
            </div>
            
            {/* Control Knobs */}
            <div className="control-knobs">
              <div className="knob">
                <div className="knob-indicator"></div>
              </div>
              <div className="knob">
                <div className="knob-indicator"></div>
              </div>
            </div>
          </div>
          
          {/* Vault-Tec Branding */}
          <div className="terminal-branding">
            <div className="brand-text">PROPERTY OF VAULT-TEC CORPORATION</div>
            <div className="serial-number">SN: VT-2077-ADT-001</div>
          </div>
        </div>
        
        {/* Keyboard Edge */}
        <div className="keyboard-edge">
          <div className="keyboard-keys">
            <div className="key-row">
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key"></div>
              <div className="key wide"></div>
              <div className="key"></div>
              <div className="key"></div>
            </div>
          </div>
        </div>
        
        {/* Base/Stand */}
        <div className="terminal-base"></div>
      </div>
      </div>

      {/* Holographic Panel */}
      <div className={`holographic-panel ${showPanel ? 'open' : ''}`}>
        <button className="panel-close" onClick={closePanel}>
          ×
        </button>
        <div className="panel-header">
          <div className="panel-title">{getPanelTitle()}</div>
          <div className="panel-subtitle">Vault-Tec Database Access</div>
        </div>
        <div className="panel-content">
          {renderPanelContent()}
        </div>
      </div>
    </div>
  );
};

export default VaultTecTerminal;
