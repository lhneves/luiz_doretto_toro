/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans, sans-serif'],
      },
      fontSize: {
        '4xl': ['2.35rem', '3rem'],
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
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
        white: '#FFFFFF',
      },
      boxShadow: {
        navbar: '0px -2px 10px 0px rgba(31, 7, 59, 0.20);',
      },
    },
  },
  plugins: [],
};
