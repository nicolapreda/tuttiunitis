/** @type {import('tailwindcss').Config} */
module.exports = {

  content: ["./*.{html,js}",
  "./node_modules/flowbite/**/*.js",
],
  theme: {
    fontFamily: {
      'poppins': ['Poppins', 'sans-serif'],
     },

    extend: {
      colors: {
        'primary-blue': '#19223F',
      },
      backgroundImage: {
        'hero-pattern': "url('./dist/img/bg.svg')",
      },
      height: {
        'mid': '30rem',
        'large': '50rem',
      }

    },
  },
  plugins: [
        require('flowbite/plugin')
    ]

}