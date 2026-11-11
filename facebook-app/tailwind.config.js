/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fbBg: "#f0f2f5",
        fbBlue: "#1877f2",
        fbGray: "#e4e6eb",
        fbHover: "#d8dadf",
        fbDarkText: "#050505",
        fbSecondaryText: "#65676b",
      },
    },
  },
  plugins: [],
};
