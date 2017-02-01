'use strict';

const gulp = require('gulp');
const spawn = require('child_process').spawn;

gulp.task('json-server', (done) => {

    spawn('node', ['node_modules/json-server/bin/index.js', '--watch', 'db.json'], { stdio: 'inherit' });
    done();
});
