import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { fileURLToPath } from "url";

// ESM has no __dirname; derive it from import.meta.url so path.resolve works
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // "@" alias lets us use e.g. import X from "@/components/X" instead of relative paths
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
