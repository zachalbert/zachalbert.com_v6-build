"use strict";

var gulp            = require('gulp');
var browserSync     = require('browser-sync');
var autoprefixer    = require('gulp-autoprefixer');
var concat          = require('gulp-concat');
var connect         = require('gulp-connect');
var minifyCSS       = require('gulp-minify-css');
var notify          = require('gulp-notify');
var plumber         = require('gulp-plumber');
var rename          = require('gulp-rename');
var sass            = require('gulp-sass');
var uglify          = require('gulp-uglify');
var cp              = require('child_process');
var deploy          = require('gulp-gh-pages');

var messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
}


// Build site
gulp.task('jekyll-build', function(done) {
  browserSync.notify(messages.jekyllBuild);
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
    .on('close', done);
});


// Rebuild Jekyll & do page reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload();
});


// Wait for jekyll-build, then launch server
gulp.task('browser-sync', ['styles', 'scripts', 'jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: '_site'
    }
  });
});


// Compile sass
gulp.task('styles', function() {
  return gulp.src('_scss/style.scss')
    .pipe(sass({ 
      style: 'expanded',
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(minifyCSS({ keepBreaks: false }))
    .pipe(gulp.dest('_site/css'))
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('css'));
});


// Concatenate & Minify JS
gulp.task('scripts', function() {
  return gulp.src('_js/*.js')
    .pipe(concat('_js/site.js'))
    .pipe(rename('site.min.js'))
    .pipe(uglify())
    .pipe(browserSync.reload({stream: true}))
    .pipe(gulp.dest('js'));
});


// Watch task
gulp.task('watch', function() {
  gulp.watch('_scss/*.scss', ['styles']);
  gulp.watch('_js/*.js', ['scripts', 'jekyll-rebuild']);
  gulp.watch(['index.html', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
});


// Default
gulp.task('default', ['browser-sync', 'watch']);


// Deploy to github gulp-gh-pages
gulp.task('deploy', ['jekyll-build'], function() {
  return gulp.src('./_site/**/*')
    .pipe(deploy({
      remoteUrl: "git@github.com:zachalbert/zachalbert.github.io.git",
      branch: "master"
    }));
});
