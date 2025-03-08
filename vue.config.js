const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: true
      });
      return definitions;
    });
  },
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/chzzk': {
        target: 'http://127.0.0.1:8000',
      },
      '/user':{
        target: 'http://127.0.0.1:8000'
      }
    }
  }
})
