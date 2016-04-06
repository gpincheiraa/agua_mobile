(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .factory('PlotsService', factory);


    factory.$inject = ['APP_SETTINGS', '$resource'];

    function factory(APP_SETTINGS, $resource){
      var vm = this,
        getPlots;

      var service = {
        getPlots: getPlots
      };

      return service;


      function getPlots(){
        return 0;
      }
    }



})();