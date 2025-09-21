/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "bg-brand-gray",
    "bg-brand-subtle",
    "bg-brand-subtle-shade",
    "bg-brand-subtle-tint",
    "bg-brand-subtle-light",
    "bg-brand-charcoal",
    "bg-brand-charcoal-shade",
    "bg-brand-charcoal-tint",
    "bg-brand-primary",
    "bg-brand-primary-tint",
    "bg-brand-secondary",
    // Add more as needed
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "brand-primary": "#ff7433", // Coral Orange
        "brand-primary-dark": "#99451e",
        "brand-primary-shade": "#cc5c28",
        "brand-primary-tint": "#ff8f5b",
        "brand-primary-light": "#ffab84",

        // Secondary Colors
        "brand-secondary": "#055B5C", // Deep Teal
        "brand-secondary-dark": "#033f40",
        "brand-secondary-shade": "#047070",
        "brand-secondary-tint": "#3a8788",
        "brand-secondary-light": "#6e9fa1",

        // Charcoal Colors
        "brand-charcoal": "#1C2B35", // Dark Sections
        "brand-charcoal-dark": "#0f171e",
        "brand-charcoal-shade": "#253544",
        "brand-charcoal-tint": "#415363",
        "brand-charcoal-light": "#5e727e",

        // Subtle Colors
        "brand-subtle": "#E6F2F2", // Light Teal
        "brand-subtle-dark": "#c4e0e0",
        "brand-subtle-shade": "#d8ebeb",
        "brand-subtle-tint": "#eef7f7",
        "brand-subtle-light": "#f9fcfc",

        // Gray Colors
        "brand-gray": "#F0F4F8", // Secondary Backgrounds
        "brand-gray-dark": "#d5dde5",
        "brand-gray-shade": "#e3e8ef",
        "brand-gray-tint": "#f7f9fb",
        "brand-gray-light": "#fcfdfe",
      },
    },
  },
  plugins: [],
};
