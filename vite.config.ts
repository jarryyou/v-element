import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import vueDevTools from 'vite-plugin-vue-devtools'
// defineOptions 是一个 Vite 插件，它可以自动为 Vue 组件添加 defineOptions 装饰器。
import DefineOptions from 'unplugin-vue-define-options/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // vueDevTools(),
    DefineOptions(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      // 引入全局scss文件 在所有的组件中都将可以使用variables.scss中的变量
      scss: {
        additionalData: `@use "@/assets/variables.scss" as *;`,
      },
    }
  }
})
