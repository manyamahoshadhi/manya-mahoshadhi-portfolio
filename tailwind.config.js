/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0F172A',
        primary: '#3B82F6',
        secondary: '#06B6D4',
        surface: {
          DEFAULT: 'rgba(30, 41, 59, 0.6)',
          solid: '#1E293B',
          light: '#334155',
        },
        muted: '#94A3B8',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(0, 0, 0, 0.35)',
        glow: '0 0 40px rgba(59, 130, 246, 0.25)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.2)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-glow':
          'radial-gradient(ellipse at 30% 20%, rgba(59,130,246,0.15), transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(6,182,212,0.12), transparent 50%)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
      },
    },
  },
  plugins: [],
};
