'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({
//      outputStyle: 'compressed'
      includePaths: ['ionicons/scss']
    }).on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('/'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function() {
  browserSync.init({
    files: "examples/**/*.html",
    server: {
      baseDir: 'examples',
      routes: {
        "/css": "css",
        "/fonts": "fonts"
      }
    },
  })
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('src/**/*.scss', ['sass']);
});


gulp.task('default', ['watch'], function() {

});
