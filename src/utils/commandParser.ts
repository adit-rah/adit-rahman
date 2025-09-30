export interface Command {
  name: string;
  action: string;
  description: string;
  params?: string[];
}

export const commands: Command[] = [
  { name: 'help', action: 'help', description: 'Show available commands' },
  { name: 'about', action: 'navigate', description: 'Learn about me' },
  { name: 'projects', action: 'navigate', description: 'View my projects' },
  { name: 'resume', action: 'navigate', description: 'View my resume' },
  { name: 'blog', action: 'navigate', description: 'Read my blog posts' },
  { name: 'contact', action: 'navigate', description: 'Get in touch' },
  { name: 'clear', action: 'clear', description: 'Clear the terminal' },
  { name: 'sudo', action: 'easter_egg', description: 'Try it and see...' },
  { name: 'exit', action: 'easter_egg', description: 'Try to leave...' },
  { name: 'hack', action: 'easter_egg', description: 'Initiate hacking sequence' },
  { name: 'vault-tec', action: 'easter_egg', description: 'Display Vault-Tec info' },
  { name: 'whoami', action: 'easter_egg', description: 'Display current user' },
  { name: 'date', action: 'easter_egg', description: 'Show current date' },
  { name: 'matrix', action: 'easter_egg', description: 'Enter the Matrix' },
  { name: 'coffee', action: 'easter_egg', description: 'Brew some coffee' },
  { name: 'fortune', action: 'easter_egg', description: 'Get your fortune' },
  { name: 'nuke', action: 'easter_egg', description: 'Launch nuclear weapons' },
];

export const parseCommand = (input: string): { command: string; args: string[] } => {
  const parts = input.trim().toLowerCase().split(' ');
  const command = parts[0];
  const args = parts.slice(1);
  return { command, args };
};

export const findCommand = (commandName: string): Command | undefined => {
  return commands.find(cmd => cmd.name === commandName);
};

export const getAvailableCommands = (): Command[] => {
  return commands.filter(cmd => cmd.action !== 'easter_egg');
};

export const formatHelp = (): string => {
  const availableCommands = getAvailableCommands();
  let help = '\nAVAILABLE COMMANDS:\n\n';
  
  availableCommands.forEach(cmd => {
    help += `  ${cmd.name.padEnd(12)} - ${cmd.description}\n`;
  });
  
  help += '\nTIP: Type any command name to navigate, or try some easter eggs!\n';
  return help;
};

export const getEasterEgg = (command: string): string => {
  const fortunes = [
    "Code is poetry written for machines to understand.",
    "The best debugger is a good night's sleep.",
    "There are only 10 types of people: those who understand binary and those who don't.",
    "Programming is the art of telling a computer what to do... eventually.",
    "Coffee: the fuel that powers the digital world."
  ];

  switch (command) {
    case 'sudo':
      return '\n[ERROR] ACCESS DENIED\n\n' +
             '┌─ SECURITY ALERT ─────────────────────┐\n' +
             '│ Unauthorized privilege escalation    │\n' +
             '│ Nice try, Dweller.                   │\n' +
             '│ This incident has been logged.       │\n' +
             '└──────────────────────────────────────┘\n';
    
    case 'exit':
      return '\n[ERROR] Cannot exit terminal\n\n' +
             'There is no escape from Vault-Tec systems.\n' +
             'Once you enter, you become part of the family!\n' +
             '(Just kidding - use browser navigation to leave)\n';
    
    case 'hack':
      return '\n[INITIATING HACK SEQUENCE...]\n' +
             'Accessing mainframe...\n' +
             '██████████████████████████████] 100%\n' +
             '\n[SUCCESS] Terminal hacked successfully!\n' +
             'You now have access to... the same content as before.\n' +
             'Congratulations, you played yourself! 🎉\n';
    
    case 'vault-tec':
      return `\n┌─────────────────────────────────────────────┐
│              VAULT-TEC CORP                 │
│           "A BRIGHTER FUTURE"               │
│          ___________________                 │
│         /                   \\                │
│        /     VAULT-TEC       \\               │
│       |        LOGO           |              │
│        \\___________________/                │
│                                             │
│  This terminal is property of               │
│  Vault-Tec Corporation                     │
│                                             │
│  Authorized Personnel Only                  │
│  War... war never changes.                 │
│                                             │
│  Have a great day! :)                      │
└─────────────────────────────────────────────┘\n`;
    
    case 'whoami':
      return '\n[USER IDENTIFICATION]\n' +
             'Username: dweller\n' +
             'Role: Vault Resident\n' +
             'Clearance Level: Guest\n' +
             'Status: Exploring the wasteland of web development\n' +
             'Special: You are a unique individual in this digital vault!\n';
    
    case 'date': {
      const now = new Date();
      return `\n[SYSTEM DATE/TIME]\n` +
             `Current Date: ${now.toDateString()}\n` +
             `Current Time: ${now.toLocaleTimeString()}\n` +
             `Unix Timestamp: ${Math.floor(now.getTime() / 1000)}\n` +
             `Days since Y2K: ${Math.floor((now.getTime() - new Date('2000-01-01').getTime()) / (1000 * 60 * 60 * 24))}\n`;
    }
    
    case 'matrix':
      return '\n[ENTERING THE MATRIX...]\n' +
             '1 0 1 0 1 1 0 1 0 1 0 1 1 0 1\n' +
             '0 1 1 0 1 0 1 1 0 1 0 1 0 1 0\n' +
             '1 0 1 1 0 1 0 1 1 0 1 0 1 1 0\n' +
             '\n"There is no spoon... only JavaScript."\n' +
             '- Morpheus, probably\n\n' +
             'Welcome to the real world, Neo.\n';
    
    case 'coffee':
      return '\n[BREWING COFFEE...]\n' +
             '      )  (\n' +
             '     (   ) )\n' +
             '      ) ( (\n' +
             '    _______)_\n' +
             '   |         |___\n' +
             '   |  COFFEE |   |\n' +
             '   |_________|___|\n' +
             '\n☕ Your virtual coffee is ready!\n' +
             'This terminal runs on caffeine and good vibes.\n';
    
    case 'fortune': {
      const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      return `\n[FORTUNE COOKIE]\n` +
             `🥠 "${randomFortune}"\n` +
             `\nLucky numbers: ${Array.from({length: 6}, () => Math.floor(Math.random() * 49) + 1).join(', ')}\n`;
    }
    
    case 'nuke':
      return '\n[NUCLEAR LAUNCH DETECTED]\n' +
             '⚠️  WARNING: NUCLEAR LAUNCH INITIATED ⚠️\n' +
             '\n██████████████████████████████] 100%\n' +
             '\n💥 BOOM! 💥\n' +
             '\nJust kidding! This is a peaceful terminal.\n' +
             'The only thing we\'re launching here is careers!\n' +
             'Please stand by for peace and good vibes.\n';
    
    default:
      return '\n[ERROR] Unknown command. Type "help" for available commands.\n';
  }
};
