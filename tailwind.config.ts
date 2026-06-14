import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#10141f",
        navy: "#14213d",
        brass: "#c99a3e",
        copper: "#b9673a",
        mist: "#f5f7fb",
        sage: "#6f8f72"
      },
      boxShadow: {
        lift: "0 18px 45px rgba(16, 20, 31, 0.13)"
      }
    }
  },
  plugins: []
};

export default config;
