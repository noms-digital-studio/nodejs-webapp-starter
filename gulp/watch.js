var gulp = require('gulp');

gulp.task('watch-sass', function () {
  return gulp.watch('./assets/sass/**', {cwd: './'}, ['sass'])
});

gulp.task('watch-assets', function () {
  return gulp.watch(['./assets/images/**',
    './assets/js/**'], {cwd: './'}, ['copy-assets'])
});
