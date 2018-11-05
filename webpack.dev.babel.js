import webpack from 'webpack'
import config from './config'

const publicPath = '/'

export default {
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
  ],

  module: config.module,
}
