'use strict';
const path = require('path'),
  webpack = require('webpack'),
  basePath = path.join(__dirname),
  destFile = path.join(basePath,'/dist/usmessages.js'),
  entries = {
    index: [path.join(basePath,'index.js')]
  };


let minified = true;

let config = {
  entry: entries,
  output: {
    libraryTarget: "commonjs",
    path: path.dirname(destFile),
    filename: 'usmessage.min.js'
  },
  resolve: {
      //modules: [path.join(basePath,'/node_modules')] //this is for the adapter dependencies
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
  },
  externals: [
    'moment'
  ],

  module: {
    rules: [{
      test: /\.js$/,
      //exclude: /(node_modules|bower_components)/,
      loader: require.resolve('babel-loader'), // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }],
  },
  plugins: []

};

if (minified) {
  config.plugins.push(new webpack.optimize.UglifyJsPlugin());

}

module.exports = config
