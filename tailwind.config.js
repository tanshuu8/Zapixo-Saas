/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        zapYellow: "#FFD600",
        zapDark: "#0D0D0D",
        zapWhite: "#FAFAFA",
        zapGray: "#BDBDBD",
        zapCharcoal: "#1A1A1A"
      },
      animation: {
        fadeIn: "fadeIn 1.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
}
