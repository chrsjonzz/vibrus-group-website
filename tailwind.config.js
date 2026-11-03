/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrus: {
          navy: {
            DEFAULT: '#0B192C',
            deep: '#070F1E',
            light: '#1E293B',
            muted: '#334155'
          },
          blue: {
            DEFAULT: '#1E40AF',
            light: '#3B82F6',
            hover: '#1D4ED8',
            subtle: '#EFF6FF'
          },
          cyan: {
            DEFAULT: '#0284C7',
            light: '#38BDF8',
            dark: '#0369A1',
            accent: '#0D9488'
          },
          gold: {
            DEFAULT: '#D97706',
            light: '#F59E0B',
            dark: '#B45309',
            subtle: '#FEF3C7'
          },
          slate: {
            50: '#F8FAFC',
            100: '#F1F5F9',
            200: '#E2E8F0',
            300: '#CBD5E1',
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A'
          }
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(11, 25, 44, 0.08)',
        'card-hover': '0 12px 30px -4px rgba(11, 25, 44, 0.16)',
        'elevated': '0 20px 40px -8px rgba(11, 25, 44, 0.22)',
        'soft-xl': '0 20px 40px -15px rgba(15, 23, 42, 0.12)',
        'panel': '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
        'glow-blue': '0 0 50px -10px rgba(59, 130, 246, 0.3)',
        'glow-cyan': '0 0 50px -10px rgba(6, 182, 212, 0.25)',
      }
    },
  },
  plugins: [],
}
