import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const sections = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/pages/sections" }),
});

export const collections = { sections };
