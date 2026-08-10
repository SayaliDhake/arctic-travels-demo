import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' makes the build use relative asset paths so it works
// whether it's deployed at a domain root or under a GitHub Pages
// project path like username.github.io/repo-name/.
export default defineConfig({
  base: './',
  plugins: [react()],
})
