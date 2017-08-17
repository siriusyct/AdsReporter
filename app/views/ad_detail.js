'use strict';

angular.module('adRep.ad_detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/ad_detail', {
        templateUrl: 'views/ad_detail.html',
        controller: 'AdDetailController'
    });
}])

.controller('AdDetailController', ['$scope', function($scope) {

}]);