'use strict';

angular.module('adRep.ad_detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ad_detail', {
        templateUrl: 'views/ad_detail.html',
        controller: 'AdDetailController'
    });
}])

.controller('AdDetailController', ['$scope', '$sce', function($scope, $sce) {
    //$scope.someUrl = $sce.trustAsResourceUrl('http://www.baidu.com');

    var tUrl = currentAd.link;
    console.log("trustSrc = " + tUrl);
    $scope.trustSrc = $sce.trustAs($sce.RESOURCE_URL,tUrl);

    // console.log("document.documentElement.scrollHeight = " + document.documentElement.scrollHeight);
    // console.log("window.document.body.clientHeight = " + window.document.body.clientHeight);
    // console.log("window.document.body.scrollHeight = " + window.document.body.scrollHeight);

    var obj=window.parent.document.getElementById('detailPage');
    // console.log("obj = " + obj.height);
    obj.height = (window.document.body.scrollHeight - 55) + 'px';

}]);