/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        anthrazit: {
          50: '#f5f5f5',
          100: '#e0e0e0',
          200: '#b8b8b8',
          300: '#8a8a8a',
          400: '#6d6d6d',
          500: '#4D4D4D',
          600: '#3D3D3D',
          700: '#2D2D2D',
          800: '#1F1F1F',
          900: '#141414',
          950: '#0a0a0a',
        },
        orange: {
          50: '#FFF5EB',
          100: '#FFE4CC',
          200: '#FFC999',
          300: '#FFAD66',
          400: '#FF8C33',
          500: '#FF6B00',
          600: '#E55F00',
          700: '#CC5500',
          800: '#993F00',
          900: '#662A00',
          950: '#331500',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
