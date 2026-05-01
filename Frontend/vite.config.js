import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3003",
      // Proxy API requests to the backend server running on port 3003. Append URL path to API URL.(/api/contact --> http://localhost:3003/api/contact)
    },
  },
  plugins: [react()],
});
