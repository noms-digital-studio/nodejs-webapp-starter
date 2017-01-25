var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function (done) {
    runSequence(
        'build',
        'watch',
        'server', done)
});

gulp.task('build', function (done) {
    runSequence(
        'clean',
        'generate-assets', done)
});

gulp.task('generate-assets', function (done) {
    runSequence(
        'copy-govuk-modules',
        'sass',
        'copy-assets', done)
});

gulp.task('watch', function (done) {
    runSequence(
        'watch-sass',
        'watch-assets', done)
});




