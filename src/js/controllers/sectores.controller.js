(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .controller('SectoresController', Controller);
  
  Controller.$inject = ['$state', 'SectoresService'];
  
  function Controller($state, SectoresService) {
    
    var vm = this;
    
    vm.listaSectores = SectoresService.getSectores();
    vm.listaCondominios = [
      {id: 1, nombre: 'Condominio 1'},
      {id: 2, nombre: 'Condominio 2'},
    ];
    vm.condominioSeleccionado = vm.listaCondominios[0].id;

    vm.sectorGo = sectorGo;

    function sectorGo(_id){
      $state.go('medicion.sector',{idSector: _id});
    }

  }
})();