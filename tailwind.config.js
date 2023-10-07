/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.{png,jpg}"
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        "light-beige": "#F5F4F0",
        "dark-brown": "#3A3531",
        "grayish-brown": "#988E85",
        "light-gray": "#979591",
        "dark-gray": "#615D5A",
        "pale-yellow": "#E4DCCF",
        "warm-gray": "#8D8178",
        "slate-gray": "#667085",
        "black": "#080808",
        "white": "#FFFFFF",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        k2d: ["K2D", "serif"],
        khula: ["Khula", "sans-serif"],
        bebasneue: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
}

