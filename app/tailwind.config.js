/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profilePic': "url('/!albion.jpg')",
      },
      colors: {
        nav: "#3d3d6b"
      }
    },
  },
  plugins: [],
}

