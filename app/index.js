'use strict';

var yeoman = require('yeoman-generator'),
	yosay = require('yosay'),
	chalk = require('chalk');


var generator = yeoman.generators.Base.extend({

	init : function () {
		this.log(yosay('Welcome to Grep WebApp tool powered by yeoman && gulp'));
		this.log(chalk.yellow('Author : gokulkrishh (http://github.com/gokulkrishh) \n'));

		//adding flag --ng for angular
		this.option('ng', {
			desc : 'Angular Web application',
			type : String,
			required : true
		});

		//In end install dependencies
		this.on('end', function () {
			if (!this.options['skip-install']) {
				this.installDependencies();
			}
		});
	},

	askFor : function () {
		var done = this.async();

		this.prompt({
			type : 'input',
			name : 'appname',
			message : 'Your application name ? ',
			default : this.appname
		}, function (ans) {

			this.appname = ans.appname;
			done();
		}.bind(this));
	},
	askLib : function () {
		var done = this.async();

		var prompts = [{
			type : 'checkbox',
			name : 'libraries',
			message : 'What else you want to install ? ',
			choices :
				[{
					name : 'jquery',
					value : 'addJquery',
					checked : true
				},
				{
					name : 'bootstrap',
					value : 'addBootstrap',
					checked : false
				}]
			},
			{
				type : 'confirm',
				name : 'isNg',
				message : 'Is your app using angularJS ? ',
				default : false,
			},
			{
				when : function (ans) {
					return ans && ans.isNg === 'true';
				},
				type : 'checkbox',
				name : 'ngLibrary',
				message : 'Which libraries you want to install ? ',
				choices :
				[{
					name : 'angular-route',
					value : 'addAngularRoute',
					checked : true
				},
				{
					name : 'angular-resources',
					value : 'addAngularResources',
					checked : false
				},
				{
					name : 'angular-cookies',
					value : 'addAngularCookies',
					checked : false
				},
				{
					name : 'angular-sanitize',
					value : 'addAngularSanitize',
					checked : false
				},
				{
					name : 'angular-animate',
					value : 'addAngularAnimate',
					checked : false
				},
				{
					name : 'angular-ui-router',
					value : 'addAngularUI',
					checked : false
				}]
			}];

		this.prompt(prompts, function (ans) {
			function include(hasLib) {
				return ans && ans.libraries.indexOf(hasLib) !== -1;
			}

			function includeNg(hasLib) {
				if (ans.isNg === 'false') { 
					return false;
				}
				return ans && ans.ngLibrary.indexOf(hasLib) !== -1;
			}

			this.jquery = include('addJquery');
			this.bootstrap = include('addBootstrap');

			if (ans.isNg) {
				this.angular = true;
				this.angularRoute = includeNg('addAngularRoute');
				this.angularResources = includeNg('addAngularResources');
				this.angularCookies = includeNg('addAngularCookies');
				this.angularAnimate = includeNg('addAngularAnimate');
				this.angularSanitize = includeNg('addAngularSanitize');
				this.angularUI = includeNg('addAngularUI');
			}

			done();
		}.bind(this));
	},
	bower : function () {
		var bower = {
			name : this.appname,
			description : '',
			dependencies : {}
		};

		var ngVer = '1.2.6';

		if (this.jquery) {
			bower.dependencies.jquery = '*';
		}

		if (this.bootstrap) {
			bower.dependencies.bootstrap = '*';
		}

		if (this.angular) {
			bower.dependencies.angular = ngVer;

			//if app is angular
			this.mkdir('app/templates');
			this.mkdir('app/js/controllers');
			this.mkdir('app/js/services');
			this.mkdir('app/js/directives');
			this.mkdir('app/js/factory');
			this.mkdir('app/js/filters');
			this.copy('_app.js', 'app/js/app.js');

			if (this.angularRoute) {
				bower.dependencies['angular-route'] = ngVer;
			}

			if (this.angularResources) {
				bower.dependencies['angular-resource'] = ngVer;
			}

			if (this.angularCookies) {
				bower.dependencies['angular-cookies'] = ngVer;
			}

			if (this.angularSanitize) {
				bower.dependencies['angular-sanitize'] = ngVer;
			}

			if (this.angularAnimate) {
				bower.dependencies['angular-animate'] = ngVer;
			}

			if (this.angularUI) {
				bower.dependencies['angular-ui-router'] = '*';
			}

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
		this.mkdir('bower_components');

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
