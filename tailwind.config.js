/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      padding: {
        22: "1.375rem",
        "pad-10": "0.625rem",
      },
      colors: {
        green: "#009900",
        red: "#cc3333",
        grey: "#a4a4a4",
        "grey-dark": "#333333",
        "light-blue": "#def1f4",
        "grey-light": "#e1e1e1",
      },
      fontSize: {
        base: ["1rem", "1rem"],
        xl: ["1.5rem", "1.5rem"],
      },
      container: {
        screens: {
          xl: "1320px",
        },
      },
      minHeight: {
        48: "48px",
      },
      screens: {
        xs: { min: "320px", max: "500px" },
      },
    },
  },
  plugins: [],
};
