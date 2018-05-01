/* Passo 1 - Criar uma variavel */
var gulp = require('gulp');

/* Passo 2 - criar task default que define o gulp faz no projeto */
//gulp.task('default', function(){
//	console.log('Olá Mundo!');
//});

/* Passo 3 - criar task gulp sass */
var sass = require('gulp-sass');

gulp.task('sass', function(){

	//localiza o caminho onde o arquivo sass esta salvo
	return gulp.src([
		'node_modules/bootstrap/scss/bootstrap.scss',
		'sass/**/*.sass'
		])
	//mimifica o arquivo css
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	//salva na pasta css
	.pipe(gulp.dest('css'));
});

/* Passo 4 - criar task para chamar a gulp-watch*/
var watch = require('gulp-watch');

gulp.task('watch', function(){
	gulp.watch('sass/**/*.sass', ['sass']);
	
});


//Mover JS para src/js
gulp.task('js', function(){

	return gulp.src([
		'node_modules/bootstrap/dist/js/bootstrap.min.js',
		'node_modules/jquery/dist/jquery.min.js',
		'node_modules/popper.js/dist/umd/popper.min.js'
		])
	.pipe(gulp.dest("js"));

});

/*Chamando todas as task de uma só vez*/
gulp.task('default', ['sass', 'watch', 'js']);


