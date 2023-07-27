const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  entry: './public/javascript/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  watch: true,
}