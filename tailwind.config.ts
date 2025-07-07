import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
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
      fontFamily: {
        bptext: ['var(--font-bptext)'],
        'poppins-roboto': ['Poppins', 'Roboto'],
      },
      animation: {
        slideLeft: 'slideLeft 0.5s both',
        slideUp: 'slideUp 0.5s both',
        scaleIn: 'scaleIn 0.5s both',
        slideLeft400: 'slideLeft 400ms both',
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
