const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const LessLists = require('less-plugin-lists');

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
  ],

  module: {
    rules: [
      {
        test: /\.(le|c)ss$/, // For what files are the loaders
        exclude: /node_modules/,
        use: [
          {
            // What Loaders to use from bottom to top
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: MiniCssExtractPlugin.loader // Extracts CSS into separate files. It creates a CSS file per JS file which contains CSS
          },
          {
            loader: 'css-loader' // Second, translates CSS into CommonJS
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'less-loader',
            options: {
              plugins: [new LessLists()],
              strictMath: false
            }
          }
        ]
      }
    ]
  }
};