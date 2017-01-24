var gulp = require('gulp')
var runSequence = require('run-sequence')

gulp.task('default', function (done) {
    runSequence('generate-assets',
        'watch',
        'server', done)
})

gulp.task('generate-assets', function (done) {
    runSequence('copy-govuk-modules',
        'sass',
        'copy-assets', done)
})

gulp.task('copy-govuk-modules', [
    'copy-toolkit',
    'copy-template-assets',
    'copy-elements-sass',
    'copy-template'
])

gulp.task('watch', function (done) {
    runSequence('watch-sass',
        'watch-assets', done)
})




