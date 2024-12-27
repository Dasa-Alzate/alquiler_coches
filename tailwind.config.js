/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          900: '#22223B'
        },
        'secondary': {
          500: '#FFCB69'
        }
      },
      fontFamily: {
        lato: ['Lato', 'serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0px 2px 2px 2px',
        'inner-xl': 'inset 0px 3px 3px 3px',
        'inner-2xl': 'inset 0px 4px 4px 4px',
      },
    },
  },
  plugins: [],
}

