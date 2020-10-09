'use strict';

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sourcemap = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var server = require('browser-sync').create();
var csso = require('gulp-csso');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var webp = require('gulp-webp');
var svgstore = require('gulp-svgstore');
var posthtml = require('gulp-posthtml');
var include = require('posthtml-include');
var includejs = require('gulp-include');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var del = require('del');

gulp.task('css', function () {
  return gulp.src('source/sass/style.scss')
      .pipe(plumber())
      .pipe(sourcemap.init())
      .pipe(sass())
      .pipe(postcss([autoprefixer()]))
      .pipe(csso())
      .pipe(rename('style.min.css'))
      .pipe(sourcemap.write('.'))
      .pipe(gulp.dest('build/css'))
      .pipe(server.stream());
});

gulp.task('server', function () {
  server.init({
    server: 'build/',
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch('source/sass/**/*.{scss,sass}', gulp.series('css'));
  gulp.watch('source/img/icon-*.svg', gulp.series('sprite', 'html', 'refresh'));
  gulp.watch('source/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/components/*.html', gulp.series('html', 'refresh'));
  gulp.watch('source/js/*/*.js', gulp.series('js', 'refresh'));
});

gulp.task('refresh', function (done) {
  server.reload();
  done();
});

gulp.task('images', function () {
  return gulp.src('source/img/**/*.{png,jpg,svg}')
      .pipe(imagemin([
        imagemin.optipng({optimizationLevel: 3}),
        imagemin.jpegtran({progressive: true}),
        imagemin.svgo()
      ]))

      .pipe(gulp.dest('source/img'));

});

gulp.task('webp', function () {
  return gulp.src('source/img/**/*.{png,jpg}')
      .pipe(webp({quality: 90}))
      .pipe(gulp.dest('source/img'));
});

gulp.task('sprite', function () {
  return gulp.src('source/img/{icon-*,htmlacademy*}.svg')
      .pipe(svgstore({inlineSvg: true}))
      .pipe(rename('sprite_auto.svg'))
      .pipe(gulp.dest('build/img'));
});

gulp.task('html', function () {
  return gulp.src('source/*.html')
      .pipe(posthtml([
        include()
      ]))
      .pipe(gulp.dest('build'));
});

gulp.task('copy', function () {
  return gulp.src([
    'source/fonts/**/*.{woff,woff2}',
    'source/img/**',
    'source/gridviewscroll.js',
    'source/fixed_table.js',
  ], {
    base: 'source'
  })
      .pipe(gulp.dest('build'));
});

gulp.task('js', function () {
  return gulp.src('source/js/main.js')
      .pipe(includejs())
      .pipe(sourcemap.init())
      .pipe(plumber())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('build/js'))
      .pipe(uglify())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(sourcemap.write('./'))
      .pipe(gulp.dest('build/js'));
});

gulp.task('vendor-styles', function () {
  return gulp.src('source/libs/**/*.css')
      .pipe(gulp.dest('build/vendor'))
      .pipe(server.stream());
});

gulp.task('vendor', function () {
  return gulp.src('source/js/vendor/**/*.js')
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('build/js'));
});

// gulp.task('plugin', function () {
//   return gulp.src('source/js/plugin/**/*.js')
//       .pipe(concat('plugin.js'))
//       .pipe(gulp.dest('build/js'));
// });


gulp.task('clean', function () {
  return del('build');
});

gulp.task('pixelGlass', function () {
  return gulp.src('source/pixelPerfect/**/*.*')
      .pipe(gulp.dest('build/pixelPerfect'));
});

gulp.task('build', gulp.series('clean', 'copy', 'webp', 'vendor', 'vendor-styles', 'css', 'sprite', 'html', 'js', 'pixelGlass'));
gulp.task('start', gulp.series('build', 'server'));
