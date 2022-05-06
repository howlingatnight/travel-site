const { watch, series } = require("gulp");

function print(cb) {
  console.log("Hooray - you created a gulp task");
  cb();
}

function html(cb) {
  console.log("Imagine something useful being done to your HTML here.");
  cb();
}

function css(cb) {
  console.log("A change to css has been made.");
  cb();
}

exports.default = function () {
  watch("./app/index.html", html);
  watch("./app/assets/styles/**", css);
};

exports.css = css;
exports.html = html;
exports.print = print;
