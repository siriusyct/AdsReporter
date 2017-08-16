'use strict';

angular.module('adRep.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'LoginController'
  });
}])

.controller('LoginController', ['$scope', '$timeout', '$location', function($scope, $timeout, $location) {
    $scope.lgUserMessage = "";
    $scope.user = {name:"", pw:""};

    $scope.doLogin = function () {

        if ($scope.user.name == "" && $scope.user.pw == "" ){
            $scope.lgUserMessage = "请输入用户名和密码";
            $(".ui-dialog").dialog("show");
            return;
        }

        if ($scope.user.name == ""){
            $scope.lgUserMessage = "请输入用户名";
            $(".ui-dialog").dialog("show");
            return;
        }

        if ($scope.user.pw == ""){
            $scope.lgUserMessage = "请输入密码";
            $(".ui-dialog").dialog("show");
            return;
        }

        if ($scope.user.name === "user" && $scope.user.pw === "123"){
            var waitingDialog = $.loading({content:'请稍后...'});
            waitingDialog.on("loading:hide",function(){
                console.log("loading hide");
            });

            $scope.loginTimer=$timeout(function(){
                waitingDialog.hide();

                $location.path('/view2');
                //$routeProvider.otherwise({redirectTo: '/view2'});
            },1500);

            $scope.loginTimer.then(function(){ },
                function(){ });
        } else {
            $scope.lgUserMessage = "用户名或密码错误";
            $(".ui-dialog").dialog("show");
            return;
        }
    }

    $scope.dialogClose = function () {
        $(".ui-dialog").dialog("hide");
    }

    $scope.resetUserName = function () {
        if ($scope.user == undefined ) return;
        if ($scope.user.name == undefined) return;
        $scope.user.name = "";
    }

    $scope.resetUserPW = function () {
        if ($scope.user == undefined ) return;
        if ($scope.user.pw == undefined) return;
        $scope.user.pw = "";
    }

    $scope.$on('destroy',function(){
        $interval.cancel($scope.loginTimer);
    })
}]);