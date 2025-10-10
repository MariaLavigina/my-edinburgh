
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // for paragraphs
        heading: ['"Playfair Display"', 'serif'], // for headings
      },
    },
  },
  plugins: [],
}




