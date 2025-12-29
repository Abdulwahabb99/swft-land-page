/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        'swft-purple': '#7E47FF',
        'swft-purple-dark': '#4A10D0',
      },
    },
  },
  plugins: [],
}

