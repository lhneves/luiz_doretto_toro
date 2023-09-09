/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans, sans-serif'],
      },
      fontSize: {
        '3xl': ['1.75rem', '1.925rem'],
        '4xl': ['2rem', '2.7rem'],
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '4/5': '80%',
        sm: '22rem',
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
        navbar: '0px -2px 10px 0px rgba(31, 7, 59, 0.20)',
        cardbenefit: '0px 2px 20px -1px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
