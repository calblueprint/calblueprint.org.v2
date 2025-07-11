import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'home': '1200px',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'bp-blue': '#187BE5',
        'dark-gray': '#2C3E50',
        smoke: '#C0C7CF',
        'bp-white': '#F9FAFC',
        red: '#E74C3C',
        'off-white': '#F8F8F8',
      },
      container: {
        center: true,
      },
      fontFamily: {
        bptext: ['var(--font-bptext)'],
        'poppins-roboto': ['Poppins', 'Roboto'],
        'sans-serif': ['Roboto', 'Helvetica', 'sans-serif'],
      },
      keyframes: {
        slideLeft: {
          '0%': {
            transform: 'translateX(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        slideUp: {
          '0%': {
            transform: 'translateY(20px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        scaleIn: {
          '0%': {
            transform: 'scale(0.8)',
            opacity: '0',
          },
          '100%': {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        spin: {
          '0%':{
            transform: 'rotate(0deg)',
          },
          '100%': {
            transform: 'rotate(359deg)',
          }
        }
      },
      animation: {
        slideLeft: 'slideLeft 0.5s both',
        slideUp: 'slideUp 0.5s both',
        scaleIn: 'scaleIn 0.5s both',
        slideDown: 'slideDown 0.4s both',
        slideLeft400: 'slideLeft 400ms both',
        spin: 'spin 0.75s both'
      },
      boxShadow: {
        'project-item': '3px 3px 20px rgba(44, 62, 80, 0.10)',
        'project-item-hover': '3px 3px 30px rgba(44, 62, 80, 0.20)',
        'project-card-hover': '2px 2px 15px rgba(44, 62, 80, 0.10)',
        'project-description': '0 5px 30px rgba(44, 62, 80, 0.10)',
        'apply-image': '0 5px 30px rgba(44, 62, 80, 0.20)',
        'dark-gray-10': '3px 3px 30px rgba(44, 62, 80, 0.10)',
        'dark-gray-20': '0 10px 40px rgba(44, 62, 80, 0.20)',
        'dark-gray-20-small': '0 2px 15px rgba(44, 62, 80, 0.20)',
      },
      scale: {
        2: '2',
        1.8: '1.8',
        1.5: '1.5',
        1.1: '1.1',
        1.05: '1.05',
      },
    },
  },
  plugins: [],
} satisfies Config;
