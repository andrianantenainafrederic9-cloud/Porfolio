/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080D19',
          surface: '#111A2B',
          card: '#162238',
          cardHover: '#1B2A45',
          border: '#243247',
          borderHover: '#3B82F6',
        },
        brand: {
          blue: '#3B82F6',
          cyan: '#22D3EE',
          indigo: '#6366F1',
          sky: '#0EA5E9',
        },
        slate: {
          main: '#F8FAFC',
          muted: '#94A3B8',
          dim: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow': 'radial-gradient(circle at 50% 20%, rgba(59, 130, 246, 0.15) 0%, rgba(34, 211, 238, 0.05) 50%, transparent 80%)',
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.2)',
        'glow-md': '0 0 25px rgba(34, 211, 238, 0.25)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.3)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
