(function(){
  'use strict';

  angular
    .module('MedicionAgua')
    .controller('PlotsController', Controller);


  Controller.$inject = ['$state', 'SectorsService'];

  function Controller($state, SectorsService){
    var vm = this, plots;

    vm.plots = SectorsService.getPlots($state.params.idsector);
    
  }

})();