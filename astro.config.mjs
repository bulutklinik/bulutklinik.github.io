// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// Org GitHub Pages site → served at the domain root.
// Tailwind v4 is wired through PostCSS (see postcss.config.mjs).
export default defineConfig({
  site: "https://bulutklinik.github.io",
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: "github-dark-default",
      wrap: false,
    },
  },
});
