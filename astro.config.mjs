import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://docs.astro.build/en/reference/configuration-reference/
export default defineConfig({
  site: 'https://ernest0vm.github.io',
  base: '/resume',
  integrations: [icon()],
  vite: {
    plugins: [tailwindcss()],
  },
});
