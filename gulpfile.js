var gulp = require('gulp');

var connect     =    require('gulp-connect');
var jshint      =    require('gulp-jshint');
var uglify      =    require('gulp-uglify');
var minifyCss   =    require('gulp-minify-css');
var clean       =    require('gulp-clean');
var runSequence =    require('run-sequence');

gulp.task('connect',function(){
    connect.server({
        port:3000
    })
})

gulp.task('lint',function(){
    gulp.src(['./src/**/*.js','!./src/vendors/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});

gulp.task('clean',function(){
    gulp.src('./dist/*')
    .pipe(clean({force:true}));
});

gulp.task('minfy-css',function(){
    var opts = {comments:true,spare:true};
    gulp.src(['./src/**/*.css','!./src/vendors/**'])
    .pipe(minifyCss(opts))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('minfy-js',function(){
        gulp.src(['./src/**/*.js','!./src/vendors/**'])
        .pipe(uglify({

        }))
        .pipe(gulp.dest('./dist/'))
});

gulp.task('copy-vendors',function(){
    gulp.src('./src/vendors/**')
    .pipe(gulp.dest('./dist/vendors'));
});

gulp.task('copy-html',function(){
    gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist/'))
})

gulp.task('connectDist',function(){
    connect.server({
        port:8000
    })
})

gulp.task('default',['lint','connect']);
gulp.task('build',function(){
    runSequence(['clean'],['lint','minify-css','minfy-js','copyy-html','copy-vendors','connectDist']);
})