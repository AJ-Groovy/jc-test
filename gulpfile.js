var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'));
});

gulp.task('js', function () {
    return gulp.src('src/js/**/*.js')
        .pipe(babel({
            presets: ['es2015', 'env']
        }))
        .pipe(gulp.dest('app/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['watch']);