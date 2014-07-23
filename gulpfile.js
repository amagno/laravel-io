var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');

var config ={
    public_folder: './public/bower_components/',
    views_folder: './app/views//headersfiles/',
    scripts_file: './app/views/headersfiles/scripts.blade.php',
    styles_file: './app/views/headersfiles/styles.blade.php'
}


gulp.task('copy', function(){
    gulp.src(mainBowerFiles()).pipe(gulp.dest(config.public_folder));

    gulp.src(mainBowerFiles())
        .pipe(inject(config.scripts_file, { addPrefix: "<% url('/') %>", addRootSlash: false}))
        .pipe(gulp.dest(config.views_folder));

    gulp.src(mainBowerFiles())
        .pipe(inject(config.styles_file, { addPrefix: "<% url('/') %>", addRootSlash: false}))
        .pipe(gulp.dest(config.views_folder));
});