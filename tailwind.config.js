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
        "text-gradient":
          "linear-gradient(90deg, rgba(189, 31, 23, 0) 32.88%, rgba(189, 31, 23, 0.7) 100%)",
      },
      colors: {
        yellow: "#FEBF00",
        red: "#BD1F17",
        "btn-text": "#0A1425",
        "bg-baige": "#fbf7f2",
      },
      boxShadow: {
        "custom-black": "0px 0px 13.64px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
