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
  .when('/second', {
    templateUrl: 'pages/second.html',
    controller: 'secondController'
  })

});

myApp.service('nameService', function(){

  var self = this;
  this.name = 'John Doe';
  this.nameLength = function(){

    return self.name.length;

  }

});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){

  $scope.name = nameService.name;

  //Manually tell angular to watch this for changes
  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

  $log.log(nameService.name);
  $log.log(nameService.nameLength());

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){

  $scope.num = $routeParams.num || 1;

  $scope.name = nameService.name;

  //Manually tell angular to watch this for changes
  $scope.$watch('name', function(){
    nameService.name = $scope.name;
  });

}]);
