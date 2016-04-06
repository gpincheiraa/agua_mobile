(function(){

  'use strict';

  describe('Sectors Controller',sectorsSpecs);

  function sectorsSpecs(){

    //////////////  GLOBALS   ////////////////////////////////
    var SectorsController;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      SectorsController = $controller('SectorsController');
    }

    //////////////////   SPECS //////////////////////////////////
    it('SectorsController deberia estar definido', spec1);

    function spec1() {
      expect(SectorsController).toBeDefined();
    }
    
  }

})();