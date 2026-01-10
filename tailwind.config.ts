import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        brand: {
          DEFAULT: "hsl(var(--brand))",
          light: "hsl(var(--brand-light))",
          dark: "hsl(var(--brand-dark))",
          muted: "hsl(var(--brand-muted))",
        },
        // Product theme colors
        honey: {
          DEFAULT: "hsl(var(--honey))",
          light: "hsl(var(--honey-light))",
          muted: "hsl(var(--honey-muted))",
          dark: "hsl(var(--honey-dark))",
        },
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          light: "hsl(var(--charcoal-light))",
          muted: "hsl(var(--charcoal-muted))",
          dark: "hsl(var(--charcoal-dark))",
        },
        coconut: {
          DEFAULT: "hsl(var(--coconut))",
          light: "hsl(var(--coconut-light))",
          muted: "hsl(var(--coconut-muted))",
          dark: "hsl(var(--coconut-dark))",
        },
        potato: {
          DEFAULT: "hsl(var(--potato))",
          light: "hsl(var(--potato-light))",
          muted: "hsl(var(--potato-muted))",
          dark: "hsl(var(--potato-dark))",
        },
        batik: {
          DEFAULT: "hsl(var(--batik))",
          light: "hsl(var(--batik-light))",
          muted: "hsl(var(--batik-muted))",
          dark: "hsl(var(--batik-dark))",
        },
        spice: {
          DEFAULT: "hsl(var(--spice))",
          light: "hsl(var(--spice-light))",
          muted: "hsl(var(--spice-muted))",
          dark: "hsl(var(--spice-dark))",
        },
        vanilla: {
          DEFAULT: "hsl(var(--vanilla))",
          light: "hsl(var(--vanilla-light))",
          muted: "hsl(var(--vanilla-muted))",
          dark: "hsl(var(--vanilla-dark))",
        },
        seafood: {
          DEFAULT: "hsl(var(--seafood))",
          light: "hsl(var(--seafood-light))",
          muted: "hsl(var(--seafood-muted))",
          dark: "hsl(var(--seafood-dark))",
        },
        music: {
          DEFAULT: "hsl(var(--music))",
          light: "hsl(var(--music-light))",
          muted: "hsl(var(--music-muted))",
          dark: "hsl(var(--music-dark))",
        },
        // Legacy tokens
        forest: {
          DEFAULT: "hsl(var(--forest))",
          light: "hsl(var(--forest-light))",
          dark: "hsl(var(--forest-dark))",
        },
        earth: {
          DEFAULT: "hsl(var(--earth))",
          light: "hsl(var(--earth-light))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          light: "hsl(var(--gold-light))",
        },
        cream: "hsl(var(--cream))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        'soft': 'var(--shadow-sm)',
        'medium': 'var(--shadow-md)',
        'large': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'glow': 'var(--shadow-glow)',
      },
      backgroundImage: {
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-accent': 'var(--gradient-accent)',
        'gradient-subtle': 'var(--gradient-subtle)',
        'gradient-earth': 'var(--gradient-earth)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "float": "float 3s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
