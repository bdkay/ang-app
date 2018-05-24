// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){

  $scope.alertClick = function(){
    alert("Clicked!");
  }

  $scope.name = "John Doe";

  // $scope.handle = '';
  // $scope.lowercasehandle = function(){
  //   return $filter('lowercase')($scope.handle);
  // };
  //
  // //Common directives
  //
  // $scope.characters = 5;
  // $scope.rules = [
  //
  //   { rulename: "Must be 5 characters" },
  //   { rulename: "Must not be used elsewhere"},
  //   { rulename: "Must be cool" }
  //
  // ];
  //
  // console.log($scope.rules);

}]);
