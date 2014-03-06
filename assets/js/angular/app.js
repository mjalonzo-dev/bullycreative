// Declare the main module
var blyApp = angular.module('blyApp', [
    'ui.router',
    'ngAnimate'
]);

// Configure the main module
blyApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/home.html'
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
        .state('contact', {
            url: '/contact',
            templateUrl: 'templates/contact.html'
        });
    $urlRouterProvider.otherwise('/');

}]).controller('viewCtrl', function ($scope) {
  
  $scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
    console.log('fromState: ' + fromState.name);
    console.log('toState: ' + toState.name);

        if (toState.name === 'home') {
            $scope.animationStyle = 'slideRight';
        } else if (toState.name === 'cs1') {
            $scope.animationStyle = 'slideLeft';
        }
  });

});
