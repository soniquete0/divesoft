const path = require('path');
const { execSync } = require('child_process');
const { dest, parallel, pipe, src, watch } = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

const root = path.resolve(__dirname);


function buildJs(cb) {
  execSync(`npx tsc --build ./tsconfig.json`, {
    cwd: root,
  });

  cb();
}

function buildSass(cb) {
  src(path.resolve(root, 'styles/main.scss'))
  .pipe(sass())
  .pipe(postcss([ autoprefixer({ grid: "autoplace", flexbox: true }) ]))
  .pipe(dest(path.resolve(root, 'styles'), { overwrite: true }));

  cb();
}

const build = parallel(buildJs, buildSass);

function watchJs() {
  const tsFiles = path.resolve(root, 'src') + '/**/*.ts';
  watch(tsFiles, { ignoreInitial: true }, (cb) => {
    buildJs(cb);
  });

  const tsxFiles = path.resolve(root, 'src') + '/**/*.tsx';
  watch(tsxFiles, { ignoreInitial: true }, (cb) => {
    buildJs(cb);
  });
}

function watchSass() {
  const sassFiles = path.resolve(root, 'src') + '/**/*.scss';
  watch(sassFiles, { ignoreInitial: true }, (cb) => {
    buildSass(cb);
  });

  const mainSassFile = path.resolve(root, 'styles/main.scss');
  watch(mainSassFile, { ignoreInitial: true }, (cb) => {
    buildSass(cb);
  });
}

const watchAll = parallel(watchJs, watchSass);

module.exports = {
  build,
  buildJs,
  buildSass,
  watch: watchAll,
  watchJs,
  watchSass,
};
