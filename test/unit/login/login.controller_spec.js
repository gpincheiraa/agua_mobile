(function(){

  'use strict';

  describe('Login Controller',plotSpecs);

  function plotSpecs(){

    //////////////  GLOBALS   ////////////////////////////////
    var LoginController;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller){
      LoginController = $controller('LoginController');
    }

    //////////////////   SPECS //////////////////////////////////
    it('LoginController deberia estar definido', spec1);

    function spec1() {
      expect(LoginController).toBeDefined();
    }
    
  }

})();