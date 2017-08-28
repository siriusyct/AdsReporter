'use strict';

var currentTabIndex = 0;
var currentTypeFilterIndex = 0;

angular.module('adRep.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'AdsListController'
  });
}])

.controller('AdsListController', ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {

    setShowData();

    // $scope.filterTypeLabel = fullTestData[0].typeName;
    // $scope.filterTypeList = fullTestData[0].listData;
    // $scope.adsRecords = fullTestData[0].listData[0].data;


    // setTimeout(function () {
    //     $scope.$apply(function () {
    //         console.log("reset test data ");
    //         $scope.filterTypeLabel = fullTestData[1].typeName;
    //         $scope.filterTypeList = fullTestData[1].listData;
    //         $scope.adsRecords = fullTestData[1].listData[0].data;
    //     });
    // }, 5000);

  $scope.onTypeChanged = function (index) {
      console.log("foot index " + index);

      if (index <= 2 && index >= 0){
          console.log("data update ");
          currentTabIndex = index;
          currentTypeFilterIndex = 0;
          setShowData();
      }
  };

    $scope.filterTypeChenged = function(){

        var changeitem = $scope.selectedFilterItems;
        console.log(" filter val : " + changeitem);
        for (var i = 0; i < $scope.filterTypeList.length; i++){
            var listItem = $scope.filterTypeList[i].label;
            if (listItem === changeitem){
                currentTypeFilterIndex = i;
                console.log(" filter index : " + currentTypeFilterIndex);
            }
        }
        setShowData();
    };

  //   $scope.filterClick = function (index) {
  //     console.log(" filter index : " + index);
  //     currentTypeFilterIndex = index;
  //     setShowData();
  // };
  
  $scope.adsListClick = function (index) {
      //currentAd = adsReporterData[index];
      console.log("$scope.filterTypeLabel = " + $scope.filterTypeLabel);
      console.log($scope.filterTypeList);
      console.log($scope.adsRecords);

      currentAd = $scope.adsRecords[index];
      console.log("click : " + index);
      console.log(currentAd);
      $location.path('/ad_detail');
  };
  
  $scope.userLogout = function () {
      $location.path('/view1');
  };

  function setShowData() {
      $scope.adsTypesData = fullTestData;
      if (currentTabIndex >= 0 && currentTabIndex <= 2){
          $scope.filterTypeLabel = fullTestData[currentTabIndex].typeName;
          $scope.filterTypeList = fullTestData[currentTabIndex].listData;
          $scope.adsRecords = fullTestData[currentTabIndex].listData[currentTypeFilterIndex].data;
          $scope.selectedFilterItems = fullTestData[currentTabIndex].listData[currentTypeFilterIndex].label;

          for(var m = 0; m < $scope.adsTypesData.length; m++){
              if (m == currentTabIndex){
                  $scope.adsTypesData[m].isSel = true;
              } else {
                  $scope.adsTypesData[m].isSel = false;
              }
              console.log("isSel : " + m + " = " + $scope.adsTypesData[m].isSel);
          }
      }
  }
}]);