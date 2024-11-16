import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow remote access (for AWS EC2 or similar environments)
    port: 3000, // You can set your desired port
    open: false, // Disable automatic browser opening
  }
})
