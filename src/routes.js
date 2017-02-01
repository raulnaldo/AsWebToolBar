(function () {
'use strict';

angular.module('AsToolBarModule')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // login
  .state('login', {
    url: '/',
    templateUrl: 'src/toolbar/templates/login.template.html',
    controller: 'AsToolbarController as AsToolbar'
  });
}

})();
