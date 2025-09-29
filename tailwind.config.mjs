/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/page.{tsx,js,ts,mjs}',
    './src/**/*.{js,ts,jsx,tsx,mjs}',
    './components/**/*.{js,ts,jsx,tsx,mjs}',
    './*.{html,js}', // optional, for top-level files like index.html
  ],
  theme: {
    extend: {
      colors: {
        primary: '#A53DFF',
        'primary-light': '#EDD8FF',
        'content-dark': '#132238',
        'main-text': '#556070',
        'neutral-dark': '#333333',
      },
    },
  },
  plugins: [],
}
