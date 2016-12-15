'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('src/**/*.scss')
    .pipe(sass({
//      outputStyle: 'compressed'
      includePaths: ['node_modules/ionicons/dist/scss']
    }).on('error', sass.logError))
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
        "/css": "css"
      }
    },
  })
});

gulp.task('watch', ['browserSync'], function () {
  gulp.watch('src/**/*.scss', ['sass']);
});


gulp.task('default', ['watch'], function() {

});
