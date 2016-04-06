(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$stateProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, APP_SETTINGS){
    var mainViewConf = {
      templateUrl: 'assets/views/measures/measures.html',
      controller: 'MeasuresController',
      controllersAs: 'measures',
      resolve:{ /*...*/ }
    };


    $stateProvider
      .state('medicion.measures', {
        url: 'measure',
        views: {
          'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
          'main': mainViewConf
        }
      });
  }
})();