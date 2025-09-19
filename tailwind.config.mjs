/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px) rotate(0deg)',
          },
          '50%': {
            transform: 'translateY(-10px) rotate(1deg)',
          },
        },
        'bounce-slow': {
          '0%, 100%': {
            transform: 'translateY(0) scale(1) rotate(0deg)',
          },
          '25%': {
            transform: 'translateY(-5px) scale(1.1) rotate(5deg)',
          },
          '75%': {
            transform: 'translateY(5px) scale(0.9) rotate(-5deg)',
          },
        },
        'bounce-x': {
          '0%, 100%': {
            transform: 'translateX(0)',
          },
          '50%': {
            transform: 'translateX(3px)',
          },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'bounce-x': 'bounce-x 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [
    typography,
  ],
}
