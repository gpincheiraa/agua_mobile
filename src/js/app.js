(function() {
  
  'use strict';

  angular
    .module('MedicionAgua', [
      'ngAnimate',
      'ui.router'
    ]);

  angular
    .module('MedicionAgua')
    .constant('APP_SETTINGS', {
      NAVBAR_SETTINGS: {
        templateUrl: 'src/views/navbar.html',
        // controller: 'NavbarController',
        // controllerAs: 'navbar'
      }
    });

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$stateProvider', '$urlRouterProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, $urlRouterProvider, APP_SETTINGS){
    
    $stateProvider
      .state('medicion',{
        url: '/',
        templateUrl: 'src/views/main.html',
        abstract: true
      })
        .state('medicion.login',{
          url:'login',
          views: {
            'main' : {
              templateUrl: 'src/views/login.html',
              controller: 'LoginController',
              controllerAs: 'login'
            }
          }
        })

        .state('medicion.sectores',{
          url:'sectores',
          views: {
            'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
            'main' : {
              templateUrl: 'src/views/sectores.html',
              controller: 'SectoresController',
              controllerAs: 'sectores'
            }
          }
        })

        .state('medicion.sector',{
          url:'sector/:idSector',
          views: {
            'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
            'main' : {
              templateUrl: 'src/views/sector.html',
              controller: 'SectorController',
              controllerAs: 'sector',
              resolve: {
                SectorResolve: ['$stateParams','SectoresService', function($stateParams, SectoresService){
                  return SectoresService.getSector($stateParams.idSector);
                }]
              }
            }
          }
        });


    $urlRouterProvider.otherwise('/login');
  }


})();