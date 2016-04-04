(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$stateProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, APP_SETTINGS){
    var mainViewConf = {

      // REPLACE [when jade installed]
      templateUrl: 'assets/views/login/login.html',
      // END REPLACE

      controller: 'LoginController',
      controllerAs: 'login',
      resolve:{ /*...*/ }
    };


    $stateProvider
      .state('medicion.login', {
        url: 'login',
        views: {
          'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
          'main': mainViewConf
        }
      });
  }
})();