// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


// var myApp = angular.module('myApp', []);
//
// myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){
//
//   $scope.handle = '';
//   $scope.lowercasehandle = function(){
//     return $filter('lowercase')($scope.handle);
//   };
//
// }]);

var tb = document.getElementById("name");

tb.addEventListener("keypress", function(event){
  console.log("Pressed!");
});
