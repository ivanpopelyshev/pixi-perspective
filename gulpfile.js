/*
 *  gulpfile.js
 *  ===========
 *
 *  Rather than manage one giant configuration file responsible
 *  for creating multiple tasks, each task has been broken out into
 *  its own file in gulp/tasks. Any files in that directory get
 *  automatically required below.
 *
 *  To add a new task, simply add a new task file in that directory.
 *  gulp/tasks/default.js specifies the default set of tasks to run
 *  when you run `gulp`.
 *
 */

var gulp        = require('gulp'),
    requireDir  = require('require-dir'),
    runSeq      = require('run-sequence');


// Specify game project paths for tasks.
global.paths = {
    src: './src',
    out: './bin',
    test: './test',

    get scripts() { return this.src + '/**/*.js'; },
    get tests  () { return this.test + '/**/*.test.js'; },
    get jsEntry() { return this.src + '/index'; }
};

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });

// tasks
gulp.task('default', function (done) {
    runSeq([/*'jshint',*/ 'build'], 'test', done);
});
gulp.task('docs', function(done){
    runSeq(['jsdoc_docs'],done);
});

