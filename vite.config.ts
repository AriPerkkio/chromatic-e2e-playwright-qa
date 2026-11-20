import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    // Don't reload the page when Playwright writes archives into test-results
    watch: { ignored: ["**/test-results/**"] },
  },
});
