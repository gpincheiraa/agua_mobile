(function(){

  angular
    .module('MedicionAgua')
    .config(configFn);

  configFn.$inject = ['$stateProvider', 'APP_SETTINGS'];

  function configFn($stateProvider, APP_SETTINGS){
    var mainViewConf = {
      templateUrl : 'assets/views/plots/plots.html',
      controller  : 'PlotsController',
      controllerAs: 'plots',
      resolve: {

      } 
    };

    $stateProvider
      .state('medicion.plots', {
        url   : 'plots/:idsector',
        views : {
          navbar: APP_SETTINGS.NAVBAR_SETTINGS,
          main  : mainViewConf
        }
      });
  }

})();