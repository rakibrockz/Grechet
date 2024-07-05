/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      customFont: ['"Open Sans"', "sans-serif"],
    },

    backgroundImage: {
      'AboutUs_BG': "url('images/BG.png')",
      
      'gradient-top': 'linear-gradient(to top, var(--tw-gradient-stops))',

      'gradient-bottom': 'linear-gradient(to bottom, var(--tw-gradient-stops))',

      'Menu_BG': "url('images/Mask\ Group\ 2.png')",

      'Video_BG': "url('images/Video_BG.png')",

      'Our_Service_BG': "url('images/Our_Service.png')",

      'Happy_Hours_BG': "url('images/Happy_Hours_BG.png')",
      
    },

    animation: {
      'spin-slow': 'spin 3s linear infinite',

      'bounce' : 'bounce 1s infinite',
    },
    extend: {
      spacing: {
        'container': '1700px',
         'container2': '1300px',
      }
    },
    fontFamily: {
      'grechet': ['Cormorant Upright', 'serif', ],
      'open': ['Open Sans', ' sans-serif',],
 
    }
  },
  plugins: [],
}