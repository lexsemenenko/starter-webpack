const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, 'src', 'app.js')
  },
  output: {
    path: path.join(__dirname, './public'),
    filename: 'bundle.js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html'
    })
  ]
}