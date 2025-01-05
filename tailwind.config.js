/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "50": "#E6E6EE",
          "100": "#C2C2D4",
          "200": "#9E9EBB",
          "300": "#7A7AA2",
          "400": "#555589",
          "500": "#313170",
          "600": "#2A2A63",
          "700": "#242456",
          "800": "#1E1E49",
          "900": "#22223B",
          "950": "#1B1B2F"
        },
        "secondary": {
          "50": "#FFF8E9",
          "100": "#FFEDC6",
          "200": "#FFE2A3",
          "300": "#FFD780",
          "400": "#FFCC5C",
          "500": "#FFCB69",
          "600": "#E6B45A",
          "700": "#CC9E4D",
          "800": "#B3883F",
          "900": "#997332",
          "950": "#805D26"
        }
      },
      fontFamily: {
        lato: ['Lato', 'serif'],
      },
      boxShadow: {
        'inner-lg': 'inset 0px 2px 2px 2px #624222',
        'inner-xl': 'inset 0px 3px 3px 3px #624222',
        'inner-2xl': 'inset 0px 4px 4px 4px #624222',
      },
    },
  },
  plugins: [],
}

