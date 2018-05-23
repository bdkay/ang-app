// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$timeout', '$log', function($scope, $timeout, $log){

  $scope.name = 'Brendon';

  //Run a function after a certain amount of time
  $timeout(function(){

    $scope.name = 'Everybody';

  }, 2000);

}]);
