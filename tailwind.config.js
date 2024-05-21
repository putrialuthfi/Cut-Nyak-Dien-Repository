/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#135D66',
        'secondary': '#76ABAE',
        'third': '#E3FEF7'
      }
    },
  },
  plugins: [],
}

