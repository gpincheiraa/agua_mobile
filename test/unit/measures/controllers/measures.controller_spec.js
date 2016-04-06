(function(){
  'use strict';

  describe('Measures Controller', mainSpecs);

  function mainSpecs(){

    //////////////  GLOBALS   ////////////////////////////////
    var MeasuresController;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      MeasuresController = $controller('MeasuresController');
    }

    //////////////////   SPECS //////////////////////////////////
    it('MeasuresController deberia estar definido', spec1);

    function spec1() {
      expect(MeasuresController).toBeDefined();
    }
    
  }
})();