import path from 'path'

export default {
  entry: './app/index.js',

  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },

  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
}
