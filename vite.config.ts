import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        home: resolve(projectRoot, 'index.html'),
        privacy: resolve(projectRoot, 'privacidaddatos/index.html'),
        terms: resolve(projectRoot, 'terminoscondiciones/index.html'),
      },
    },
  },
})
