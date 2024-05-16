/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        'lemon' : ['LemonMilk', 'sans-serif'],
        'montserrat' : ['Montserrat', 'sans-serif']
      },
      colors : {
        "btn-orange" : "#f56131",
        "purple" : "#2f2339 "
      },
      fontSize : {
        
      },
    
    },
  },
  plugins: [],
}