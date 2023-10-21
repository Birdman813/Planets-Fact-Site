/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Antonio", 'sans-serif'],
        serif: ["League Spartan", "sans-serif"] 
      },
      backgroundImage: {
        bgStars: "url(./images/background-stars.svg)"
      }
    },
  },
  plugins: [],
}