const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const gulpSequence = require('gulp-sequence');
const sass = require('gulp-sass');
const browserify = require('browserify');
const es = require('event-stream');
const fs = require('fs');
const inject = require('gulp-inject');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const uglify = require('gulp-uglifyjs');
const series = require('stream-series');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

const onError = require('./error-handling').onError;

const VENDORS = ['angular', 'angular-ui-router'];

const LAYOUT = require('../layout.json');

gulp.task('serve', gulpSequence('increment-build-number', ['sass', 'build:app', 'build:vendor', 'copy-html', 'copy-fonts', 'copy-package.json'], 'index.html', 'watch'));

gulp.task('build:vendor', (cb) => {
    const b = browserify({
        debug: true
    });

    VENDORS.forEach(lib => {
        b.require(lib);
    });

    if (process.env.NODE_ENV.trim() === 'prod') {
        b.bundle()
            .on('error', function (err) {
                console.log(err.stack);
                notify({
                    'title': 'Compile Error',
                    'message': err.message
                });
                this.emit('end');
            })
            .pipe(source('vendor.js'))
            .pipe(buffer())
            .pipe(uglify())
            .pipe(gulp.dest(`${LAYOUT.dest}`));
    } else {
        b.bundle()
            .pipe(source('vendor.js'))
            .pipe(buffer())
            .pipe(gulp.dest(`${LAYOUT.dest}`));
    }
    cb();
});

gulp.task('watch', () => {
    browserSync.init({
        server: {
            baseDir: `${LAYOUT.dest}`
        }
    });

    gulp.watch(`${LAYOUT.source}/**/*.scss`, ['sass']);
    gulp.watch(`${LAYOUT.source}/**/*.js`, ['build:app']);
    gulp.watch(`${LAYOUT.source}/index.html`, ['index.html']);
    gulp.watch([`${LAYOUT.source}/**/*.html`, `!${LAYOUT.source}/index.html`], ['copy-html']);
    gulp.watch([`${LAYOUT.dest}/**/*.css`, `${LAYOUT.dest}/**/*.js`], ['index.html']);
    gulp.watch(`${LAYOUT.dest}/**/*.*`).on('change', browserSync.reload);
});

gulp.task('build:app', (cb) => {
    let b = browserify();
    b.external(VENDORS);
    return new Promise(resolve => {
        gulp.src(`${LAYOUT.source}/**/*.js`)
            .pipe(bundler(es, b))
            .on('end', resolve);
    }).then(() => {
        return new Promise(resolve => {
            let bundleFs = fs.createWriteStream(`./${LAYOUT.dest}/bundle.js`);
            bundleFs.on('open', () => {
                b.bundle()
                    .on('error', function (err) {
                        console.log(err.stack);
                        notify({
                            'title': 'Compile Error',
                            'message': err.message
                        });
                        this.emit('end');
                    })
                    .pipe(bundleFs);
                resolve();
            });
        });
    });
});

gulp.task('copy-html', () => {
    return gulp.src([`${LAYOUT.source}/**/*.html`, `!${LAYOUT.source}/index.html`])
        .pipe(gulp.dest(`${LAYOUT.dest}`));
});

gulp.task('copy-fonts', () => {
    return gulp.src([`${LAYOUT.source}/fonts/**/*.*`])
        .pipe(gulp.dest(`${LAYOUT.dest}/fonts`));
});

gulp.task('increment-build-number', (cb) => {
    var packageJson = require('../package.json');
    packageJson.buildnum = packageJson.buildnum += 1;

    fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, '  '));

    cb();
});

gulp.task('copy-package.json', () => {
    return gulp.src(`package.json`)
        .pipe(gulp.dest(`${LAYOUT.dest}`));
});

gulp.task('sass', () => {
    return gulp.src([
        `${LAYOUT.source}/**/*.scss`,
        `${LAYOUT.source}/**/*.css`,
        `node_modules/bootstrap/dist/css/bootstrap.min.css`])
            .pipe(plumber({ errorHandler: onError }))
            .pipe(sass())
            .pipe(gulp.dest(`${LAYOUT.dest}`))
            .pipe(browserSync.stream());
});

gulp.task('index.html', () => {
    let target = gulp.src(`${LAYOUT.source}/index.html`);
    let vendor = gulp.src('dist/vendor.js', { read: false });
    let sources = gulp.src([
        `${LAYOUT.dest}/**/*.css`,
        `${LAYOUT.dest}/**/*.js`,
        `!${LAYOUT.dest}/vendor.js`
    ], { read: false });

    return target.pipe(inject(series(vendor, sources),{ ignorePath: 'dist' }))
        .pipe(gulp.dest(`${LAYOUT.dest}`));
});

function bundler(es, bundle) {
    return es.map((file, cb) => {
        return cb(null, bundle.add(file.path));
    });
}