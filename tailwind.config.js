/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'crop-almond': '#D4A574',
          'crop-orange': '#FFA500',
          'crop-wheat': '#F4E4C1',
          'crop-grape': '#9B59B6',
          'crop-sunflower': '#FFD700',
        },
      },
    },
    plugins: [],
  }