import {defineConfig} from 'astro/config';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "it",
    locales: ["it", "en"],
    routing: {
      prefixDefaultLocale: false
    }
  },

  markdown: {
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://shiki.style/themes
      theme: 'github-dark-dimmed',
    }
  },

  integrations: [icon()]
});
