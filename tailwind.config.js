/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0f",
        secondary: "#12121a",
        card: "#1a1a2e",
        "card-hover": "#22223a",
        accent: "#6c63ff",
        "accent-light": "#8b83ff",
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #6c63ff, #e040fb)',
        'gradient-secondary': 'linear-gradient(135deg, #6c63ff, #00bcd4)',
      },
      borderRadius: {
        'premium': '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(108, 99, 255, 0.3), 0 0 80px rgba(108, 99, 255, 0.1)' },
        }
      }
    },
  },
  plugins: [],
}
