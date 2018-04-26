const webpack = require('webpack');
const config = require('./config');

module.exports = {
  mode: 'production',
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: config.output.path
  }
};