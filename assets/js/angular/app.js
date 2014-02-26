angular
	.module('app', [
		'ui.router'
	])
	.config(['$urlRouterProvider','$stateProvider', function($urlRouterProvider, $stateProvider) {
		$urlRouterProvider.otherwise('/');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/home.html'
			})
			.state('contact', {
				url: '/contact',
				templateUrl: 'templates/contact.html'
			})
			.state('cs1', {
				url: '/cs1',
				templateUrl: 'templates/cs1.html'
			})
			.state('cs2', {
				url: '/cs2',
				templateUrl: 'templates/cs2.html'
			})
			.state('cs3', {
				url: '/cs3',
				templateUrl: 'templates/cs3.html'
			})
	}])