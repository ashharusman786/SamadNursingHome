/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Noto Sans Devanagari', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        // Semantic colors backed by CSS variables (global theme tokens)
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        // Optional shade scales for more granular control
        brand: {
          50: 'hsl(205 80% 96%)',
          100: 'hsl(205 80% 90%)',
          200: 'hsl(205 80% 82%)',
          300: 'hsl(205 80% 70%)',
          400: 'hsl(205 80% 55%)',
          500: 'hsl(205 80% 40%)', // matches --primary (light)
          600: 'hsl(205 80% 34%)',
          700: 'hsl(205 80% 28%)',
          800: 'hsl(205 80% 22%)',
          900: 'hsl(205 80% 16%)',
        },
        success: {
          50: 'hsl(155 60% 96%)',
          100: 'hsl(155 60% 90%)',
          200: 'hsl(155 60% 80%)',
          300: 'hsl(155 60% 70%)',
          400: 'hsl(155 60% 55%)',
          500: 'hsl(155 60% 40%)',
          600: 'hsl(155 60% 34%)',
          700: 'hsl(155 60% 28%)',
          800: 'hsl(155 60% 22%)',
          900: 'hsl(155 60% 16%)',
        },
        warning: {
          50: 'hsl(38 100% 96%)',
          100: 'hsl(38 98% 90%)',
          200: 'hsl(38 96% 82%)',
          300: 'hsl(38 94% 74%)',
          400: 'hsl(38 92% 66%)',
          500: 'hsl(38 92% 50%)',
          600: 'hsl(32 94% 44%)',
          700: 'hsl(28 92% 38%)',
          800: 'hsl(24 90% 32%)',
          900: 'hsl(20 88% 26%)',
        },
        danger: {
          50: 'hsl(0 93% 95%)',
          100: 'hsl(0 93% 90%)',
          200: 'hsl(0 88% 82%)',
          300: 'hsl(0 84% 74%)',
          400: 'hsl(0 80% 66%)',
          500: 'hsl(0 72% 50%)', // close to --destructive
          600: 'hsl(0 72% 44%)',
          700: 'hsl(0 72% 38%)',
          800: 'hsl(0 72% 32%)',
          900: 'hsl(0 72% 26%)',
        },
        info: {
          50: 'hsl(205 90% 96%)',
          100: 'hsl(205 88% 90%)',
          200: 'hsl(205 86% 82%)',
          300: 'hsl(205 84% 74%)',
          400: 'hsl(205 82% 66%)',
          500: 'hsl(205 80% 55%)',
          600: 'hsl(205 78% 48%)',
          700: 'hsl(205 76% 40%)',
          800: 'hsl(205 74% 32%)',
          900: 'hsl(205 72% 25%)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};