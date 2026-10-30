module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0a0b",
        surface: "#131315",
        paper: "#f2f1ec",
        muted: "#8b8b90",
        accent: "#9d6bff",
        line: "rgba(242, 241, 236, 0.1)",
        "line-strong": "rgba(242, 241, 236, 0.22)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};
