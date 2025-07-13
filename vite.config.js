// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import UnoCSS from 'unocss/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/CngStationFinder",
})
