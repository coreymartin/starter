const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const config = require('./webpack-config')

module.exports = {
  mode: 'production',
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
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
          MiniCssExtractPlugin.loader,
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
