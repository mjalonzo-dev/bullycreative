// Declare the main module
var blyApp = angular.module('blyApp', [
    'ngRoute',
    'ngAnimate'
]);
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
}]);
// Configure the main module
blyApp.config(['$routeProvider', function ($routeProvider) {
    'use strict';
    $routeProvider
        .when('/cs1', {
            templateUrl: 'templates/cs1.html'
        })
        .when('/cs2', {
            templateUrl: 'templates/cs2.html'
        })
        .when('/cs3', {
            templateUrl: 'templates/cs3.html'
        })
        .when('/contact', {
            templateUrl: 'templates/contact.html'
        })
        .otherwise({
           templateUrl: 'templates/home.html' 
        });
}]);