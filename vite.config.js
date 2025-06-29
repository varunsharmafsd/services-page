// vite.config.js
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // Load env variables from .env files
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [react()],
    server: {
      port: 3000, // 👈 Set your custom port
    },
    // Replace %VITE_GA_ID% in index.html with the env value
    define: {
      'process.env': env,
    },
    envPrefix: 'VITE_', // Only allow VITE_ variables to be exposed
  }
})
