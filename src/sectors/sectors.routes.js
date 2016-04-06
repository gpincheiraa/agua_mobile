(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .config(configFn);


  configFn.$inject = ['$stateProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, APP_SETTINGS){
    var mainViewConf = {
      templateUrl: 'assets/views/sectors/sectors.html',
      controller: 'SectorsController',
      controllerAs: 'sectors',
      resolve: {
        CondosResolve: ['CondosService','$stateParams', function(CondosService, $stateParams){
          return CondosService.getCondos();
        }],
        CondoSelected: ['CondosResolve', 'CondosService', function(CondosResolve, CondosService){
          //ESTE ID LUEGO DEBE OBTENERSE DEL CONDOMINIO QUE TIENE ASIGNADO EL USUARIO LOGGEADO
          var condoId = CondosResolve[0].id;
          return CondosService.getCondo(condoId).then(function(response){
            return response.toJSON();
          });
        }]
      }
    };

    $stateProvider
      .state('medicion.sector',{
        url: 'sectors',
        views: {
          'navbar': APP_SETTINGS.NAVBAR_SETTINGS,
          'main': mainViewConf
        }
      });
  }
})();