// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Adresse du site en ligne (VPS) : sert au sitemap,
  // aux URL canoniques et aux aperçus de partage (Open Graph).
  site: 'https://portfolio.ewan-menigoz.fr',
  // Deux langues : le français par défaut (adresses sans préfixe), l'anglais sous /en/.
  // Astro en déduit Astro.currentLocale, lu par les composants pour choisir leurs textes (src/i18n).
  i18n: {
    locales: ['fr', 'en'],
    defaultLocale: 'fr',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
