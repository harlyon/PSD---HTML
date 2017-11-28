//npm i pkg -D
var gulp = require('gulp'),
		sass = require('gulp-sass'),
		concat = require('gulp-concat'),
		jshint = require('gulp-jshint'),
		autoprefixer = require('gulp-autoprefixer'),
		browserSync = require('browser-sync'),
		reload = browserSync.reload;

//styles task
gulp.task('styles', function(){
	return gulp.src('styles/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(concat('styles/styles.css'))
		.pipe(autoprefixer('last 2 versions', 'ie8'))
		.pipe(gulp.dest(''))
		.pipe(reload({ stream: true }));
});

// JS task
gulp.task('js', function(){
	return gulp.src('scripts/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'))
		.pipe(reload({ stream: true }));
});

// browser sync
gulp.task('bs-task', function(){
	browserSync.init({
		server:{
			baseDir: './'
		}
	});
});

//watch task
gulp.task('watch', function (){
	gulp.watch('styles/*.scss', ['styles']);
	gulp.watch('scripts/*.js', ['js']);
	gulp.watch('*.html', reload);
});

gulp.task('default', ['bs-task', 'styles', 'js', 'watch']);

