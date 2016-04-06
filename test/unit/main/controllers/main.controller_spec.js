(function(){

  'use strict';

  describe('Main Controller', mainSpecs);

  function mainSpecs(){

    //////////////  GLOBALS   ////////////////////////////////
    var MainController;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      MainController = $controller('MainController');
    }

    //////////////////   SPECS //////////////////////////////////
    it('MainController deberia estar definido', spec1);

    function spec1() {
      expect(MainController).toBeDefined();
    }
    
  }

})();