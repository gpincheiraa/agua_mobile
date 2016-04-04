(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .controller('SectorsController', Controller);
  
  Controller.$inject = ['$state', 'SectorsService'];
  
  function Controller($state, SectorsService) {
    
    var vm = this;


    vm.assignedSectorsList = SectorsService.getSectorsAssigned();
    vm.selectedSectorId = vm.assignedSectorsList[0].id;
    vm.plotsList = SectorsService.getPlots(vm.selectedSectorId);
    
    
    function plotGo(_plotId){
      $state.go('medicion.plot', {id: _plotId});
    }

    function sectorGo(_id){
      $state.go('medicion.sector',{idSector: _id});
    }

  }
})();