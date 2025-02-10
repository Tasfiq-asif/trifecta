import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        accent: "#026CFF",
        navbg: "#E6E6E6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        navbar: "1628px",
      },
    },
  },
  plugins: [],
} satisfies Config;
