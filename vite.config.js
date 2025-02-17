import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'docs'),
    sourcemap: false,
  },
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
  // base: '/docs/'
})
