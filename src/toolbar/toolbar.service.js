(function () {
'use strict';

angular.module('AsToolBarModule')
.service('AsToolbarService', AsToolbarService);

AsToolbarService.$inject = ['$http'];
function AsToolbarService($http) {
  var service = this;

  service.login = function (name,pwd) {
    var response = $http({
      method: "GET",
      url: ('http://localhost:53215/IBookService.svc/' + 'LoginAs/'+name+'/'+pwd),
    });
    return response;
  };

  service.getAgentInfo = function (name) {
    var response = $http({
      method: "GET",
      url: ('http://localhost:53215/IBookService.svc/' + 'GetAgentInfo/'+name),
    });
    return response;
  };

  service.setAgentInfo = function (autenticate) {
    var response = $http({
    url: ('http://localhost:53215/IBookService.svc/' + 'SetAgentInfo'),
    method: "POST",
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
        data: JSON.stringify(autenticate)
    });

    return response;
  };

}

})();
