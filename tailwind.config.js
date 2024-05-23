/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hover-bg-dark': '#374151', // bg-gray-700
        'hover-bg-light': '#e5e7eb', // bg-gray-200
      },
    },
  },
  plugins: [],
}

