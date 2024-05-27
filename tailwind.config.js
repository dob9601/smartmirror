/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "all",
  content: ["./src/**/*.{rs,html,css}", "./dist/**/*.html"],
  theme: {
    extend: {
      keyframes: {
        'pulse-deep': {
          '0, 100%': { opacity: '1' },
          '50%': { opacity: '0' }
        }
      },
      animation: {
        'pulse-deep': 'pulse-deep 4s linear infinite'
      }
    },
    fontFamily: {
      sans: ['Chakra Petch', 'sans-serif'],
      heading: ['Montserrat', 'sans-serif']
    }
  },
  plugins: [],
};
