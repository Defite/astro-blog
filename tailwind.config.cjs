/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Helvetica", "sans-serif"],
      },
      screens: {
        md: "701px",
      },
      colors: {
        "category-blog": "#4ad440",
        "category-js": "#f7df1e",
        "light-aaa": "#aaaaaa",
      },
    },
  },
  plugins: [],
};
