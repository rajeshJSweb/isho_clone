/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {},
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens:{
        'sm':'480px',
        'md':'768px',
        'lg':'990px',
        'xl':'1440px',
      }
    },
  plugins: [],
}