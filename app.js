// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'pages/main.html',
    controller: 'mainController'
  })
  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.controller('mainController', ['$scope', '$log', function($scope, $log){

  $log.info($location.path());

}]);
