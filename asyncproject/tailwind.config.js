/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "tailwindcss":"url('https://tailwindcss.com/_next/static/media/intellisense.c22de782.png')",
        "graphql":"url('https://amplience.com/_next/image/?url=https%3A%2F%2Fi8.amplience.net%2Fi%2Famplience%2Fgraphql-asset-management-api-launch-blog-2&w=3840&q=75')"
      }
    },
  },
  plugins: [],
}

