const $ = require('gulp-load-plugins')();
import {newer, wrap} from './core.js';

export const bundleTemplates = wrap(function(src, dest){
  return newer(src, dest + '/bundle.ngtemplates.js')
    .pipe($.htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      conservativeCollapse: true
    }))
    .pipe($.ngTemplates({
      filename: 'bundle.ngtemplates.js',
      module: 'app.templates',
      standalone: true
    }));
});