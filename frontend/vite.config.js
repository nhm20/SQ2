import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000", // replace with your backend server URL
        changeOrigin: true,
        secure: false, // set this to true if using https
      },
    },
  },
});
