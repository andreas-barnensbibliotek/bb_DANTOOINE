const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
let exec = require('child_process').exec;

let srcPath = {
    'scss': './_dev/devsass',
    'publik': './public',
    'jsbundle': './assets/jsbundle',
    'devjs': './_dev/devjs'
}


gulp.task('default', ['webpack', 'styles', 'jsconcatfiles'], () => {
    gulp.watch('./assets/scss/**/*', ['styles']);
    gulp.watch('./assets/js/**/**/*', ['webpack']);       
	gulp
		.watch([
			'./public/**/*',
			'./public/*',
			'!public/js/**/.#*js',
			'!public/css/**/.#*css'
        ]);
    gulp.watch(srcPath.jsbundle + '/*', ['jsconcatfiles']);  
});

gulp.task('jsconcatfiles', function () {
    return gulp.src(
        [  	
			srcPath.jsbundle + '/autocomplete/auto-complete.js',					
			srcPath.jsbundle + '/localstorage/localstorage.js',
			// // srcPath.jsbundle + '/jplist/jplist.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.core.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.pagination-bundle.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.bootstrap-pagination-bundle.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.bootstrap-filter-dropdown.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.sort-bundle.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.filter-dropdown-bundle.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.jquery-ui-bundle.min.js',
			// srcPath.jsbundle + '/jplist_pagination/jplist.history-bundle.min.js',	
			// srcPath.jsbundle + '/rater/rater.min.js',		
            srcPath.jsbundle + '/main.js',
            srcPath.jsbundle + '/vendors~main.main.js',
        ]
    )   
        
        .pipe(concat('aj_boktips.1.0.0.js'))        
        .pipe(gulp.dest(srcPath.publik + '/js/'));
    
});


gulp.task('styles', () => {
	gulp
		.src('assets/scss/**/*.scss')
		.pipe(
			sass({
				outputStyle: 'compressed'
			}).on('error', sass.logError)
    )
        .pipe(sourcemaps.write())
		.pipe(
			autoprefixer({
				browsers: ['last 2 versions']
			})
    )
        .pipe(sourcemaps.write())
		.pipe(gulp.dest('./public/css'));
		
});


gulp.task('webpack', ['jsconcatfiles'], cb => {
	exec('npm run dev:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
    });
   
});

gulp.task('build', ['styles'], cb => {
	exec('npm run build:webpack', function(err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
    });
    console.log('efter bulid');
});
