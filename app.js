// // MODULE
// var myApp = angular.module('myApp', []);

// // CONTROLLERS
// myApp.controller('mainController', ['$scope', function ($scope) {

// }]);


var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope', '$filter', function($scope, $filter){

  $scope.handle = '';
  $scope.lowercasehandle = function(){
    return $filter('lowercase')($scope.handle);
  };

  $scope.$watch('handle', function(newValue, oldValue){

    console.info('Changed!');
    console.log('Old ' + oldValue);
    console.log('New  ' + newValue);

  });

  setTimeout(function(){

    $scope.handle = 'newtwitterhandle';
    console.log("Scope changed!");

  }, 3000);

}]);
