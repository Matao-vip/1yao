var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');


gulp.task('compileSass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
	.pipe(gulp.dest('./src/css'))
});

gulp.task('jtSass',function(){
	gulp.watch('./src/sass/*.scss',['compileSass']);
})