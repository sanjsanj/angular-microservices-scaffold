var app = angular.module('app', ['ngRoute']);

app.controller('NavController', ['$location', function($location) {
  var vm = this;
  vm.isActive = function(viewLocation) {
    return viewLocation === $location.path();
  };
}]);

app.controller('FirstController', [function() {
  var vm = this;
  vm.heading = 'First Controller'
}]);


app.controller('SecondController', [function() {
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

app.directive('navbar', [function() {
  return {
    restrict: 'AECM',
    templateUrl: 'navbar.html',
    replace: true
  };
}]);
