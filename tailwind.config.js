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
        'twitter-blue': '#1DA1F2',
        'hover-color': 'rgba(15, 20, 25, 0.1)',
        'tweet-button': 'rgb(29, 155, 240)',
        'hover-tweet-button': 'rgb(26, 140, 216)'
      },
      width: {
        '32rem': '32rem',
        '598px': '598px',
        '255px': '255px',
        '228px': '228px',
        '30px': '30px',
        '27px': '27px',
        '23px': '23px',
        '22px': '22px',
        '21px': '21px'
      },
      height: {
        '50px': '50px',
        '30px': '30px',
        '900px': '900px'
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
