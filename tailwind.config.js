/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'twitter-blue': '#1DA1F2'
      },
      width: {
        '255px': '255px',
        '228px': '228px',
        '30px': '30px'
      },
      height: {
        '50px': '50px',
        '30px': '30px'
      },
      padding: {
        '15px': '15px',
        '93px': '93px'
      },
      margin: {
        '88px': '88px',
        '10px': '10px'
      }
    },
  },
  plugins: [],
}
