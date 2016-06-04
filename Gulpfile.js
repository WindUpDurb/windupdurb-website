"use strict";

var gulp = require("gulp");
var concat = require("gulp-concat");
var sass = require("gulp-sass");

gulp.task("default", ["build", "watch"]);

gulp.task("watch", ["watch.js", "watch.html", "watch.css"]);

gulp.task("build", ["js", "html", "css"]);


gulp.task("watch.js", function () {
    return gulp.watch("./client/js/**/*.js", ["js"])
});

gulp.task("js", function () {
    return gulp.src("./client/js/**/*.js")
        .pipe(concat("concat.js"))
        .pipe(gulp.dest("./public/js"))
});

gulp.task("css", function () {
    return gulp.src("./client/scss/**")
        .pipe(sass().on("error", sass.logError))
        .pipe(concat("concat.css"))
        .pipe(gulp.dest("./public/css"))
});

gulp.task("watch.css", function () {
    return gulp.watch("./client/scss/**", ["css"])
});

gulp.task("watch.html", function () {
    return gulp.watch("./client/html/**", ["html"]);
});

gulp.task("html", function () {
    return gulp.src("./client/html/**/")
        .pipe(gulp.dest("./public/html"));
});

