/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "834px",
      md: "1728px",
      lg: "2355px",
    },
    extend: {
      rotate: {
        5: "-5deg",
      },
      colors: {
        base: "#000000D9",
        secondary: "#0589A6",
        background: "#F0F0F0",
        ternary: "#0000004D",
      },
      borderRadius: {},
      fontFamily: {
        avenir: ["avenir", "sans-serif"],
        stix: ["STIX Two Text", "sans-serif"],
      },
      fontSize: {
        baseText: "20px",
        xl: "24px",
        titleBase: "54px",
        titleXl: "100px",
        copyright: "12px",
      },
      fontWeight: {
        normal: 800,
      },
      lineHeight: {
        base: "25px",
        xl: "30px",
        titleBase: "49px",
        titleXl: "90px",
        copyright: "14.4px",
      },
    },
  },
  plugins: [],
};
