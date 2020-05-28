const commonConfig = require('./webpack.common.config')
const webpackMerge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const process = require('process')
const nodeModuleDir = path.resolve(process.cwd(), 'node_module')
const appDir = path.resolve(process.cwd(), 'app')
const { routers } = require('../router.json')
const outputPath = path.resolve(process.cwd(), 'build')
const assestPathName = 'assets'
const config = webpackMerge(commonConfig, {
  mode: 'production',
  output: {
    path: outputPath,
    chunkFilename: assestPathName + `/[name].[chunkhash:5].js`,
    publicPath: '',
    filename: assestPathName + `/[name].[chunkhash:5].js`
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({ filename: assestPathName + `/[name].[chunkhash:5].css` }),
  ],
  module: {
    rules: [
      {
        test: new RegExp(`^(?!.*\\.common).*\\.css`),
        use: [
          MiniCssExtractPlugin.loader,
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
        include: [appDir],
        exclude: [nodeModuleDir]
      },
      {
        test: /\.(png|svg|svga|jpg|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 2500,
            outputPath: assestPathName,
            publicPath: './'
          },
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
    filename: `${item}.html`,
    title: 'demo',
    template: tempSrc,
    inject: true,
    chunks: [item]
  })
  config.entry[item] = [path.resolve(appDir, `./${item}/index.tsx`)]
  config.plugins.push(plugin)
})

module.exports = config