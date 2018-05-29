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

  $scope.people = [
    {
      name: 'Brendon Kuleck',
      address: '2618 W. Chicago Ave',
      city: 'Chicago',
      state: 'Illinois',
      zip: '60622'
    },
    {
      name: 'Edward Kuleck',
      address: '104 Leland Ln',
      city: 'Ottawa',
      state: 'Illinois',
      zip: '61350'
    },
    {
      name: 'Lauren Kuleck',
      address: '111 Main St',
      city: 'Champaign',
      state: 'Illinois',
      zip: '60629'
    }
  ];

  $scope.formattedAddress = function(person){
    return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip;
  }

}]);

myApp.controller('secondController', ['$scope', '$log', '$routeParams', 'nameService', function($scope, $log, $routeParams, nameService){


}]);

myApp.directive('searchResult', function() {
  return {
    templateUrl: 'directives/searchresult.html',
    replace: true,
    scope: {
      //Equals sign: = is two-way-binding object
      //Ampersand &: function
      personObject: '=',
      formattedAddressFunction: '&'
    }
  }
});
