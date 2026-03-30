import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary — Fuchsia
        primary: '#ff89ac',
        'primary-dim': '#e30071',
        'primary-fixed': '#ff709e',
        'primary-fixed-dim': '#ff5191',
        'primary-container': '#ff709e',
        'on-primary': '#62002d',
        'on-primary-fixed': '#000000',

        // Secondary — Violet
        secondary: '#ac8aff',
        'secondary-dim': '#8455ef',
        'secondary-container': '#5516be',
        'on-secondary': '#280067',
        'on-secondary-container': '#d9c8ff',

        // Tertiary — Cyan
        tertiary: '#8ff5ff',
        'tertiary-dim': '#00deec',
        'tertiary-container': '#00eefc',
        'on-tertiary': '#005d63',

        // Surface hierarchy (The Void)
        'surface-lowest': '#000000',
        surface: '#0e0e0e',
        'surface-dim': '#0e0e0e',
        'surface-low': '#131313',
        'surface-container': '#191919',
        'surface-high': '#1f1f1f',
        'surface-highest': '#262626',
        'surface-variant': '#262626',
        'surface-bright': '#2c2c2c',
        'surface-tint': '#ff89ac',
        background: '#000000',

        // On-surface text
        'on-surface': '#ffffff',
        'on-surface-variant': '#ababab',
        'on-background': '#ffffff',
        'inverse-on-surface': '#555555',

        // Semantic states
        error: '#ff6e84',
        'error-container': '#a70138',
        'error-dim': '#d73357',
        outline: '#757575',
        'outline-variant': '#484848',
      },

      fontFamily: {
        sans: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
        lexend: ['var(--font-lexend)', 'system-ui', 'sans-serif'],
      },

      fontSize: {
        '10px': '0.625rem',
      },

      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
        ultra: '0.2em',
      },

      borderRadius: {
        DEFAULT: '0.125rem',
        sm: '0.125rem',
        md: '0.375rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '0.75rem',
        full: '9999px',
      },

      boxShadow: {
        'glow-primary': '0 0 30px rgba(255, 0, 128, 0.3)',
        'glow-primary-sm': '0 0 20px rgba(255, 0, 128, 0.1)',
        'glow-secondary': '0 0 20px rgba(172, 138, 255, 0.3)',
        'glow-tertiary': '0 0 20px rgba(143, 245, 255, 0.3)',
        'card-hover': '0 20px 40px -15px rgba(0, 0, 0, 0.5)',
        navbar: '0 0 20px rgba(255, 0, 128, 0.1)',
      },

      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #ff89ac 0%, #e30071 100%)',
        'gradient-text': 'linear-gradient(90deg, #ff89ac 0%, #ac8aff 100%)',
        'gradient-hero': 'linear-gradient(to bottom right, rgba(255, 0, 128, 0.15) 0%, rgba(0,0,0,0) 50%, rgba(172, 138, 255, 0.1) 100%)',
        'gradient-overlay': 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
      },

      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },

      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default config
