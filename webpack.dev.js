const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './public'),
    watchContentBase: true,
    stats: 'none',
    quiet: false,
    open: true,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin() // Test if it works for css with form element
  ],
});
