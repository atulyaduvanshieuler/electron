const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');
const path = require('path');

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: ['.tsx', '.ts', '.js' , '.jsx', '.css'],
  },
};
