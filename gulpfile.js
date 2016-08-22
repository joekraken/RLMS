/**
 * Created by Alex Redmon on 8/22/2016.
 */
var gulp  = require('gulp');
var run = require('gulp-run');
gulp.task('default',function(){
    return run('node tools/webpack.js').exec()
        .pipe(gulp.dest('output'));
})