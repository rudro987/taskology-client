/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
      colors: {
        primary: "#057B98",
        primaryHover: "#015469",
        secondary: "#7734A0",
        secondaryHover: "#61168F",
        menuText: "#F3F3F3",
        titleText: "#3B3A3A",
        bodyText: "#3B3A3A",
        blackTest: "#383838",
      },
      backgroundImage: {
        'banner': "url('https://i.ibb.co/2hTZN5L/black-abstract-dark-3840x2160-9729.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

