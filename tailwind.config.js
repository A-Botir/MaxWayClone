/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "1rem",
          md: "2rem",
          lg: "2rem",
          xl: "3rem",
        },
        center: true,
      },
      transitionTimingFunction: {
        easy: "ease",
      },
      dropShadow: {
        item: "0.5px 0 0 black",
      },
    },
    screens: {
      sm: { min: "355px", max: "767px" },

      md: { min: "768px", max: "1024px" },

      lg: { min: "1280px", max: "1535px" },

      xl: { min: "1912px" },
    },
    boxShadow: {
      nav: "0 4px 10px 0 rgba(89, 130, 231, 0.06);",
    },
  },
  plugins: [],
  // darkMode: 'class',
};
