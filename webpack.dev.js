const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const config = require('./webpack-config')

const publicPath = '/'

module.exports = {
  mode: 'development',
  entry: config.entry,
  output: {
    publicPath,
    filename: config.output.filename,
    path: config.output.path,
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    publicPath,
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    contentBase: config.output.path,
    hot: true,
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs',
    }),
  ],

  module: {
    rules: [
      config.jsModule,
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: '[name]__[local]___[hash:base64:5]',
            },
          },
          'sass-loader',
        ],
      },
    ],
  },
}
