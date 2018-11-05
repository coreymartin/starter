import config from './config'

export default {
  mode: 'production',
  entry: config.entry,
  output: {
    filename: config.output.filename,
    path: config.output.path,
  },
}
