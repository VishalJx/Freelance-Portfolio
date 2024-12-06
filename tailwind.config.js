/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./container/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#ff731a",
        bgGray: "#202020",
        textGray: "#998f8f",
        headingGray: "#3a3939",
      },
      fontFamily:{
        kanit: ["Kanit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage:{
        'red-gradient': 'url("/assets/mesh-gradient.png")', 
      }
    },
  },
  plugins: [],
};
