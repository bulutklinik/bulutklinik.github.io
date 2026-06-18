// @ts-check
import { defineConfig } from "astro/config";

// Org GitHub Pages site → served at the domain root.
// Tailwind v4 is wired through PostCSS (see postcss.config.mjs).
export default defineConfig({
  site: "https://bulutklinik.github.io",
});
