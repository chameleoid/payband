var app = angular.module('pbApp', ['ngRoute', 'ngResource']);

app.config([
  '$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    'use strict';

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'html/home.html',
      })

      .otherwise({
        templateUrl: 'html/404.html',
      });
  }
]);

app.run(function($rootScope, $location) {
  'use strict';

  $rootScope.$on('$routeChangeError', function() {
    $rootScope.errorTemplateUrl = 'html/404.html';
  });

  $rootScope.$on('$routeChangeStart', function(event, next) {
    delete $rootScope.errorTemplateUrl;

    if (typeof $rootScope.user == 'undefined' && next.authRequired) {
      $location.path('/signin');
    }
  });
});
