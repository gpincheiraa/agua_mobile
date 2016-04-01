(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .service('CondosService', service);

    service.$inject = ['APP_SETTINGS', '$resource'];

    /* @ngInject */
    function service(APP_SETTINGS, $resource){
      var vm = this,
        condosResourceUrl = APP_SETTINGS.BASE_URL + '/condos/:id';

      vm.condosResource = $resource(condosResourceUrl, {id: '@id'});

      // Fn declarations
      vm.getCondos = getCondos;
      vm.getCondo = getCondo;

      // Fn implementations
      function getCondos(){
        return vm.condosResource.query().$promise;
      }

      function getCondo(_id){
        return vm.condosResource.get({id: _id}).$promise;
      }

    }
})();