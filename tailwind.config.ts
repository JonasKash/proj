import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "pulse-glow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "blob1": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "33%": { transform: "translate(-50%, -50%) rotate(120deg)" },
          "66%": { transform: "translate(-50%, -50%) rotate(240deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(360deg)" },
        },
        "blob2": {
          "0%": { transform: "translate(-50%, -50%) rotate(0deg)" },
          "33%": { transform: "translate(-50%, -50%) rotate(-120deg)" },
          "66%": { transform: "translate(-50%, -50%) rotate(-240deg)" },
          "100%": { transform: "translate(-50%, -50%) rotate(-360deg)" },
        },
        // iOS-style animations
        "ios-fade-in": {
          "0%": { opacity: "0", transform: "translateY(20px) scale(0.97)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
        "ios-fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ios-scale-in": {
          "0%": { opacity: "0", transform: "scale(0.92)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "ios-slide-up": {
          "0%": { opacity: "0", transform: "translateY(100%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "ios-blur-in": {
          "0%": { opacity: "0", backdropFilter: "blur(0px)" },
          "100%": { opacity: "1", backdropFilter: "blur(20px)" },
        },
        "shake": {
          "0%, 100%": { transform: "translateX(0)" },
          "10%, 30%, 50%, 70%, 90%": { transform: "translateX(-4px)" },
          "20%, 40%, 60%, 80%": { transform: "translateX(4px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "blob1": "blob1 8s ease-in-out infinite",
        "blob2": "blob2 10s ease-in-out infinite",
        // iOS animations
        "ios-fade-in": "ios-fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ios-fade-in-up": "ios-fade-in-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ios-scale-in": "ios-scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "ios-slide-up": "ios-slide-up 0.5s cubic-bezier(0.32, 0.72, 0, 1) forwards",
        "ios-blur-in": "ios-blur-in 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "shake": "shake 0.5s cubic-bezier(0.36, 0.07, 0.19, 0.97) both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
