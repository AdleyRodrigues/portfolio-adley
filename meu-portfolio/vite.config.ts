import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'

const mdxPlugin = mdx()

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    { ...mdxPlugin, enforce: 'pre' },
    react(),
  ],
})
