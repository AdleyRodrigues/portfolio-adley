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
})
