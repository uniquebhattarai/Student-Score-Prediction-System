import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@context':  path.resolve(__dirname, 'src/context'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@component': path.resolve(__dirname, 'src/component'),
      '@pages':    path.resolve(__dirname, 'src/pages'),
    },
  },
})

