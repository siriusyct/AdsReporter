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

    var contentTypeList = [];
    var channelTypeList = [];
    var dataList = [];
    var cShowDataList = [];

    var cYear = new Date().getFullYear();
    var cMonth = new Date().getMonth() + 1;
    var cDay = new Date().getDate();
    var today = cYear + '-' + cMonth + '-' + cDay;

    var scMonth = cMonth > 9 ? "" + cMonth : "0" + cMonth;
    var scDay = cDay > 9 ? "" + cDay : "0" + cDay;
    var showToday = "2017-09-10"; //cYear + '-' + scMonth + '-' + scDay; //
    console.log("today = " + showToday);

    var gSelectDate = showToday;
    resetFilterItems();
    setCurrentShowData();
    setShowData();

    $scope.$on('$viewContentLoaded', function() {
        console.log("page onload");
        setFilterSelectView();
        //$("#demo1").value = today + "";
    });

    var calendar = new LCalendar();
    var onDateChanged = function () {
        var dateInput = document.getElementById("demo1");
        var sDate = dateInput.value;
        dateInput.blur();
        console.log("select date = " + sDate);

        if (gSelectDate == sDate)
            return;

        gSelectDate = sDate;
        // currentTypeFilterIndex++;
        // if (currentTypeFilterIndex > 2){
        //     currentTypeFilterIndex = 0;
        // }
        currentTypeFilterIndex = 0;
        currentTabIndex = 0;

        console.log("reset show date");
        resetFilterItems();
        setCurrentShowData();
        setShowData();
    };

    function pushItemToArray(array, item){
        if (array == null || item == null)
            return;

        var isSame = false;
        for (var m = 0; m < array.length; m++){
            var aItem = array[m];
            if (aItem.label == item.label){
                isSame = true;
                break;
            }
        }

        if (isSame == false)
            array.push(item);
    }

    function resetFilterItems() {

        var currentDateDatas = [];
        for (var i = 0; i < fullTestDataHW.length; i++){
            var item = fullTestDataHW[i];
            if (item.date == gSelectDate){
                currentDateDatas = item.listData;
            }
        }

        contentTypeList = [];
        channelTypeList = [];
        dataList = [];

        for (var j = 0; j < currentDateDatas.length; j++){
            var dItem = currentDateDatas[j];
            var ctItem = {"label": dItem.theme};
            var chItem = {"label": dItem.platform};
            pushItemToArray(contentTypeList, ctItem);
            pushItemToArray(channelTypeList, chItem);
            //contentTypeList.push(dItem.theme);
            //channelTypeList.push(dItem.platform);
        }
        console.log("contentTypeList length = " + contentTypeList.length);
        console.log("channelTypeList length = " + channelTypeList.length);
        dataList = currentDateDatas;
    };
    
    function setCurrentShowData() {
        cShowDataList.splice(0,cShowDataList.length);
        if (currentTabIndex == 0){
            //cShowDataList = dataList;
            for (var m = 0; m < dataList.length; m++){
                var item = dataList[m];
                cShowDataList.push(item);
            }
        } else if (currentTabIndex == 1){
            cShowDataList = [];
            var filterItem = contentTypeList[currentTypeFilterIndex];
            for (var m = 0; m < dataList.length; m++){
                var item = dataList[m];
                if (item.theme == filterItem.label){
                    cShowDataList.push(item);
                }
            }
        } else if (currentTabIndex == 2){
            cShowDataList = [];
            var filterItem = channelTypeList[currentTypeFilterIndex];
            for (var m = 0; m < dataList.length; m++){
                var item = dataList[m];
                if (item.platform == filterItem.label){
                    cShowDataList.push(item);
                }
            }
        }
    };

    calendar.init({
        'trigger': '#demo1', //标签id
        'type': 'date', //date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择,
        'minDate': '2000-1-1', //最小日期
        'maxDate': today, //最大日期
        'defaultDate': showToday,
        'onSelectDate': onDateChanged
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
          setFilterSelectView();
          setCurrentShowData();
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
        setCurrentShowData();
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

  function setFilterSelectView(){
      if (currentTabIndex == 0){
          document.getElementById("demo1").style.display = "block";
          document.getElementById("selectDropDown").style.display = "none";
          // $("#demo1").style.display = "block";
          // $("#selectDropDown").style.display = "none";
      } else {
          document.getElementById("demo1").style.display = "none";
          document.getElementById("selectDropDown").style.display = "block";
          // $("#demo1").style.display = "none";
          // $("#selectDropDown").style.display = "block";
      }
  }

  function setShowData() {
      $scope.adsTypesData = fullTestData;
      if (currentTabIndex >= 0 && currentTabIndex <= 2){
          $scope.filterTypeLabel = fullTestData[currentTabIndex].typeName;


          // $scope.filterTypeList = fullTestData[currentTabIndex].listData;
          // $scope.adsRecords = fullTestData[currentTabIndex].listData[currentTypeFilterIndex].data;
          // $scope.selectedFilterItems = fullTestData[currentTabIndex].listData[currentTypeFilterIndex].label;

          if (currentTabIndex == 1) {
              $scope.filterTypeList = contentTypeList;
              if (contentTypeList.length >= 1)
                  $scope.selectedFilterItems = contentTypeList[0].label;
          } else if (currentTabIndex == 2) {
              $scope.filterTypeList = channelTypeList;
              if (channelTypeList.length >= 1)
                  $scope.selectedFilterItems = channelTypeList[0].label;
          } else {
              $scope.filterTypeList = [];
              $scope.selectedFilterItems = " ";
          }
          $scope.adsRecords = cShowDataList;

          for(var m = 0; m < $scope.adsTypesData.length; m++){
              if (m == currentTabIndex){
                  $scope.adsTypesData[m].isSel = true;
              } else {
                  $scope.adsTypesData[m].isSel = false;
              }
              console.log("isSel : " + m + " = " + $scope.adsTypesData[m].isSel);
          }

          $scope.$applyAsync();
      }
  }
}]);