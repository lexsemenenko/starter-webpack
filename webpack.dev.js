const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    port: process.env.PORT || 3000,
    contentBase: path.join(process.cwd(), './public'),
    watchContentBase: true,
    stats: 'none',
    quiet: false,
    open: true
  },
});
