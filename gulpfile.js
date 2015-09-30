var gulp = require('gulp-help')(require('gulp')),
    gulpUtil = require('gulp-util'),
    mocha = require('gulp-mocha')
    ;

gulp.task('default', ['help']);

gulp.task('test:server', 'Run server tests using (mocha)', function () {
    return gulp.src('tests/server/**/*.spec.js', {read: false})
        .pipe(mocha({
            require: ['./tests/server'],
            reporter: 'nyan'
        }));
});

gulp.task('test:server:watch', 'Run server tests when a change is made', function() {
    gulp.watch([
        './src/**/*',
        './tests/server/**/*'
    ], ['test:server']);
});
