import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#d9381e',
          'red-hover': '#be2f18',
          'red-soft': '#fef2f2',
          green: '#0f382c',
          'green-light': '#164e39',
          'green-soft': '#ecfdf5',
          gold: '#c59b27',
          'gold-light': '#f59e0b',
          bg: '#faf9f6',
          card: '#ffffff',
          border: '#e5e7eb',
        },
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
};

export default config;
