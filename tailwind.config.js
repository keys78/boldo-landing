/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customGreen: "#65E4A3",
        customGray: "#777777",
        customNavy: "#0A2640",
      },
      animation: {
        marquee: "marquee 20s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
    screens: {
      s480: "480px",

      s767: "767px",

      s991: "991px",

      s1024: "1024px",

      s1220: "1220px",

    },
  },
  plugins: [],
};

