(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .controller('SectorsController', Controller);
  
  Controller.$inject = ['$state', 'SectorsService', 'CondosService'];
  
  function Controller($state, SectorsService, CondosService) {
    
    var vm = this;
    
    vm.sectorsList = SectorsService.getSectors();
    vm.condosList = [
      {id: 1, nombre: 'Condominio 1'},
      {id: 2, nombre: 'Condominio 2'},
    ];
    vm.selectedCondo = vm.condosList[0].id;

    vm.sectorGo = sectorGo;

    function sectorGo(_id){
      $state.go('medicion.sector',{idSector: _id});
    }

  }
})();