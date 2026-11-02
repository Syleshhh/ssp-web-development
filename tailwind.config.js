/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        sm: '1.5rem',
        lg: '2rem',
      },
      screens: {
        '2xl': '1280px',
      },
    },
    extend: {
      colors: {
        // Brand palette derived from the Solid State Practice logo (blue cube)
        brand: {
          50: '#eef7fd',
          100: '#d6ecfa',
          200: '#b0daf4',
          300: '#7cc2ec',
          400: '#67c7e8', // accent / light cyan
          500: '#1a95d6',
          600: '#0b84c6', // primary
          700: '#0a6ba3',
          800: '#0f4c6e', // deep navy
          900: '#0c3a54',
          950: '#082738',
        },
        ink: {
          DEFAULT: '#0f172a',
          muted: '#64748b',
          soft: '#94a3b8',
        },
        surface: {
          DEFAULT: '#ffffff',
          soft: '#f7fafc',
          muted: '#eef4f9',
        },
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      maxWidth: {
        content: '1200px',
      },
      borderRadius: {
        xl: '0.75rem',
        '2xl': '1rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px rgba(15, 23, 42, 0.06)',
        'card-hover': '0 8px 16px rgba(11, 132, 198, 0.10), 0 20px 40px rgba(15, 23, 42, 0.10)',
        soft: '0 1px 3px rgba(15, 23, 42, 0.06)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
