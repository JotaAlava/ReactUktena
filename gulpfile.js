var gulp = require('gulp'),
  react = require('gulp-react'),
  concat = require('gulp-concat'),
  rimraf = require('rimraf'),
  runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence('delete-folders',
    ['1'],
    callback);
});

gulp.task('transpile-js', function (cb) {
  return gulp.src('./public/jsx/*.jsx')
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('./public/js'), cb)
});

gulp.task('delete-folders', function (cb) {
  rimraf('./public/dist', console.log);
  rimraf('./public/js', cb);
});

gulp.task('bundle', function () {
  return gulp.src([
    './public/bower_components/jquery/dist/jquery.js',
    './public/bower_components/bootstrap/dist/js/bootstrap.js',
    './public/bower_components/react/react.js',
    './public/bower_components/react/react-dom.js',
    './public/js/*.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('./public/dist/'));
});

gulp.task('1', function(callback) {
  runSequence('transpile-js',
    ['bundle'],
    callback);
});