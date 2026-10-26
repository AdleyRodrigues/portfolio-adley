import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import mdx from '@mdx-js/rollup'

const mdxPlugin = mdx()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    { ...mdxPlugin, enforce: 'pre' },
    react(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
          'motion-vendor': ['framer-motion'],
          'icons': ['lucide-react'],
        },
      },
    },
  },
})
