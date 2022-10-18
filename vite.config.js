import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
const path = require('path')
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  console.warn(env)
  return {
    base: './',
    assetsInclude: ['./src/assets/css/theme1.scss'],
    plugins: [vue(), WindiCSS()],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            env.VITE_MODE === 'studio'
              ? '@import "./src/assets/css/theme1.scss";'
              : '@import "./src/assets/css/theme2.scss";',
        },
      },
    },
    // build: {
    //   rollupOptions: {
    //     output: {
    //       manualChunks: {
    //         'group-home': ['./src/views/Home'],
    //       },
    //     },
    //   },
    // },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
    },
  }
})
