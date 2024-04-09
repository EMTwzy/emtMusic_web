import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 配置代理服务器
  server: {  
    proxy: {  
      // 选项写法  
      '/api': {  
        target: 'https://api.vkeys.cn/V1/Music', // 你的 API 服务器地址  
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置  
        rewrite: (path) => path.replace(/^\/api/, '') // 去除请求前缀  
      },  
    }  
  }
})
