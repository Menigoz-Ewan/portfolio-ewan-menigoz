// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // À remplacer par le nom de domaine définitif (VPS) : sert au sitemap,
  // aux URL canoniques et aux aperçus de partage (Open Graph).
  site: 'https://portfolio.ewan-menigoz.fr',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
