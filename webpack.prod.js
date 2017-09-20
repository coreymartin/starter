const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')
const config = require('./config');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css'
});

module.exports = {
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: path.resolve(__dirname, 'build'),
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    extractSass,
    new UglifyJSPlugin(),
    new HtmlWebpackPlugin({
      template: 'index.ejs'
    }),
  ],

  module: {
    rules: [
      config.jsModule,
      { 
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                sourceMap: true,
                importLoaders: 1,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            'sass-loader',
          ],
        })
      }
    ]
  }
};