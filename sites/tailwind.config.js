/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette derived from the "Brothers" brush-script logo mark
        // (warm ink + a single red accent dot) paired with a deeper,
        // more distinctive green than stock Tailwind emerald.
        ink: '#1A1712',        // Brush Ink — warm near-black
        pine: '#1F5C46',       // Pine Green — primary accent
        moss: '#3E8F68',       // Moss Green — secondary/hover accent
        barn: '#A8342A',       // Barn Red — sparing accent (logo's red dot)
        gold: '#D9A441',       // Wheat Gold — star ratings, small highlights
        cream: '#FAF6EE',      // Warm Cream — primary light background
        parchment: '#F1EADC',  // Parchment — alternating section background
        card: '#FFFFFF',       // Card Surface
        cardborder: '#E7DFCE', // soft warm-gray card border
        warmslate: '#5C5648',  // muted body copy on light backgrounds
        creamdark: '#F5F0E4',  // text on dark surfaces
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'sans-serif'],
        serif: ['Fraunces', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}
