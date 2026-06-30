// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Set this to your final URL once the domain is live; used for canonical
  // URLs, sitemaps, etc.
  site: 'https://andrewghosh.com',
  // Generates /sitemap-index.xml (+ /sitemap-0.xml) at build time so search
  // engines can discover every page. robots.txt points crawlers to it.
  integrations: [sitemap()],
});
