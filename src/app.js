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
        templateUrl: 'assets/views/main/navbar.html',
        // controller: 'NavbarController',
        // controllerAs: 'navbar'
      },
      BASE_URL: 'http://api.watercontrol-dev.com:3000/webapp',

      PROFILE_ROLES: {
        ADMIN: 'admin',
        SUPERADMIN: 'superadmin'
      }
    });

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$httpProvider', '$stateProvider', '$urlRouterProvider', 'APP_SETTINGS'];

  function configFn($httpProvider, $stateProvider, $urlRouterProvider, APP_SETTINGS){
    
    $httpProvider.interceptors.push('ApiInterceptors');

    $stateProvider
      .state('medicion',{
        url: '/',
        templateUrl: 'assets/views/main/main.html',
        abstract: true
      })
        
        


    $urlRouterProvider.otherwise('/login');
  }

  /*
    CONFIGURACIÓN GENERAL DE SERVICIOS Y EVENTOS
  */

  angular
    .module('MedicionAgua')
    .run(runFn);

  runFn.$inject = ['$state', '$rootScope', 'AuthService'];
  
  function runFn($state, $rootScope, AuthService) {
    
    AuthService.login({});

    $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
      
    });
  }


})();