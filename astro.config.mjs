// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// Deployed at https://santana64.github.io/portefolio/
export default defineConfig({
  site: 'https://santana64.github.io',
  base: '/portefolio',
  trailingSlash: 'ignore',
  integrations: [react(), sitemap()],
  build: { assets: 'assets' },
  vite: {
    ssr: { noExternal: ['three'] },
  },
});
