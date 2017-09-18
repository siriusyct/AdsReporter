'use strict';

var currentTabIndex = 0;
var currentTypeFilterIndex = 0;

// angular.module('adRep.view2', ['ngRoute','ui.calendar', 'ui.bootstrap'])
angular.module('adRep.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'AdsListController'
  });
}])

//.controller('AdsListController', ['$scope', '$location', '$timeout', function($scope, $location, $timeout, $compile, uiCalendarConfig) {
.controller('AdsListController', ['$scope', '$location', '$timeout', function($scope, $location, $timeout) {

    setShowData();

    var calendar = new LCalendar();
    calendar.init({
        'trigger': '#demo1', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '1900-1-1', //最小日期
        'maxDate': new Date().getFullYear() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getDate() //最大日期
    });

    // var date = new Date();
    // var d = date.getDate();
    // var m = date.getMonth();
    // var y = date.getFullYear();
    //
    //
    //
    // /* event source that contains custom events on the scope */
    // $scope.events = [
    //     {title: 'All Day Event',start: new Date(y, m, 1)},
    //     {title: 'Long Event',start: new Date(y, m, d - 5),end: new Date(y, m, d - 2)},
    //     {id: 999,title: 'Repeating Event',start: new Date(y, m, d - 3, 16, 0),allDay: false},
    //     {id: 999,title: 'Repeating Event',start: new Date(y, m, d + 4, 16, 0),allDay: false},
    //     {title: 'Birthday Party',start: new Date(y, m, d + 1, 19, 0),end: new Date(y, m, d + 1, 22, 30),allDay: false},
    //     {title: 'Click for Google',start: new Date(y, m, 28),end: new Date(y, m, 29),url: 'http://google.com/'},
    //     {title:'zql',start:new Date(y,m,3)}
    // ];
    //
    // /* config object */
    // $scope.uiConfig = {
    //     calendar:{
    //         height: 450,
    //         editable: false,
    //         header:{
    //             left: '',
    //             center: 'title',
    //             right: 'today prev,next'
    //         }
    //     }
    // };
    //
    // /* event sources array*/
    // $scope.eventSources = [$scope.events];

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