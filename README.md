# 🖥️ Fallout Terminal Personal Website

A retro-futuristic personal portfolio website built to look and feel like a Vault-Tec terminal from the Fallout universe. This project combines the nostalgic appeal of vintage computer terminals with modern React development practices.

![Terminal Preview](https://via.placeholder.com/800x400/000000/00FF41?text=VAULT-TEC+TERMINAL)

## ✨ Features

### 🎮 Interactive Terminal
- **Real command-line interface** with working commands
- **Command history** with arrow key navigation
- **Auto-completion** and command suggestions
- **Multiple sections**: About, Projects, Resume, Blog, Contact

### 🎨 Authentic Retro Design
- **CRT monitor effects** with scanlines and flicker
- **Green phosphor glow** with customizable colors
- **VT323 monospace font** for authentic terminal feel
- **ASCII art** and retro styling throughout

### 🚀 Modern Tech Stack
- **React 18** with TypeScript for type safety
- **React Router** for seamless navigation
- **Tailwind CSS** for utility-first styling
- **Vite** for fast development and building

### 🎯 Easter Eggs & Fun
- Hidden commands like `sudo`, `hack`, `matrix`, `coffee`
- ASCII art and retro jokes
- Fallout-themed references and humor
- Fortune cookie messages

## 🛠️ Tech Stack

### Core Technologies
- **React** - Frontend framework
- **TypeScript** - Type safety and better DX
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

### Styling & Effects
- **Google Fonts** - VT323 and Share Tech Mono
- **Custom CSS** - Terminal effects and animations
- **CSS Grid & Flexbox** - Responsive layouts

### Deployment
- **GitHub Pages** - Static hosting
- **GitHub Actions** - CI/CD pipeline

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/terminal-website.git
cd terminal-website
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to `http://localhost:5173`

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 🎮 Available Commands

### Navigation Commands
- `about` - Learn about me
- `projects` - View my projects
- `resume` - View my resume  
- `blog` - Read my blog posts
- `contact` - Get in touch
- `help` - Show all commands
- `clear` - Clear the terminal

### Easter Egg Commands
- `sudo` - Try to get admin access (spoiler: you can't)
- `hack` - Initiate hacking sequence
- `vault-tec` - Display Vault-Tec corporation info
- `whoami` - Show current user info
- `date` - Display current date and time
- `matrix` - Enter the Matrix
- `coffee` - Brew virtual coffee
- `fortune` - Get a random fortune
- `nuke` - Launch nuclear weapons (safely!)
- `exit` - Try to leave (but you can't!)

## 📁 Project Structure

```
src/
├── components/
│   └── Terminal.tsx          # Main terminal component
├── pages/
│   ├── Home.tsx             # Landing page
│   ├── About.tsx            # About section
│   ├── Projects.tsx         # Projects showcase
│   ├── Resume.tsx           # Resume/CV
│   ├── Blog.tsx             # Blog listing
│   └── Contact.tsx          # Contact form
├── content/
│   ├── projects.json        # Project data
│   └── blog/               # Blog posts (markdown)
├── styles/
│   └── terminal-effects.css # Custom terminal styling
├── utils/
│   └── commandParser.ts     # Command parsing logic
└── App.tsx                  # Main app with routing
```

## 🎨 Customization

### Colors
Edit the terminal color scheme in `tailwind.config.js`:
```javascript
colors: {
  terminal: {
    green: '#00FF41',    // Classic green
    amber: '#FFB000',    // Retro amber
    white: '#F0F0F0',    // Modern white
    // Add your own colors
  }
}
```

### Content
- **Projects**: Edit `src/content/projects.json`
- **Blog**: Add markdown files to `src/content/blog/`
- **Personal Info**: Update the page components in `src/pages/`

### Commands
Add new commands in `src/utils/commandParser.ts`:
```typescript
{ name: 'mycommand', action: 'easter_egg', description: 'My custom command' }
```

## 📱 Responsive Design

The terminal interface adapts to different screen sizes:
- **Desktop**: Full terminal with side panels
- **Tablet**: Stacked layout with touch support
- **Mobile**: Optimized for small screens

## 🌐 Browser Support

- Chrome/Edge 88+
- Firefox 87+
- Safari 14+

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 🎯 Future Enhancements

- [ ] **Fallout Hacking Mini-Game** - Interactive word-guessing game
- [ ] **Theme Switcher** - Toggle between green/amber/white themes
- [ ] **Sound Effects** - Authentic terminal beeps and clicks
- [ ] **Multiplayer Chat** - Leave messages for other visitors
- [ ] **ASCII Art Gallery** - Collection of terminal art
- [ ] **Command Auto-complete** - Tab completion like real terminals

## 🙏 Acknowledgments

- **Fallout Series** - Inspiration for the terminal design
- **VT323 Font** - Perfect retro monospace typography
- **React Community** - Amazing ecosystem and tools
- **Tailwind CSS** - Making styling enjoyable again

## 📧 Contact

- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

---

*"War... war never changes. But web development? That changes every day."*

**Built with ❤️ and lots of ☕ by [Your Name]**