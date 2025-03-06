const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/chzzk': {
        target: 'http://127.0.0.1:8000',
      }
    }
  }
})
