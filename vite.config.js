import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Production optimizations
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs in production
        drop_debugger: true,
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'motion': ['framer-motion'],
          'gsap': ['gsap'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'ogl': ['ogl'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false, // Disable sourcemaps for production
  },
  server: {
    host: true, // Enable network access
    port: 5173,
  },
  preview: {
    host: true,
    port: 4173,
  },
})
