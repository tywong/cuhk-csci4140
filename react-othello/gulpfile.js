var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var watchify = require('watchify');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var del = require('del');

gulp.task('css', function() {
  var processors = [
    autoprefixer({browsers: ['last 1 version']})
  ];
  return gulp.src('css/*.scss')
    .pipe(sass())
    .pipe(postcss(processors))
    .pipe(gulp.dest('public/css'));
});

gulp.task('bundle', function() {
  return browserify({
      entries: ['js/app.js'],
      transform: ['reactify']
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('public/js'));
});

gulp.task('clean', function() {
  return del([
      'public/js/bundle.js'
    ]);
});

gulp.task('default', ['css', 'bundle']);
