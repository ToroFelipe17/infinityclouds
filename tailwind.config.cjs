/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"
],
  theme: {
    extend: {
      colors: {
        brand: '#111111',
        'brand-bg': 'var(--brand-bg)',
        'brand-text': 'var(--brand-text)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
    },
  },
  plugins: [],

  CorePlugins: {
      preflight: true,
    }
}
