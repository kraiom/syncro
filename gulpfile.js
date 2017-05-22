'use strict'

const $ = require('gulp-load-plugins')()

const gulp = require('gulp')
const babelify = require('babelify')
const browserify = require('browserify')
const source = require('vinyl-source-stream')
const bufferify = require('vinyl-buffer')
const argv = require('yargs').argv

const DEBUG = argv.production ? false : true
const NAME = require('./package').name

gulp.task('default', ['scripts', 'html', 'img', 'audio', 'font', 'styles'])

gulp.task('watch', ['default'], () => {
  gulp.watch('./src/js/**/*', ['scripts'])
  gulp.watch('./src/css/**/*', ['styles'])
  gulp.watch('./src/html/**/*', ['html'])
  gulp.watch('./src/json/**/*', ['json', 'scripts'])
})

gulp.task('code-check', () => gulp
  .src('./src/js/**/*')
  .pipe($.jshint())
  .pipe($.jshint.reporter('jshint-stylish'))
  .pipe($.jscs({configPath: './.jscsrc'}))
)

gulp.task('scripts', ['json'], () => {
  browserify({
    entries: './src/js/states/main.js',
    debug: DEBUG
  })
  .transform(babelify.configure({ stage: 0 }))
  .bundle()
  .pipe(source(NAME + '.min.js'))
  .pipe(bufferify())
  .pipe($.if(!DEBUG, $.uglify()))
  .pipe(gulp.dest('./build/assets/js/'))

  return gulp
  .src('./bower.json')
  .pipe($.mainBowerFiles())
  .pipe($.flatten())
  .pipe(gulp.dest('./build/assets/libs/'))
})

gulp.task('html', () => gulp
  .src('./src/html/**/*')
  .pipe(gulp.dest('./build/'))
)

gulp.task ('styles', () => gulp
  .src('./src/css/*')
  .pipe($.autoprefixer())
  .pipe($.cssnano())
  .pipe(gulp.dest('./build/assets/css'))
)

gulp.task('json', () => gulp
  .src('./src/json/*')
  .pipe(gulp.dest('./build/assets/json'))
)

gulp.task('audio', () => gulp
  .src('./src/audio/*')
  .pipe(gulp.dest('./build/assets/audio'))
)

gulp.task('font', () => gulp
  .src('./src/fonts/*')
  .pipe(gulp.dest('./build/assets/fonts'))
)

gulp.task('img', () => gulp
  .src('./src/img/*')
  .pipe($.imagemin())
  .pipe(gulp.dest('./build/assets/img/'))
)

gulp.task('serve', ['watch'], () => $.connect.server({
  root: './build/',
  livereload: true
}))

gulp.task ('deploy', ['default'], () => gulp
  .src('./build/**/*')
  .pipe($.ghPagesCname({ cname: 'syncro.kraiom.com' }))
)
