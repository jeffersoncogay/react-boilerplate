const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  entry: {
    app: ['./src/main.js']
  },
  mode: 'production',
  devtool: 'source-map'
});