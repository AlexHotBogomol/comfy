"use strict";

const { src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const removeComments = require("gulp-strip-css-comments");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const cssnano = require("gulp-cssnano");
const rigger = require("gulp-rigger");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const plumber = require("gulp-plumber");
const imagemin = require("gulp-imagemin");
const include = require('gulp-include');
const del = require("del");
const browsersync = require("browser-sync").create();

/* Paths to source/build/watch files
=========================*/

var path = {
  build: {
    html: "dist/",
    js: "dist/assets/js/",
    css: "dist/assets/css/",
    images: "dist/assets/i/",
    fonts: "dist/assets/fonts/",
    libs: "dist/assets/libs/",
    videos: "dist/assets/videos/"
  },
  src: {
    html: "src/*.{htm,html,php}",
    js: "src/assets/js/*.js",
    css: "src/assets/sass/style.scss",
    images: "src/assets/i/**/*.{jpg,png,svg,gif,ico}",
    fonts: "src/assets/fonts/**/*.{ttf,eot,woff,woff2}",
    libs: "src/assets/libs/*",
    videos: "src/assets/videos/*"
  },
  watch: {
    html: "src/**/*.{htm,html,php}",
    js: "src/assets/js/**/*.js",
    css: "src/assets/sass/**/*.scss",
    images: "src/assets/i/**/*.{jpg,png,svg,gif,ico}",
    fonts: "src/assets/fonts/**/*.{ttf,eot,woff,woff2}",
    libs: "src/assets/libs/*",
    videos: "src/assets/videos/*"
  },
  clean: "./dist"
};

/* Tasks
=========================*/

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: "./dist/"
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function html() {
  return src(path.src.html, { base: "src/" })
    .pipe(plumber())
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream());
}

function css() {
  return src(path.src.css, { base: "./src/assets/sass/" })
    .pipe(plumber())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(
      cssnano({
        zindex: false,
        discardComments: {
          removeAll: true
        }
      })
    )
    .pipe(removeComments())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".css"
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream());
}

function js() {
  return src(path.src.js, { base: "./src/assets/js/" })
    .pipe(include())
    .on('error', console.log)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(
      babel({
        presets: ["@babel/env"]
      })
    )
    .pipe(uglify())
    .pipe(
      rename({
        suffix: ".min",
        extname: ".js"
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream());
}

function images() {
  return src(path.src.images).pipe(dest(path.build.images));
}

function fonts() {
  return src(path.src.fonts).pipe(dest(path.build.fonts));
}

function videos() {
  return src(path.src.videos).pipe(dest(path.build.videos));
}

function libs() {
  return src(path.src.libs).pipe(dest(path.build.libs));
}

function clean() {
  return del(path.clean);
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);
  gulp.watch([path.watch.images], images);
  gulp.watch([path.watch.fonts], fonts);
  gulp.watch([path.watch.videos], videos);
  gulp.watch([path.watch.libs], libs);
}

const build = gulp.series(
  clean,
  gulp.parallel(html, css, js, images, fonts, videos, libs)
);
const watch = gulp.parallel(build, watchFiles, browserSync);

// export tasks
exports.html = html;
exports.css = css;
exports.js = js;
exports.images = images;
exports.fonts = fonts;
exports.videos = videos;
exports.libs = libs;
exports.clean = clean;
exports.build = build;
exports.watch = watch;
exports.default = watch;
