// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', '$http', function($scope, $filter, $http){

  $scope.handle = '';

  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  $scope.characters = 5;

  //result == data that comes back
  $http.get('/api')
    .success(function(result){

      $scope.rules = result;

    })
    .error(function(data, status){

      console.log(data);

    });

  $scope.newRule = '';

  $http.post('/api', { newRule: $scope.newRule })
    .success(function(result){
      $scope.rules = result;
      $scope.newRule = '';
    })
    .error(function(data, status){
      console.log(data);
    })

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
