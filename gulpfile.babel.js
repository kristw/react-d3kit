'use strict';

const del           = require('del');
const gulp          = require('gulp');
const $             = require('gulp-load-plugins')();
const webpack       = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

import {createBuildAndWatchTasks} from './tasks/core.js';
import {createBrowserSyncTask} from './tasks/browserSync.js';

// -------------------------------------------
// Configuration
// -------------------------------------------

const paths = {
  src      : __dirname + '/src',
  dist     : __dirname + '/dist',
  examples : __dirname + '/examples',
  bower    : __dirname + '/examples/bower_components'
};

const patterns = {
  js : paths.src + '/**/*.js'
};

gulp.task('clean', function () {
  return del([
    paths.dist + '/**/*',
    paths.examples + '/dist/**/*'
  ]);
});

gulp.task('webpack', function() {
  return gulp.src(paths.src + '/main.js')
    .pipe(webpack(webpackConfig))
    .on('error', function handleError() {
      this.emit('end'); // Recover from errors
    })
    .pipe(gulp.dest(paths.dist))
    .pipe(gulp.dest(paths.examples+'/dist'))
    .pipe($.uglify({
      report: 'min',
      mangle: true,
      compress: true, //true,
      preserveComments: false
    }))
    .pipe($.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(paths.dist))
    .pipe(gulp.dest(paths.examples+'/dist'));
});

const buildTasks = [{name: 'webpack', pattern: patterns.js}];
createBuildAndWatchTasks(buildTasks);
createBrowserSyncTask('examples');

gulp.task('run', ['watch', 'browser-sync']);
gulp.task('default', ['run']);