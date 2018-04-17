const theme = require('./theme')
console.log(theme)

const { injectBabelPlugin } = require('react-app-rewired')
// 加载less样式
const rewireLess = require('react-app-rewire-less')

module.exports = function override (config, env) {
  // config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config)
  config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config)
  config = rewireLess.withLoaderOptions({
    modifyVars: theme
  })(config, env)
  return config
}
