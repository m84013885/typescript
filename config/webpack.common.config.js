const path = require('path')
const process = require('process')
const webpack = require('webpack')
const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const appDir = path.resolve(process.cwd(), 'app')
module.exports = {
  entry: {},
  plugins: [
    new webpack.DllReferencePlugin({
      context: process.cwd(),
      manifest: require('../dll/dll.manifest.json')
    })
  ],
  resolve: {
    extensions: [".ts", ".tsx", '.js']
  },
  module: {
    rules: [{
      test: /\.ts(x?)$/,
      use: ['ts-loader'],
      include: [appDir],
      exclude: [nodeModuleDir]
    }]
  }
}