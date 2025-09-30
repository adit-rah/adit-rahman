/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['VT323', 'Share Tech Mono', 'Courier New', 'monospace'],
      },
      colors: {
        terminal: {
          green: '#00FF41',
          amber: '#FFB000', 
          white: '#F0F0F0',
          black: '#000000',
          'gray-dark': '#1a1a1a',
          'gray-medium': '#333333',
        }
      },
      animation: {
        'flicker': 'flicker 0.15s ease-in-out infinite alternate',
        'scanlines': 'scanlines 0.1s linear infinite',
        'typewriter': 'typewriter 0.5s steps(20, end)',
      },
      keyframes: {
        flicker: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.97' },
        },
        scanlines: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 4px' },
        },
        typewriter: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        }
      },
      textShadow: {
        'terminal': '0 0 5px currentColor',
        'terminal-lg': '0 0 10px currentColor, 0 0 20px currentColor',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow-terminal': {
          textShadow: '0 0 5px currentColor',
        },
        '.text-shadow-terminal-lg': {
          textShadow: '0 0 10px currentColor, 0 0 20px currentColor',
        },
        '.scanlines': {
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 65, 0.03) 50%)',
            backgroundSize: '100% 4px',
            pointerEvents: 'none',
            animation: 'scanlines 0.1s linear infinite',
          }
        },
        '.crt-flicker': {
          animation: 'flicker 0.15s ease-in-out infinite alternate',
        }
      }
      addUtilities(newUtilities)
    }
  ],
}


