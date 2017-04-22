'use strict';

const browserSync = require("browser-sync");
const gulp = require('gulp');
const nodemon = require('nodemon');

gulp.task('default', ['serve']);

gulp.task('serve', ['nodemon'], function() {
    browserSync.init(null, {
        proxy: 'http://localhost:5000',
        files: ['./public/**/*.html', './public/**/**/*.js'],
        browser: 'google chrome' || 'safari' || 'firefox',
        port: 3000
    });
    browserSync.reload
});

gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
        script: 'server.js'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});
