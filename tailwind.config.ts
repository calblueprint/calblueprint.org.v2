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
        white: '#F9FAFC',
        red: '#E74C3C',
        'off-white': '#F8F8F8',
      },
    },
  },
  plugins: [],
} satisfies Config;
