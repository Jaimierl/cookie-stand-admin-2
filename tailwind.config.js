/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-black': '#000403',
        'header-green':'#36ca95',
        'main-bg':'#ecfdf5',
        'input-bg':'#9af4c5',
        'form-bg': '#6fe6b7',
        'button':'#15b981',
        'table-text':'#606b75',
        'footer-green':'#15b981',
        'footer-text':'#214244',
      },
    },
  },
  plugins: [],
}