const merge = require('webpack-merge');
const common = require('./webpack.common.js');
// const Terser = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  // optimization: {
  //   minimizer: [
  //     // new Terser()
  //     // new OptimizeCSSAssetsPlugin({})
  //   ]
  // }
});
