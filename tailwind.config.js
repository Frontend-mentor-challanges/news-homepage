/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange_primary: "#e9ab53",
        red_primary: "#f15e50",
        off_white: "#fffdfa",
        grayish_blue: "#c5c6ce",
        dark_grayish_blue: "#5d5f79",
        very_dark_blue: "#00001a",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
