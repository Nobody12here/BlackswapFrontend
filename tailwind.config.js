/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0066FF",
          dark: "#0052CC",
          light: "#3385FF",
        },
        secondary: {
          DEFAULT: "#1A1B23",
          dark: "#13141A",
          light: "#282A36",
        },
        accent: "#00F0FF",
      },
      boxShadow: {
        neon: "0 0 10px rgba(0, 102, 255, 0.3)",
        "neon-strong": "0 0 20px rgba(0, 102, 255, 0.5)",
      },
      backgroundColor: {
        "swap-dark": "#191B1F",
        "swap-card": "#212429",
        "sky-blue": "rgb(42, 189, 255)",
        "mint-green": "rgba(0, 195, 160, 0.08)",
      },
    },
  },
  plugins: [],
};
