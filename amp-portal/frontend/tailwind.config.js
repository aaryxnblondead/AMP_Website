module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand reds - AMP Red
        primary: {
          50: '#fff1f0',
          100: '#ffe3e0',
          200: '#ffc7c1',
          300: '#ffa6a0',
          400: '#f47a71',
          500: '#d84f48',
          600: '#c0342d',
          700: '#a02923',
          800: '#7d1f1a',
          900: '#5a1613',
        },
        // Neutral grays
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        // Blue accents for CTAs
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Green accent for AMP Green theme
        green: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Cream/beige background
        cream: {
          50: '#fffaf2',
          100: '#fff5e6',
          200: '#f7efe3',
        },
        // Status colors
        success: {
          50: '#f0fdf4',
          500: '#22c55e',
          700: '#15803d',
        },
        warning: {
          50: '#fffbeb',
          500: '#f59e0b',
          700: '#b45309',
        },
        error: {
          50: '#fef2f2',
          500: '#ef4444',
          700: '#b91c1c',
        },
        info: {
          50: '#eff6ff',
          500: '#3b82f6',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        display: ['\"Merriweather\"', 'serif'],
        body: ['\"Inter\"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 10px 20px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl: '1rem',
      },
    },
  },
  plugins: [],
};
