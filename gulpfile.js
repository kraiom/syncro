var gulp           = require('gulp'),
    babelify       = require('babelify'),
    browserify     = require('browserify'),
    source         = require('vinyl-source-stream'),
    bufferify      = require('vinyl-buffer'),
    jshint         = require('gulp-jshint'),
    uglify         = require('gulp-uglify'),
    img            = require('gulp-imagemin'),
    jscs           = require('gulp-jscs'),
    argv           = require('yargs').argv,
    gulpif         = require('gulp-if'),
    connect        = require('gulp-connect'),
    bower          = require('gulp-main-bower-files'),
    flatten        = require('gulp-flatten'),
    minifyCSS      = require('gulp-cssnano'),
    prefixer       = require('gulp-autoprefixer')

var DEBUG = argv.production ? false : true
var NAME = require('./package').name

gulp.task('default', ['scripts', 'html', 'img', 'audio', 'font', 'styles'])

gulp.task('watch', ['default'], function () {
    gulp.watch('./src/js/**/*', ['scripts'])
    gulp.watch('./src/css/**/*', ['styles'])
    gulp.watch('./src/html/**/*', ['html'])
    gulp.watch('./src/json/**/*', ['json', 'scripts'])
})

gulp.task('code-check', function () {
  return gulp
  .src('./src/js/**/*')
  .pipe(jshint())
  .pipe(jshint.reporter('jshint-stylish'))
  .pipe(jscs({configPath: './.jscsrc'}))
})

gulp.task('scripts', ['json'], function () {
    browserify({
      entries: './src/js/states/main.js',
      debug: DEBUG
    })
    .transform(babelify.configure({ stage: 0 }))
    .bundle()
    .pipe(source(NAME + '.min.js'))
    .pipe(bufferify())
    .pipe(gulpif(DEBUG === false, uglify()))
    .pipe(gulp.dest('./build/assets/js/'))

    return gulp
    .src('./bower.json')
    .pipe(bower())
    .pipe(flatten())
    .pipe(gulp.dest('./build/assets/libs/'))
})

gulp.task('html', function() {
  return gulp
  .src('./src/html/**/*')
  .pipe(gulp.dest('./build/'))
})

gulp.task ('styles', function () {
  return gulp
  .src('./src/css/*')
  .pipe(prefixer())
  .pipe(minifyCSS())
  .pipe(gulp.dest('./build/assets/css'))
});

gulp.task('json', function() {
  return gulp
  .src('./src/json/*')
  .pipe(gulp.dest('./build/assets/json'))
})

gulp.task('audio', function () {
  return gulp
  .src('./src/audio/*')
  .pipe(gulp.dest('./build/assets/audio'))
})

gulp.task('font', function () {
  return gulp
  .src('./src/fonts/*')
  .pipe(gulp.dest('./build/assets/fonts'))
})

gulp.task('img', function() {
  return gulp
  .src('./src/img/*')
  .pipe(img())
  .pipe(gulp.dest('./build/assets/img/'))
})

gulp.task('serve', ['watch'], function () {
  connect.server({
    root: './build/',
    livereload: true
  })
})
