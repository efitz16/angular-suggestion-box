'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/view1', {
  	controller: 'HomeController',
  	templateUrl: 'views/home.html'
  })
  .when('/view1/suggestions/:index', {
  	controller: 'SuggestionController',
  	templateUrl: 'views/suggestion.html'
  })
  .otherwise({redirectTo: '/view1'});
}]);
