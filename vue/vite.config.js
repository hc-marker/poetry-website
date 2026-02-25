import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  // 关键：使用相对路径
  base: './',
  
  plugins: [vue()],
  
  // 服务器配置
  server: {
    host: '0.0.0.0',  // 允许外部访问
    port: 3000,
    open: true,        // 自动打开浏览器
    cors: true,        // 允许跨域
    hmr: true,         // 热更新
  },
  
  // 构建配置
  build: {
    // 输出目录
    outDir: 'dist',
    
    // 静态资源目录
    assetsDir: 'assets',
    
    // 资源大小限制（小于此阈值的资源会内联）
    assetsInlineLimit: 4096,
    
    // 是否生成sourcemap
    sourcemap: false,
    
    // 分块策略
    rollupOptions: {
      output: {
        // 自定义分块
        manualChunks: undefined, // 使用默认分块
        
        // 文件名配置
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
    
    // 清理旧文件
    emptyOutDir: true,
  },
  
  // 解析配置
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),  // 路径别名
      '#': resolve(__dirname, 'types'),
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
})