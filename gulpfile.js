
const eslint = require('gulp-eslint');
gulp         = require('gulp');
var nodemon  = require('gulp-nodemon');
const zip    = require('gulp-zip');


function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask
//gulp.task('default', ['build'], defaultTask);
//gulp.task('build', ['lint','nodemon']);


gulp.task('esb', function(cb) {
    nodemon({
    script: 'esb/server.js',
    ext: 'js',
    ignore: ['dist/']
    })
    .on('restart', function() {
        console.log('>> node restart');
    })
    cb();
});

gulp.task('aviso_piloto', function(cb) {
    nodemon({
    script: 'aviso_piloto/server.js',
    ext: 'js',
    ignore: ['dist/']
    })
    .on('restart', function() {
        console.log('>> node restart');
    })
    cb();
});

gulp.task('solicitud_cliente', function(cb) {
    nodemon({
    script: 'solicitud_cliente/server.js',
    ext: 'js',
    ignore: ['dist/']
    })
    .on('restart', function() {
        console.log('>> node restart');
    })
    cb();
});


gulp.task('lint', function(){
    return  gulp.src(['**/*.js','!**/node_modules/**'])
    .pipe(eslint({
        rules: {
        "camelcase": 1,
        "comma-dangle": 2,
        "quotes": 0
        },
        globals: [
            'jQuery',
            '$'
        ],
        envs: [
            'browser'
        ]
    }))
    .pipe(eslint.result(result => {
        // Called for each ESLint result.
        console.log(`ESLint result: ${result.filePath}`);
        console.log(`# Messages: ${result.messages.length}`);
        console.log(`# Warnings: ${result.warningCount}`);
        console.log(`# Errors: ${result.errorCount}`);
    })).pipe(eslint.formatEach('compact', process.stderr));
});

gulp.task("build", function (){
	return gulp.src(["**/**", "!**/node_modules"])
	.pipe(zip("archive.zip"))
	.pipe(gulp.dest("dist"));
})


gulp.task('build', gulp.series('lint', 'build'));
