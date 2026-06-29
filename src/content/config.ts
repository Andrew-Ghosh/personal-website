import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

// Gear: a single JSON file holding the full list of items. Each item is tagged
// with a `location` so the Gear page can split it into Workspace, EDC (everyday
// carry), and Personal care. Add an item by adding an object to the array.
const gear = defineCollection({
  loader: file('src/content/gear/gear.json'),
  schema: z.object({
    name: z.string(),
    location: z.enum(['edc', 'personal-care', 'other']),
    note: z.string().optional(),
    link: z.string().url().optional(),
    // Photos aren't listed here — drop a file in src/assets/gear named after the
    // item's id (e.g. mac.jpg) and GearCard picks it up automatically.
  }),
});

// Projects: one Markdown file per project. Frontmatter holds the metadata,
// the Markdown body is the longer description. Add a project by dropping a new
// `.md` file into src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    link: z.string().url().optional(),
    repo: z.string().url().optional(),
    tech: z.array(z.string()).default([]),
    date: z.coerce.date().optional(),
    order: z.number().default(0),
    // Cover images aren't listed here — drop a file in src/assets named after
    // the project's id (e.g. nutrifyumd.png) and the Projects page picks it up
    // automatically, rendering a hero card. Otherwise it's a text card.
  }),
});

export const collections = { gear, projects };
