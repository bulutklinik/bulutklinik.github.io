import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// SDK documentation lives at src/content/docs/{lang}/{version}/{page}.mdx
// (e.g. src/content/docs/js/v0.x/authentication.mdx). The language and version
// are derived from the entry id; per-page metadata comes from frontmatter.
const docs = defineCollection({
  loader: glob({
    pattern: "**/*.mdx",
    base: "./src/content/docs",
    // Keep the id as the literal path (minus extension) so the `v0.x` segment
    // survives — the default generator slugifies the dot away (`v0.x` → `v0x`).
    generateId: ({ entry }) => entry.replace(/\.mdx$/, ""),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    // Sidebar position within a language (lower = higher up).
    order: z.number().default(0),
  }),
});

export const collections = { docs };
