import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/Movie/",
  plugins: [
    react(),
    tailwindcss(),
  ],
  publicDir: 'public',
  server: {
    port: 5173,
    strictPort: false,
    host: 'localhost',
    hmr: {
      overlay: false
    },
    watch: {
      usePolling: false
    }
  },
  build: {
    sourcemap: true,
    chunkSizeWarningLimit: 1600
  }
})
