(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .config(configFn);


  configFn.$inject = ['$stateProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, APP_SETTINGS){
    var mainViewConf = {
      // REPLACE [when jade installed]
      templateUrl: 'src/sectors/views/sectors.html',
      // END REPLACE

      controller: 'SectorsController',
      controllerAs: 'sectors',
      resolve: {/* ... */}
    };

    var sectorViewConf = {
      // REPLACE [when jade installed]
      templateUrl: 'src/sectors/views/sector.html',
      // END REPLACE

      controller: 'SectorController',
      controllerAs: 'sector',
      resolve: {
        SectorResolve: ['$stateParams','SectorsService', function($stateParams, SectorsService){
          return SectorsService.getSector($stateParams.idSector);
        }]
      }
    };

    $stateProvider
      .state('medicion.sectors', {
        url: 'sectors',
        views: {
          'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
          'main': mainViewConf
        }
      })

      .state('medicion.sector',{
        url: 'sector/:idSector',
        views: {
          'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
          'main': sectorViewConf
        }
      });
  }
})();