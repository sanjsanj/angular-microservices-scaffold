var app = angular.module('app', ['ngRoute']);

app.controller('FirstController', [function() {
  var vm = this;
  vm.heading = 'First Controller'
}]);


app.controller('SecondController', ['$scope', function($scope) {
  var vm = this;
  vm.heading = 'Second Controller'
}]);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: 'first.html',
    controller: 'FirstController',
    controllerAs: 'ctrl'
  })
  .when('/second', {
    templateUrl: 'second.html',
    controller: 'SecondController',
    controllerAs: 'ctrl'
  });
});
