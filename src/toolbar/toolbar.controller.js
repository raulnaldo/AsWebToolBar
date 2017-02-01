(function () {
'use strict';

angular.module('AsToolBarModule')
.controller('AsToolbarController',AsToolbarController);

AsToolbarController.$inject = ['AsToolbarService','$scope'];
function AsToolbarController(AsToolbarService,$scope) {
  var AsToolbar = this;
  var resultLogin;
  var result;

  AsToolbar.loginAs = function () {
    var promise = AsToolbarService.login($scope.agentName,$scope.agentPass);

    promise.then(function (response) {
      AsToolbar.resultLogin=response.data;
      console.log(toolbar.resultLogin);
    })
    .catch(function (error) {
      console.log('Error',error);
    })
  };

  AsToolbar.getAgentInfo = function () {
    var promise = AsToolbarService.getAgentInfo($scope.agentName);

    promise.then(function (response) {
      $scope.result=response.data;
      console.log($scope.result);

    })
    .catch(function (error) {
      console.log('Error',error);
    })
  };

  AsToolbar.setAgentInfo = function () {
    var Autenticate={
      "UserName":$scope.agentName,
      "Password":$scope.agentPass
    };
    var promise = AsToolbarService.setAgentInfo(Autenticate);

    promise.then(function (response) {
      $scope.result=response.data;
      console.log($scope.result);

    })
    .catch(function (error) {
      console.log('Error',error);
    })
  };
}
})();
