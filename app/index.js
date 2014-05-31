'use strict';

//dependencies
var util    = require('util'),
    path    = require('path'),
    yeoman  = require('yeoman-generator'),
    yosay   = require('yosay'),
    chalk   = require('chalk');



var GrepGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies(); //will install both  bower and npm dependencies
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay('Welcome to this Awesome grep generator using Gulp.js'));

    var prompts = [{
      type: 'confirm',
      name: 'Which one',
      message: 'Would you like to proceed with AngularJS ?',
      default: true
    },
    {
      type: 'checkbox',
      name: 'Libraries',
      message: 'Which libraries you would like to install ?',
      choices : [{
      	value   : 'jquery',
      	name    : 'Jquery',
      	checked : true
      },
      {
      	value   : 'bootstrap',
      	name    : 'Bootstrap',
      	checked : false
      }]
    }];

    this.prompt(prompts, function (props) {
      this.someOption = props.someOption;
      done();
    }.bind(this));
  },

  app: function () {
    //development directory
    this.mkdir('app');
    this.mkdir('app/css');
    this.mkdir('app/fonts');
   	this.mkdir('app/js');    
    this.mkdir('app/js/lib');
    
    //copying dependency files    
    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_gulpfile.js', 'gulpfile.js');
  },

  projectfiles: function () {
  	//copying project required files
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitignore', '.gitignore');

    //copy the index.html, js & css files
    this.copy('_index.html', 'app/index.html');
    this.copy('_main.js', 'app/js/main.js');
    this.copy('_styles.css', 'app/css/styles.css');
  }
});

module.exports = GrepGenerator;
