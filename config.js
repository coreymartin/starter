module.exports = {
  entry: './app/index.js',

  output: {
    filename: '[name].[hash].js',
  },

  jsModule: { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
}