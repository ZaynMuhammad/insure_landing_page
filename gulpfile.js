const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("sass-boilerplate/stylesheets/main.scss")
    .pipe(sass())
    .pipe(dest("css"));
}

function watchTask() {
  watch(
    [
      "sass-boilerplate/stylesheets/main.scss",
      "sass-boilerplate/stylesheets/layout/_header.scss",
      "sass-boilerplate/stylesheets/layout/_main-content.scss",
      "sass-boilerplate/stylesheets/layout/_footer.scss",
      "sass-boilerplate/stylesheets/layout/_header_tablet.scss",
    ],
    buildStyles
  );
}

exports.default = series(buildStyles, watchTask);
