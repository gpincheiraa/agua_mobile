(function() {
  'use strict';
  
  angular
    .module('MedicionAgua')
    .controller('LoginController', Controller);
  
  Controller.$inject = ['$state'];
  
  /* @ngInject */
  function Controller($state) {
    
    var vm = this;

    vm.user = {
      email: '',
      password: ''
    };

    vm.loginGo = login;

    function login(_user){
      console.log(_user);
      $state.go('medicion.sectores');
    }
    
  }
})();