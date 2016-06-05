'use strict';

var source = require('vinly-source-stream');
var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var browserify = require('browserify');
var watchify = require('watchify');
var notify = require('gulp-notify');

gulp.task('scss', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('css/styles.css'));
});

gulp.task('js', function () {

});

gulp.task('copy', function () {

});

gulp.task('watch', function () {

});

gulp.task('default', function () {

});
