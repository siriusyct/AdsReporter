'use strict';

// Declare app level module which depends on views, and components
angular.module('adRep', [
  'ngRoute',
  'adRep.view1',
  'adRep.view2',
  'adRep.ad_detail',
  'adRep.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
