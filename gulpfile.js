const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');

const { argv } = require('yargs');
if (argv.mobile || argv.m) {
    process.env.PLATFORM = 'mobile';
}
if (argv.desktop || argv.d) {
    process.env.PLATFORM = 'desktop';
}

const ROOT_DIR = process.cwd();
const DATA_DIR = path.join(ROOT_DIR, 'data');
const WEBPACK_FILE = require(`${ROOT_DIR}/webpack.config.js`);
const BUILD_DIR = WEBPACK_FILE.output.path;

const isProduction = process.env.NODE_ENV === 'production';
const isStaging = process.env.NODE_ENV === 'staging';
const isCompressMode = isProduction || isStaging;

const BUILD_DATA_FILES = [
    `${DATA_DIR}/**/*`
];

function loadFile(path) {
    return fs.readFileSync(path, 'utf8');
}

function loadJson(path) {
    return JSON.parse(loadFile(path));
}

function listDirectory(_path) {
    return fs.readdirSync(_path);
}

gulp.task('build:index', (done) => {
    if (!fs.existsSync(BUILD_DIR)) {
        mkdirp(BUILD_DIR);
    }
    const { NAME } = loadJson(`${DATA_DIR}/settings.json`);

    const INDEX_FILE = "index.html";
    const indexHtml = loadFile(`${DATA_DIR}/html/${INDEX_FILE}`)
        .replace('{{NAME}}', NAME);

    const indexOutput = isCompressMode ? htmlMin(indexHtml, {
        collapseWhitespace: true,
        minifyCSS: true
    }) : indexHtml;

    const indexOutFile = `${BUILD_DIR}/${INDEX_FILE}`;
    fs.writeFile(indexOutFile, indexOutput, (err) => {
        if (err) {
            console.log(err);
        }
        done();
    });
});

gulp.task("build:webpack", () => gulp.src("src/client/game/game.ts")
    .pipe(webpackStream(WEBPACK_FILE, webpack))
    .on("error", function handleError(err) {
        this.emit('webpack error : ' + err); // Recover from errors
    })
    .pipe(gulp.dest(BUILD_DIR))
);

gulp.task('copy:data', () => gulp.src(BUILD_DATA_FILES).pipe(gulp.dest(`${BUILD_DIR}/data`)));

gulp.task('build:clean', (done) => rimraf(BUILD_DIR, () => {
    mkdirp(BUILD_DIR).then(() => {
        done();
    });
}));

gulp.task("default", gulp.series("build:clean", "copy:data", "build:index", "build:webpack"));
