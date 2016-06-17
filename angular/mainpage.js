var mainPage = angular.module("mainPage",[]);

// create variable and values from database query for global use
mainPage.run(function($rootScope,$http,Session){
    var id = JSON.stringify({type:"userID", id:Session.id});
    var url = "register.php";
    $rootScope.userName = "hello world";//Session.name;
    $http.post(url,id).
    success(function(data,status,headers,config){
        $rootScope.data = data;
    }).
    error(function(data,status, headers,config){

      alert("Cannot request data server");
    });

});

// controller for header
mainPage.controller("headerControl",function($scope,$rootScope){

  $scope.userName = $rootScope.userName;
  $scope.addButton = function(){

      //$scope.userName = "add button";
  }

  $scope.logOut = function(){

    //$scope.userName = "logout";

  }

});

// controller for sidebar in content pane
mainPage.controller("sidebarControl",function($scope,$rootScope){



});

// controller for content pane
mainPage.controller("contentControl",function($scope,$rootScope){


});

// controller for footer
mainPage.controller("footerControl",function() {


});
