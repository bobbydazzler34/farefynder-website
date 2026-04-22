import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configure base at runtime through GH_PAGES_BASE for easy repo-name deployment.
export default defineConfig({
  plugins: [react()],
  base: process.env.GH_PAGES_BASE || "/",
});
