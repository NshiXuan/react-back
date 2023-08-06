const path = require("path");

const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src'),
      components: resolve('src/components')
    },
    // historyApiFallback: true // 配置取消在没有的路由刷新显示404的问题
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001', // /api代理到http://localhost:3001
        pathRewrite: {
          '^/api': '' // 把路径中的/api替代为空
        },
        changeOrigin: true // 请求的时候把我们的host改为代理的host 如果服务器没有进行host校验可以不需要
      }
    },
  }
}
