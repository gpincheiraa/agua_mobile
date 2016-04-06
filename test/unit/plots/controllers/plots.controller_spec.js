(function(){
  'use strict';

  describe('Plots Controller', mainSpecs);

  function mainSpecs(){
    //////////////  GLOBALS   ////////////////////////////////
    var PlotsController;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      PlotsController = $controller('PlotsController');
    }

    //////////////////   SPECS //////////////////////////////////
    it('PlotsController deberia estar definido', spec1);

    function spec1(){
      expect(PlotsController).toBeDefined();
    }
  }
})();