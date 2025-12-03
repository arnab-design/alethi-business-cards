/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'obsidian': '#121212',
        'assurance-teal': '#5CBFB8',
        'slate-grey': '#94A3B8',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      letterSpacing: {
        'widest': '0.25em',
      },
    },
  },
  plugins: [],
}

