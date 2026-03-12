/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#0a0a0f',
        'void-2': '#0d1117',
        'void-3': '#111827',
        surface: '#161b22',
        'surface-2': '#1c2128',
        'neon-cyan': '#00f5ff',
        'neon-violet': '#7b2fff',
        'neon-pink': '#f72585',
        'neon-green': '#00ff41',
        'text-primary': '#e6edf3',
        'text-secondary': '#8b949e',
        'text-muted': '#484f58',
      },
      fontFamily: {
        display: ['JetBrains Mono', 'monospace'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'cursor-blink': 'cursorBlink 1s step-end infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'terminal-glow': 'terminalGlow 2s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      keyframes: {
        cursorBlink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,245,255,0.2), 0 0 40px rgba(0,245,255,0.1)' },
          '50%': { boxShadow: '0 0 40px rgba(0,245,255,0.5), 0 0 80px rgba(0,245,255,0.3)' },
        },
        terminalGlow: {
          '0%, 100%': { textShadow: '0 0 8px rgba(0,245,255,0.4)' },
          '50%': { textShadow: '0 0 20px rgba(0,245,255,0.9), 0 0 40px rgba(0,245,255,0.4)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, rgba(0,245,255,0.12) 1px, transparent 1px)',
        'glow-cyan': 'radial-gradient(circle, rgba(0,245,255,0.15) 0%, transparent 70%)',
        'glow-violet': 'radial-gradient(circle, rgba(123,47,255,0.15) 0%, transparent 70%)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid': '32px 32px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(0,245,255,0.4), 0 0 60px rgba(0,245,255,0.15)',
        'neon-violet': '0 0 20px rgba(123,47,255,0.4), 0 0 60px rgba(123,47,255,0.15)',
        'neon-green': '0 0 20px rgba(0,255,65,0.4), 0 0 60px rgba(0,255,65,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      backdropBlur: {
        xs: '4px',
      },
    },
  },
  plugins: [],
}
