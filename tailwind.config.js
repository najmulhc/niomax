/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        bebas: ['"Bebas Neue"', "sans-serif"],
      },
      backgroundImage: {
        gradient:
          "linear-gradient(123.4deg, #BD1F17 40.8%, #A61D13 76.4%, #8E1B0F 120.69%)",
      },
      colors: {
        yellow: "#FEBF00",
        red: "#BD1F17",
        "btn-text": "#0A1425",
        "bg-baige": "#fbf7f2",
      },
    },
  },
  plugins: [],
};
