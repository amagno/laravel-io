var gulp = require('gulp');
var inject = require('gulp-inject');
var mainBowerFiles = require('main-bower-files');

/*
    Config paths to laravel
 */
var config ={
    public_folder:  './public/bower_components/',
     views_folder:  './app/views/assets/',
     scripts_file:  './app/views/assets/scripts.blade.php',
      styles_file:  './app/views/assets/styles.blade.php'
}

/*
    Gulp task copy JS and CSS files
 */

gulp.task('copy', function(){
    /*
        Copy files to public folder
     */
    gulp.src(mainBowerFiles(), { base: './bower_components/' })
        .pipe(gulp.dest(config.public_folder));
    /*
        Add JS files to scripts.blade.php
     */
    gulp.src(mainBowerFiles(), { base: './bower_components/' })
        .pipe(inject(config.scripts_file, { addPrefix: "<% url('/') %>", addRootSlash: false}))
        .pipe(gulp.dest(config.views_folder));
    /*
        Add CSS files to styles.blade.php
     */
    gulp.src(mainBowerFiles(), { base: './bower_components/' })
        .pipe(inject(config.styles_file, { addPrefix: "<% url('/') %>", addRootSlash: false}))
        .pipe(gulp.dest(config.views_folder));
});