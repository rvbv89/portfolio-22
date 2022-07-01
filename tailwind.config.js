/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        slate: colors.slate,
        customDark: "#1C2121",
        customGrey: "#394444",
      },
    },
    fontFamily: {
      display: ["Lato", "sans-serif"],
    },
  },
  plugins: [],
};
