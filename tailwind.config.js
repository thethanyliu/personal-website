/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        "storm": "#0c2431",
        "teal": "#194a50",
        "sunburst": "#BE375F",
        "sand": "#d8a28c",
        "cloud": "#dde7ee",
        "beige": "#e9dac1",
        "pastel": "#f7ecde"
      },
    },
  },
  plugins: [],
}
