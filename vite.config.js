import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import { svgBuilder } from './build/svg/svgBuilder.ts'

// https://vitejs.dev/config/
export default defineConfig ({
  plugins: [
    vue(),
    vueJsx(),
    svgBuilder('./src/icons/svg/')
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
})
