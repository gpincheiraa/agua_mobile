(function() {
  
  'use strict';

  angular
    .module('MedicionAgua', [
      'ngAnimate',
      'ui.router',
      'ngResource'
    ]);

  angular
    .module('MedicionAgua')
    .constant('APP_SETTINGS', {
      NAVBAR_SETTINGS: {
        templateUrl: 'src/main/views/navbar.html',
        // controller: 'NavbarController',
        // controllerAs: 'navbar'
      },
      BASE_URL: 'http://api.watercontrol-dev.com:3000/webapp'
    });

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, $urlRouterProvider, APP_SETTINGS){
    
    $stateProvider
      .state('medicion',{
        url: '/',
        templateUrl: 'src/main/views/main.html',
        abstract: true
      })
        
        


    $urlRouterProvider.otherwise('/login');
  }


})();