/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',    
  ],
  theme: {
    extend: { 
      colors: {        
        primary:          "rgb(var(--color-primary) / <alpha-value>)",
        "primary-soft":   "rgb(var(--color-primary-soft) / <alpha-value>)",
        secondery:        "rgb(var(--color-secondery) / <alpha-value>)",
        bgbody:           "rgb(var(--color-bgbody) / <alpha-value>)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
