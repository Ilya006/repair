const { src, dest, parallel, series, watch } = require('gulp');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const del = require('del');


function browsersync() {
  browserSync.init({
    server: { baseDir: 'app/' },
    notify: false,
  })
};

function scripts() {
  return src('app/js/main.js')
  .pipe(concat('main.min.js'))
  .pipe(uglify())
  .pipe(dest('app/js/'))
  .pipe(browserSync.stream())
};

function styles() {
  return src('app/sass/style.sass')
  .pipe(sass())
  .pipe(concat('main.min.css'))
  .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
  .pipe(cleanCSS(( { level: { 1: {specialComments: 0} }/*, format: 'beautify' красивый вид css*/ } )))
  .pipe(dest('app/css/'))
  .pipe(browserSync.stream())
};

function img() {
  return src('app/img/src/**/*')
  .pipe(newer('app/img/dest/'))
  .pipe(imagemin())
  .pipe(dest('app/img/dest/'))
};

// удаляет все файлы в image
function cleanimg() {
  return del('app/img/dest/**/*', {force: true})
};

function cleandist() {
  return del('dist/**/*', {force: true})
};

function buildCopy() {
  return src([
    'app/css/**/*',
    'app/js/**/*',
    'app/img/dest/**/*',
    'app/**/*.html',
    'app/fonts/**/*',
    'app/phpmailer/**/*',
    'app/**/*.php'
  ], { base: 'app' })
  .pipe(dest('dist'));
}

function startwatch() {
  watch('app/sass/**/*', styles);
  watch(['app/**/*.js', '!app/**/*.min.js'], scripts);
  watch('app/**/*.html').on('change', browserSync.reload);
  watch('app/img/src/**/*', img);
};

exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.img = img;
exports.cleanimg = cleanimg;
exports.build = series(cleandist, styles, scripts, img, buildCopy);

exports.default = parallel(styles, scripts, browsersync, startwatch);