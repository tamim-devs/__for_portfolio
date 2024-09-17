/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    maxWidth: {
      'container': '1170px',
    },
    fontFamily:{
      "Raleway": '"Raleway", sans-serif',
      "Oxanium": '"Oxanium", sans-serif'
    }
  },
  plugins: [],
}