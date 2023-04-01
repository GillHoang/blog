/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#242424",
      },
      fontFamily: {
        primary: ["Roboto Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
