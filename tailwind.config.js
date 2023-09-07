/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans, sans-serif']
      },
      colors: {
        primary: {
          100: '#6131B4',
          200: '#330066',
          300: '#1F073B',
        }, 
        gray: {
          100: '#F6F8FB',
          200: '#EAE9F0',
          300: '#5B6067',
          400: '#464A50',
        },
        white: "#FFFFFF",
      },
      boxShadow: {
        navbar: '0px 2px 20px -1px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}

