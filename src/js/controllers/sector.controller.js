(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .controller('SectorController', Controller);
  
  Controller.$inject = ['SectorResolve'];
  
  /* @ngInject */
  function Controller(SectorResolve) {
    
    var vm = this;
    
    vm.sectorSeleccionado = SectorResolve;

  }
})();