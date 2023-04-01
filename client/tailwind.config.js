/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#242424",
        backgroundColorLight: "#3A3A43",
      },
      fontFamily: {
        primary: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
