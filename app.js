// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){

  $routeProvider
  .when('/main', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/second/:num', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){

  $scope.name = 'Main';

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', function($scope, $log, $routeParams){

  $scope.num = $routeParams.num;

}]);
