module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#fdeeea",
        accent: "#e95847",
        ink: "#12314a"
      },
      keyframes: {
        toastIn: {
          "0%": { transform: "translateY(10px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 }
        },
        toastOut: {
          "0%": { transform: "translateY(0)", opacity: 1 },
          "100%": { transform: "translateY(10px)", opacity: 0 }
        }
      },
      animation: {
        toastIn: "toastIn 360ms ease-out forwards",
        toastOut: "toastOut 300ms ease-in forwards"
      }
    }
  },
  plugins: []
};
