import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { viteMockServe } from 'vite-plugin-mock'
import { resolve } from 'path'
import { svgBuilder } from './build/svg/svgBuilder.ts'

// https://vitejs.dev/config/
export default ({ command }) => {
  let prodMock = true
  return {
    server: {
      proxy: {
        '/dev-api': {
          target: 'http://localhost:3000',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev-api/, '')
        }
      }
    },
    plugins: [
      vue(),
      vueJsx(),
      svgBuilder('./src/icons/svg/'),
      viteMockServe({
        supportTs: false,
        // default
        mockPath: 'mock',
        localEnabled: command === 'serve',
        prodEnabled: command !== 'serve' && prodMock,
        injectCode: `
            import { setupProdMockServer } from '/build/mock/mockProdServer';
            setupProdMockServer();
          `,
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    }
  }
}
