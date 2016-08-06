const $ = require('gulp-load-plugins')();
import {newer, wrap} from './core.js';

export const compileHtmlEjs = wrap(function(src, dest){
  return newer(src, dest)
    .pipe($.ejs())
    .pipe($.rename(function(path){
      path.extname = '.html';
    }))
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    }));
});
