/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FE9E6E',
        primaryshade: '#F76338',
        secondary: '#263238',
        topbarcolor: '#FE9E6E',
        blacktint: '#525557',
        blactext: '#252122',
        bluetext: '#0095a8',
      },
      fontFamily: {
        primary: ['Poppins', 'sans-serif'],
        secondary: ['open sans', 'sans-serif'],
      },
    },
    screens: {
      // xs: '360px',
      sm: '480px',
      md: '768px',
      // ipad: '830px',
      lg: '1024px',
      // minixl: '1200px',
      xl: '1366px',
      // '2xl': '1536px',
    },
  },
  plugins: [],
};
