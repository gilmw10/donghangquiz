/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#1d4ed8',
        'brand-soft': '#e57777',
        kiosk: '#1d4ed8',
        phone: '#0891b2',
        leisure: '#7c3aed',
        ink: '#0f172a',
        'text-secondary': '#475569',
        'text-muted': '#94a3b8',
        'border-soft': '#e2e8f0',
        'bg-soft': '#f8faff',
        stamp: '#dc2626',
        'answer-o': '#0e9f6e',
        'answer-x': '#e11d48',
        amber: '#d97706',
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
