/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        labCharcoal: '#181B20',
        labSlate: '#1E2228',
        labSurface: '#242931',
        labTerra: '#E05A2B',
        labTerraLight: '#F07549',
        labCobalt: '#2B6CB0',
        labCobaltLight: '#4299E1',
        streamPink: '#FF1493',
        streamRose: '#FFB5D5',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'bubble-rise': 'bubbleRise 3.5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        bubbleRise: {
          '0%, 100%': { transform: 'translateY(0px)', opacity: '0.85' },
          '50%': { transform: 'translateY(-5px)', opacity: '1' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.6' },
        }
      }
    },
  },
  plugins: [],
};