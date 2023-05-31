/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "tailwindcss":"url('https://tailwindcss.com/_next/static/media/intellisense.c22de782.png')"
      }
    },
  },
  plugins: [],
}

