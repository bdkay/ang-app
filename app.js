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
  this.name = 'Brendon Kuleck';
  this.nameLength = function(){

    return self.name.length;

  }

});

myApp.controller('mainController', ['$scope', '$log', 'nameService', function($scope, $log, nameService){

  $scope.person = {
    name: 'Brendon Kuleck',
    address: '2618 W. Chicago Ave, Chicago, IL'
  }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){


}]);

myApp.directive('searchResult', function() {
  return {
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      //Equals sign = is two-way-binding
      personObject: '='
    }
  }
});
