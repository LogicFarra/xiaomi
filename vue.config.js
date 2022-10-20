const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  configureWebpack: {
    externals: {
      vue: 'Vue',
      vuex: 'Vuex',
      'vue-router': "VueRouter",
      axios: 'axios',
      'vuex-persistedstate': 'createPersistedState'
    }
  }
})
