// vue.config.js 常用配置
// 适用于 vue-cli 脚手架搭建项目
module.exports = {
  // 基本路径，vue.cli 3.3 以前使用 baseUrl
  publicPath: '/',
  // 输出文件目录
  outputDir: 'dist',
  // 用于嵌套生成的静态资产（js,css,jmg,fonts）的目录
  assetsDir: '',
  // 生产环境 sourceMap
  productionSourceMap=true,
  // webpack 配置
  configureWebpack: () => { },
  chainWebpack: () => { },
  // css 相关配置
  css: {
    // 启用 CSS modules
    modules: false,
    // 是否使用 css 分离插件
    extract: true,
    // 开启 CSS source map？
    sourceMap: false,
    // css 预设器配置项
    loaderOptions: {},
  },
  // webpack-dev-server 相关配置
  devServer: {
    host: '0,0,0,0',
    port: 8080,
    //设置代理
    proxy: {},
  },
  // 第三方插件配置
  pluginOptions: {
    // ...
  }
}
