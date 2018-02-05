'use strict'

var webpack = require('webpack')

module.exports = {

  entry: ['./example/index.js'],

  devtool: 'inline-source-map',

  output: {
    filename: './example/bundle.js',
    pathinfo: true
  },

  module: {
    loaders: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      query: {
        cacheDirectory: true,
        presets: ['react', 'es2015']
      }
    }]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: false
    })
  ]

}