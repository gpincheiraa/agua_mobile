(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$stateProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, APP_SETTINGS){
    var mainViewConf = {

      // REPLACE [when jade installed]
      templateUrl: 'assets/views/condos/condos.html',
      // END REPLACE

      controller: 'CondosController',
      controllersAs: 'condos',
      resolve:{ /*...*/ }
    };


    $stateProvider
      .state('medicion.condos', {
        url: 'condos',
        views: {
          'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
          'main': mainViewConf
        }
      });
  }
})();