'use strict';

var webpack = require('webpack');

// Find bower path
var path = require('path');
var fs = require('fs');
var bowerConfig = path.join(__dirname, '.bowerrc');
var bowerPath = 'bower_components';
try {
  if (fs.statSync(bowerConfig)) {
    var bowerrc = JSON.parse(fs.readFileSync(bowerConfig, 'utf-8'));
    if (bowerrc.directory) {
      bowerPath = path.join(__dirname, bowerrc.directory);
    }
  }
} catch (ex) {}

// Detect environment
var isProduction = process.env.NODE_ENV === 'production';

// Create config
var config = {
  module: {
    loaders: [
      // {
      //   test: /\.json$/,
      //   loader: 'json-loader'
      // },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-object-assign']
        }
      }
    ]
  },
  resolve: {
    modulesDirectories: [bowerPath, 'node_modules']
  },
  plugins: [
    new webpack.ResolverPlugin(
      new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin('bower.json', ['main'])
    )
  ],
  devtool: isProduction ? undefined : 'eval'
};

if (isProduction) {
  config.plugins.push(
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  );
  // config.plugins.push(
  //   new webpack.optimize.UglifyJsPlugin({
  //     report: 'min',
  //     compress: true,
  //     preserveComments: false,
  //     // mangle: false,
  //     mangle: {
  //       except: ['$super', '$', 'exports', 'require']
  //     }
  //   })
  // );
}

module.exports = config;
