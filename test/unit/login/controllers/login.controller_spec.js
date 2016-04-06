(function(){

  'use strict';

  describe('Login Controller',plotSpecs);

  function plotSpecs(){

    //////////////  GLOBALS   //////////////////////////////////
    var LoginController,
        state,
        redirect;

    //////////////  BEFORE EACH ////////////////////////////////
    
    beforeEach(module('MedicionAgua'));

    beforeEach(inject(eachSpec));

    function eachSpec($controller, $state){
      LoginController = $controller('LoginController');
      state = $state;
    }

    //////////////////  SPECS //////////////////////////////////
    it('LoginController deberia estar definido', spec1);

    function spec1() {
      expect(LoginController).toBeDefined();
    }

    it('Debería redirigir al estado "medicion.sectors" cuando se ejecuta la función login', spec2);

    function spec2(){
      var userCredentials = {
        email   : 'a@a.com',
        password: '123456'
      };

      redirect = spyOn(state, 'go');

      LoginController.loginGo(userCredentials);

      expect(redirect).toHaveBeenCalledWith('medicion.sectors');
    }
    
  }

})();