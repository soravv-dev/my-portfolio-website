/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          900: '#0a0a0f',
          800: '#111118',
          700: '#1a1a2e',
        },
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#4A00E0',
          light: '#8B5CF6',
        },
        accent: {
          DEFAULT: '#FF6B35',
        },
        glass: {
          light: 'rgba(255,255,255,0.05)',
          mid: 'rgba(255,255,255,0.08)',
          strong: 'rgba(255,255,255,0.1)',
        },
        card: 'rgba(108, 99, 255, 0.08)',
        border: {
          purple: 'rgba(108, 99, 255, 0.2)',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(135deg, #6C63FF 0%, #4A00E0 50%, #8B5CF6 100%)',
        'hero-overlay': 'linear-gradient(180deg, rgba(10,10,15,0.45) 0%, rgba(10,10,15,0.65) 60%, rgba(10,10,15,0.92) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px rgba(108, 99, 255, 0.35)',
        'glow-lg': '0 0 60px rgba(108, 99, 255, 0.45)',
        'glow-accent': '0 0 40px rgba(255, 107, 53, 0.35)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
    },
  },
  plugins: [],
};
