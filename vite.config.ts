import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://rbalestrero.github.io/RBalestrero/
export default defineConfig({
  plugins: [react()],
  base: '/RBalestrero/',
})
