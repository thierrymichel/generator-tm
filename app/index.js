'use strict';
/*jslint indent: 2, nomen: true */

var chalk = require('chalk');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

module.exports = yeoman.generators.Base.extend({
  constructor: function () {
    yeoman.generators.Base.apply(this, arguments);
    this.argument('appname', { type: String, required: false });
    this.appname = this.appname || path.basename(path.dirname(process.cwd()));
    this.appname = this._.slugify(this._.humanize(this.appname));
  },

  initializing: {
    test: function () {
      this.log('test: ', this.appname);
    },
    welcome: function () {
      if (!this.options['skip-welcome-message']) {
        this.log(yosay());
        this.log(
          chalk.magenta(
            'Out of the box I include Modernizr (dynamic build), Sass and a gulpfile.js to build your stuff.' + '\n'
          )
        );
      }
    }
  },

  prompting: {
    askForJQuery: function () {
      var done = this.async();

      this.prompt([{
        type: 'confirm',
        name: 'includeJQuery',
        message: 'Would you like to use jQuery?',
        default: true
      }], function (answers) {
        this.includeJQuery = answers.includeJQuery;
        done();
      }.bind(this));
    },
    askForGrid: function () {
      var done = this.async(),
        prompts = [{
          type: 'checkbox',
          name: 'features',
          message: 'What more would you like?',
          choices: [{
            name: 'Neat',
            value: 'includeNeat',
            checked: true
          }, {
            name: 'Susy',
            value: 'includeSusy',
            checked: false
          }]
        }];

      this.prompt(prompts, function (answers) {
        var features = answers.features;

        function hasFeature(feat) {
          return features && features.indexOf(feat) !== -1;
        }

        this.includeNeat = hasFeature('includeNeat');
        this.includeSusy = hasFeature('includeSusy');

        done();
      }.bind(this));
    }
  },

  gulpfile: function () {
    this.copy('gulp/gulpfile.js', 'gulpfile.js');
  },

  packageJSON: function () {
    // this.copy('_package.json', 'package.json');
    this.copy('gulp/package.json', 'package.json');
  },

  git: function () {
    this.copy('gitignore', '.gitignore');
  },

  bower: function () {
    var bower = {
      name: this.appname,
      private: true,
      dependencies: {}
    };

    if (this.includeJQuery) {
      bower.dependencies.jquery = '2.1.4';
    }
    if (this.includeNeat) {
      bower.dependencies.bourbon = '~4.2.3';
      bower.dependencies.neat = '~1.7.2';
    }
    if (this.includeSusy) {
      bower.dependencies.susy = '~2.2.5';
    }

    this.copy('bowerrc', '.bowerrc');
    this.write('bower.json', JSON.stringify(bower, null, 2));
  },

  editorConfig: function () {
    this.copy('editorconfig', '.editorconfig');
  },

  index: function () {
    this.template('index.html', 'dev/index.html');
  },

  app: function () {
    this.directory('dev');
    this.mkdir('dev/scripts');
    this.mkdir('dev/styles');
    this.mkdir('dev/images');

    this.template('main.scss', 'dev/styles/main.scss');
    this.copy('main.js', 'dev/scripts/main.js');

    this.directory('partials', 'dev/styles');

    this.copy('htaccess', '.htaccess');
  },

  install: function () {
    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies({
          skipMessage: this.options['skip-install-message'],
          skipInstall: this.options['skip-install']
        });
      }
    });
  }
});
