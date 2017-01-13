var gulp = require('gulp')
  , plugins = require('gulp-load-plugins')();

var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


/*
  Open the browser in the port 9000.
  if the html file or js file changes,
  reload the browser.
*/
gulp.task('browser-sync', function() {
  browserSync.init({
    notify: false,
    open: true,
    port: 9000,
    server: { baseDir: "./public" },
  });

  gulp.watch(['public/*.html'])
    .on('change', browserSync.reload);

});

/*
  Convert SASS to CSS
  after that, send the convert file to styles(public/css) folder.
*/
gulp.task('sass', function () {
  return plugins.rubySass('src/sass/main.scss', {
      style: 'expanded',
      lineNumbers: true
  })
  .pipe(gulp.dest('public/css'))
  .pipe(browserSync.reload({stream: true}));
});

/*
  Convert Jade to HTML
  then send to publicribution(public) folder.
  Notify if you have sintax errors
*/
gulp.task('views', function () {
  console.log(plugins.pug, "🦄🦄🦄🦄🦄");
  return gulp.src('src/views/*.pug')
    .pipe(plugins.pug({ pretty: true }))
    .on('error', plugins.notify.onError(function (err) { console.log(err.message); return "💔 Jade Error "; }))
    .pipe(gulp.dest('public'))
});

// Listen the changes in the pug, scss and js files
gulp.task('watch', function () {
  gulp.watch(['./src/*.pug'], ['views']);
  gulp.watch(['./src/views/**/*.pug'], ['views']);
  gulp.watch(['./src/sass/**/*.scss'], ['sass']);

});

gulp.task("default", ["browser-sync", "views", "sass", "watch"]);
