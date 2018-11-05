import path from 'path'

export default {
  entry: './app/index.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'build'),
  },
}
