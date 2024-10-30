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
    screens: {
      'xs': '360px',
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px',
      '3xl': '1600px',
    },
    
    fontFamily:{
      "Raleway": '"Raleway", sans-serif',
      "Oxanium": '"Oxanium", sans-serif'
    }
  },
  plugins: [],
}