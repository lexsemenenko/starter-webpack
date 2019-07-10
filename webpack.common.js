const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const LessLists = require('less-plugin-lists');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  entry: {
    bundle: path.join(__dirname, 'src', 'app.js'),
  },

  // entry: ['@babel/polyfill', path.join(__dirname, 'src', 'app.js')],
  output: {
    path: path.join(__dirname, './public'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.((png)|(jpg)|(jpeg)|(eot)|(woff)|(woff2)|(ttf)|(svg)|(gif))(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file-loader?name=/[hash].[ext]'
      },
      {
        loader: 'babel-loader',
        test: /\.js?$/,
        exclude: /node_modules/
      },
      {
        test: /\.(le|c)ss$/, // For what files are the loaders
        exclude: /node_modules/,
        use: [
          // Last is executed first
          {
            // What Loaders to use from bottom to top
            loader: 'style-loader' // creates style nodes from JS strings
          },
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     // only enable hot in development
          //     hmr: process.env.NODE_ENV === 'development',
          //     // if hmr does not work, this is a forceful method.
          //     reloadAll: true
          //   }
          // },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              plugins: [new LessLists()],
              strictMath: false,
              sourceMap: true
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/template.html'
    }),
    new CopyWebpackPlugin([
      {
        from: './src/fonts/',
        to: 'fonts/',
        flatten: true
      },
      {
        from: './src/images/',
        to: 'images/',
        flatten: true
      }
      // {
      //   from: './src/data/',
      //   to: 'data/',
      //   flatten: true
      // }
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].extract.css'
    }),
    new CleanWebpackPlugin()
  ]
};
