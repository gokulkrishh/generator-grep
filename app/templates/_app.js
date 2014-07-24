/**===========================================
 		App = <%= _.slugify(appname) %>
=============================================*/

/*global angular*/

var app = angular.module('<%= _.slugify(appname) %>', ['ngRoute']);

app.config(['', function () {
	'use strict';

}]);


/**=======================================
 			App = constant
==========================================*/

app.constant('appConfig', {

});

/*======= end of constants ===============*/