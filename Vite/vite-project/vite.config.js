import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  // css: {},
  // esbuild: {},
  alias: {
    "@": path.resolve(__dirname, "src"),
    "comps": path.resolve(__dirname, "src/components"),
    "apis": path.resolve(__dirname, "src/apis"),
    "views": path.resolve(__dirname, "src/views"),
    "utils": path.resolve(__dirname, "src/utils"),
    "routes": path.resolve(__dirname, "src/routes"),
    "styles": path.resolve(__dirname, "src/styles"),
  },
  plugins: [vue()]
})
