// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://njcsjx.com',
  i18n: {
    defaultLocale: 'en',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://njcsjx.com/',
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          zh: 'zh-CN',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
