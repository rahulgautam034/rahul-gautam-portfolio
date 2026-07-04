import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// GitHub Pages project site: https://<user>.github.io/<repo>/
const repoName = "rahul-gautam-portfolio";
const base = process.env.GITHUB_PAGES === "true" ? `/${repoName}/` : "/";

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
});
