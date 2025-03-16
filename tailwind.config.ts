import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FF7262",
        secondary: "#1E1E1E",
        accent: "#FFD700",
      },
    },
  },
  plugins: [],
};

export default config;