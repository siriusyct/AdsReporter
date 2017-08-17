'use strict';

angular.module('adRep.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'AdsListController'
  });
}])

.controller('AdsListController', ['$scope', function($scope) {
  $scope.adsRecords = [
      {"title":"111111111"},
      {"title":"22222222222"},
      {"title":"33333333333"},
      {"title":"4444444444"},
      {"title":"555555555"},
      {"title":"666666666"},
      {"title":"7777777777"},
      {"title":"8888888888"},
      {"title":"9999999999"}
  ];
  
  $scope.adsListClick = function (index) {
      console.log("click : " + index);
  }
}]);