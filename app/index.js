'use strict';

var yeoman = require('yeoman-generator'),
	yosay  = require('yosay'),
	chalk  = require('chalk');


var generator = yeoman.generators.Base.extend({

	init : function () {
		this.log(yosay(chalk.green.bold('Welcome to Grep WebApp tool powered by yeoman && gulp')));
		this.log(chalk.yellow('Author : gokulkrishh (http://github.com/gokulkrishh) \n'));

		//adding flag --ng for angular
		this.option('ng', {
			desc     : 'Angular Web application',
			type     : String,
			required : true
		});

		//In end install dependencies
		this.on('end', function () {
			if(!this.options['skip-install']) {
				this.installDependencies();
			}
		});
	},

	askFor : function () {
		var done = this.async();

		this.prompt({
			type 	: 'input',
			name 	: 'appname',
			message : 'Your app name',
			default : this.appname
		}, function (ans) {

			this.appname = ans.appname;
			done();
		}.bind(this));
	},
	askLib : function () {
		var done = this.async();

		var prompts = [{
			type 	: 'checkbox',
			name 	: 'libraries',
			message : 'What else you want to install ? ',
			choices : [
				// {
				// 	name    : 'none',
				// 	value   : 'none',
				// 	checked : false
				// }, 
				{
					name 	: 'jquery',
					value   : 'addJquery',
					checked : true
				}, 
				{
					name 	: 'bootstrap',
					value   : 'addBootstrap',
					checked : false
				}]
			}];

		this.prompt(prompts, function (ans) {

			function include (hasLib) {
				return ans && ans.libraries.indexOf(hasLib) !== -1;
			}

			this.jquery    = include('addJquery');
			this.bootstrap = include('addBootstrap');

			done();
		}.bind(this));
	},
	bower : function () {
		var bower = {
			name 		 : this.appname,
			description	 : "",
			dependencies : {}
		};

		if (this.jquery) {
			bower.dependencies['jquery'] = '*';
		}

		if (this.bootstrap) {
			bower.dependencies['bootstrap'] = '*';	
		}

		this.write('bower.json', JSON.stringify(bower, null, 2));

	},
	appFiles : function () {
		//creating folder structure
		this.mkdir('app');
		this.mkdir('app/css');
		this.mkdir('app/js');
		this.mkdir('app/js/lib');
		this.mkdir('app/fonts');
		this.mkdir('app/images');

		//copy files
	    this.copy('_index.html', 'app/index.html');
	    this.copy('_main.js', 'app/js/main.js');
	    this.copy('_styles.css', 'app/css/styles.css');
	    this.copy('_app.scss', 'app/css/app.scss');
	},
	configFiles : function () {
		//copy config files
	    this.copy('_editorconfig', '.editorconfig');
	    this.copy('_jshintrc', '.jshintrc');
	    this.copy('_gitignore', '.gitignore');
	    this.copy('_bowerrc', '.bowerrc');

	    //copy gulp & pkg.json file
	    this.copy('_package.json', 'package.json');
	    this.copy('_gulpfile.js', 'gulpfile.js');
	}
});

module.exports = generator;