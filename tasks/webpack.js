import {wrap} from './core.js';

const _             = require('lodash');
const webpackStream = require('webpack-stream');
const webpackConfig = require('../webpack.config.js');
const named         = require('vinyl-named');

export const compileExecutable = wrap(function(src, dest){
  return src
    .pipe(named())
    .pipe(webpackStream(_.extend(webpackConfig, {
      output: { sourceMapFilename: '[file].map' }
    })))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    });
});