const webpack = require('webpack'); // Webpack core
const merge = require('webpack-merge'); // Combine Webpack configs
const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    hot: true, // Enable hot module replacement
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // Load hot module replacement
  ]
});
