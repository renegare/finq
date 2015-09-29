var gulp = require('gulp-help')(require('gulp'))
    gulpUtil = require('gulp-util'),
    mocha = require('gulp-mocha')
    ;

gulp.task('default', ['help']);

gulp.task('test:server', function () {
    return gulp.src('tests/server/**/*.spec.js', {read: false})
        // gulp-mocha needs filepaths so you can't have any plugins before it
        .pipe(mocha({
            require: ['./tests/server'],
            reporter: 'nyan'
        }));
});
