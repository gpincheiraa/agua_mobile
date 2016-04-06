(function(){

  'use strict';

  describe('Condos Controller', condosSpec);

  function  condosSpec(){

    //////////////  GLOBALS   ////////////////////////////////
    var CondosController;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      CondosController = $controller('CondosController');
    }

    //////////////////   SPECS //////////////////////////////////
    it('CondosController deberia estar definido', spec1);

    function spec1() {
      expect(CondosController).toBeDefined();
    }
    
  }

})();