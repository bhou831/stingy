/** @type {import('tailwindcss').Config} */
export default {
  content: ['.src/**/*.html', './src/**/*.svelte', './src/**/*.js, ./src/**/*.ts'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

