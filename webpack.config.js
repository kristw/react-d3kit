'use strict';

var webpack = require('webpack');

// Detect environment
var isProduction = process.env.NODE_ENV === 'production';

// Create config
var config = {
  output: {
    filename: 'react-d3kit.js',
    sourceMapFilename: '[file].map',
    library: 'ReactD3Kit',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  externals: {
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  },
  module: {
    loaders: [
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
