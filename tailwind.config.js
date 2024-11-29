/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neonBlue: '#1e90ff',
        darkGray: '#282829',
        glassWhite: 'rgba(255, 255, 255, 0.1)',
      },
      boxShadow: {
        tech: '0 10px 15px -3px rgba(30, 144, 255, 0.3), 0 4px 6px -2px rgba(30, 144, 255, 0.05)',
        glass: '0 4px 6px rgba(255, 255, 255, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}