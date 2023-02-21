/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        gray1 : "#eeebe9",
        gray2: "#faf7f5",
        blue2 : "#0077b3"
      },
      maxWidth : {
        "6.5xl" : "1252px"
      },
      boxShadow: {
        "3xl": "0 0 60px 0 rgb(0 0 0 / 10%);",
        "4xl": "0 0 120px 0 rgb(0 0 0 / 10%)",
      },
    },
    
  },
  plugins: [],
}
