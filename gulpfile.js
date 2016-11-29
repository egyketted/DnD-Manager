var gulp = require('gulp');
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');
require('./gulp_settings/serve.js');

gulp.task('clean', (cb) => {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('build', gulpSequence('clean', 'increment-build-number', ['sass', 'build:app', 'build:vendor', 'copy-html', 'copy-fonts', 'copy-package.json'], 'index.html'));

gulp.task('default', gulpSequence('clean', 'serve'));