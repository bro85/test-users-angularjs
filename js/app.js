const app = angular.module("testAngularjsApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: 'users.html',
      controller: 'UsersController'
    })
    .otherwise({
      templateUrl: 'error.html'
    });
});

