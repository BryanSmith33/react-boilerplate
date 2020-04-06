//combining our base webpack config gile with a development mode flag
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  // control which port the dev server runs on
  devServer: {
    port: 3000
  },
  // allows us to easily debug our source code rather than bundled code
  devtool: 'source-map'
})