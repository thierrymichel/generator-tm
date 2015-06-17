'use strict';
/*jslint indent: 2, nomen: true */

var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  gulpfile: function () {
    // this.template('gulpfile.js'); // .template if <% %> used
    // this.copy('gulpfile.js');
    this.copy('gulp/gulpfile.js', 'gulpfile.js');
  },

  packageJSON: function () {
    // this.copy('_package.json', 'package.json');
    this.copy('gulp/package.json', 'package.json');
  },

  git: function () {
    this.copy('gitignore', '.gitignore');
  },

  editorConfig: function () {
    this.copy('editorconfig', '.editorconfig');
  },

  app: function () {
    this.directory('dev');
    this.mkdir('dev/scripts');
    this.mkdir('dev/styles');
    this.mkdir('dev/images');
    // this.write('dev/index.html', this.indexFile);

    this.copy('main.scss', 'dev/styles/main.scss');
    this.copy('main.js', 'dev/scripts/main.js');

    this.directory('partials', 'dev/styles');
  },
});
