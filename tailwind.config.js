/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#000000D9",
        secondary: "#0589A6",
        background: "#F0F0F0",
      },
      borderRadius: {},
      fontFamily: {
        avenir: ["avenir", "sans-serif"],
        stix: ["STIX Two Text", "sans-serif"],
      },
      fontSize: {
        base: "20px",
        xl: "24px",
      },
      fontWeight: {
        normal: 800,
      },
      lineHeight: {
        base: "25px",
        xl: "30px",
        titleBase: "54px",
        titleXl: "100px",
      },
    },
  },
  plugins: [],
};
