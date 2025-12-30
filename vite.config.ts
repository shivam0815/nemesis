import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "nemesis-gt3h.onrender.com", // ✅ Render backend
    ],
  },

  preview: {
    allowedHosts: [
      "localhost",
      "127.0.0.1",
      "nemesis-gt3h.onrender.com", // ✅ Render backend
    ],
  },
});
