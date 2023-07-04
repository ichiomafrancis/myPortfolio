/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        open: ['open Sans', 'sans-serif'],
      },
      colors: {
        'orange-primary': '#bd5d38',
        'gray-primary': '#ccc',
        'gray-secondary': '#868e96',
        'black-primary': '#343a40',
      },
    },
  },
  plugins: [],
};
