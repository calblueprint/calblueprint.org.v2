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
      },
      animation: {
        slideLeft: 'slideLeft 0.5s both',
        slideUp: 'slideUp 0.5s both',
      },
      boxShadow: {
        'dark-gray-20': '0 10px 40px rgba(#2C3E50, 0.20)',
      },
    },
  },
  plugins: [],
} satisfies Config;
