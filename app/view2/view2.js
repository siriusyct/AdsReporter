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
  $scope.filterTypeLabel = "日期";
  $scope.filterTypeList = [{"label":"2017-08-23"},
      {"label":"2017-08-22"},
      {"label":"2017-08-21"},
      {"label":"2017-08-20"},
      {"label":"2017-08-19"},
      {"label":"2017-08-18"},
      {"label":"2017-08-17"}];
  
  $scope.adsListClick = function (index) {
      currentAd = adsReporterData[index];
      console.log("click : " + index);
      $location.path('/ad_detail');
  }
  
  $scope.userLogout = function () {
      $location.path('/view1');
  }
}]);