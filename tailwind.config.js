/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "Inter", "Segoe UI", "Roboto"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(0,0,0,0.18)",
      },
    },
  },
  plugins: [],
};
