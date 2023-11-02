/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mobile':'375px',
      'desktop':'1440px'
    },
    extend: {
      colors:{
        veryDarkGray:"hsl(0, 0%, 17%)",
        darkGray:"hsl(0, 0%, 59%)"
      }
    },
  },
  plugins: [],
}

