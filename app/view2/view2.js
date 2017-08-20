'use strict';

angular.module('adRep.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'AdsListController'
  });
}])

.controller('AdsListController', ['$scope', '$location', function($scope, $location) {

  $scope.adsRecords = adsReporterData;
  
  $scope.adsListClick = function (index) {
      currentAd = adsReporterData[index];
      console.log("click : " + index);
      $location.path('/ad_detail');
  }
  
  $scope.userLogout = function () {
      $location.path('/view1');
  }
}]);