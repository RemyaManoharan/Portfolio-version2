/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00D9FF",
          light: "#33E3FF",
          dark: "#00B8D9",
        },
        accent: {
          DEFAULT: "#64FFDA",
          light: "#85FFE3",
          dark: "#4DCCB1",
        },
        dark: {
          primary: "#0A192F",
          secondary: "#1A2332",
          lighter: "#233554",
        },
        text: {
          primary: "#E6F1FF",
          secondary: "#8892B0",
          muted: "#495670",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
      backgroundImage: {
        "gradient-dark": "linear-gradient(135deg, #0A192F 0%, #1A2332 100%)",
        "gradient-primary": "linear-gradient(135deg, #00D9FF 0%, #64FFDA 100%)",
      },
    },
  },
  plugins: [],
};
