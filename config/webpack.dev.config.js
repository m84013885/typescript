const webpack = require('webpack')
const commonConfig = require('./webpack.common.config')
const { merge } = require('webpack-merge')
const path = require('path')
const process = require('process')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const ip = require('ip')
const port = 8087
const host = ip.address()
const appDir = path.resolve(process.cwd(), 'app')
const { routers } = require('../router.json')
const config = merge(commonConfig, {
  mode: 'development',
  target:'web',
  devServer: {
    compress: true,
    hot: true,
    port,
    host,
    historyApiFallback: true,
    proxy: {
      '/v1': {
        target: 'http://livetest1.yuanbobo.com',
        pathRewrite: { '^/v1': '' },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin({ __DEV__: 'true' })
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: new RegExp(`^(?!.*\\.common).*\\.css`),
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]--[hash:base64:5]'
              }
            }
          },
          'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: new RegExp(`^(.*\\.common).*\\.css`),
        use: ['style-loader', 'css-loader', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: /\.(png|svg|svga|jpg|gif|mp4)$/,
        use: [{
          loader: 'url-loader', // file-loader
          options: { limit: 2500 }
        }],
        include: [appDir],
        exclude: [nodeModuleDir]
      }
    ]
  }
})
routers.map((item) => {
  const tempSrc = path.join(appDir, `./${item}/index.html`)
  const plugin = new HtmlWebpackPlugin({
    filename: `${item}`,
    template: tempSrc,
    inject: true,
    chunks: [item]
  })
  config.entry[item] = [path.resolve(appDir, `./${item}/index.tsx`)]
  config.plugins.push(plugin)
})

module.exports = config
