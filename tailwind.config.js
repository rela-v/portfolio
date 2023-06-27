/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      // iPhone SE
      '2xs': '300px',
      sm: '320px',
      md: '744px',
      lg: '1280px'
    },
    colors: {
      transparent: 'transparent',
      citrus: {
        200: '#fdcc8d',
        600: '#fcb355',
        800: '#fb991c',
      },
      black: '#1a091a',
      white: '#fff',
      slate: {
        200: '#D0D0D3',
        600: '#B9B9BC',
        800: '#A1A1A6',
      },
      stone: '#504d5d',
      cloud: '#1a091a'
    },
    fontSize: {
      sm: ['1rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0.008em',
        fontWeight: '400',
      }],
      base: ['1rem', {
        lineHeight: '1.25rem',
        letterSpacing: '0.002em',
        fontWeight: '400',
      }],
      xl: ['1.5rem', {
        lineHeight: '1.30rem',
        letterSpacing: '0em',
        fontWeight: '500',
      }],
      '2xl': ['2.0rem', {
        lineHeight: '1.36rem',
        letterSpacing: '0em',
        fontWeight: '600',
      }],
      '3xl': ['2.5rem', {
        lineHeight: '1.39rem',
        letterSpacing: '-0.005em',
        fontWeight: '600',
      }],
      '4xl': ['3.0rem', {
        lineHeight: '1.42rem',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
      '5xl': ['4.0rem', {
        lineHeight: '1.45rem',
        letterSpacing: '-0.02em',
        fontWeight: '700',
      }]
    }
  },
  plugins: [],
}
