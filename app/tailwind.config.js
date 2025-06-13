/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'profilePic': "url('/profilePic.png')",
      },
      colors: {
        // primary: "#3d3d6b",
        primary: "#052e16",
        secondary: "#f5f5f4",
        highlight: "#fde047"
      },
      fontFamily: {
        primary: defaultTheme.fontFamily.mono
      },
      maxWidth: {
        '8xl': '1440px',
        '9xl': '1600px',
        '10xl': '1920px',
      },
      keyframes: {
        leftToRight: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(25%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        rightToLeft: {
          '0%': { transform: 'translateX(0%)' },
          '50%': { transform: 'translateX(-25%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-150%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-50%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideOutUp: {
          '0%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
      },
      animation: {
        rightToLeft: 'rightToLeft 1.5s linear infinite',
        leftToRight: 'leftToRight 1.5s linear infinite',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        slideDown: 'slideDown 0.2s ease-out forwards',
        slideOutUp: 'slideOutUp 0.7s ease-in forwards',
      },
    },
  },
  plugins: [],
}

