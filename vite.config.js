import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, "build"),
  }},{
  plugins: [
    react(),
    tailwindcss('./tailwind.config.js'),
  ],
})
