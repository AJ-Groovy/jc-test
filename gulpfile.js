var gulp = require('gulp');
var babel = require('gulp-babel');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var postcss = require('gulp-postcss');

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

gulp.task('autoprefixer', function () {
    return gulp.src('src/css/**/*.css')
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
        })]))
        .pipe(gulp.dest('app/css'));
});


gulp.task('watch', function () {
    gulp.watch('src/js/**/*.js', ['js']);
    gulp.watch('src/scss/**/*.scss', ['sass', 'autoprefixer']);
});

gulp.task('default', ['watch']);