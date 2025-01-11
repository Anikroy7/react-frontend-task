/** @type {import('tailwindcss').Config} */
import daisyui from './node_modules/daisyui';


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [
    daisyui,
  ],
}