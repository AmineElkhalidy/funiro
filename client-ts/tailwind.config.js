/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "Inter, sans-serif",
      second: "Bai Jamjuree, sans-serif",
    },

    extend: {
      colors: {
        main: "#E89F71",
        accent: "#E97171",
        gray: "#747474",
        "green-accent": "#2EC1AC",
        lightGray: "#FCDECD",
        darkGray: "#3A3A3A",
        darkerGray: "#222222",
      },

      gridTemplateColumns: {},
    },
  },
  plugins: [],
};
