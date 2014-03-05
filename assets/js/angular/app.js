// Declare the main module
var blyApp = angular.module('blyApp', [
    'ui.router',
    'ngAnimate'
]);

// Configure the main module
blyApp.config(['$stateProvider', '$urlRouterProvider', '$uiViewScrollProvider', function ($stateProvider, $urlRouterProvider, $uiViewScrollProvider) {
    $uiViewScrollProvider.useAnchorScroll();
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
  
  $scope.$on('$stateChangeSuccess', function (event, toState) {
    //if (toState.name === 'home' && fromState.name === 'cs1') {
    //  $scope.back = true; 
    // } else {
    //  $scope.back = false; 
    //}
  });
});

// Initialize the main module
// Initialize the main module
blyApp.run(['$rootScope', '$location', '$window', function ($rootScope, $location, $window) {
    'use strict';
    /**
     * Helper method for main page transitions. Useful for specifying a new page partial and an arbitrary transition.
     * @param  {String} path               The root-relative url for the new route
     * @param  {String} pageAnimationClass A classname defining the desired page transition
     */
    $rootScope.go = function (path, pageAnimationClass) {
        if (typeof(pageAnimationClass) === 'undefined') { // Use a default, your choice
            $rootScope.pageAnimationClass = 'crossFade';
        }
        
        else { // Use the specified animation
            $rootScope.pageAnimationClass = pageAnimationClass;
        }
        if (path === 'back') { // Allow a 'back' keyword to go to previous page
            $window.history.back();
        }
        
        else { // Go to the specified path
            $location.path(path);
        }
    };

    $rootScope.$on('$stateChangeStart', 
        function(event, toState, toParams, fromState, fromParams){ 
        //event.preventDefault(); 
        // transitionTo() promise will be rejected with 
        // a 'transition prevented' error
    });

}]);