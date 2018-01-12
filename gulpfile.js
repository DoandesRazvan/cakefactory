const gulp = require('gulp'),
      pug = require('gulp-pug'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

gulp.task('pug', () => {
    return gulp.src('./views/2-sections/*.pug')
               .pipe(pug())
               .pipe(gulp.dest('dist/html'));
});

gulp.task('sass', () => {
    return gulp.src('./sass/2-sections/*.sass')
               .pipe(sass({
                   includePaths: ['css'],
                   onError: sass.logError
               }))
               .pipe(autoprefixer({
                   browsers: ['last 2 versions'],
                   cascade: false
               }))
               .pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['pug', 'sass']);

gulp.task('watch', () => {
    gulp.watch('./views/2-sections/*.pug', ['pug']);
    gulp.watch('./sass/2-sections/*.sass', ['sass']);
});