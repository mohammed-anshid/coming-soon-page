/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'brandText':'rgba(237, 241, 228, 1)',
        'brandHover':'rgba(215, 206, 165,0.9)'
      }
    },
  },
  plugins: [],
}