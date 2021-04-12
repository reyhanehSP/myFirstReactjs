'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var concat = require('gulp-concat');
var stripDebug = require('gulp-strip-debug');

gulp.task('sass', function(){
    return gulp.src('assets/app/scss/app.scss')
        .pipe(sass())
        .pipe(gulpIf('*.css', cssnano()))
        .pipe(gulp.dest('./dest/css'))

});

gulp.task('css', function () {

    gulp.src([
        '../node_modules/bootstrap/dist/css/bootstrap.min.css',
    ])
        .pipe(concat('./core.min.css'))
        .pipe(gulp.dest('./dest/css'));
});

gulp.task('uglify', function(){
    return gulp.src('assets/app/js/**/*.js')
        .pipe(concat('./app.js'))
        .pipe(gulpIf('*.js', uglify()))
        .pipe(gulp.dest('./dest/js'))
});

gulp.task('js', function () {

    gulp.src(['../node_modules/jquery/dist/jquery.min.js',
        '../node_modules/bootstrap/dist/js/bootstrap.min.js',
        '../node_modules/react-custom-scrollbars/dist/react-custom-scrollbars.js',
    ])
        .pipe(concat('./core.min.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('./dest/js'));
});

gulp.task('images', function(){
    return gulp.src('assets/app/images/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(imagemin())
        .pipe(gulp.dest('./dest/images'))
});

gulp.task('fonts', function() {
    return gulp.src('assets/app/fonts/**/*')
        .pipe(gulp.dest('./dest/fonts'))
});

gulp.task('watch', [ 'sass' , 'uglify' , 'images' , 'fonts' , 'js', 'css'] , function(){
    gulp.watch('assets/app/scss/*.scss', ['sass']);
    gulp.watch('assets/app/images/*.+(png|jpg|jpeg|gif|svg)', ['images']);
    gulp.watch('assets/app/fonts/**/*', ['fonts']);
    gulp.watch('assets/app/js/*.js', ['uglify']);
});


