const { green } = require('color-name')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif'],
        lato: ["Lato", 'sans-serif'],
      },

      colors: {
        logic: {
          pest: '#1b8b7e',
          // custom_green:'#d2ff7b'
        },
        
      }
    },
  },
  plugins: [],
}
