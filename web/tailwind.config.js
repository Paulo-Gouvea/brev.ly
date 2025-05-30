import { theme } from 'tailwindcss/defaultConfig'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Blue
        'blue-base': '#2C46B1',
        'blue-dark': '#2C4091',

        // Grayscale
        'white': '#FFFFFF',
        'gray-100': '#F9F9FB',
        'gray-200': '#E4E6EC',
        'gray-300': '#CDCFD5',
        'gray-400': '#74798B',
        'gray-500': '#4D505C',
        'gray-600': '#1F2025',

        // Feedback
        'danger': '#B12C4D'
      },
      fontFamily: {
        sans: ['Open Sans', theme.fontFamily.sans]
      },
      fontSize: {
        'Text-xl': ['24px', {lineHeight: '32px'}],
        'Text-lg': ['18px', {lineHeight: '24px'}],
        'Text-md': ['14px', {lineHeight: '18px'}],
        'Text-sm': ['12px', {lineHeight: '16px'}],
        'Text-xs': ['10px', {lineHeight: '14px'}],

      },
      fontWeight: {
        'Text-xl': '700',
        'Text-lg': '700',
        'Text-md': '600',
        'Text-sm': '600',
        'Text-xs': '400',
      }
    },
  },
  plugins: [],
}