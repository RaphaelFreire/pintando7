
var gulp = require('gulp');

gulp.task('default', function(){
    console.log('HELLO WORLD');
});


var sass = require('gulp-sass');
    
gulp.task('sass', function(){
    return gulp.src('sass/**/*.sass')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulpe.dest('css'));
});

var watch = require('gulp-watch');

gulp.task('watch', function(){
    gulp.watch('sass/**/*.sass', ['sass']);
});

gulp.task('default', ['sass', 'watch']);