/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-full': 'url(src/assets/Desktop.png)',
      },
      colors: {
        'p3-blue': '#1A1C2A',
        'p3-orange': '#F05722',
        'p3-nav-text': '#ADADAD',
        'p3-black': '#121216',
        'p3-head-text': '#5D6588',
        'p3-border': '#282F39',
        'p3-para': '#CACACA',
        'p3-grey': '#181C23',
        'divider': '#34384C',
      },
      maxWidth: {
        '1/3': '35%',
        '1/5': '20%',
        '1/4': '25%',
        '1/2': '50%', 
        '2/3': '65%',
        '4/5': '80%',
      },
      minWidth: {
        '55%': '55%',
        '1/5': '20%',
        '1/2': '50%',
        '1/3': '33%',
      },
      fontFamily: {
        'nunito': ["Nunito", "sans-serif"],
        'poppins': ["Poppins", "sans-serif"],
        'inter': ["Inter", "sans-serif"],
      },

    },
  },
  plugins: [],
}