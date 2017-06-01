"use strict";
const path = require('path');

module.exports = {
  context: __dirname,
  entry: "./app/app.js",
  output: {
    path: path.resolve(__dirname),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: [/\.jsx?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  devtool: 'source-maps',
  resolve: {
    extensions: [".js", '*'],
  },
  devServer: {
    inline:true,
    port: 8008
  }

};
