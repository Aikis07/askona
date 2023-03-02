/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'promo-color': '#02B9BF'
      },
      spacing: {
        '649': '649px',
        '500': '500px'
      }
    },
  },
  plugins: [],
}
