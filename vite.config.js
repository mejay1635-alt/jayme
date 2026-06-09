import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/jayme/',
  plugins: [tailwindcss()],
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true
  }
});
