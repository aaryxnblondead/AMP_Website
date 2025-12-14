module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary brand reds (approx; refine with exact brand hex)
        primary: {
          50: '#fff1f0',
          100: '#ffe3e0',
          200: '#ffc7c1',
          300: '#ffa6a0',
          400: '#f47a71',
          500: '#d84f48',
          600: '#b73f38',
          700: '#8f2f2b',
          800: '#6c2320',
          900: '#4a1816',
        },
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
        accent: {
          500: '#16524a',
          600: '#0e3b35',
        },
        cream: {
          50: '#fffaf2',
          100: '#f7efe3',
        },
        success: {
          500: '#16a34a',
        },
        warning: {
          500: '#f59e0b',
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
