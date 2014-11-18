"use strict";
/* global require */

var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
var connect = require('gulp-connect');
var mainBowerFiles = require('main-bower-files');
var minifyCSS = require('gulp-minify-css');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

var onError = function(e){
  console.log(e);
};


// Compile Our Sass
gulp.task('styles', function() {
  return gulp.src('scss/style.scss')
    .pipe(plumber(onError))
    .pipe(sass({ style: 'expanded' }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifyCSS({ keepBreaks: false }))
    .pipe(gulp.dest('dist'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
  var bowerPaths = {
    bowerDirectory: 'bower_components',
    bowerrc: '.bowerrc',
    bowerJson: 'bower.json'
  };
  return gulp.src(mainBowerFiles(bowerPaths).concat('js/*.js'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


// Run a local webserver and watch for changes
gulp.task('default', function() {
  gulp.start('default');
  connect.server({
    port: 8000
  });
  gulp.watch('scss/*.scss', ['styles']);
  gulp.watch('js/*.js', ['scripts']);
});

// Default Task
gulp.task('build', ['styles', 'scripts']);
