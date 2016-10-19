var pocpro = angular.module("pocpro",['ngRoute']);

pocpro.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hola!';
}]);

