import webpack from 'webpack'
import config from './config'

const publicPath = '/'

export default {
  mode: 'development',
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: config.output.path,
    publicPath: publicPath
  },

  devtool: 'cheap-module-source-map',

  devServer: {
    port: 8080,
    host: '0.0.0.0',
    historyApiFallback: true,
    noInfo: false,
    stats: 'minimal',
    publicPath: publicPath,
    contentBase: config.output.path,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}
