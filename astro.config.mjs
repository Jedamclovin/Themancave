// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The address the site is published at. Link previews need it to find the preview image.
  // Change this to the shop's own domain once it has one.
  site: 'https://themancave.nnersessiadis.workers.dev',
  // Put the stylesheet inside the page so phones do not wait on a second download before showing anything
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
