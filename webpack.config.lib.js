const path = require('path');
const merge = require('webpack-merge');

const commonConfig = {
  entry: [
    './src/main.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'react-d3kit.js',
    sourceMapFilename: '[file].map',
    library: 'ReactD3Kit',
    libraryTarget: 'umd',
    umdNamedDefine: false
  },
  externals: {
    'prop-types': {
      root: 'PropTypes',
      commonjs2: 'prop-types',
      commonjs: 'prop-types',
      amd: 'prop-types'
    },
    'react': {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }
  }
};

const prodConfig = require('lazynerd-devtools/config/webpack/webpack.config.prod.js');
const config = merge(prodConfig, commonConfig);
config.plugins = [];

module.exports = config;
